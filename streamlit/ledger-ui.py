import os
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import yfinance as yf
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
from datetime import datetime, date, timedelta
from auth import require_auth

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

load_dotenv()

engine = create_engine(os.getenv("DATABASE_URL"))

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
    try:
        hist = yf.Ticker(ticker).history(period="5d")
        if hist.empty:
            return False, f"'{ticker}' returned no price data from yfinance. Check the symbol and try again."
        return True, ""
    except Exception as e:
        return False, f"yfinance error while validating '{ticker}': {e}"


def ticker_exists_in_bronze(ticker: str) -> bool:
    with engine.connect() as conn:
        result = conn.execute(
            text("SELECT 1 FROM bronze.raw_prices WHERE ticker = :ticker LIMIT 1"),
            {"ticker": ticker}
        )
        return result.fetchone() is not None


def backfill_prices(ticker: str, from_date: date) -> tuple[bool, str]:
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

    if isinstance(data.columns, pd.MultiIndex):
        data.columns = data.columns.get_level_values(0)

    data.columns = [str(col).lower() for col in data.columns]
    data.rename(columns={"date": "date", "index": "date"}, inplace=True)

    data["date"] = pd.to_datetime(data["date"])
    data["ticker"] = ticker
    data["ingested_at"] = datetime.utcnow()

    data = data[["date", "ticker", "open", "high", "low", "close", "volume", "ingested_at"]]
    data = data.dropna(subset=["close", "open", "high", "low"])

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
            schema=os.getenv("BRONZE_SCHEMA"),
            if_exists="append",
            index=False,
        )
        return True, f"Loaded {len(data)} rows of price history for '{ticker}' into bronze.raw_prices."
    except Exception as e:
        return False, f"Database write failed for '{ticker}' price history: {e}"

# ---------------------------------------------------------------------------
# DB helpers — transactions
# ---------------------------------------------------------------------------

def fetch_transactions(user_id: str) -> pd.DataFrame:
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
                WHERE user_id = :user_id
                ORDER BY ingested_at DESC
            """), {"user_id": user_id})
            rows = result.fetchall()
            return pd.DataFrame(rows, columns=result.keys())
    except Exception as e:
        st.error(f"Could not load transactions: {e}")
        return pd.DataFrame()


def insert_transaction(
    ticker, asset_name, asset_type, sector,
    side, quantity, purchase_price, purchase_date, user_id,
) -> bool:
    signed_quantity = quantity if side == "BUY" else -quantity
    sql = text("""
        INSERT INTO bronze.transactions
            (ticker, asset_name, asset_type, sector,
             quantity, purchase_price, purchase_date, ingested_at, user_id)
        VALUES
            (:ticker, :asset_name, :asset_type, :sector,
             :quantity, :purchase_price, :purchase_date, :ingested_at, :user_id)
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
                "user_id":        user_id,
            })
        return True
    except Exception as e:
        st.error(f"Insert failed: {e}")
        return False


def delete_transaction(transaction_id: str, user_id: str) -> bool:
    try:
        with engine.begin() as conn:
            conn.execute(
                text("DELETE FROM bronze.transactions WHERE transaction_id = :id AND user_id = :user_id"),
                {"id": str(transaction_id), "user_id": user_id}
            )
        return True
    except Exception as e:
        st.error(f"Delete failed: {e}")
        return False

# ---------------------------------------------------------------------------
# DB helpers — analytics (gold schema)
# ---------------------------------------------------------------------------

@st.cache_data(ttl=300)
def fetch_ticker_kpis(user_id: str) -> pd.DataFrame:
    """gold.gold_ticker_kpis — one row per ticker."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT
                    ticker,
                    asset_name,
                    asset_type,
                    total_portfolio_value,
                    total_cost_basis,
                    total_return_dollar,
                    total_return_pct,
                    weighted_sharpe,
                    weighted_max_dd,
                    first_buy_date,
                    last_held_date
                FROM gold.gold_ticker_kpis
                WHERE user_id = :user_id
            """), {"user_id": user_id})
            return pd.DataFrame(result.fetchall(), columns=result.keys())
    except Exception as e:
        st.error(f"Could not load ticker KPIs: {e}")
        return pd.DataFrame()


