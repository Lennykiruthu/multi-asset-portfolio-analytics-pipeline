import streamlit as st
import pandas as pd
import yfinance as yf
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
from datetime import datetime, date, timedelta

from config import DATABASE_URL, BRONZE_SCHEMA

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

load_dotenv()

engine = create_engine(DATABASE_URL)

KNOWN_ASSETS = {
    "AAPL":    {"asset_name": "Apple Inc.",                      "asset_type": "Stock",   "sector": "Technology"},
    "MSFT":    {"asset_name": "Microsoft Corporation",           "asset_type": "Stock",   "sector": "Technology"},
    "GOOGL":   {"asset_name": "Alphabet Inc.",                   "asset_type": "Stock",   "sector": "Technology"},
    "TSLA":    {"asset_name": "Tesla Inc.",                      "asset_type": "Stock",   "sector": "Consumer Cyclical"},
    "SPY":     {"asset_name": "S&P 500 ETF Trust",               "asset_type": "ETF",     "sector": "Equity - Broad"},
    "QQQ":     {"asset_name": "Invesco QQQ Trust",               "asset_type": "ETF",     "sector": "Equity - Technology"},
    "VTI":     {"asset_name": "Vanguard Total Stock Market ETF", "asset_type": "ETF",     "sector": "Equity - Total Market"},
    "BTC-USD": {"asset_name": "Bitcoin",                         "asset_type": "Crypto",  "sector": "Cryptocurrency"},
    "ETH-USD": {"asset_name": "Ethereum",                        "asset_type": "Crypto",  "sector": "Cryptocurrency"},
    "GC=F":    {"asset_name": "Gold Futures",                    "asset_type": "Futures", "sector": "Commodities"},
}

ASSET_TYPES = ["Stock", "ETF", "Crypto", "Futures", "Bond", "Other"]

# ---------------------------------------------------------------------------
# yfinance helpers
# ---------------------------------------------------------------------------

def validate_ticker(ticker: str) -> tuple[bool, str]:
    """
    Confirm the ticker exists on yfinance by fetching 5 days of recent history.
    Returns (is_valid, error_message).
    A ticker is considered valid if yfinance returns at least one row of price data.
    """
    try:
        hist = yf.Ticker(ticker).history(period="5d")
        if hist.empty:
            return False, f"'{ticker}' returned no price data from yfinance. Check the symbol and try again."
        return True, ""
    except Exception as e:
        return False, f"yfinance error while validating '{ticker}': {e}"


def ticker_exists_in_bronze(ticker: str) -> bool:
    """Check whether bronze.raw_prices already has any rows for this ticker."""
    with engine.connect() as conn:
        result = conn.execute(
            text("SELECT 1 FROM bronze.raw_prices WHERE ticker = :ticker LIMIT 1"),
            {"ticker": ticker}
        )
        return result.fetchone() is not None


def backfill_prices(ticker: str, from_date: date) -> tuple[bool, str]:
    """
    Fetch OHLCV history for a single ticker from from_date to today and
    append any rows not already in bronze.raw_prices.

    Called when the user logs a transaction for a ticker that has no price
    history in the bronze layer yet — ensures dbt has data to work with on
    its next run.

    Returns (success, message).
    """
    start_str = from_date.strftime("%Y-%m-%d")

    try:
        data = yf.download(
            ticker,
            start=start_str,
            auto_adjust=True,
            progress=False
        )
    except Exception as e:
        return False, f"yfinance download failed for '{ticker}': {e}"

    if data.empty:
        return False, f"yfinance returned no OHLCV data for '{ticker}' from {start_str}."

    data = data.reset_index()
    data.columns = [col.lower() for col in data.columns]
    data.rename(columns={"Date": "date", "index": "date"}, inplace=True)
    data["date"] = pd.to_datetime(data["date"])
    data["ticker"] = ticker
    data["ingested_at"] = datetime.utcnow()


    # Keep only the columns bronze.raw_prices expects
    data = data[["date", "ticker", "open", "high", "low", "close", "volume", "ingested_at"]]
    data = data.dropna(subset=["close", "open", "high", "low"])

    # Deduplicate against what's already loaded (safety net for partial runs)
    with engine.connect() as conn:
        existing = conn.execute(
            text("SELECT date FROM bronze.raw_prices WHERE ticker = :ticker"),
            {"ticker": ticker}
        )
        existing_dates = {row[0] for row in existing.fetchall()}

    data["date"] = pd.to_datetime(data["date"]).dt.date
    data = data[~data["date"].isin(existing_dates)]

    if data.empty:
        return True, f"Price history for '{ticker}' is already up to date in bronze."

    try:
        data.to_sql(
            name="raw_prices",
            con=engine,
            schema=BRONZE_SCHEMA,
            if_exists="append",
            index=False,
        )
        return True, f"Loaded {len(data)} rows of price history for '{ticker}' into bronze.raw_prices."
    except Exception as e:
        return False, f"Database write failed for '{ticker}' price history: {e}"

