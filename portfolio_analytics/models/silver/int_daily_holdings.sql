{{
    config(
        materialized='table'
    )
}}

/*
    int_daily_holdings
    ------------------
    Produces one row per (ticker, calendar_date) representing the number of
    shares held at the close of that day.

    This solves the dim_assets problem: dim_assets stores the *current* net
    position, so a fully-exited ticker has net_shares = 0. Multiplying that
    against every historical close wipes out all value it contributed while
    you held it.

    Strategy:
      1. Compute the running net position after each transaction using a
         cumulative SUM ordered by transaction_date.
      2. Build a date spine from the earliest transaction to the latest
         price date.
      3. Left-join the running positions onto the spine and forward-fill
         using the standard COUNT/MAX group trick — same pattern already
         used in gold_portfolio_timeseries.

    The result is a slowly-changing series: shares_held is 0 before any
    buy, steps up/down on each transaction date, and stays at 0 after a
    full exit.

    gold_portfolio_timeseries should join on:
        int_daily_holdings.ticker = fct_daily_returns.ticker
        int_daily_holdings.price_date = fct_daily_returns.price_date
    and filter WHERE shares_held > 0 if you want to exclude pre-buy dates
    (or leave it unfiltered to preserve portfolio-level aggregation).
*/

WITH transactions AS (
    SELECT
        ticker,
        transaction_date,
        quantity  -- positive for BUY, negative for SELL (enforced in stg_transactions)
    FROM {{ ref("stg_transactions") }}
),

-- ── 1. Running net position after each transaction ─────────────────────────
-- For each transaction row, sum all quantities up to and including that row.
-- This gives the number of shares held *after* each transaction event.

running_positions AS (
    SELECT
        ticker,
        transaction_date,
        SUM(quantity) OVER (
            PARTITION BY ticker
            ORDER BY transaction_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        )::numeric(18, 8) AS shares_after_transaction
    FROM transactions
),

-- ── 2. Date spine ──────────────────────────────────────────────────────────
-- Span from the earliest transaction date to the latest available price date.
-- This ensures the spine covers the full history of both transactions and prices.

date_spine AS (
    SELECT
        generate_series(
            (SELECT MIN(transaction_date) FROM transactions),
            (SELECT MAX(price_date) FROM {{ ref("fct_daily_returns") }}),
            INTERVAL '1 day'
        )::date AS price_date
),

-- ── 3. Ticker spine ────────────────────────────────────────────────────────
-- Cross join the date spine against every distinct ticker so every ticker
-- has a row for every calendar day.

ticker_spine AS (
    SELECT
        s.price_date,
        t.ticker
    FROM date_spine s
    CROSS JOIN (SELECT DISTINCT ticker FROM transactions) t
),

-- ── 4. Join transaction events onto spine ─────────────────────────────────
-- Left join so that dates with no transaction carry a NULL shares value,
-- ready for forward-fill in the next step.

spine_with_events AS (
    SELECT
        ts.price_date,
        ts.ticker,
        rp.shares_after_transaction
    FROM ticker_spine ts
    LEFT JOIN running_positions rp
        ON  ts.price_date = rp.transaction_date
        AND ts.ticker     = rp.ticker
),

-- ── 5. Forward-fill shares ────────────────────────────────────────────────
-- Standard two-step fill:
--   a. COUNT non-null values up to the current row to tag each row with
--      the "group" defined by the last known transaction.
--   b. MAX within that group collapses all NULLs to the last known value.
--
-- Before the first BUY for a ticker, fill_group stays at 0 and MAX returns
-- NULL — which is correct (shares_held will be NULL / coalesced to 0).

fill_groups AS (
    SELECT
        price_date,
        ticker,
        shares_after_transaction,
        COUNT(shares_after_transaction) OVER (
            PARTITION BY ticker
            ORDER BY price_date
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS fill_group
    FROM spine_with_events
),

filled AS (
    SELECT
        price_date,
        ticker,
        MAX(shares_after_transaction) OVER (
            PARTITION BY ticker, fill_group
        ) AS shares_held
    FROM fill_groups
)

SELECT
    price_date,
    ticker,
    -- Coalesce so pre-first-buy dates show 0 rather than NULL.
    -- Downstream joins can filter WHERE shares_held > 0 to skip
    -- dates before the position was opened.
    COALESCE(shares_held, 0)::numeric(18, 8) AS shares_held

FROM filled
ORDER BY ticker, price_date