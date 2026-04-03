{{
    config(
        materialized='table'
    )
}}

WITH daily_prices AS (
    SELECT
        price_date,
        ticker,
        close
    FROM {{ ref("fct_daily_returns") }}
    WHERE close IS NOT NULL
),

-- Pull time-aware share counts per (ticker, date)
-- Previously this joined dim_assets which gave a single current net_shares.
-- Now it joins int_daily_holdings which gives the correct shares held on
-- each historical date, so fully-exited tickers contribute their real
-- market value over the period they were held.
holdings AS (
    SELECT
        price_date,
        ticker,
        shares_held
    FROM {{ ref("int_daily_holdings") }}
    WHERE shares_held > 0  -- exclude pre-buy and post-full-exit dates
),

-- Daily market value per ticker — now a date-scoped join
daily_ticket_value AS (
    SELECT
        d.price_date,
        d.ticker,
        d.close,
        h.shares_held                                        AS net_shares,
        ROUND((d.close * h.shares_held)::numeric, 2)        AS ticker_market_value
    FROM daily_prices d
    INNER JOIN holdings h
        ON  d.ticker     = h.ticker
        AND d.price_date = h.price_date   -- <-- date-scoped, was a ticker-only join
),

-- Generate a date spine (every calendar day)
date_spine AS (
    SELECT generate_series(
        MIN(price_date),
        MAX(price_date),
        INTERVAL '1 day'
    )::date AS price_date
    FROM daily_ticket_value
),

-- Cross join spine with all tickers so every ticker has every date
ticker_spine AS (
    SELECT
        s.price_date,
        t.ticker
    FROM date_spine s
    CROSS JOIN (SELECT DISTINCT ticker FROM {{ ref("int_daily_holdings") }}) t
),

-- Tag each row with its last known non-null group
ticker_filled_groups AS (
    SELECT
        ts.price_date,
        ts.ticker,
        dtv.ticker_market_value,
        COUNT(dtv.ticker_market_value) OVER (
            PARTITION BY ts.ticker ORDER BY ts.price_date
        ) AS fill_group
    FROM ticker_spine ts
    LEFT JOIN daily_ticket_value dtv
        ON ts.price_date = dtv.price_date
        AND ts.ticker = dtv.ticker
),

-- Fill using the group
ticker_filled AS (
    SELECT
        price_date,
        ticker,
        MAX(ticker_market_value) OVER (
            PARTITION BY ticker, fill_group
        ) AS ticker_market_value
    FROM ticker_filled_groups
),

-- Aggregate to portfolio level per date
daily_portfolio_value AS (
    SELECT
        price_date,
        ROUND(SUM(ticker_market_value)::numeric, 2) AS portfolio_value
    FROM ticker_filled
    GROUP BY price_date
),

-- Lagged portfolio value to compute daily return
with_lag AS (
    SELECT
        price_date,
        portfolio_value,
        LAG(portfolio_value) OVER (ORDER BY price_date) AS prev_portfolio_value
    FROM daily_portfolio_value
),

-- Daily return on blended portfolio
with_returns AS (
    SELECT
        price_date,
        portfolio_value,
        prev_portfolio_value,

        CASE
            WHEN prev_portfolio_value IS NOT NULL AND prev_portfolio_value != 0
            THEN ROUND(
                (portfolio_value - prev_portfolio_value) / prev_portfolio_value,
                6
            )
        END AS portfolio_daily_return
    FROM with_lag
),

-- Running peak and drawdown on blended portfolio series
with_drawdown AS (
    SELECT
        price_date,
        portfolio_value,
        portfolio_daily_return,

        MAX(portfolio_value) OVER (
            ORDER BY price_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS running_peak,

        ROUND(
            (portfolio_value - MAX(portfolio_value) OVER (
                ORDER BY price_date
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            )) / NULLIF(MAX(portfolio_value) OVER (
                ORDER BY price_date
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            ), 0),
            6
        ) AS portfolio_drawdown

    FROM with_returns
)

SELECT
    price_date,
    portfolio_value,
    portfolio_daily_return,
    running_peak,
    portfolio_drawdown
FROM with_drawdown
ORDER BY price_date