{{
    config(
        materialized='table'
    )
}}

/*
    dim_assets
    ----------
    One row per ticker representing the current state of each position in the
    portfolio. Replaces the static dim_assets_seed approach with a fully
    transaction-driven model sourced from stg_transactions.

    Key design decisions:
      - Net shares = SUM(quantity) over all transactions per ticker.
        BUY rows carry positive quantity, SELL rows carry negative quantity
        (enforced in stg_transactions), so a simple SUM gives the live position.

      - Average cost basis is used for purchase_price:
          SUM(abs_quantity * purchase_price) / SUM(abs_quantity) across BUY
          transactions only. SELL transactions are excluded from cost basis
          because they represent exits, not entries.

      - first_transaction_date is the date of the earliest BUY per ticker.
        This replaces the old first_prices CTE which inferred purchase date
        from market data — unreliable for anything other than a buy-and-hold
        portfolio started on the first day of available price history.

      - Tickers with a net zero position (fully sold out) are retained in the
        output with current_value = 0 so that realised P&L is still visible
        in downstream gold models. Filter them out there if needed.

      - total_cost_basis and total_sale_proceeds are surfaced as separate
        columns so gold_portfolio_summary can split realised vs unrealised P&L
        without re-aggregating from the transactions table.
*/

WITH transactions AS (
    SELECT * FROM {{ ref("stg_transactions") }}
),

-- ── 1. Net position per ticker ─────────────────────────────────────────────
-- SUM(quantity) collapses all BUY (+) and SELL (-) rows into a single
-- net_shares figure. Tickers with no remaining position will have net_shares = 0.

net_positions AS (
    SELECT
        ticker,

        -- Use MAX on these — they are identical across rows for the same ticker
        -- (enforced by the ledger UI). Avoids a GROUP BY on every column.
        MAX(asset_name) AS asset_name,
        MAX(asset_type) AS asset_type,
        MAX(sector)     AS sector,

        -- Live position
        SUM(quantity)::numeric(18, 8)   AS net_shares,

        -- Date of the first BUY for this ticker — used as the position open date
        MIN(CASE WHEN transaction_type = 'BUY' THEN transaction_date END) AS first_transaction_date,

        -- Average cost basis across all BUY transactions
        -- Formula: Σ(abs_quantity × purchase_price) / Σ(abs_quantity) for BUYs only
        ROUND(
            SUM(CASE WHEN transaction_type = 'BUY'
                THEN abs_quantity * purchase_price ELSE 0 END)
            / NULLIF(
                SUM(CASE WHEN transaction_type = 'BUY'
                    THEN abs_quantity ELSE 0 END),
                0
            ),
            4
        ) AS avg_cost_basis,

        -- Total capital deployed into this ticker (BUY side only)
        ROUND(
            SUM(CASE WHEN transaction_type = 'BUY'
                THEN transaction_value ELSE 0 END),
            2
        ) AS total_cost_basis,

        -- Total proceeds from selling (SELL side only)
        ROUND(
            SUM(CASE WHEN transaction_type = 'SELL'
                THEN transaction_value ELSE 0 END),
            2
        ) AS total_sale_proceeds,

        -- Transaction counts — useful for downstream audit / gold models
        COUNT(*) FILTER (WHERE transaction_type = 'BUY')  AS buy_count,
        COUNT(*) FILTER (WHERE transaction_type = 'SELL') AS sell_count

    FROM transactions
    GROUP BY ticker
),

-- ── 2. Latest market price per ticker ─────────────────────────────────────
-- Unchanged from the original model — still sourced from fct_daily_returns.

latest_price AS (
    SELECT DISTINCT ON (ticker)
        ticker,
        price_date AS latest_date,
        close      AS latest_price
    FROM {{ ref("fct_daily_returns") }}
    WHERE close IS NOT NULL
    ORDER BY ticker, price_date DESC
),

-- ── 3. Join positions to market prices ────────────────────────────────────

joined AS (
    SELECT
        n.ticker,
        n.asset_name,
        n.asset_type,
        n.sector,
        n.net_shares,
        n.first_transaction_date,
        n.avg_cost_basis,
        n.total_cost_basis,
        n.total_sale_proceeds,
        n.buy_count,
        n.sell_count,

        l.latest_price,
        l.latest_date,

        -- Current market value of the open position
        ROUND(n.net_shares * l.latest_price, 2)     AS current_value,

        -- Initial investment is cost basis minus what has already been
        -- recovered through sales. This is the net capital still at risk.
        ROUND(n.total_cost_basis - n.total_sale_proceeds, 2) AS net_invested

    FROM net_positions n
    LEFT JOIN latest_price l ON n.ticker = l.ticker
),

-- ── 4. Return calculations ─────────────────────────────────────────────────

with_returns AS (
    SELECT
        *,

        -- Unrealised P&L: current market value vs net capital still deployed
        ROUND(current_value - net_invested, 2)              AS unrealised_pnl,

        -- Unrealised return %
        ROUND(
            (current_value - net_invested)
            / NULLIF(net_invested, 0) * 100,
            2
        )                                                   AS unrealised_return_pct,

        -- Total return $ including proceeds already banked from sells
        ROUND(current_value + total_sale_proceeds - total_cost_basis, 2)
                                                            AS total_return_dollar,

        -- Total return % on total capital ever deployed
        ROUND(
            (current_value + total_sale_proceeds - total_cost_basis)
            / NULLIF(total_cost_basis, 0) * 100,
            2
        )                                                   AS total_return_pct

    FROM joined
),

-- ── 5. Portfolio weights ───────────────────────────────────────────────────
-- Weight is based on current_value so weights update daily with market moves,
-- rather than being locked to initial investment amounts.

with_weights AS (
    SELECT
        *,

        ROUND(
            current_value
            / NULLIF(SUM(current_value) OVER (), 0) * 100,
            2
        ) AS weight_pct,

        ROUND(
            current_value
            / NULLIF(SUM(current_value) OVER (), 0),
            4
        ) AS weight_decimal

    FROM with_returns
)

-- ── Final select ──────────────────────────────────────────────────────────

SELECT
    ticker,
    asset_name,
    asset_type,
    sector,

    -- Position
    net_shares,
    first_transaction_date,
    avg_cost_basis,

    -- Capital flow
    total_cost_basis,
    total_sale_proceeds,
    net_invested,

    -- Market value
    latest_date,
    latest_price,
    current_value,

    -- Returns
    unrealised_pnl,
    unrealised_return_pct,
    total_return_dollar,
    total_return_pct,

    -- Portfolio weight
    weight_pct,
    weight_decimal,

    -- Audit
    buy_count,
    sell_count

FROM with_weights
ORDER BY weight_pct DESC