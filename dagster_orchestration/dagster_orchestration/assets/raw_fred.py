import os

import pandas as pd
import requests
from dagster import asset, AssetExecutionContext
from sqlalchemy import text

from dagster_orchestration.resources import PostgresResource

BRONZE_SCHEMA = "bronze"

BASE_URL = "https://api.stlouisfed.org/fred/series/observations"

SERIES = {
    "DFF":      "fed_funds_rate",
    "GS10":     "treasury_10y_yield",
    "CPIAUCSL": "cpi",
    "UNRATE":   "unemployment_rate",
    "USREC":    "recession_indicator",
    "T10YIE":   "breakeven_inflation",
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _get_last_loaded_date(engine, series_id: str):
    """
    Return the most recent date already stored for a given series_id.
    Used to build an observation_start for incremental fetches.
    """
    try:
        with engine.connect() as conn:
            result = conn.execute(
                text(
                    "SELECT MAX(date) FROM bronze.raw_fred "
                    "WHERE series_id = :sid"
                ),
                {"sid": series_id},
            )
            return result.scalar()
    except Exception:
        return None


def _fetch_series(series_id: str, alias: str, observation_start: str,
                  api_key: str, context: AssetExecutionContext) -> pd.DataFrame:
    params = {
        "series_id": series_id,
        "api_key": api_key,
        "file_type": "json",
        "observation_start": observation_start,
    }
    context.log.info(f"Fetching FRED series {series_id} ({alias}) from {observation_start}")
    r = requests.get(BASE_URL, params=params, timeout=30)

    # FRED occasionally returns 500 when data isn't yet available
    # (common with lagged monthly series like CPI). Treat it as empty.
    if r.status_code == 500:
        context.log.warning(
            f"FRED returned 500 for {series_id} (observation_start={observation_start}). "
            "Series may not yet be available for this date range. Skipping."
        )
        return pd.DataFrame()
    
    r.raise_for_status()

    observations = r.json().get("observations", [])
    if not observations:
        context.log.warning(f"No observations returned for {series_id}")
        return pd.DataFrame()

    df = pd.DataFrame(observations)[["date", "value"]]
    df["series_id"] = series_id
    df["series_alias"] = alias
    df["value"] = pd.to_numeric(df["value"], errors="coerce")
    df["ingested_at"] = pd.Timestamp.now()
    return df


# ---------------------------------------------------------------------------
# Asset
# ---------------------------------------------------------------------------

@asset(
    key_prefix="bronze",     
    group_name="bronze",
    compute_kind="python",
    description=(
        "Macro indicators from FRED: fed funds rate, 10y yield, CPI, "
        "unemployment, recession flags, and breakeven inflation."
    ),
)
def raw_fred(context: AssetExecutionContext, postgres: PostgresResource) -> None:
    """
    Incrementally loads FRED macro series into bronze.raw_fred.

    On first run, fetches from 2015-01-01.
    On subsequent runs, fetches only from the day after the last loaded date
    for each series independently (handles different release cadences).
    """
    api_key = os.environ.get("FRED_API_KEY")
    if not api_key:
        raise EnvironmentError(
            "FRED_API_KEY environment variable is not set. "
            "Add it to your .env file."
        )

    engine = postgres.get_engine()

    # Ensure schema exists
    with engine.connect() as conn:
        conn.execute(text("CREATE SCHEMA IF NOT EXISTS bronze"))
        conn.commit()

    frames = []
    for series_id, alias in SERIES.items():
        last_date = _get_last_loaded_date(engine, series_id)

        if last_date is None:
            observation_start = "2015-01-01"
        else:
            # +1 day: skip the row we already have; avoids FRED 500s on
            # lagged series (e.g. CPI) when requesting a date not yet published
            observation_start = (
                pd.to_datetime(last_date) + pd.Timedelta(days=1)
            ).strftime("%Y-%m-%d")

        df = _fetch_series(series_id, alias, observation_start, api_key, context)
        if not df.empty:
            frames.append(df)

    if not frames:
        context.log.info("No new FRED data to load")
        return

    df_all = pd.concat(frames, ignore_index=True)

    # Deduplicate: remove any date+series_id combos already in the table
    # (handles the overlap window used above)
    if any(_get_last_loaded_date(engine, sid) is not None for sid in SERIES):
        try:
            with engine.connect() as conn:
                existing = pd.read_sql(
                    "SELECT date, series_id FROM bronze.raw_fred", conn
                )
            existing["date"] = pd.to_datetime(existing["date"]).dt.date
            df_all["date"] = pd.to_datetime(df_all["date"]).dt.date
            merge_key = existing.assign(_exists=True)
            df_all = df_all.merge(merge_key, on=["date", "series_id"], how="left")
            before = len(df_all)
            df_all = df_all[df_all["_exists"].isna()].drop(columns=["_exists"])
            removed = before - len(df_all)
            if removed:
                context.log.info(f"Deduplication removed {removed} already-loaded rows")
        except Exception as e:
            context.log.warning(f"Deduplication check failed (proceeding anyway): {e}")

    if df_all.empty:
        context.log.info("No new rows after deduplication — bronze.raw_fred is up to date")
        return

    df_all.to_sql(
        name="raw_fred",
        con=engine,
        schema=BRONZE_SCHEMA,
        if_exists="append",
        index=False,
    )

    context.log.info(f"Loaded {len(df_all)} new rows into bronze.raw_fred")

    context.add_output_metadata({
        "rows_loaded": len(df_all),
        "series": list(SERIES.keys()),
    })