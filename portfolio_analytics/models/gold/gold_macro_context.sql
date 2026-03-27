{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_macro_context
    ------------------
    Enriches the portfolio time-series with macro regime context.
    Grain: one row per date (portfolio-level, not per-ticker).

    This is the model that powers the macro-overlay layer on the
    existing Superset time-series charts. For every date there is
    portfolio value and drawdown — this model adds:
        - Current macro regime label       (for background shading)
        - Yield curve slope                (for dual-axis overlay)
        - Recession flag                   (for shaded recession bands)
        - Fed stance + cycle phase         (for filter panel)
        - Real fed funds rate              (for rate environment context)
        - Regime signal strength           (for annotation intensity)

    Design note:
        This model does NOT replace gold_portfolio_timeseries.
        It sits alongside it and is joined in Superset on date.
        Keeping them separate means the existing dashboard charts
        are untouched — the macro context is an additive layer.

    Fix note:
        days_in_regime uses the "islands" trick — date minus a global
        row_number produces the same anchor date for all consecutive rows
        in the same regime. PostgreSQL does not allow window functions
        nested inside PARTITION BY, so rn is pre-computed in the joined
        CTE as a plain column, then consumed in the final CTE.

    Superset usage:
        - Use macro_regime as a dashboard filter dimension
        - Use is_recession to drive background color in time-series charts
        - Use yield_curve_slope as a second Y-axis on portfolio value chart
        - Use regime_changed to annotate regime transition points
*/

with

portfolio_timeseries as (

    select
        date,
        round(sum(close)::numeric,              2)      as portfolio_value,
        round(avg(daily_return)::numeric,        6)      as portfolio_daily_return,
        round(avg(cumulative_return)::numeric,   6)      as portfolio_cumulative_return,
        round(avg(drawdown)::numeric,            6)      as portfolio_drawdown,
        round(min(drawdown)::numeric,            6)      as worst_asset_drawdown

    from {{ ref('fct_macro_asset_performance') }}
    group by date

),

macro as (

    select * from {{ ref('fct_macro_regimes') }}

),

-- Pre-compute a global row number and all window expressions that are
-- safe to compute at this stage. days_in_regime cannot live here because
-- its PARTITION BY depends on rn — so rn is carried forward as a plain
-- column for the final CTE to consume.
joined as (

    select
        p.date,

        -- ── Portfolio performance ─────────────────────────────────────────────
        p.portfolio_value,
        p.portfolio_daily_return,
        p.portfolio_cumulative_return,
        p.portfolio_drawdown,
        p.worst_asset_drawdown,

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

        -- ── Regime transition columns ─────────────────────────────────────────
        case
            when m.macro_regime != lag(m.macro_regime) over (order by p.date)
            then true
            else false
        end                                                     as regime_changed,

        lag(m.macro_regime) over (
            order by p.date
        )                                                       as previous_regime,

        -- ── Running portfolio peak ────────────────────────────────────────────
        max(p.portfolio_value) over (
            order by p.date
            rows between unbounded preceding and current row
        )                                                       as portfolio_running_peak,

        -- ── Global row number — plain column, consumed by final CTE ──────────
        -- Must be computed here so final CTE can use it in PARTITION BY
        -- without nesting a window function inside another window function.
        row_number() over (order by p.date)                     as rn

    from portfolio_timeseries p
    left join macro           m on p.date = m.date
    where m.date is not null

),

-- days_in_regime lives in its own CTE because its PARTITION BY references
-- rn, which is only a plain column after the joined CTE resolves.
-- The islands trick: (date - rn days) produces the same anchor date for
-- all consecutive rows in the same regime. When the regime changes, rn
-- keeps incrementing but the anchor shifts, starting a new island.
final as (

    select
        date,
        portfolio_value,
        portfolio_daily_return,
        portfolio_cumulative_return,
        portfolio_drawdown,
        worst_asset_drawdown,
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
        portfolio_running_peak,

        -- ── Consecutive days in current regime (islands trick) ────────────────
        row_number() over (
            partition by
                macro_regime,
                (date::date - (rn || ' days')::interval)::date
            order by date
        )                                                       as days_in_regime

    from joined

)

select * from final
order by date