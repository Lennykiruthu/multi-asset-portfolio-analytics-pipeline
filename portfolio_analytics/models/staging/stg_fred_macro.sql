{{
    config(
        materialized='view'
    )
}}

/*
    stg_fred_macro
    --------------
    Pivots bronze.raw_fred from long format (one row per series per date)
    into wide format (one row per date, one column per series).
 
    Source series ingested:
        DFF       → fed_funds_rate
        GS10      → treasury_10y_yield
        CPIAUCSL  → cpi
        UNRATE    → unemployment_rate
        USREC     → recession_indicator
        T10YIE    → breakeven_inflation
 
    Derived metrics computed here so downstream models don't re-derive them:
        yield_curve_slope      = treasury_10y_yield - fed_funds_rate
        real_fed_funds_rate    = fed_funds_rate - breakeven_inflation
        real_10y_yield         = treasury_10y_yield - breakeven_inflation
        cpi_mom_change         = cpi - LAG(cpi, 1) over the date window
*/

WITH source AS (
    SELECT
        date::date as date,
        series_alias,
        value
    FROM 
        {{ source('bronze', 'raw_fred') }}
    WHERE
        value IS NOT NULL 
),

pivoted AS (
    SELECT
        date,

        -- Raw series columns
        MAX(CASE WHEN series_alias = 'fed_funds_rate'      THEN value END) AS fed_funds_rate, 
        MAX(CASE WHEN series_alias = 'treasury_10y_yield'  THEN value END) AS treasury_10y_yield, 
        MAX(CASE WHEN series_alias = 'cpi'                 THEN value END) AS cpi, 
        MAX(CASE WHEN series_alias = 'unemployment_rate'   THEN value END) AS unemployment_rate, 
        MAX(CASE WHEN series_alias = 'recession_indicator' THEN value END) AS recession_indicator, 
        MAX(CASE WHEN series_alias = 'breakeven_inflation' THEN value END) AS breakeven_inflation
    FROM source
    GROUP BY date                                                           
),

cpi_mom_change AS (
    SELECT
        date,
        cpi,
        ROUND(
            (cpi - LAG(cpi) OVER (
                ORDER BY date
            ))::numeric, 4
        ) AS cpi_mom_change
    FROM pivoted
    WHERE cpi IS NOT NULL
),

with_derived AS (
    SELECT
        p.date,

        -- Raw series
        p.fed_funds_rate,
        p.treasury_10y_yield,
        p.cpi,
        p.unemployment_rate,
        p.recession_indicator,
        p.breakeven_inflation,

        -- Derived metrics
        -- Yield curve slope: negative = inversion, historically precedes recession
        ROUND(
            (p.treasury_10y_yield - p.fed_funds_rate)::numeric, 4
        )                                                                  AS yield_curve_slope,

        -- Real fed funds rate: how restrictive monetary policy actually is
        -- after accounting for inflation expectations
        ROUND(
            (p.fed_funds_rate - p.breakeven_inflation)::numeric, 4
        )                                                                   AS real_fed_funds_rate,

        -- Real 10Y yield: direct competitor to equity earnings yield
        ROUND(
            (p.treasury_10y_yield - p.breakeven_inflation)::numeric, 4
        )                                                                    AS real_10y_yield,

        -- MoM CPI change: rate of change matters more than the level
        c.cpi_mom_change,

        -- Boolean convenience flag for joining / filtering
        CASE
            WHEN p.recession_indicator = 1 THEN true ElSE false
        END                                                                    AS is_recession
    
    FROM pivoted p
    LEFT JOIN cpi_mom_change c ON p.date = c.date
)

SELECT * FROM with_derived


