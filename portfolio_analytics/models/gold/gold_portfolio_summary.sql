{{
    config(
        materialized='table'
    )
}}

WITH holdings AS (
    SELECT * FROM {{ ref("dim_assets") }}
),

-- Latest risk metrics per ticker (most recent available row)
latest_risk AS (
    SELECT DISTINCT ON (ticker)
        ticker,
        sharpe_252d,
        sortino_252d,
        calmar_252d,
        annualised_return,
        annualised_volatility,
        max_drawdown_252d,
        price_date              AS risk_date
    FROM {{ ref("fct_risk_adjusted_returns") }}
    WHERE sharpe_252d IS NOT NULL
    ORDER BY ticker, price_date DESC
),

joined AS (
    SELECT
        -- Identity
        h.ticker,
        h.asset_name,
        h.asset_type,
        h.sector,

        -- Position
        h.net_shares,
        h.first_transaction_date,
        h.avg_cost_basis,
        h.latest_date,
        h.latest_price,
        h.current_value,

        -- Capital flow
        h.total_cost_basis,
        h.total_sale_proceeds,
        h.net_invested,

        -- Returns
        h.unrealised_pnl,
        h.unrealised_return_pct,
        h.total_return_dollar,
        h.total_return_pct,

        -- Weights
        h.weight_pct,
        h.weight_decimal,

        -- Audit
        h.buy_count,
        h.sell_count,

        -- Per-ticker risk metrics
        r.risk_date,
        r.sharpe_252d,
        r.sortino_252d,
        r.calmar_252d,
        r.annualised_return,
        r.annualised_volatility,
        r.max_drawdown_252d,

        -- Weighted contributions (for gold_kpis aggregation later)
        ROUND(h.weight_decimal * r.sharpe_252d, 6)        AS weighted_sharpe_contribution,
        ROUND(h.weight_decimal * r.sortino_252d, 6)       AS weighted_sortino_contribution,
        ROUND(h.weight_decimal * r.max_drawdown_252d, 6)  AS weighted_drawdown_contribution,
        ROUND(h.weight_decimal * r.annualised_return, 6)  AS weighted_return_contribution

    FROM holdings h
    LEFT JOIN latest_risk r ON h.ticker = r.ticker
)

SELECT * FROM joined
ORDER BY weight_pct DESC