# ---------------------------------------------------------------------------
# DB helpers
# ---------------------------------------------------------------------------

def fetch_transactions() -> pd.DataFrame:
    """Pull all rows from bronze.transactions, newest first."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT
                    transaction_id,
                    ticker,
                    asset_name,
                    asset_type,
                    sector,
                    CASE WHEN quantity > 0 THEN 'BUY' ELSE 'SELL' END AS side,
                    ABS(quantity)    AS quantity,
                    purchase_price,
                    purchase_date,
                    ingested_at
                FROM bronze.transactions
                ORDER BY ingested_at DESC
            """))
            rows = result.fetchall()
            return pd.DataFrame(rows, columns=result.keys())
    except Exception as e:
        st.error(f"Could not load transactions: {e}")
        return pd.DataFrame()


def insert_transaction(
    ticker: str,
    asset_name: str,
    asset_type: str,
    sector: str,
    side: str,
    quantity: float,
    purchase_price: float,
    purchase_date: date,
) -> bool:
    """
    Insert one transaction row. BUY → positive quantity, SELL → negative.
    Only called after validation and price backfill have already passed.
    """
    signed_quantity = quantity if side == "BUY" else -quantity

    sql = text("""
        INSERT INTO bronze.transactions
            (ticker, asset_name, asset_type, sector,
             quantity, purchase_price, purchase_date, ingested_at)
        VALUES
            (:ticker, :asset_name, :asset_type, :sector,
             :quantity, :purchase_price, :purchase_date, :ingested_at)
    """)

    try:
        with engine.begin() as conn:
            conn.execute(sql, {
                "ticker":         ticker,
                "asset_name":     asset_name.strip(),
                "asset_type":     asset_type.strip(),
                "sector":         sector.strip(),
                "quantity":       signed_quantity,
                "purchase_price": purchase_price,
                "purchase_date":  purchase_date,
                "ingested_at":    datetime.utcnow(),
            })
        return True
    except Exception as e:
        st.error(f"Insert failed: {e}")
        return False


def delete_transaction(transaction_id: str) -> bool:
    """Hard-delete a single transaction by ID (corrections only)."""
    try:
        with engine.begin() as conn:
            conn.execute(
                text("DELETE FROM bronze.transactions WHERE transaction_id = :id"),
                {"id": str(transaction_id)} # Ensure it is sent as a string
            )
        return True
    except Exception as e:
        st.error(f"Delete failed: {e}")
        return False

# ---------------------------------------------------------------------------
# Page config
# ---------------------------------------------------------------------------

st.set_page_config(
    page_title="Portfolio Transaction Ledger",
    page_icon="📊",
    layout="wide",
)

st.title("📊 Portfolio Transaction Ledger")
st.caption(
    "Logs BUY / SELL transactions to `bronze.transactions`. "
    "New tickers are validated against yfinance and their price history is "
    "backfilled into `bronze.raw_prices` before the transaction is written."
)

