import yfinance as yf
import pandas as pd
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta

from config import DATABASE_URL, BRONZE_SCHEMA

# Load environment variables from .env file
load_dotenv()

# Database connection
engine = create_engine(DATABASE_URL)

# Assets from your portfolio
TICKERS = [
    "AAPL", "MSFT", "GOOGL", "TSLA",  # Stocks
    "SPY", "QQQ", "VTI",               # ETFs
    "BTC-USD", "ETH-USD",              # Crypto
    "GC=F"                             # Gold Futures
]

# How far back to fetch on the very first run
INITIAL_FETCH_PERIOD = "1y"


def get_last_loaded_date() -> datetime | None:
    """
    Check bronze.raw_prices for the most recent date already loaded.
    Returns None if the table doesn't exist or is empty (first run).
    """
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT MAX(date) FROM bronze.raw_prices"))
            last_date = result.scalar()
            return last_date
    except Exception:
        # Table doesn't exist yet — first run
        return None


def fetch_prices(tickers: list, start_date: str = None, period: str = None) -> pd.DataFrame:
    """
    Fetch OHLCV data from yfinance for all tickers.
    - First run: uses period (e.g. '1y') to fetch full history
    - Subsequent runs: uses start_date to fetch only new data
    """
    if start_date:
        print(f"Incremental fetch — fetching data from {start_date} onwards...")
        data = yf.download(tickers, start=start_date, auto_adjust=True, progress=False)
    else:
        print(f"First run — fetching {period} of historical data...")
        data = yf.download(tickers, period=period, auto_adjust=True, progress=False)

    if data.empty:
        print("No new data returned from yfinance.")
        return pd.DataFrame()

    # Stack ticker level down into rows — one row per date-ticker combination
    data_long = data.stack(level='Ticker').reset_index()

    # Standardize column names
    data_long.columns = ['date', 'ticker', 'close', 'high', 'low', 'open', 'volume']

    # Add ingestion timestamp
    data_long['ingested_at'] = datetime.utcnow()

    # Drop rows where price data is missing
    data_long = data_long.dropna(subset=['close', 'open', 'high', 'low'])

    print(f"Fetched {len(data_long)} rows across {data_long['ticker'].nunique()} tickers.")

    return data_long


def deduplicate(df: pd.DataFrame, last_date) -> pd.DataFrame:
    """
    Safety net — remove any rows that are already in bronze
    based on date to prevent duplicates on overlap.
    """
    if last_date is None:
        return df
    df['date'] = pd.to_datetime(df['date'])
    last_date = pd.to_datetime(last_date)
    new_rows = df[df['date'] > last_date]
    removed = len(df) - len(new_rows)
    if removed > 0:
        print(f"Deduplication removed {removed} overlapping rows.")
    return new_rows


def load_to_bronze(df: pd.DataFrame) -> None:
    """
    Load raw price data into bronze.raw_prices in Postgres.
    Creates the table if it doesn't exist, appends if it does.
    """
    if df.empty:
        print("Nothing new to load. bronze.raw_prices is already up to date.")
        return

    print(f"Loading {len(df)} rows into bronze.raw_prices...")

    with engine.connect() as conn:
        conn.execute(text("CREATE SCHEMA IF NOT EXISTS bronze"))
        conn.commit()

    df.to_sql(
        name="raw_prices",
        con=engine,
        schema=BRONZE_SCHEMA,
        if_exists="append",
        index=False
    )

    print("Done. Data loaded into bronze.raw_prices successfully.")


if __name__ == "__main__":
    # Step 1 — check what's already in bronze
    last_date = get_last_loaded_date()

    if last_date is None:
        # First run — fetch full history
        df = fetch_prices(TICKERS, period=INITIAL_FETCH_PERIOD)
    else:
        # Subsequent runs — fetch only from last loaded date
        start = (pd.to_datetime(last_date) - timedelta(days=1)).strftime('%Y-%m-%d')
        df = fetch_prices(TICKERS, start_date=start)
        df = deduplicate(df, last_date)

    if not df.empty:
        print(df.head())

    # Step 2 — load into bronze
    load_to_bronze(df)