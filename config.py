import os
from dotenv import load_dotenv

load_dotenv()

# Postgres
POSTGRES_USER     = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB       = os.getenv("POSTGRES_DB")
DB_HOST           = os.getenv("DB_HOST", "localhost")
DB_PORT           = os.getenv("DB_PORT", "5432")

# Bronze schema
BRONZE_SCHEMA = os.getenv("BRONZE_SCHEMA", "bronze")

DATABASE_URL = (
    f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}"
    f"@{DB_HOST}:{DB_PORT}/{POSTGRES_DB}"
)

# Source-specific keys
FRED_API_KEY = os.getenv("FRED_API_KEY")