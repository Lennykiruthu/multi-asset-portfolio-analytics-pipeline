{{
    config(
        materialized='table',
        schema='silver'
    )
}}

/*
    fct_macro_regimes
    -----------------
    Classifies every trading date into a named macro regime using two
    independent dimensions:

        1. Fed stance   → tightening | easing | neutral
        2. Cycle phase  → expansion  | recession

    Combined label examples:
        'tightening_expansion'  — Fed hiking, economy still growing (e.g. 2022)
        'tightening_recession'  — Fed hiking into a downturn (rare, painful)
        'easing_expansion'      — Fed cutting pre-emptively or post-hike (e.g. 2019)
        'easing_recession'      — Fed cutting to fight recession (e.g. 2020)
        'neutral_expansion'     — Rates on hold, economy healthy (e.g. mid-2021)
        'neutral_recession'     — Rates on hold during downturn

    Fed stance classification logic:
        Step 1: compute dff_3m_avg (63-day rolling avg of fed_funds_rate).
        Step 2: in a SEPARATE CTE, LAG(dff_3m_avg, 63) to get the prior window.
        PostgreSQL does not allow window functions nested inside LAG() — the
        two operations must live in separate CTEs.

    This model is materialized AS a TABLE because the window functions are
    expensive to recompute on every query, and it is the central join target
    for fct_macro_asset_performance and gold_macro_context.
*/

WITH macro AS (
    SELECT * FROM {{ ref('stg_fred_macro') }}
),

-- ── Step 1: 3-month rolling average of fed funds rate ────────────────────────
-- Computed alone in its own CTE so that Step 2 can safely LAG() the result.
-- PostgreSQL forbids nesting a window function inside another window function.

with_rolling_avg AS (

    SELECT
        *,
        avg(fed_funds_rate) OVER (
            ORDER BY date
            ROWS BETWEEN 62 PRECEDING AND CURRENT ROW
        ) AS dff_3m_avg

    FROM macro

),

-- ── Step 2: lag the rolling average by 63 days ───────────────────────────────
-- Now that dff_3m_avg is a plain column (not a window expression),
-- LAG() can reference it safely.

with_lagged_avg AS (

    SELECT
        *,
        lag(dff_3m_avg, 63) OVER (
            ORDER BY date
        ) AS dff_3m_avg_prior

    FROM with_rolling_avg

),

-- ── Step 3: classify Fed stance FROM rolling avg direction ───────────────────

with_stance AS (

    SELECT
        *,

        CASE
            WHEN dff_3m_avg_prior is null
                THEN 'neutral'                      -- insufficient history
            WHEN (dff_3m_avg - dff_3m_avg_prior) >  0.10
                THEN 'tightening'
            WHEN (dff_3m_avg - dff_3m_avg_prior) < -0.10
                THEN 'easing'
            ELSE
                'neutral'
        END                                                     AS fed_stance,

        round(
            (dff_3m_avg - coalesce(dff_3m_avg_prior, dff_3m_avg))::numeric, 4
        )                                                       AS dff_3m_change

    FROM with_lagged_avg

),

-- ── Step 4: derive cycle phase and inversion flag ────────────────────────────

with_phase AS (

    SELECT
        *,

        CASE
            WHEN is_recession THEN 'recession'
            ELSE 'expansion'
        END                                                     AS cycle_phase,

        CASE
            WHEN yield_curve_slope < 0 THEN true
            ELSE false
        END                                                     AS is_inverted,

        CASE
            WHEN yield_curve_slope < 0
                THEN abs(yield_curve_slope)
            ELSE 0
        END                                                     AS inversion_depth

    FROM with_stance

),

-- ── Step 5: assemble final regime label ──────────────────────────────────────

final AS (

    SELECT
        date,

        -- ── Raw macro series ─────────────────────────────────────────────────
        fed_funds_rate,
        treasury_10y_yield,
        cpi,
        unemployment_rate,
        breakeven_inflation,

        -- ── Derived metrics FROM staging ─────────────────────────────────────
        yield_curve_slope,
        real_fed_funds_rate,
        real_10y_yield,
        cpi_mom_change,

        -- ── Regime dimensions ────────────────────────────────────────────────
        fed_stance,
        cycle_phase,
        is_recession,
        is_inverted,
        inversion_depth,
        dff_3m_avg,
        dff_3m_change,

        -- ── Combined regime label ─────────────────────────────────────────────
        fed_stance || '_' || cycle_phase                        AS macro_regime,

        -- ── Regime signal strength score (0–3) ───────────────────────────────
        (
            CASE WHEN fed_stance != 'neutral'   THEN 1 ELSE 0 END
          + CASE WHEN is_inverted               THEN 1 ELSE 0 END
          + CASE WHEN real_fed_funds_rate > 2.0 THEN 1 ELSE 0 END
        )                                                       AS regime_signal_strength

    FROM with_phase

)

SELECT * FROM final