# ---------------------------------------------------------------------------
# Sidebar — transaction entry form
# ---------------------------------------------------------------------------

with st.sidebar:
    st.header("➕ New Transaction")

    ticker_options = ["— select —"] + list(KNOWN_ASSETS.keys()) + ["Custom…"]
    selected_option = st.selectbox("Ticker", ticker_options)

    if selected_option == "Custom…":
        ticker     = st.text_input("Enter ticker symbol", placeholder="e.g. NVDA").upper().strip()
        asset_name = st.text_input("Asset name", placeholder="e.g. NVIDIA Corporation")
        asset_type = st.selectbox("Asset type", ASSET_TYPES)
        sector     = st.text_input("Sector", placeholder="e.g. Technology")
    elif selected_option == "— select —":
        ticker = asset_name = sector = ""
        asset_type = ASSET_TYPES[0]
    else:
        meta       = KNOWN_ASSETS[selected_option]
        ticker     = selected_option
        asset_name = st.text_input("Asset name", value=meta["asset_name"])
        asset_type = st.selectbox(
            "Asset type", ASSET_TYPES,
            index=ASSET_TYPES.index(meta["asset_type"]) if meta["asset_type"] in ASSET_TYPES else 0,
        )
        sector = st.text_input("Sector", value=meta["sector"])

    st.divider()

    side = st.radio("Transaction type", ["BUY", "SELL"], horizontal=True)

    quantity = st.number_input(
        "Quantity (shares / units)",
        min_value=0.00000001,
        value=1.0,
        step=0.01,
        format="%.8f",
        help="Always enter a positive number — BUY/SELL controls the sign.",
    )

    purchase_price = st.number_input(
        "Price per unit (USD)",
        min_value=0.0001,
        value=100.0,
        step=0.01,
        format="%.4f",
    )

    purchase_date = st.date_input(
        "Transaction date",
        value=date.today(),
        max_value=date.today(),
    )

    st.divider()

    total_value = quantity * purchase_price
    st.metric(label=f"Total {side} value", value=f"${total_value:,.2f}")

    submit = st.button("Submit Transaction", type="primary", use_container_width=True)

# ---------------------------------------------------------------------------
# Submission — validate → backfill → insert (in that order)
# ---------------------------------------------------------------------------

if submit:
    # ── 1. Basic field validation ──────────────────────────────────────────
    errors = []
    if not ticker:
        errors.append("Ticker is required.")
    if not asset_name:
        errors.append("Asset name is required.")
    if not sector:
        errors.append("Sector is required.")
    if quantity <= 0:
        errors.append("Quantity must be greater than zero.")
    if purchase_price <= 0:
        errors.append("Price must be greater than zero.")

    if errors:
        for err in errors:
            st.sidebar.error(err)

    else:
        # ── 2. yfinance ticker validation ──────────────────────────────────
        with st.sidebar:
            with st.spinner(f"Validating {ticker} on yfinance…"):
                is_valid, val_error = validate_ticker(ticker)

        if not is_valid:
            st.sidebar.error(f"❌ Invalid ticker: {val_error}")

        else:
            # ── 3. Price backfill if ticker is new to bronze ───────────────
            needs_backfill = not ticker_exists_in_bronze(ticker)

            if needs_backfill:
                with st.sidebar:
                    with st.spinner(
                        f"New ticker detected — fetching price history for "
                        f"{ticker} from {purchase_date}…"
                    ):
                        bf_ok, bf_msg = backfill_prices(ticker, purchase_date)

                if bf_ok:
                    st.sidebar.info(f"📥 {bf_msg}")
                else:
                    # Warn but don't block — prices can be retried; the
                    # transaction record itself is still valuable.
                    st.sidebar.warning(
                        f"⚠️ Price backfill had an issue: {bf_msg}\n\n"
                        "The transaction will still be recorded. Re-run "
                        "`ingest-raw-prices.py` to retry the price fetch."
                    )

            # ── 4. Write the transaction ───────────────────────────────────
            success = insert_transaction(
                ticker=ticker,
                asset_name=asset_name,
                asset_type=asset_type,
                sector=sector,
                side=side,
                quantity=quantity,
                purchase_price=purchase_price,
                purchase_date=purchase_date,
            )

            if success:
                st.sidebar.success(
                    f"✅ {side} {quantity:,.8g} × {ticker} @ ${purchase_price:,.4f} recorded."
                )
                st.rerun()

