{{
    config(
        materialized='table',
        schema='gold'
    )
}}

/*
    gold_regime_performance
    ------------------------
    Aggregates per-ticker daily returns by macro regime, gated to only the
    dates each position was actually held.

    Grain: one row per ticker per macro_regime.

    Sources:
        - fct_daily_returns   → per-ticker OHLCV, returns, drawdown, MAs
        - fct_macro_regimes   → regime classification per calendar date
        - int_daily_holdings  → shares held per ticker per date

    Why int_daily_holdings is the gate:
        fct_daily_returns contains the full price history for every ticker
        regardless of whether it was ever held. Without the holdings gate,
        regime metrics would be computed across the entire listed history of
        each asset — including years before or after you owned it. A ticker
        held for four months in a tightening regime would have its Sharpe and
        win rate diluted by years of unrelated tightening periods elsewhere
        in history. int_daily_holdings filters to shares_held > 0, so every
        aggregated metric reflects only the days the position was live.

    Metrics:
        - avg/median daily return, annualised return
        - win rate (pct_positive_days) and loss rate
        - daily and annualised volatility
        - Sharpe ratio (annualised, 0% hurdle)
        - avg and worst drawdown during the regime
        - best/worst single day, p95/p05 tail returns
        - avg return vs equal-weighted portfolio mean on same dates

    Sample size:
        Always check trading_days_in_regime before interpreting any metric.
        insufficient_sample = true flags regimes with < 20 observations.
        These should be visually distinguished in Superset (greyed out or
        asterisked) as their statistics are not reliable.
*/

WITH prices AS (

    SELECT
        price_date          AS date,
        ticker,
        daily_return,
        log_return,
        drawdown,
        ma_50,
        ma_200,
        close
    FROM {{ ref('fct_daily_returns') }}
    WHERE daily_return IS NOT NULL

),

macro AS (

    SELECT
        date,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession,
        regime_signal_strength
    FROM {{ ref('fct_macro_regimes') }}

),

-- Gate: only dates where this ticker was actually held
holdings AS (

    SELECT
        price_date          AS date,
        ticker
    FROM {{ ref('int_daily_holdings') }}
    WHERE shares_held > 0

),

-- Join the three sources together.
-- The holdings join is what restricts each ticker to its live position dates.
-- Rows that exist in fct_daily_returns but not in int_daily_holdings for a
-- given (ticker, date) are silently excluded by the INNER JOIN.
gated AS (

    SELECT
        p.date,
        p.ticker,
        p.daily_return,
        p.log_return,
        p.drawdown,
        p.close,
        p.ma_50,
        p.ma_200,
        m.macro_regime,
        m.fed_stance,
        m.cycle_phase,
        m.is_recession,
        m.regime_signal_strength
    FROM prices         p
    INNER JOIN holdings h ON  p.date   = h.date
                          AND p.ticker = h.ticker
    INNER JOIN macro    m ON  p.date   = m.date
    -- A trading day with no macro reading is not useful for regime analysis.
    -- INNER JOIN here drops those rare FRED gap dates consistently.

),

-- Equal-weighted portfolio return per date across held positions only.
-- Used to compute return_vs_portfolio: how did this ticker perform relative
-- to the live portfolio mean on the same date?
portfolio_daily AS (

    SELECT
        date,
        ROUND(AVG(daily_return)::numeric, 6)    AS portfolio_avg_return
    FROM gated
    GROUP BY date

),

-- Attach portfolio_avg_return to every row before regime aggregation
with_relative AS (

    SELECT
        g.*,
        ROUND(
            (g.daily_return - pd.portfolio_avg_return)::numeric, 6
        )                                                       AS return_vs_portfolio
    FROM gated          g
    INNER JOIN portfolio_daily pd ON g.date = pd.date

),

-- Regime date ranges for calendar duration metadata
regime_calendar AS (

    SELECT
        macro_regime,
        MIN(date)                               AS regime_first_date,
        MAX(date)                               AS regime_last_date,
        COUNT(DISTINCT date)                    AS regime_total_trading_days,
        (MAX(date) - MIN(date))                 AS regime_calendar_days
    FROM gated
    GROUP BY macro_regime

),