@st.cache_data(ttl=300)
def fetch_portfolio_timeseries(user_id: str) -> pd.DataFrame:
    """gold.gold_portfolio_timeseries — (price_date, ticker) grain."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT
                    price_date,
                    ticker,
                    ticker_market_value,
                    ticker_daily_return,
                    ticker_drawdown
                FROM gold.gold_portfolio_timeseries
                WHERE user_id = :user_id
                ORDER BY price_date
            """), {"user_id": user_id})
            df = pd.DataFrame(result.fetchall(), columns=result.keys())
            if not df.empty:
                df["price_date"] = pd.to_datetime(df["price_date"])
            return df
    except Exception as e:
        st.error(f"Could not load portfolio timeseries: {e}")
        return pd.DataFrame()


@st.cache_data(ttl=300)
def fetch_macro_context(user_id: str) -> pd.DataFrame:
    """gold.gold_macro_context — (date, ticker) grain with macro columns."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT
                    date,
                    ticker,
                    ticker_market_value,
                    ticker_drawdown,
                    macro_regime,
                    yield_curve_slope,
                    cpi,
                    fed_funds_rate,
                    real_fed_funds_rate,
                    breakeven_inflation
                FROM gold.gold_macro_context
                WHERE user_id = :user_id
                ORDER BY date
            """), {"user_id": user_id})
            df = pd.DataFrame(result.fetchall(), columns=result.keys())
            if not df.empty:
                df["date"] = pd.to_datetime(df["date"])
            return df
    except Exception as e:
        st.error(f"Could not load macro context: {e}")
        return pd.DataFrame()


