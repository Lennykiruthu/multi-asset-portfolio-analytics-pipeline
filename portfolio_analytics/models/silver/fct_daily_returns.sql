{{
    config(
        materialized='table'
    )
}}

WITH source AS (
    SELECT * FROM {{ ref("stg_raw_prices") }}
),

-- Lag close to compute returns
with_lag AS (
    SELECT
        price_date,
        ticker,
        open,
        high,
        low,
        close,
        volume,
        ingested_at,

        LAG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
        ) AS prev_close

    FROM source
),

-- Daily & Log returns
with_returns AS (
    SELECT
        *,

        -- Daily return: (close - prev_close) / prev_close
        CASE
            WHEN prev_close IS NOT NULL AND prev_close !=0
            THEN ROUND((close - prev_close) / prev_close, 6)
        END AS daily_return,

        -- Log return: ln(close / prev_close)
        CASE
            WHEN prev_close IS NOT NULL AND prev_close > 0 AND close > 0
            THEN ROUND(LN(close / prev_close), 6)
        END AS log_return
    
    FROM with_lag
),

-- Cumulative return & moving averages
with_features AS (
    SELECT
        price_date,
        ticker,
        open,
        high,
        low,
        close,
        volume,
        ingested_at,
        prev_close,
        daily_return,
        log_return,

        -- Cumulative return from first available date per ticket
        ROUND(
            EXP(SUM(log_return) OVER(
                PARTITION BY ticker
                ORDER BY price_date
                ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
            )) - 1,
            6
        ) AS cumulative_return,

        -- Moving averages on close prices
        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
            ), 4) AS ma_7,

        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 20 PRECEDING AND CURRENT ROW
        ), 4) AS ma_21,

        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
        ), 4) AS ma_50,

        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 199 PRECEDING AND CURRENT ROW
        ), 4) AS ma_200,

        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 11 PRECEDING AND CURRENT ROW
            ), 4) AS ema_12_approx,

        ROUND(AVG(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN 25 PRECEDING AND CURRENT ROW
            ), 4) AS ema_26_approx,        

        -- Rolling max close (for drawdown calculation)
        MAX(close) OVER (
            PARTITION BY ticker ORDER BY price_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS running_max_close

    FROM with_returns                
),

-- Drawdown
with_drawdown AS (
    SELECT
        *,

        -- Drawdown: how far current close is from the running peak
        ROUND(
            (close - running_max_close) / running_max_close,
            6
        ) AS drawdown,

        -- Max drawdown: worst drawdown seen up to this point per ticker
        ROUND(
            MIN((close - running_max_close) / running_max_close) OVER (
                PARTITION BY ticker
                ORDER BY price_date
            ),
            6
        ) AS max_drawdown_to_date

    FROM with_features
)

SELECT
    price_date,
    ticker,
    open,
    high,
    low,
    close,
    volume,
    prev_close,
    daily_return,
    log_return,
    cumulative_return,
    ma_7,
    ma_21,
    ma_50,
    ma_200,
    ema_12_approx,
    ema_26_approx,
    running_max_close,
    drawdown,
    max_drawdown_to_date,
    ingested_at

FROM with_drawdown
ORDER BY ticker, price_date