-- Core aggregation: ticker × regime
aggregated AS (

    SELECT
        -- ── Grain ─────────────────────────────────────────────────────────────
        ticker,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession,

        -- ── Sample size ───────────────────────────────────────────────────────
        COUNT(*)                                                AS trading_days_in_regime,

        -- ── Return metrics ────────────────────────────────────────────────────
        ROUND(AVG(daily_return)::numeric,           6)         AS avg_daily_return,
        ROUND(AVG(log_return)::numeric,             6)         AS avg_log_return,

        ROUND(
            (POWER(1 + AVG(daily_return), 252) - 1)::numeric, 6
        )                                                       AS annualised_return,

        ROUND(
            PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY daily_return)::numeric, 6
        )                                                       AS median_daily_return,

        -- ── Win / loss rate ───────────────────────────────────────────────────
        ROUND(
            SUM(CASE WHEN daily_return > 0 THEN 1 ELSE 0 END)::numeric
            / NULLIF(COUNT(*), 0),
            4
        )                                                       AS pct_positive_days,

        ROUND(
            SUM(CASE WHEN daily_return < 0 THEN 1 ELSE 0 END)::numeric
            / NULLIF(COUNT(*), 0),
            4
        )                                                       AS pct_negative_days,

        -- ── Risk metrics ──────────────────────────────────────────────────────
        ROUND(STDDEV(daily_return)::numeric,        6)         AS daily_volatility,

        ROUND(
            (STDDEV(daily_return) * SQRT(252))::numeric,       6
        )                                                       AS annualised_volatility,

        -- ── Sharpe ratio (annualised, 0% hurdle) ──────────────────────────────
        ROUND(
            CASE
                WHEN STDDEV(daily_return) = 0
                  OR STDDEV(daily_return) IS NULL THEN NULL
                ELSE
                    (AVG(daily_return) / STDDEV(daily_return)) * SQRT(252)
            END::numeric,
            4
        )                                                       AS sharpe_in_regime,

        -- ── Drawdown metrics ──────────────────────────────────────────────────
        ROUND(AVG(drawdown)::numeric,               6)         AS avg_drawdown_in_regime,
        ROUND(MIN(drawdown)::numeric,               6)         AS worst_drawdown_in_regime,

        -- ── Tail metrics ──────────────────────────────────────────────────────
        ROUND(MAX(daily_return)::numeric,           6)         AS best_single_day,
        ROUND(MIN(daily_return)::numeric,           6)         AS worst_single_day,

        ROUND(
            PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY daily_return)::numeric, 6
        )                                                       AS p95_return,

        ROUND(
            PERCENTILE_CONT(0.05) WITHIN GROUP (ORDER BY daily_return)::numeric, 6
        )                                                       AS p05_return,

        -- ── Relative performance ──────────────────────────────────────────────
        ROUND(AVG(return_vs_portfolio)::numeric,    6)         AS avg_return_vs_portfolio,

        -- ── Regime signal context ─────────────────────────────────────────────
        ROUND(AVG(regime_signal_strength)::numeric, 2)         AS avg_signal_strength,

        -- ── Observation window ────────────────────────────────────────────────
        MIN(date)                                               AS first_date_in_regime,
        MAX(date)                                               AS last_date_in_regime

    FROM with_relative
    GROUP BY
        ticker,
        macro_regime,
        fed_stance,
        cycle_phase,
        is_recession

),

final AS (

    SELECT
        a.*,

        -- ── Regime-level calendar metadata ────────────────────────────────────
        rc.regime_first_date,
        rc.regime_last_date,
        rc.regime_total_trading_days,
        rc.regime_calendar_days,

        -- ── Insufficient sample flag ──────────────────────────────────────────
        CASE
            WHEN a.trading_days_in_regime < 20 THEN true
            ELSE false
        END                                                     AS insufficient_sample,

        -- ── Heatmap return tier ───────────────────────────────────────────────
        CASE
            WHEN a.avg_daily_return >=  0.002  THEN 'strong_positive'
            WHEN a.avg_daily_return >=  0.0005 THEN 'mild_positive'
            WHEN a.avg_daily_return >= -0.0005 THEN 'flat'
            WHEN a.avg_daily_return >= -0.002  THEN 'mild_negative'
            ELSE                                    'strong_negative'
        END                                                     AS return_tier

    FROM aggregated     a
    LEFT JOIN regime_calendar rc ON a.macro_regime = rc.macro_regime

)

SELECT * FROM final
ORDER BY ticker, macro_regime