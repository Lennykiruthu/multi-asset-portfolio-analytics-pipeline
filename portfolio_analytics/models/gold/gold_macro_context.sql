{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_macro_context
    ------------------
    Grain: one row per (date, ticker).

    Previously grain was (date) only — portfolio had already been aggregated
    in gold_portfolio_timeseries before this model joined macro data onto it.

    Now gold_portfolio_timeseries exposes (price_date, ticker) grain, so
    this model inherits that grain and replicates macro columns across every
    ticker for each date. This lets Superset cross-filter by ticker, macro
    regime, fed_stance, cycle_phase etc. simultaneously.

    Portfolio-level aggregation (SUM of ticker_market_value, blended return,
    blended drawdown) is left to Superset metrics / chart-level aggregation.

    The islands trick for days_in_regime is unchanged — it still operates on
    the date dimension, not the ticker dimension, so regime streak counting
    is correct.
*/

WITH portfolio AS (

    SELECT
        price_date                  AS date,
        ticker,
        close,
        net_shares,
        ticker_market_value,
        ticker_daily_return,
        ticker_running_peak,
        ticker_drawdown
    FROM {{ ref('gold_portfolio_timeseries') }}

),

macro AS (

    SELECT * FROM {{ ref('fct_macro_regimes') }}

),

joined AS (

    SELECT
        -- ── Dimensions ────────────────────────────────────────────────────────
        p.date,
        p.ticker,

        -- ── Ticker-level performance ──────────────────────────────────────────
        p.close,
        p.net_shares,
        p.ticker_market_value,
        p.ticker_daily_return,
        p.ticker_running_peak,
        p.ticker_drawdown,

        -- ── Macro regime dimensions ───────────────────────────────────────────
        m.macro_regime,
        m.fed_stance,
        m.cycle_phase,
        m.is_recession,
        m.is_inverted,
        m.regime_signal_strength,

        -- ── Key macro indicators ──────────────────────────────────────────────
        m.yield_curve_slope,
        m.real_fed_funds_rate,
        m.real_10y_yield,
        m.fed_funds_rate,
        m.treasury_10y_yield,
        m.breakeven_inflation,
        m.cpi,
        m.cpi_mom_change,
        m.inversion_depth,
        m.dff_3m_change,

        -- ── Regime transition flags ───────────────────────────────────────────
        -- Partition by ticker so each ticker's regime-change flag is independent
        -- of other tickers on the same date (macro is the same, but the flag
        -- compares against the previous row in this ticker's own sequence).
        CASE
            WHEN m.macro_regime != LAG(m.macro_regime) OVER (
                PARTITION BY p.ticker ORDER BY p.date
            )
            THEN true
            ELSE false
        END                                                     AS regime_changed,

        LAG(m.macro_regime) OVER (
            PARTITION BY p.ticker ORDER BY p.date
        )                                                       AS previous_regime,

        -- ── Global row number per ticker — used by islands trick below ─────────
        ROW_NUMBER() OVER (
            PARTITION BY p.ticker ORDER BY p.date
        )                                                       AS rn

    FROM portfolio p
    INNER JOIN macro m ON p.date = m.date

),

final AS (

    SELECT
        date,
        ticker,
        close,
        net_shares,
        ticker_market_value,
        ticker_daily_return,
        ticker_running_peak,
        ticker_drawdown,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession,
        is_inverted,
        regime_signal_strength,
        yield_curve_slope,
        real_fed_funds_rate,
        real_10y_yield,
        fed_funds_rate,
        treasury_10y_yield,
        breakeven_inflation,
        cpi,
        cpi_mom_change,
        inversion_depth,
        dff_3m_change,
        regime_changed,
        previous_regime,

        -- ── Consecutive days in current regime per ticker (islands trick) ─────
        -- Partitioned by (ticker, macro_regime, anchor) so the streak resets
        -- independently per ticker when the regime changes.
        ROW_NUMBER() OVER (
            PARTITION BY
                ticker,
                macro_regime,
                (date::date - (rn || ' days')::interval)::date
            ORDER BY date
        )                                                       AS days_in_regime

    FROM joined

)

SELECT * FROM final
ORDER BY date, ticker