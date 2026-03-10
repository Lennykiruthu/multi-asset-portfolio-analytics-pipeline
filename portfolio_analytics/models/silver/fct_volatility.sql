{{
    config(
        materialized='table'
    )
}}

WITH returns AS (
    -- Pull daily_returns and log_returns already computed in fct_daily_returns
    SELECT
        price_date,
        ticker,
        close,
        daily_return,
        log_return
    FROM {{ ref("fct_daily_returns") }}
    WHERE daily_return IS NOT NULL
),

volatility AS (
    SELECT
        price_date,
        ticker,
        close,
        daily_return,
        log_return,

        -- Annualised Rolling Volatitlity
        -- Monthly (21 trading days) : stddev of daily_returns * sqrt(252)
        ROUND( STDDEV_SAMP(daily_return) OVER(
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 20 PRECEDING AND CURRENT ROW
            ) * 252,
            6
        ) AS vol_21d,

        -- Quarterly (63 trading days): stddev of daily_return * sqrt(252)
        ROUND( STDDEV_SAMP(daily_return) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 62 PRECEDING AND CURRENT ROW
            ) * 252,
            6
        ) AS vol_63d
    FROM returns
)

SELECT
    price_date,
    ticker,
    close,
    daily_return,
    vol_21d,
    vol_63d

FROM volatility
ORDER BY ticker, price_date