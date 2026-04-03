{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_macro_context
    ------------------
    Enriches the real portfolio time-series with macro regime context.
    Grain: one row per date (portfolio-level, not per-ticker).

    Sources:
        - gold_portfolio_timeseries  → the actual portfolio: real position
          sizes, real entry/exit dates, forward-filled market values from
          int_daily_holdings. This is the single source of truth for
          portfolio value and drawdown.
        - fct_macro_regimes          → regime classification per calendar date.

    Previously this model sourced from fct_macro_asset_performance, which
    built a naïve equal-weighted average across all tickers in fct_daily_returns
    regardless of whether those positions were actually held. That produced a
    synthetic portfolio disconnected from real transaction history.

    Design:
        gold_portfolio_timeseries is already at portfolio-day grain with
        portfolio_value, portfolio_daily_return, running_peak, and
        portfolio_drawdown pre-computed. No aggregation is needed here —
        this model is a pure enrichment join.

        days_in_regime uses the islands trick: (date - global_rn days)
        produces the same anchor date for all consecutive rows sharing the
        same regime. When the regime changes, rn keeps incrementing but
        the anchor shifts, opening a new island. PostgreSQL does not allow
        window functions nested inside PARTITION BY, so rn is pre-computed
        as a plain column in the joined CTE and consumed in the final CTE.
*/

WITH portfolio AS (

    SELECT
        price_date                  AS date,
        portfolio_value,
        portfolio_daily_return,
        running_peak,
        portfolio_drawdown
    FROM {{ ref('gold_portfolio_timeseries') }}

),

macro AS (

    SELECT * FROM {{ ref('fct_macro_regimes') }}

),

joined AS (

    SELECT
        -- ── Date ─────────────────────────────────────────────────────────────
        p.date,

        -- ── Real portfolio performance ────────────────────────────────────────
        p.portfolio_value,
        p.portfolio_daily_return,
        p.running_peak,
        p.portfolio_drawdown,

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
        CASE
            WHEN m.macro_regime != LAG(m.macro_regime) OVER (ORDER BY p.date)
            THEN true
            ELSE false
        END                                                     AS regime_changed,

        LAG(m.macro_regime) OVER (
            ORDER BY p.date
        )                                                       AS previous_regime,

        -- ── Global row number — consumed by final CTE for islands trick ───────
        ROW_NUMBER() OVER (ORDER BY p.date)                     AS rn

    FROM portfolio p
    INNER JOIN macro m ON p.date = m.date
    -- INNER JOIN because a portfolio date with no macro reading is not
    -- useful for regime analysis. These are rare FRED gaps on trading days.

),

final AS (

    SELECT
        date,
        portfolio_value,
        portfolio_daily_return,
        running_peak,
        portfolio_drawdown,
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

        -- ── Consecutive days in current regime (islands trick) ────────────────
        -- (date - rn days) is constant for all consecutive rows in the same
        -- regime. A regime change shifts the anchor, restarting the count.
        ROW_NUMBER() OVER (
            PARTITION BY
                macro_regime,
                (date::date - (rn || ' days')::interval)::date
            ORDER BY date
        )                                                       AS days_in_regime

    FROM joined

)

SELECT * FROM final
ORDER BY date