# ---------------------------------------------------------------------------
# Main area — ledger view
# ---------------------------------------------------------------------------

st.subheader("Transaction Ledger")

df = fetch_transactions()

if df.empty:
    st.info("No transactions found. Add your first one using the sidebar.")
else:
    buys  = df[df["side"] == "BUY"]
    sells = df[df["side"] == "SELL"]

    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Total transactions", len(df))
    col2.metric("BUY transactions",   len(buys))
    col3.metric("SELL transactions",  len(sells))
    col4.metric("Unique tickers",     df["ticker"].nunique())

    st.divider()

    all_tickers   = sorted(df["ticker"].unique().tolist())
    filter_ticker = st.multiselect("Filter by ticker", options=all_tickers, placeholder="Show all")
    display_df    = df[df["ticker"].isin(filter_ticker)] if filter_ticker else df.copy()

    display_df = display_df.copy()
    display_df["purchase_price"] = display_df["purchase_price"].apply(lambda x: f"${x:,.4f}")
    display_df["quantity"]       = display_df["quantity"].apply(lambda x: f"{x:,.8g}")
    display_df["ingested_at"]    = pd.to_datetime(display_df["ingested_at"]).dt.strftime("%Y-%m-%d %H:%M UTC")

    st.dataframe(display_df, use_container_width=True, hide_index=True)

# --- State Management (Place this at the top of your app script) ---
if 'delete_confirm' not in st.session_state:
    st.session_state.delete_confirm = False
if 'row_to_delete' not in st.session_state:
    st.session_state.row_to_delete = None

# ── Delete / correction tool ───────────────────────────────────────────
with st.expander("🗑️ Delete a transaction (corrections only)"):
    st.warning(
        "This permanently removes the row from `bronze.transactions`. "
        "Use only to fix data entry mistakes."
    )

    # 1. Input Field
    del_id = st.text_input("Transaction ID to delete", key="del_id_input")

    # 2. Search Button
    if st.button("Search for Transaction", type="secondary"):
        if not del_id:
            st.warning("Please enter an ID.")
        else:
            with engine.connect() as conn:
                # We cast to str() here to ensure the placeholder :id is treated as a string
                row = conn.execute(
                    text("SELECT * FROM bronze.transactions WHERE transaction_id = :id"),
                    {"id": str(del_id)} 
                ).fetchone()

            if row is None:
                st.error(f"No transaction with ID {del_id} found.")
                st.session_state.delete_confirm = False
            else:
                # Store row in state so it persists during the next rerun
                st.session_state.row_to_delete = dict(row._mapping)
                st.session_state.delete_confirm = True

    # 3. Confirmation UI (Only shows if a row was found)
    if st.session_state.delete_confirm:
        st.divider()
        st.write("### Review Row for Deletion")
        st.json(st.session_state.row_to_delete)
        
        st.error("Are you absolutely sure? This cannot be undone.")
        
        col1, col2 = st.columns(2)
        with col1:
            if st.button("🔥 Confirm Permanent Delete", type="primary"):
                # Use the ID stored from our search
                target_id = st.session_state.row_to_delete['transaction_id']
                if delete_transaction(str(target_id)):
                    st.success(f"Transaction {target_id} deleted.")
                    # Reset state and refresh
                    st.session_state.delete_confirm = False
                    st.session_state.row_to_delete = None
                    st.rerun()
        
        with col2:
            if st.button("Cancel"):
                st.session_state.delete_confirm = False
                st.session_state.row_to_delete = None
                st.rerun()