@st.cache_data(ttl=300)
def fetch_regime_performance(user_id: str) -> pd.DataFrame:
    """gold.gold_regime_performance — (ticker, macro_regime) grain."""
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT
                    ticker,
                    macro_regime,
                    avg_daily_return,
                    sharpe_in_regime,
                    worst_drawdown_in_regime,
                    trading_days_in_regime,
                    insufficient_sample,
                    return_tier
                FROM gold.gold_regime_performance
                WHERE user_id = :user_id
            """), {"user_id": user_id})
            return pd.DataFrame(result.fetchall(), columns=result.keys())
    except Exception as e:
        st.error(f"Could not load regime performance: {e}")
        return pd.DataFrame()

# ---------------------------------------------------------------------------
# Page config
# ---------------------------------------------------------------------------

st.set_page_config(
    page_title="Portfolio Transaction Ledger",
    page_icon="📊",
    layout="wide",
)

require_auth()
user_id = st.session_state.user_id

st.title("📊 Portfolio Transaction Ledger")
st.caption(
    "Logs BUY / SELL transactions to `bronze.transactions`. "
    "New tickers are validated against yfinance and their price history is "
    "backfilled into `bronze.raw_prices` before the transaction is written."
)

# ---------------------------------------------------------------------------
# Sidebar — welcome + logout
# ---------------------------------------------------------------------------

st.sidebar.write(f"👤 Welcome, **{st.session_state.full_name}**")
if st.sidebar.button("Logout", use_container_width=True):
    st.session_state.clear()
    st.rerun()

st.sidebar.divider()

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
        with st.sidebar:
            with st.spinner(f"Validating {ticker} on yfinance…"):
                is_valid, val_error = validate_ticker(ticker)

        if not is_valid:
            st.sidebar.error(f"❌ Invalid ticker: {val_error}")
        else:
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
                    st.sidebar.warning(
                        f"⚠️ Price backfill had an issue: {bf_msg}\n\n"
                        "The transaction will still be recorded. Re-run "
                        "`ingest-raw-prices.py` to retry the price fetch."
                    )

            success = insert_transaction(
                ticker=ticker,
                asset_name=asset_name,
                asset_type=asset_type,
                sector=sector,
                side=side,
                quantity=quantity,
                purchase_price=purchase_price,
                purchase_date=purchase_date,
                user_id=user_id
            )

            if success:
                st.sidebar.success(
                    f"✅ {side} {quantity:,.8g} × {ticker} @ ${purchase_price:,.4f} recorded."
                )
                st.rerun()

# ---------------------------------------------------------------------------
# Main area — tabs
# ---------------------------------------------------------------------------

tab1, tab2 = st.tabs(["Transactions", "Portfolio Analytics"])

# ===========================================================================
# TAB 1 — Transaction Ledger
# ===========================================================================

with tab1:

    st.subheader("Transaction Ledger")

    df = fetch_transactions(user_id=user_id)

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

    if 'delete_confirm' not in st.session_state:
        st.session_state.delete_confirm = False
    if 'row_to_delete' not in st.session_state:
        st.session_state.row_to_delete = None

    with st.expander("🗑️ Delete a transaction (corrections only)"):
        st.warning(
            "This permanently removes the row from `bronze.transactions`. "
            "Use only to fix data entry mistakes."
        )

        del_id = st.text_input("Transaction ID to delete", key="del_id_input")

        if st.button("Search for Transaction", type="secondary"):
            if not del_id:
                st.warning("Please enter an ID.")
            else:
                with engine.connect() as conn:
                    row = conn.execute(
                        text("SELECT * FROM bronze.transactions WHERE transaction_id = :id"),
                        {"id": str(del_id)}
                    ).fetchone()

                if row is None:
                    st.error(f"No transaction with ID {del_id} found.")
                    st.session_state.delete_confirm = False
                else:
                    st.session_state.row_to_delete = dict(row._mapping)
                    st.session_state.delete_confirm = True

        if st.session_state.delete_confirm:
            st.divider()
            st.write("### Review Row for Deletion")
            st.json(st.session_state.row_to_delete)

            st.error("Are you absolutely sure? This cannot be undone.")

            col1, col2 = st.columns(2)
            with col1:
                if st.button("🔥 Confirm Permanent Delete", type="primary"):
                    target_id = st.session_state.row_to_delete['transaction_id']
                    if delete_transaction(str(target_id), user_id):
                        st.success(f"Transaction {target_id} deleted.")
                        st.session_state.delete_confirm = False
                        st.session_state.row_to_delete = None
                        st.rerun()

            with col2:
                if st.button("Cancel"):
                    st.session_state.delete_confirm = False
                    st.session_state.row_to_delete = None
                    st.rerun()

# ===========================================================================
# TAB 2 — Portfolio Analytics
# ===========================================================================

with tab2:

    # ── Load all gold data ──────────────────────────────────────────────────
    kpis_df     = fetch_ticker_kpis(user_id)
    ts_df       = fetch_portfolio_timeseries(user_id)
    macro_df    = fetch_macro_context(user_id)
    regime_df   = fetch_regime_performance(user_id)

    if kpis_df.empty:
        st.info("No portfolio data found. Add transactions and run dbt to populate the gold models.")
        st.stop()

    # ── Filters ─────────────────────────────────────────────────────────────
    filter_col1, filter_col2, filter_col3 = st.columns([1, 1, 4])

    with filter_col1:
        all_sectors = sorted(kpis_df["asset_name"].unique()) if "asset_name" in kpis_df.columns else []
        # Pull sectors from timeseries if not in kpis
        sector_options = sorted(kpis_df["asset_type"].dropna().unique().tolist())
        selected_asset_types = st.multiselect(
            "Asset Type",
            options=sector_options,
            placeholder="All types",
            key="analytics_asset_type"
        )

    with filter_col2:
        ticker_options_analytics = sorted(kpis_df["ticker"].dropna().unique().tolist())
        selected_tickers = st.multiselect(
            "Ticker",
            options=ticker_options_analytics,
            placeholder="All tickers",
            key="analytics_ticker"
        )

    # Apply filters to kpis_df
    filtered_kpis = kpis_df.copy()
    if selected_asset_types:
        filtered_kpis = filtered_kpis[filtered_kpis["asset_type"].isin(selected_asset_types)]
    if selected_tickers:
        filtered_kpis = filtered_kpis[filtered_kpis["ticker"].isin(selected_tickers)]

    # Apply same ticker filter to other dataframes
    active_tickers = filtered_kpis["ticker"].tolist()

    filtered_ts     = ts_df[ts_df["ticker"].isin(active_tickers)]     if not ts_df.empty     else ts_df
    filtered_macro  = macro_df[macro_df["ticker"].isin(active_tickers)] if not macro_df.empty  else macro_df
    filtered_regime = regime_df[regime_df["ticker"].isin(active_tickers)] if not regime_df.empty else regime_df

    st.divider()

    # ── ROW 1: KPI Scorecards ───────────────────────────────────────────────
    total_equity        = filtered_kpis["total_portfolio_value"].sum()
    total_cost          = filtered_kpis["total_cost_basis"].sum()
    total_pl            = filtered_kpis["total_return_dollar"].sum()
    total_roi           = (total_pl / total_cost) if total_cost else 0
    weighted_sharpe     = filtered_kpis["weighted_sharpe"].sum()
    weighted_max_dd     = filtered_kpis["weighted_max_dd"].sum()

    k1, k2, k3, k4, k5 = st.columns(5)

    k1.metric(
        "Total Equity",
        f"${total_equity:,.2f}",
        help="Sum of current market value across all held positions"
    )
    k2.metric(
        "Total ROI",
        f"{total_roi * 100:.2f}%",
        delta=f"{total_roi * 100:.2f}%",
        delta_color="normal",
        help="Total return as % of cost basis"
    )
    k3.metric(
        "Total P/L",
        f"${total_pl:,.2f}",
        delta=f"${total_pl:,.2f}",
        delta_color="normal",
        help="Total return in dollars (market value − cost basis + sale proceeds)"
    )
    k4.metric(
        "Weighted Sharpe",
        f"{weighted_sharpe:.4f}",
        help="Portfolio-weight-adjusted Sharpe ratio"
    )
    k5.metric(
        "Weighted Max-DD",
        f"{weighted_max_dd:.4f}",
        delta=f"{weighted_max_dd:.4f}",
        delta_color="inverse",
        help="Portfolio-weight-adjusted maximum drawdown"
    )

    st.divider()

    # ── ROW 2: Allocation pies + Return Comparison bar ──────────────────────
    row2_col1, row2_col2, row2_col3 = st.columns(3)

    with row2_col1:
        st.subheader("Weighted Portfolio Allocation")
        if not filtered_kpis.empty and filtered_kpis["total_portfolio_value"].sum() > 0:
            pie_data = filtered_kpis[filtered_kpis["total_portfolio_value"] > 0]
            fig_alloc = px.pie(
                pie_data,
                names="asset_name",
                values="total_portfolio_value",
                hole=0.0,
                color_discrete_sequence=px.colors.qualitative.Set2,
            )
            fig_alloc.update_traces(textposition="outside", textinfo="percent+label")
            fig_alloc.update_layout(
                showlegend=False,
                margin=dict(t=10, b=10, l=10, r=10),
                height=320,
            )
            st.plotly_chart(fig_alloc, use_container_width=True)
        else:
            st.info("No allocation data available.")

    with row2_col2:
        st.subheader("Asset Type Allocation")
        if not filtered_kpis.empty and filtered_kpis["total_portfolio_value"].sum() > 0:
            type_data = (
                filtered_kpis[filtered_kpis["total_portfolio_value"] > 0]
                .groupby("asset_type", as_index=False)["total_portfolio_value"]
                .sum()
            )
            fig_type = px.pie(
                type_data,
                names="asset_type",
                values="total_portfolio_value",
                hole=0.0,
                color_discrete_sequence=px.colors.qualitative.Pastel,
            )
            fig_type.update_traces(textposition="outside", textinfo="percent+label")
            fig_type.update_layout(
                showlegend=False,
                margin=dict(t=10, b=10, l=10, r=10),
                height=320,
            )
            st.plotly_chart(fig_type, use_container_width=True)
        else:
            st.info("No asset type data available.")

    with row2_col3:
        st.subheader("Return Comparison")
        if not filtered_kpis.empty:
            ret_data = (
                filtered_kpis[["asset_name", "total_return_dollar"]]
                .dropna()
                .sort_values("total_return_dollar")
            )
            fig_ret = px.bar(
                ret_data,
                x="total_return_dollar",
                y="asset_name",
                orientation="h",
                color="total_return_dollar",
                color_continuous_scale=["#d62728", "#aec7e8", "#2ca02c"],
                color_continuous_midpoint=0,
                labels={"total_return_dollar": "P/L ($)", "asset_name": ""},
            )
            fig_ret.update_layout(
                coloraxis_showscale=False,
                margin=dict(t=10, b=10, l=10, r=10),
                height=320,
                xaxis_tickprefix="$",
            )
            st.plotly_chart(fig_ret, use_container_width=True)
        else:
            st.info("No return data available.")

    st.divider()

    # ── ROW 3: Portfolio Value + Drawdown over time ─────────────────────────
    row3_col1, row3_col2 = st.columns(2)

    with row3_col1:
        st.subheader("Portfolio Value Over Time")
        if not filtered_macro.empty:
            # Aggregate to (date, macro_regime) — sum ticker_market_value across tickers
            pv_data = (
                filtered_macro
                .groupby(["date", "macro_regime"], as_index=False)["ticker_market_value"]
                .sum()
            )
            fig_pv = px.line(
                pv_data,
                x="date",
                y="ticker_market_value",
                color="macro_regime",
                labels={"ticker_market_value": "Portfolio Value ($)", "date": "", "macro_regime": "Regime"},
                color_discrete_sequence=px.colors.qualitative.Bold,
            )
            fig_pv.update_layout(
                margin=dict(t=10, b=10, l=10, r=10),
                height=340,
                legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
                hovermode="x unified",
            )
            fig_pv.update_yaxes(tickprefix="$")
            st.plotly_chart(fig_pv, use_container_width=True)
        elif not filtered_ts.empty:
            # Fallback: no macro data, just aggregate timeseries by date
            pv_data = filtered_ts.groupby("price_date", as_index=False)["ticker_market_value"].sum()
            fig_pv = px.line(
                pv_data,
                x="price_date",
                y="ticker_market_value",
                labels={"ticker_market_value": "Portfolio Value ($)", "price_date": ""},
            )
            fig_pv.update_layout(margin=dict(t=10, b=10, l=10, r=10), height=340)
            fig_pv.update_yaxes(tickprefix="$")
            st.plotly_chart(fig_pv, use_container_width=True)
        else:
            st.info("No timeseries data available.")

    with row3_col2:
        st.subheader("Portfolio Drawdown Over Time")
        if not filtered_macro.empty:
            # Avg drawdown across tickers per (date, macro_regime)
            dd_data = (
                filtered_macro
                .groupby(["date", "macro_regime"], as_index=False)["ticker_drawdown"]
                .mean()
            )
            fig_dd = px.line(
                dd_data,
                x="date",
                y="ticker_drawdown",
                color="macro_regime",
                labels={"ticker_drawdown": "Drawdown", "date": "", "macro_regime": "Regime"},
                color_discrete_sequence=px.colors.qualitative.Bold,
            )
            fig_dd.update_layout(
                margin=dict(t=10, b=10, l=10, r=10),
                height=340,
                legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
                hovermode="x unified",
            )
            fig_dd.update_yaxes(tickformat=".1%")
            # Shade the drawdown area
            for regime in dd_data["macro_regime"].unique():
                regime_slice = dd_data[dd_data["macro_regime"] == regime]
                fig_dd.add_trace(go.Scatter(
                    x=pd.concat([regime_slice["date"], regime_slice["date"].iloc[::-1]]),
                    y=pd.concat([regime_slice["ticker_drawdown"], pd.Series([0] * len(regime_slice))]),
                    fill="toself",
                    fillcolor="rgba(214,39,40,0.08)",
                    line=dict(color="rgba(255,255,255,0)"),
                    showlegend=False,
                    hoverinfo="skip",
                ))
            st.plotly_chart(fig_dd, use_container_width=True)
        elif not filtered_ts.empty:
            dd_data = filtered_ts.groupby("price_date", as_index=False)["ticker_drawdown"].mean()
            fig_dd = px.line(
                dd_data,
                x="price_date",
                y="ticker_drawdown",
                labels={"ticker_drawdown": "Drawdown", "price_date": ""},
            )
            fig_dd.update_layout(margin=dict(t=10, b=10, l=10, r=10), height=340)
            fig_dd.update_yaxes(tickformat=".1%")
            st.plotly_chart(fig_dd, use_container_width=True)
        else:
            st.info("No drawdown data available.")

    st.divider()

    # ── ROW 4: Regime Heatmap + Yield Curve + CPI ───────────────────────────
    row4_col1, row4_col2, row4_col3 = st.columns(3)

    with row4_col1:
        st.subheader("Regime Performance Heatmap")
        if not filtered_regime.empty:
            pivot = filtered_regime.pivot_table(
                index="ticker",
                columns="macro_regime",
                values="avg_daily_return",
                aggfunc="mean"
            )
            # Build a custom annotated heatmap
            fig_hm = go.Figure(data=go.Heatmap(
                z=pivot.values * 100,          # convert to %
                x=pivot.columns.tolist(),
                y=pivot.index.tolist(),
                colorscale=[
                    [0.0,  "#d62728"],
                    [0.5,  "#1a1a2e"],
                    [1.0,  "#ffffcc"],
                ],
                zmid=0,
                text=[[f"{v:.3f}%" if not pd.isna(v) else "n/a" for v in row] for row in pivot.values * 100],
                texttemplate="%{text}",
                hovertemplate="Ticker: %{y}<br>Regime: %{x}<br>Avg daily return: %{z:.3f}%<extra></extra>",
                colorbar=dict(title="Avg Daily Return %", thickness=12),
            ))

            # Grey out insufficient sample cells
            if "insufficient_sample" in filtered_regime.columns:
                insuf = filtered_regime[filtered_regime["insufficient_sample"] == True]
                for _, row_i in insuf.iterrows():
                    if row_i["ticker"] in pivot.index and row_i["macro_regime"] in pivot.columns:
                        r_idx = pivot.index.tolist().index(row_i["ticker"])
                        c_idx = pivot.columns.tolist().index(row_i["macro_regime"])
                        fig_hm.add_shape(
                            type="rect",
                            x0=c_idx - 0.5, x1=c_idx + 0.5,
                            y0=r_idx - 0.5, y1=r_idx + 0.5,
                            fillcolor="rgba(100,100,100,0.5)",
                            line=dict(width=0),
                            layer="above",
                        )

            fig_hm.update_layout(
                margin=dict(t=10, b=10, l=10, r=10),
                height=340,
                xaxis=dict(side="bottom"),
            )
            st.plotly_chart(fig_hm, use_container_width=True)
            st.caption("Grey cells = fewer than 20 trading days in that regime (unreliable statistics)")
        else:
            st.info("No regime performance data available.")

    with row4_col2:
        st.subheader("Yield Curve")
        if not filtered_macro.empty and "yield_curve_slope" in filtered_macro.columns:
            yc_data = (
                filtered_macro
                .groupby("date", as_index=False)["yield_curve_slope"]
                .mean()
                .sort_values("date")
            )
            fig_yc = px.line(
                yc_data,
                x="date",
                y="yield_curve_slope",
                labels={"yield_curve_slope": "Yield Curve Slope", "date": ""},
                color_discrete_sequence=["#d62728"],
            )
            fig_yc.add_hline(
                y=0,
                line_dash="dash",
                line_color="rgba(255,255,255,0.3)",
                annotation_text="Inversion",
                annotation_position="bottom right",
            )
            fig_yc.update_layout(
                margin=dict(t=10, b=10, l=10, r=10),
                height=340,
                hovermode="x unified",
            )
            st.plotly_chart(fig_yc, use_container_width=True)
        else:
            st.info("No yield curve data available.")

    with row4_col3:
        st.subheader("CPI")
        if not filtered_macro.empty and "cpi" in filtered_macro.columns:
            cpi_data = (
                filtered_macro
                .groupby("date", as_index=False)["cpi"]
                .mean()
                .sort_values("date")
            )
            fig_cpi = px.line(
                cpi_data,
                x="date",
                y="cpi",
                labels={"cpi": "CPI", "date": ""},
                color_discrete_sequence=["#d62728"],
            )
            fig_cpi.update_layout(
                margin=dict(t=10, b=10, l=10, r=10),
                height=340,
                hovermode="x unified",
            )
            st.plotly_chart(fig_cpi, use_container_width=True)
        else:
            st.info("No CPI data available.")