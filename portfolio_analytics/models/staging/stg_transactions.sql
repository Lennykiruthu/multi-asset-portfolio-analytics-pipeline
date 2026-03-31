{{
    config(
        materialized='view'
    )
}}

WITH source AS (
    SELECT * FROM {{ source('bronze', 'transactions') }}
),

casted_fields AS (
    SELECT
        -- Primary key
        transaction_id::integer                         AS transaction_id,

        -- Asset identifiers — normalise ticker to uppercase to match
        -- bronze.raw_prices (yfinance always returns uppercase)
        UPPER(TRIM(ticker))                             AS ticker,
        TRIM(asset_name)                                AS asset_name,
        TRIM(asset_type)                                AS asset_type,
        TRIM(sector)                                    AS sector,

        -- Signed quantity: positive = BUY, negative = SELL
        -- Cast to numeric(18,8) to support crypto fractional units
        quantity::numeric(18, 8)                        AS quantity,

        -- Derived direction — used by downstream models for readable filtering
        CASE
            WHEN quantity > 0 THEN 'BUY'
            WHEN quantity < 0 THEN 'SELL'
        END                                             AS transaction_type,

        -- Absolute quantity — useful for downstream aggregations so callers
        -- don't have to remember the sign convention
        ABS(quantity::numeric(18, 8))                   AS abs_quantity,

        -- Price paid per unit at time of transaction
        purchase_price::numeric(18, 4)                  AS purchase_price,

        -- Gross transaction value (always positive regardless of BUY/SELL)
        ROUND(
            ABS(quantity::numeric(18, 8)) * purchase_price::numeric(18, 4),
            2
        )                                               AS transaction_value,

        -- Transaction date
        purchase_date::date                             AS transaction_date,

        -- Metadata
        ingested_at::timestamp                          AS ingested_at

    FROM source

    -- Hard filter: quantity must be non-zero — a zero-quantity row is a
    -- data entry error and would corrupt position calculations downstream
    WHERE quantity IS NOT NULL
      AND quantity != 0
      AND purchase_price IS NOT NULL
      AND purchase_price > 0
      AND purchase_date  IS NOT NULL
)

SELECT
    transaction_id,
    ticker,
    asset_name,
    asset_type,
    sector,
    transaction_type,
    quantity,
    abs_quantity,
    purchase_price,
    transaction_value,
    transaction_date,
    ingested_at

FROM casted_fields
ORDER BY ticker, transaction_date, transaction_id