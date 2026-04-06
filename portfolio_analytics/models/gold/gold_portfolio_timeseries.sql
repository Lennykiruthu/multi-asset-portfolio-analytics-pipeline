{{
    config(
        materialized='table'
    )
}}

/*
    gold_portfolio_timeseries
    -------------------------
    Grain: one row per (price_date, ticker).

    Previously this model aggregated to portfolio level (one row per date)
    by summing ticker_market_value across all tickers. That aggregation has
    been removed so that BI tools (Apache Superset) can cross-filter by
    ticker dimension at query time.

    Portfolio-level metrics (portfolio_value, portfolio_daily_return,
    running_peak, portfolio_drawdown) are no longer computed here.
    Superset charts that need portfolio totals should SUM(ticker_market_value)
    and apply window functions at query/viz time, or via a Superset metric.

    Downstream:
        - gold_macro_context  joins on (price_date, ticker)
        - gold_kpis           aggregates this model back to scalar KPIs
*/

WITH daily_prices AS (
    SELECT
        price_date,
        ticker,
        close
    FROM {{ ref("fct_daily_returns") }}
    WHERE close IS NOT NULL
),

holdings AS (
    SELECT
        price_date,
        ticker,
        shares_held
    FROM {{ ref("int_daily_holdings") }}
    WHERE shares_held > 0
),

-- Daily market value per (ticker, date) — date-scoped join
daily_ticker_value AS (
    SELECT
        d.price_date,
        d.ticker,
        d.close,
        h.shares_held                                       AS net_shares,
        ROUND((d.close * h.shares_held)::numeric, 2)       AS ticker_market_value
    FROM daily_prices d
    INNER JOIN holdings h
        ON  d.ticker     = h.ticker
        AND d.price_date = h.price_date
),

-- Date spine per ticker to forward-fill across weekends / holidays
date_spine AS (
    SELECT generate_series(
        MIN(price_date),
        MAX(price_date),
        INTERVAL '1 day'
    )::date AS price_date
    FROM daily_ticker_value
),

ticker_spine AS (
    SELECT
        s.price_date,
        t.ticker
    FROM date_spine s
    CROSS JOIN (SELECT DISTINCT ticker FROM {{ ref("int_daily_holdings") }}) t
),

-- Tag each row with its last known non-null fill group
ticker_filled_groups AS (
    SELECT
        ts.price_date,
        ts.ticker,
        dtv.close,
        dtv.net_shares,
        dtv.ticker_market_value,
        COUNT(dtv.ticker_market_value) OVER (
            PARTITION BY ts.ticker ORDER BY ts.price_date
        ) AS fill_group
    FROM ticker_spine ts
    LEFT JOIN daily_ticker_value dtv
        ON  ts.price_date = dtv.price_date
        AND ts.ticker     = dtv.ticker
),

-- Forward-fill close, net_shares, and ticker_market_value within each group
ticker_filled AS (
    SELECT
        price_date,
        ticker,
        MAX(close)                OVER (PARTITION BY ticker, fill_group) AS close,
        MAX(net_shares)           OVER (PARTITION BY ticker, fill_group) AS net_shares,
        MAX(ticker_market_value)  OVER (PARTITION BY ticker, fill_group) AS ticker_market_value
    FROM ticker_filled_groups
),

-- Ticker-level daily return (day-over-day change in market value for this ticker)
with_ticker_return AS (
    SELECT
        price_date,
        ticker,
        close,
        net_shares,
        ticker_market_value,
        LAG(ticker_market_value) OVER (
            PARTITION BY ticker ORDER BY price_date
        ) AS prev_ticker_market_value,

        CASE
            WHEN LAG(ticker_market_value) OVER (
                     PARTITION BY ticker ORDER BY price_date
                 ) IS NOT NULL
             AND LAG(ticker_market_value) OVER (
                     PARTITION BY ticker ORDER BY price_date
                 ) != 0
            THEN ROUND(
                (ticker_market_value - LAG(ticker_market_value) OVER (
                    PARTITION BY ticker ORDER BY price_date
                )) / LAG(ticker_market_value) OVER (
                    PARTITION BY ticker ORDER BY price_date
                ),
                6
            )
        END AS ticker_daily_return
    FROM ticker_filled
),

-- Ticker-level running peak and drawdown
with_ticker_drawdown AS (
    SELECT
        price_date,
        ticker,
        close,
        net_shares,
        ticker_market_value,
        ticker_daily_return,

        MAX(ticker_market_value) OVER (
            PARTITION BY ticker
            ORDER BY price_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS ticker_running_peak,

        ROUND(
            (ticker_market_value - MAX(ticker_market_value) OVER (
                PARTITION BY ticker
                ORDER BY price_date
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            )) / NULLIF(MAX(ticker_market_value) OVER (
                PARTITION BY ticker
                ORDER BY price_date
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            ), 0),
            6
        ) AS ticker_drawdown

    FROM with_ticker_return
)

SELECT
    price_date,
    ticker,
    close,
    net_shares,
    ticker_market_value,
    ticker_daily_return,
    ticker_running_peak,
    ticker_drawdown
FROM with_ticker_drawdown
ORDER BY price_date, ticker