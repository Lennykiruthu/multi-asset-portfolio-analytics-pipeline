{{
    config(
        materialized='table'
    )
}}

WITH summary AS (
    SELECT * FROM {{ ref("gold_portfolio_summary") }}
),

timeseries AS (
    SELECT * FROM {{ ref("gold_portfolio_timeseries") }}
    WHERE portfolio_daily_return IS NOT NULL
),

-- Portfolio level KPIs from summary
portfolio_snapshot AS (
    SELECT
        ROUND(SUM(current_value), 2)                                             AS total_portfolio_value,
        ROUND(SUM(total_return_dollar), 2)                                       AS total_return_dollar,
        ROUND(SUM(total_return_dollar) / NULLIF(SUM(initial_investment), 0), 2)  AS total_return_pct
    FROM summary
),

-- Blended sharpe from portfolio daily return series
portfolio_sharpe AS (
    SELECT
        ROUND(
            (AVG(portfolio_daily_return) / NULLIF(STDDEV_SAMP(portfolio_daily_return), 0))
            * SQRT(252)::numeric,
            2
        ) AS weighted_sharpe_ratio
    FROM timeseries
),

-- Blended max drawdown from portfolio value series
portfolio_drawdown AS (
    SELECT
        ROUND(MIN(portfolio_drawdown), 4) AS weighted_max_drawdown
    FROM {{ ref("gold_portfolio_timeseries") }}
)

SELECT
    s.total_portfolio_value,
    s.total_return_dollar,
    s.total_return_pct,
    sh.weighted_sharpe_ratio,
    d.weighted_max_drawdown
FROM portfolio_snapshot s
CROSS JOIN portfolio_sharpe sh
CROSS JOIN portfolio_drawdown d