from pathlib import Path

from dagster import (
    Definitions,
    define_asset_job,
    AssetSelection,
    in_process_executor,
)
from dagster import AssetKey
from dagster_dbt import DbtCliResource, dbt_assets, DagsterDbtTranslator

from dagster_orchestration.assets import raw_prices, raw_fred
from dagster_orchestration.sensors import transaction_sensor
from dagster_orchestration.schedules import daily_ingestion_schedule, monthly_fred_schedule
from dagster_orchestration.resources import build_postgres_resource, build_dbt_resource, DBT_PROJECT_DIR

# ---------------------------------------------------------------------------
# dbt assets
# ---------------------------------------------------------------------------
# Dagster introspects your dbt project's manifest.json to auto-generate
# one Dagster asset per dbt model. Run `dbt parse` (or `dbt compile`) inside
# portfolio_analytics/ to regenerate the manifest before starting Dagster.
# ---------------------------------------------------------------------------

MANIFEST_PATH = DBT_PROJECT_DIR / "target" / "manifest.json"

if not MANIFEST_PATH.exists():
    raise FileNotFoundError(
        f"dbt manifest not found at {MANIFEST_PATH}.\n"
        "Run `dbt parse` inside your portfolio_analytics/ directory first:\n"
        "  cd portfolio_analytics && dbt parse"
    )


@dbt_assets(
    manifest=MANIFEST_PATH,
    name="portfolio_dbt_assets",
)
def portfolio_dbt_assets(context, dbt: DbtCliResource):
    """
    All dbt models in portfolio_analytics/, auto-discovered from manifest.json.
    Dagster will run them in dependency order (staging → silver → gold).
    """
    yield from dbt.cli(["build"], context=context).stream()


# ---------------------------------------------------------------------------
# Jobs
# ---------------------------------------------------------------------------

# 1. Full daily pipeline: prices → FRED → dbt build
#    Explicitly selects all three asset groups so execution order is clear.
#    Dagster will honour asset dependencies: bronze assets run first,
#    then dbt models in staging → silver → gold order.
daily_pipeline_job = define_asset_job(
    name="daily_pipeline_job",
    selection=(
        AssetSelection.assets(raw_prices, raw_fred)
        | AssetSelection.assets(portfolio_dbt_assets)
    ),
    description=(
        "Runs the full daily pipeline: "
        "ingest raw prices, ingest FRED macro data, then dbt build."
    ),
    executor_def=in_process_executor,
)

# 2. dbt-only job — triggered by the transaction sensor after a new trade.
#    Uses group_name selection so new dbt models are picked up automatically
#    without editing this file.
dbt_build_job = define_asset_job(
    name="dbt_build_job",
    selection=AssetSelection.assets(portfolio_dbt_assets),
    description=(
        "Runs dbt build only. Triggered by the transaction sensor "
        "whenever a new trade is logged via ledger-ui."
    ),
    executor_def=in_process_executor,
)

# 3. FRED-only job (used by the monthly schedule)
fred_only_job = define_asset_job(
    name="fred_only_job",
    selection=AssetSelection.assets(raw_fred),
    description="Runs only the FRED macro ingestion asset.",
    executor_def=in_process_executor,
)

# ---------------------------------------------------------------------------
# Definitions — the single entry point Dagster loads
# ---------------------------------------------------------------------------

defs = Definitions(
    assets=[raw_prices, raw_fred, portfolio_dbt_assets],
    jobs=[daily_pipeline_job, dbt_build_job, fred_only_job],
    schedules=[daily_ingestion_schedule, monthly_fred_schedule],
    sensors=[transaction_sensor],
    resources={
        "postgres": build_postgres_resource(),
        "dbt": build_dbt_resource(),
    },
)