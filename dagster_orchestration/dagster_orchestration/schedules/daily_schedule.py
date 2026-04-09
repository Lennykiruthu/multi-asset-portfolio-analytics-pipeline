from dagster import ScheduleDefinition, DefaultScheduleStatus

# ---------------------------------------------------------------------------
# Daily ingestion schedule
# ---------------------------------------------------------------------------
# Runs every weekday at 18:00 UTC (roughly 30 mins after US market close at
# 21:30 UTC / 4:30 PM ET, adjusted for yfinance data propagation lag).
#
# The schedule triggers the `daily_pipeline_job` which runs in order:
#   1. raw_prices   — fetch today's OHLCV from yfinance
#   2. raw_fred     — fetch latest FRED macro observations
#   3. dbt build    — rebuild silver + gold models
#
# Cron: "0 18 * * 1-5"
#   ┌──── minute  (0)
#   │  ┌─ hour    (18 = 6 PM UTC)
#   │  │  ┌ day of month (*)
#   │  │  │  ┌ month (*)
#   │  │  │  │  └ day of week (1-5 = Mon–Fri)
#   0  18  *  *  1-5
# ---------------------------------------------------------------------------

daily_ingestion_schedule = ScheduleDefinition(
    job_name="daily_pipeline_job",
    cron_schedule="0 18 * * 1-5",
    name="daily_market_data_ingestion",
    default_status=DefaultScheduleStatus.RUNNING,
    description=(
        "Runs Mon–Fri at 18:00 UTC. "
        "Ingests prices from yfinance, macro data from FRED, "
        "then triggers a full dbt build."
    ),
    execution_timezone="UTC",
)

# ---------------------------------------------------------------------------
# Monthly FRED schedule (macro data updates slowly — monthly is sufficient
# outside of the daily run, but included here for a full macro refresh)
# ---------------------------------------------------------------------------

monthly_fred_schedule = ScheduleDefinition(
    job_name="fred_only_job",
    cron_schedule="0 6 1 * *",   # 1st of every month at 06:00 UTC
    name="monthly_fred_macro_refresh",
    default_status=DefaultScheduleStatus.RUNNING,
    description=(
        "Full FRED macro refresh on the 1st of every month at 06:00 UTC. "
        "Catches any backdated revisions that the daily run might miss."
    ),
    execution_timezone="UTC",
)