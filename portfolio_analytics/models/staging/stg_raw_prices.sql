{{
    config(
        materialized='view'
    )
}}

WITH source AS (
    SELECT * FROM {{ source('bronze', 'raw_prices') }}
),

staged AS (
    SELECT 
        date::date              AS price_date,
        ticker,
        round(open::numeric, 4)  AS open,
        round(high::numeric, 4)  AS high,
        round(low::numeric, 4)   AS low,                
        round(close::numeric, 4) AS close,       
        volume::bigint           AS volume,
        ingested_at 
    FROM source
)

SELECT  * FROM staged