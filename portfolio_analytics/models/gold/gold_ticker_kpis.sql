{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_ticker_kpis
    ----------------
    Grain: one row per ticker.

    Provides the same KPI set as gold_kpis but broken down by ticker so that
    Superset Big Number charts can cross-filter by ticker (or asset type) and
    show per-ticker scalar metrics.

    Metrics:
        - total_portfolio_value   : latest market value of the ticker position
        - total_cost_basis        : total amount spent acquiring the position
        - total_return_dollar     : market value minus cost basis
        - total_return_pct        : total return as a fraction of cost basis
        - sharpe_ratio            : annualised Sharpe from ticker daily returns
        - max_drawdown            : worst drawdown experienced by the ticker
        - first_buy_date          : earliest date the ticker was held
        - last_held_date          : most recent date the ticker was held

    Downstream:
        - Superset Big Number charts source from this model.
        - gold_kpis is kept as a separate single-row scorecard for the
          unfiltered portfolio-level state (no cross-filter applied).

    Notes on Sharpe:
        Uses STDDEV_SAMP (n-1 denominator) consistent with gold_kpis.
        Only non-null daily returns are included (first day of each ticker
        has no prev value so returns NULL — excluded via WHERE).
*/

WITH timeseries AS (
    SELECT
        price_date,
        ticker,
        ticker_market_value,
        ticker_daily_return,
        ticker_drawdown
    FROM {{ ref('gold_portfolio_timeseries') }}
),

assets AS (
    SELECT
        ticker,
        asset_name,
        asset_type,
        total_cost_basis,
        total_sale_proceeds,
        weight_decimal
    FROM {{ ref('dim_assets') }}
),

-- ── Latest market value per ticker ─────────────────────────────────────────
latest_value AS (
    SELECT DISTINCT ON (ticker)
        ticker,
        ticker_market_value         AS total_portfolio_value,
        price_date                  AS last_held_date
    FROM timeseries
    WHERE ticker_market_value IS NOT NULL
    ORDER BY ticker, price_date DESC
),

-- ── Earliest held date per ticker ──────────────────────────────────────────
first_held AS (
    SELECT
        ticker,
        MIN(price_date) AS first_buy_date
    FROM timeseries
    WHERE ticker_market_value IS NOT NULL
    GROUP BY ticker
),

-- ── Sharpe ratio per ticker ────────────────────────────────────────────────
ticker_sharpe AS (
    SELECT
        ticker,
        ROUND(
            (AVG(ticker_daily_return) / NULLIF(STDDEV_SAMP(ticker_daily_return), 0))
            * SQRT(252)::numeric,
            2
        ) AS sharpe_ratio
    FROM timeseries
    WHERE ticker_daily_return IS NOT NULL
    GROUP BY ticker
),

-- ── Max drawdown per ticker ────────────────────────────────────────────────
ticker_max_drawdown AS (
    SELECT
        ticker,
        ROUND(MIN(ticker_drawdown)::numeric, 4) AS max_drawdown
    FROM timeseries
    GROUP BY ticker
)

SELECT
    -- ── Dimensions ────────────────────────────────────────────────────────
    a.ticker,
    a.asset_name,
    a.asset_type,

    -- ── Date range ────────────────────────────────────────────────────────
    fh.first_buy_date,
    lv.last_held_date,

    -- ── Value & return ─────────────────────────────────────────────────────
    lv.total_portfolio_value,
    a.total_cost_basis,
    ROUND((lv.total_portfolio_value - a.total_cost_basis + a.total_sale_proceeds)::numeric, 2)                                         AS total_return_dollar,
    ROUND((lv.total_portfolio_value - a.total_cost_basis + a.total_sale_proceeds) / NULLIF(a.total_cost_basis, 0)::numeric, 4)         AS total_return_pct,

    -- ── Risk metrics ───────────────────────────────────────────────────────
    (ts.sharpe_ratio * weight_decimal) AS weighted_sharpe,
    (td.max_drawdown * weight_decimal) AS weighted_max_dd

FROM assets a
LEFT JOIN latest_value      lv ON a.ticker = lv.ticker
LEFT JOIN first_held        fh ON a.ticker = fh.ticker
LEFT JOIN ticker_sharpe     ts ON a.ticker = ts.ticker
LEFT JOIN ticker_max_drawdown td ON a.ticker = td.ticker

ORDER BY total_portfolio_value DESC NULLS LAST