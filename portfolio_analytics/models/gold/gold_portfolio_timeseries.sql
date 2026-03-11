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

-- Pull shares_held per ticker from assets
holdings AS (
    SELECT
        ticker,
        shares_held
    FROM {{ ref("dim_assets") }}
),

-- Daily market value per ticket
daily_ticket_value AS (
    SELECT
        d.price_date,
        d.ticker,
        d.close,
        h.shares_held,
        ROUND((d.close * h.shares_held)::numeric, 2) AS ticker_market_value
    FROM daily_prices d
    INNER JOIN holdings h ON d.ticker = h.ticker  
),

-- Aggregate to portfolio level per date
daily_portfolio_value AS (
    SELECT 
        price_date,
        ROUND(SUM(ticker_market_value)::numeric, 2) AS portfolio_value
    FROM daily_ticket_value
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

-- Running peal and drawdown on blended portfolio series
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
            (portfolio_value - MAX(portfolio_value) OVER(
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