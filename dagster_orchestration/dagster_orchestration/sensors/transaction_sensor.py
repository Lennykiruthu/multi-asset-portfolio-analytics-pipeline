from dagster import (
    sensor,
    SensorEvaluationContext,
    RunRequest,
    SkipReason,
    DefaultSensorStatus,
)
from sqlalchemy import text

from dagster_orchestration.resources import build_postgres_resource

# ---------------------------------------------------------------------------
# Transaction sensor
# ---------------------------------------------------------------------------
# This sensor polls bronze.transactions every 60 seconds.
# It tracks a watermark — the MAX(ingested_at) seen on the last evaluation.
# When new rows appear (i.e. a trade was logged via ledger-ui.py), it fires
# a dbt_build_job run so that staging → silver → gold models are refreshed.
#
# Design notes:
#   - The engine is built once per poll tick from the shared resource.
#     Sensors don't receive injected resources the same way assets do,
#     so we call build_postgres_resource() directly. The underlying
#     create_engine() call is cheap — SQLAlchemy pools the connection.
#   - Dagster persists the cursor in its own metadata store, so the
#     watermark survives daemon restarts with no extra state table needed.
#   - run_key = latest_str gives idempotency: if the daemon fires twice
#     for the same watermark, Dagster deduplicates the run.
# ---------------------------------------------------------------------------

POLL_INTERVAL_SECONDS = 60


@sensor(
    job_name="dbt_build_job",
    minimum_interval_seconds=POLL_INTERVAL_SECONDS,
    default_status=DefaultSensorStatus.RUNNING,
    description=(
        "Watches bronze.transactions for new rows. "
        "Triggers a full dbt build when a new trade is detected."
    ),
)
def transaction_sensor(context: SensorEvaluationContext):
    """
    Watermark-based sensor on bronze.transactions.

    Cursor format: ISO timestamp string of the last seen MAX(ingested_at).
    """
    try:
        engine = build_postgres_resource().get_engine()
        with engine.connect() as conn:
            result = conn.execute(
                text("SELECT MAX(ingested_at) FROM bronze.transactions")
            )
            latest = result.scalar()
    except Exception as e:
        # Table may not exist yet on very first boot — skip silently
        return SkipReason(f"Could not query bronze.transactions: {e}")

    if latest is None:
        return SkipReason("bronze.transactions is empty — nothing to trigger on")

    # Normalise to a comparable string (handles both datetime and str scalars)
    latest_str = str(latest)
    last_seen = context.cursor  # None on very first evaluation

    if last_seen == latest_str:
        return SkipReason(
            f"No new transactions since last check (watermark: {latest_str})"
        )

    # Watermark advanced — new trade(s) detected
    context.update_cursor(latest_str)

    context.log.info(
        f"New transaction detected (ingested_at={latest_str}). "
        "Triggering dbt_build_job."
    )

    return RunRequest(
        run_key=latest_str,  # idempotency: one run per unique watermark
        run_config={},
        tags={
            "trigger": "transaction_sensor",
            "watermark": latest_str,
        },
    )