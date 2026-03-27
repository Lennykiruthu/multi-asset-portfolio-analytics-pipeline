{{
    config(
        materialized='table'
    )
}}

/*
    fct_macro_asset_performance
    ----------------------------
    Bridge fact table joining daily asset returns to macro regime context.
    Grain: one row per ticker per trading date.
 
    This model answers the core backtesting question:
        "What did each asset return on days classified under each macro regime?"
 
    It does NOT aggregate — that is the responsibility of gold_regime_performance.
    Keeping this at daily grain means:
        - The time-series is preserved for overlay charts in Superset
        - gold_regime_performance can aggregate however it needs (avg, median, pct_positive)
        - Adding new gold models later requires no changes here
 
    Join strategy:
        LEFT JOIN from fct_daily_returns onto fct_macro_regimes on date.
        Asset prices exist on trading days only; FRED publishes on calendar days.
        The left join ensures no price rows are lost. The WHERE clause filters
        out the small number of trading days with no macro reading (typically
        holidays where FRED has a gap but the exchange was open).
 
    Additional columns computed here:
        - above_ma_50 / above_ma_200: price-regime interaction flags.
          Useful for signal generation later — e.g. "is the asset above its
          200-day MA AND in an easing regime?" is a common quant screen.
        - return_vs_portfolio: how this ticker's daily return compares to the
          equal-weighted mean across all tickers on the same date.
          Gives a simple relative-strength reading within the portfolio.
*/

WITH prices AS (
    SELECT * FROM {{ ref('fct_daily_returns') }}
),

macro AS (
    SELECT * FROM {{ ref('fct_macro_regimes') }}
),

-- Equal-weighted portfolio return per date: needed for return_vs_portfolio
-- Computed here ratherthan in gold so that the column is available at the
-- daily grain on every row.
portfolio_daily AS (
    SELECT
        price_date,
        ROUND(AVG(daily_return)::numeric, 6) AS portfolio_avg_return
    FROM prices
    WHERE daily_return IS NOT NULL
    GROUP BY price_date
),

joined AS (
    SELECT
        -- ── Identifiers ──────────────────────────────────────────────────────
        p.price_date                                            as date,
        p.ticker,
 
        -- ── Price & return columns (from fct_daily_returns) ──────────────────
        p.open,
        p.high,
        p.low,
        p.close,
        p.volume,
        p.prev_close,
        p.daily_return,
        p.log_return,
        p.cumulative_return,
        p.drawdown,
        p.max_drawdown_to_date,
        p.ma_50,
        p.ma_200,
        p.running_max_close,
 
        -- ── Macro context (from fct_macro_regimes) ───────────────────────────
        m.macro_regime,
        m.fed_stance,
        m.cycle_phase,
        m.is_recession,
        m.is_inverted,
        m.yield_curve_slope,
        m.real_fed_funds_rate,
        m.real_10y_yield,
        m.fed_funds_rate,
        m.treasury_10y_yield,
        m.cpi,
        m.cpi_mom_change,
        m.breakeven_inflation,
        m.dff_3m_change,
        m.regime_signal_strength,
 
        -- ── Price-regime interaction flags ────────────────────────────────────
        -- These capture the intersection of technical position and macro env.
        -- Common building blocks for quant screens and signal generation.
        CASE
            WHEN p.close > p.ma_50  THEN true
            ELSE false
        END                                                     AS above_ma_50,
 
        CASE
            WHEN p.close > p.ma_200 THEN true
            ELSE false
        END                                                     AS above_ma_200,
 
        -- ── Relative return within portfolio ─────────────────────────────────
        -- Positive = outperforming the portfolio average on this date
        -- Negative = underperforming
        ROUND(
            (p.daily_return - pd.portfolio_avg_return)::numeric, 6
        )                                                       AS return_vs_portfolio
 
    FROM prices         p
    LEFT JOIN macro     m  on p.price_date = m.date
    LEFT JOIN portfolio_daily pd on p.price_date = pd.price_date
 
    -- Drop trading days with no macro reading (rare FRED gaps)
    WHERE m.date IS NOT NULL
 
)
 
SELECT * FROM joined
ORDER BY ticker, date