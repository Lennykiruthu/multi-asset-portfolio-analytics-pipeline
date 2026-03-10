{{
    config(
        materialized='table'
    )
}}

WITH seed AS (
    SELECT * FROM {{ ref("dim_assets_seed")}}
),

-- Get the first available close price per ticker (= purchase price)
first_prices AS (
    SELECT DISTINCT ON (ticker)
        ticker,
        price_date AS purchase_date,
        close      AS purchase_price
    FROM {{ ref("fct_daily_returns") }}
    WHERE close IS NOT NULL
    ORDER BY ticker, price_date ASC
),

-- Get the latest avaialble close price per ticker (= current price)
latest_price AS (
    SELECT DISTINCT ON (ticker)
        ticker,
        price_date AS latest_date,
        close      AS latest_price
    FROM {{ ref("fct_daily_returns") }}
    WHERE close IS NOT NULL
    ORDER BY ticker, price_date DESC
),

joined AS (
    SELECT
        s.ticker,
        s.asset_name,
        s.asset_type,
        s.sector,
        s.shares_held,

        -- Use override price if provided in seed, else use first market close
        COALESCE(
            s.purchase_price_override::numeric,
            f.purchase_price
        ) AS purchase_price,

        f.purchase_date,

        -- Initial investment = shares * purchase price
        ROUND(
            s.shares_held::numeric *
            COALESCE(s.purchase_price_override::numeric, f.purchase_price),
            2
        ) AS initial_investment,

        l.latest_price,
        l.latest_date,

        -- Current value = shares * latest_price
        ROUND(s.shares_held::numeric * l.latest_price, 2) AS current_value
    FROM seed s 
    LEFT JOIN first_prices f ON s.ticker = f.ticker
    LEFT JOIN latest_price l ON s.ticker = l.ticker
),

with_returns AS (
    SELECT
        *,

        -- Total return $
        ROUND(current_value - initial_investment, 2) AS total_return_dollar,

        -- Total return %
        ROUND(
            (current_value - initial_investment)
            / NULLIF(initial_investment, 0) * 100,
            2  
        )                                             AS total_return_pct

        FROM joined
),

with_weights AS (
    SELECT
        *,

        -- Portfolio weight % based on initial investment
        ROUND(
            initial_investment 
            / NULLIF(SUM(initial_investment) OVER (), 0) * 100,
            2
        ) AS weight_pct,

        ROund(
            initial_investment
            / NULLIF(SUM(initial_investment) OVER (), 0),
            4
        ) AS weight_decimal
        
    FROM with_returns
)

SELECT
    ticker,
    asset_name,
    asset_type,
    sector,
    shares_held,
    purchase_date,
    purchase_price,
    initial_investment,
    latest_date,
    latest_price,
    current_value,
    total_return_dollar,
    total_return_pct,
    weight_pct,
    weight_decimal

FROM with_weights
ORDER BY weight_pct DESC

