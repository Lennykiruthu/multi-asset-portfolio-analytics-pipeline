{{
    config(
        materialized='table'
    )
}}

WITH base AS (
    SELECT
        price_date,
        ticker,
        daily_return,
        max_drawdown_to_date
    FROM {{ ref("fct_daily_returns") }}
    WHERE daily_return IS NOT NULL
),

windowed AS (
    SELECT
        price_date,
        ticker,
        daily_return,
        max_drawdown_to_date,

        -- Row count over 252-day window (used to enforce min_periods = 30)
        COUNT(daily_return) OVER(
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 251 PRECEDING AND CURRENT ROW
        ) AS window_rows,

        -- Mean daily return over 252-day window
        AVG(daily_return) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 251 PRECEDING AND CURRENT ROW
        ) AS avg_return_252d,

        -- Total stddev of daily return (Sharpe denominator)
        STDDEV_SAMP(daily_return) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 251 PRECEDING AND CURRENT ROW
        ) AS stddev_return_252d,

        -- Downside deviation: stddev of ONLY negative daily returns (Sortino denominator)
        -- Approximated as stddev of LEAST(daily_return, 0) - penalises negatives only
        STDDEV_SAMP(LEAST(daily_return, 0)) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 251 PRECEDING AND CURRENT ROW
        ) AS downside_dev_252d,

        -- Max drawdown over rolling 252-day window (Calmar denominator)
        MIN(max_drawdown_to_date) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 251 PRECEDING AND CURRENT ROW
        ) AS max_drawdown_252d

    FROM base
),

risk_metrics AS (
    SELECT
        price_date,
        ticker,
        daily_return,

        -- Sharpe Ratio
        -- (mean daily return / stddev daily return) * sqrt(252)
        CASE
            WHEN window_rows >= 30 AND stddev_return_252d > 0
            THEN ROUND(
                (avg_return_252d / stddev_return_252d) * SQRT(252)::numeric,
                4
            )
        END AS sharpe_252d,

        -- Sortino Ratio
        -- Like sharpe ration but only penalises downside volatility
        -- Better metric forasymmetric assets like BTC/ETH
        -- (mean daily returns / downside deviation) * sqrt(252)
        CASE
            WHEN window_rows >= 30 AND downside_dev_252d > 0
            THEN ROUND(
                (avg_return_252d / downside_dev_252d) * SQRT(252)::numeric,
                4
            )
        END AS sortino_252d,

        -- ── Calmar Ratio ───────────────────────────────────────────────────
        -- Annualised return / absolute max drawdown over the same window.
        -- Rewards high return relative to worst loss experienced.
        -- (avg daily return * 252) / abs(max drawdown)
        CASE
            WHEN window_rows >= 30 AND max_drawdown_252d < 0
            THEN ROUND(
                (avg_return_252d * 252) / ABS(max_drawdown_252d)::numeric,
                4
            )
        END AS calmar_252d,

        -- Pass through raw inputs for transparency / debugging
        avg_return_252d,
        stddev_return_252d,
        downside_dev_252d,
        max_drawdown_252d,
        window_rows

    FROM windowed
)

SELECT
    price_date,
    ticker,
    sharpe_252d,
    sortino_252d,
    calmar_252d,

    -- Annualised return (useful standalone column for gold layer)
    ROUND(avg_return_252d * 252, 6)     AS annualised_return,
    ROUND(stddev_return_252d * SQRT(252)::numeric, 6) AS annualised_volatility,
    max_drawdown_252d,
    window_rows

FROM risk_metrics
ORDER BY ticker, price_date