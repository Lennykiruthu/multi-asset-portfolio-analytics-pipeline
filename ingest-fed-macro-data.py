import requests
import pandas as pd 
from sqlalchemy import create_engine
import os

from config import DATABASE_URL, FRED_API_KEY, BRONZE_SCHEMA

BASE_URL = "https://api.stlouisfed.org/fred/series/observations"

SERIES = {
    "DFF":      "fed_funds_rate",
    "GS10":     "treasury_10y_yield",
    "CPIAUCSL": "cpi",
    "UNRATE":   "unemployment_rate",
    "USREC":    "recession_indicator",
    "T10YIE":   "breakeven_inflation"
}

def fetch_series(series_id, alias):
    params = {
        "series_id": series_id,
        "api_key": FRED_API_KEY,
        "file_type": "json",
        "observation_start": "2015-01-01"
    }
    r = requests.get(BASE_URL, params=params)
    data = r.json()["observations"]
    df = pd.DataFrame(data)[["date", "value"]]
    df["series_id"] = series_id
    df["series_alias"] = alias
    df["value"] = pd.to_numeric(df["value"], errors="coerce")
    return df

engine = create_engine(DATABASE_URL)

frames = [fetch_series(sid, alias) for sid, alias in SERIES.items()]
df_all = pd.concat(frames)
df_all["ingested_at"] = pd.Timestamp.now()

df_all.to_sql(
    name="raw_fred", 
    con=engine, 
    schema=BRONZE_SCHEMA, 
    if_exists="append",
    index=False)

print(f"Loaded {len(df_all)} rows into bronze.raw_fred_macro")