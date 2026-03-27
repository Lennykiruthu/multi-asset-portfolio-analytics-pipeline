{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_regime_performance
    ------------------------
    Aggregates fct_macro_asset_performance by ticker + macro_regime.
    Grain: one row per ticker per macro_regime label.
 
    This is the primary model powering:
        1. The regime performance heatmap (avg_daily_return × ticker × regime)
        2. The risk-adjusted comparison table (sharpe_in_regime per asset)
        3. The win-rate bar chart (pct_positive_days per asset per regime)
 
    Why win rate alongside average return?
        Averages in daily return data are easily distorted by a single
        crash day or a single gap-up. Win rate (% of days with positive
        return) is a more robust signal — an asset with a 55% win rate
        in a given regime is consistently behaving differently FROM one
        with a 45% win rate even if their averages look similar.
 
    Sharpe calculation:
        Uses the annualised excess return over a 0% hurdle (risk-free
        rate is already embedded in the macro context; this keeps the
        metric self-contained and comparable across regimes).
        Annualisation factor: sqrt(252) for daily data.
        A NULL Sharpe is returned WHEN stddev = 0 (flat price, rare).
 
    Sample size column (trading_days_in_regime):
        ALWAYS check this before interpreting any metric.
        A regime with < 20 observations is statistically unreliable.
        The model flags these with insufficient_sample = true so
        Superset can grey them out or add a warning indicator.
 
    Regime duration columns:
        Pulled FROM gold_macro_context to give the aggregated view
        a sense of how long this regime actually lasted — avg and
        total calendar days, not just trading day counts.
*/

WITH daily AS (
 
    SELECT * FROM {{ ref('fct_macro_asset_performance') }}
    WHERE daily_return IS NOT NULL
 
),
 
-- Regime date ranges: first and last date each regime was active.
-- Used to compute regime duration in calendar days.
regime_calendar AS (
 
    SELECT
        macro_regime,
        MIN(date)                                               AS regime_first_date,
        MAX(date)                                               AS regime_last_date,
        COUNT(distinct date)                                    AS regime_total_trading_days,
 
        -- Calendar duration: how many total days did this regime span?
        (MAX(date) - MIN(date))                                 AS regime_calendar_days
 
    FROM daily
    GROUP BY macro_regime
),

-- Core aggregation: ticker × regime
aggregated AS (
 
    SELECT
        -- ── Grain ────────────────────────────────────────────────────────────
        ticker,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession,
 
        -- ── Sample size ───────────────────────────────────────────────────────
        count(*)                                                as trading_days_in_regime,
 
        -- ── Return metrics ────────────────────────────────────────────────────
        ROUND(AVG(daily_return)::numeric,          6)          as avg_daily_return,
        ROUND(AVG(log_return)::numeric,            6)          as avg_log_return,
 
        -- Annualised return: compound daily AVG × 252 trading days
        ROUND(
            (power(1 + AVG(daily_return), 252) - 1)::numeric, 6
        )                                                       as annualised_return,
 
        -- Median return: more robust than mean for skewed distributions
        ROUND(percentile_cont(0.5)
            within group (ORDER BY daily_return)::numeric,     6)  as median_daily_return,
 
        -- ── Win rate ──────────────────────────────────────────────────────────
        ROUND(
            (sum(CASE WHEN daily_return > 0 THEN 1 ELSE 0 END)::numeric
             / nullif(count(*), 0)),
            4
        )                                                       as pct_positive_days,
 
        -- Loss rate (explicit, saves Superset computing 1 - win_rate)
        ROUND(
            (sum(CASE WHEN daily_return < 0 THEN 1 ELSE 0 END)::numeric
             / nullif(count(*), 0)),
            4
        )                                                       as pct_negative_days,
 
        -- ── Risk metrics ──────────────────────────────────────────────────────
        -- Daily volatility
        ROUND(stddev(daily_return)::numeric,       6)          as daily_volatility,
 
        -- Annualised volatility: daily stddev × sqrt(252)
        ROUND(
            (stddev(daily_return) * sqrt(252))::numeric,       6
        )                                                       as annualised_volatility,
 
        -- ── Sharpe ratio (annualised, 0% hurdle rate) ─────────────────────────
        -- NULL WHEN stddev = 0 to avoid division by zero
        ROUND(
            CASE
                WHEN stddev(daily_return) = 0 or stddev(daily_return) is null
                    THEN null
                ELSE
                    (AVG(daily_return) / stddev(daily_return)) * sqrt(252)
            END::numeric,
            4
        )                                                       as sharpe_in_regime,
 
        -- ── Drawdown metrics ──────────────────────────────────────────────────
        ROUND(AVG(drawdown)::numeric,              6)          as avg_drawdown_in_regime,
        ROUND(min(drawdown)::numeric,              6)          as worst_drawdown_in_regime,
 
        -- ── Tail metrics ──────────────────────────────────────────────────────
        ROUND(MAX(daily_return)::numeric,          6)          as best_single_day,
        ROUND(MIN(daily_return)::numeric,          6)          as worst_single_day,
 
        -- 95th percentile return (upside tail)
        ROUND(percentile_cont(0.95)
            within group (ORDER BY daily_return)::numeric,     6)  as p95_return,
 
        -- 5th percentile return (downside tail / VaR proxy)
        ROUND(percentile_cont(0.05)
            within group (ORDER BY daily_return)::numeric,     6)  as p05_return,
 
        -- ── Relative performance ───────────────────────────────────────────────
        -- Average of return_vs_portfolio: was this asset a consistent
        -- outperformer or underperformer within its regime?
        ROUND(AVG(return_vs_portfolio)::numeric,   6)          as avg_return_vs_portfolio,
 
        -- ── Regime signal context ─────────────────────────────────────────────
        ROUND(AVG(regime_signal_strength)::numeric, 2)         as avg_signal_strength,
 
        -- ── Date range of observations ────────────────────────────────────────
        MIN(date)                                               as first_date_in_regime,
        MAX(date)                                               as last_date_in_regime
 
    FROM daily
    GROUP BY
        ticker,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession
 
),
 
-- Join regime calendar metadata and add the insufficient_sample flag
final as (
 
    SELECT
        a.*,
 
        -- Regime-level calendar context
        rc.regime_first_date,
        rc.regime_last_date,
        rc.regime_total_trading_days,
        rc.regime_calendar_days,
 
        -- ── Insufficient sample flag ──────────────────────────────────────────
        -- < 20 trading days = unreliable statistics.
        -- Superset should visually distinguish these cells
        -- (e.g. grey out, add asterisk, or exclude FROM averages).
        CASE
            WHEN a.trading_days_in_regime < 20 THEN true
            ELSE false
        END                                                     as insufficient_sample,
 
        -- ── Heatmap-ready return tier ─────────────────────────────────────────
        -- Bucketed label for colour-coding the regime × asset heatmap.
        -- Avoids Superset needing to compute bins FROM raw numbers.
        CASE
            WHEN a.avg_daily_return >=  0.002  THEN 'strong_positive'   -- > +0.2% /day
            WHEN a.avg_daily_return >=  0.0005 THEN 'mild_positive'     -- +0.05–0.2%
            WHEN a.avg_daily_return >= -0.0005 THEN 'flat'              -- ±0.05%
            WHEN a.avg_daily_return >= -0.002  THEN 'mild_negative'     -- -0.05–-0.2%
            ELSE                                    'strong_negative'   -- < -0.2% /day
        END                                                     as return_tier
 
    FROM aggregated     a
    LEFT JOIN regime_calendar rc on a.macro_regime = rc.macro_regime
 
)
 
SELECT * FROM final
ORDER BY ticker, macro_regime