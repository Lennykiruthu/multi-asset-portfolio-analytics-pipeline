from datetime import datetime, timedelta

import pandas as pd
import yfinance as yf
from dagster import asset, AssetExecutionContext
from sqlalchemy import text

from dagster_orchestration.resources import PostgresResource

# ---------------------------------------------------------------------------
# Tickers to track — keep in sync with ledger-ui.py KNOWN_ASSETS
# ---------------------------------------------------------------------------

TICKERS = [
    "AAPL", "MSFT", "GOOGL", "TSLA",   # Stocks
    "SPY", "QQQ", "VTI",                # ETFs
    "BTC-USD", "ETH-USD",               # Crypto
    "GC=F",                             # Gold Futures
]

INITIAL_FETCH_PERIOD = "1y"
BRONZE_SCHEMA = "bronze"


# ---------------------------------------------------------------------------
# Helpers (lifted from ingest-raw-prices.py, adapted for Dagster context)
# ---------------------------------------------------------------------------

def _get_last_loaded_date(engine):
    """Return the most recent date in bronze.raw_prices, or None on first run."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT MAX(date) FROM bronze.raw_prices"))
            return result.scalar()
    except Exception:
        return None


def _fetch_prices(tickers: list, context: AssetExecutionContext,
                  start_date: str = None, period: str = None) -> pd.DataFrame:
    if start_date:
        context.log.info(f"Incremental fetch — from {start_date} onwards")
        data = yf.download(tickers, start=start_date, auto_adjust=True, progress=False)
    else:
        context.log.info(f"First run — fetching {period} of history")
        data = yf.download(tickers, period=period, auto_adjust=True, progress=False)

    if data.empty:
        context.log.warning("yfinance returned no data.")
        return pd.DataFrame()

    data_long = data.stack(level="Ticker").reset_index()
    data_long.columns = ["date", "ticker", "close", "high", "low", "open", "volume"]
    data_long["ingested_at"] = datetime.utcnow()
    data_long = data_long.dropna(subset=["close", "open", "high", "low"])

    context.log.info(
        f"Fetched {len(data_long)} rows across {data_long['ticker'].nunique()} tickers"
    )
    return data_long


def _deduplicate(df: pd.DataFrame, last_date) -> pd.DataFrame:
    if last_date is None:
        return df
    df["date"] = pd.to_datetime(df["date"])
    last_date = pd.to_datetime(last_date)
    new_rows = df[df["date"] > last_date]
    removed = len(df) - len(new_rows)
    if removed > 0:
        pass  # context not available here; caller logs
    return new_rows


# ---------------------------------------------------------------------------
# Asset
# ---------------------------------------------------------------------------

@asset(
    key_prefix="bronze",    
    group_name="bronze",
    compute_kind="python",
    description="Daily OHLCV prices for all tracked tickers, sourced from yfinance.",
)
def raw_prices(context: AssetExecutionContext, postgres: PostgresResource) -> None:
    """
    Incrementally loads price data from yfinance into bronze.raw_prices.

    - First run: fetches INITIAL_FETCH_PERIOD (1y) of history.
    - Subsequent runs: fetches only from the day after the last loaded date.
    - Deduplicates before writing to prevent double-loading on overlapping windows.
    """
    engine = postgres.get_engine()

    last_date = _get_last_loaded_date(engine)
    context.log.info(f"Last loaded date in bronze.raw_prices: {last_date}")

    if last_date is None:
        df = _fetch_prices(TICKERS, context, period=INITIAL_FETCH_PERIOD)
    else:
        start = (pd.to_datetime(last_date) - timedelta(days=1)).strftime("%Y-%m-%d")
        df = _fetch_prices(TICKERS, context, start_date=start)
        before = len(df)
        df = _deduplicate(df, last_date)
        removed = before - len(df)
        if removed:
            context.log.info(f"Deduplication removed {removed} overlapping rows")

    if df.empty:
        context.log.info("No new rows to load — bronze.raw_prices is up to date")
        return

    # Ensure the schema exists (safe no-op if already there)
    with engine.connect() as conn:
        conn.execute(text("CREATE SCHEMA IF NOT EXISTS bronze"))
        conn.commit()

    df.to_sql(
        name="raw_prices",
        con=engine,
        schema=BRONZE_SCHEMA,
        if_exists="append",
        index=False,
    )

    context.log.info(f"Loaded {len(df)} new rows into bronze.raw_prices")

    context.add_output_metadata({
        "rows_loaded": len(df),
        "tickers": sorted(df["ticker"].unique().tolist()),
        "date_range": f"{df['date'].min()} → {df['date'].max()}",
    })