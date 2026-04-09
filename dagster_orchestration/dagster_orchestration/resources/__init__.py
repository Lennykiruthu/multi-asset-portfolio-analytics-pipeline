import os
from pathlib import Path

from dagster import ConfigurableResource
from dagster_dbt import DbtCliResource
from sqlalchemy import create_engine, Engine
from dotenv import load_dotenv

load_dotenv()

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

# Priority 1: explicit env var — set this in .env for a stable absolute path.
# Priority 2: walk up from this file assuming the layout:
#   <repo_root>/
#     dagster_orchestration/          ← this package lives here
#       dagster_orchestration/
#         resources/__init__.py       ← this file  (parents[0..3])
#     portfolio_analytics/            ← dbt project lives here (parents[3])
#
# parents[0] = resources/
# parents[1] = dagster_orchestration/  (inner package)
# parents[2] = dagster_orchestration/  (outer project folder)
# parents[3] = <repo_root>
# → <repo_root>/portfolio_analytics

_env_dbt_dir = os.environ.get("DBT_PROJECT_DIR")
if _env_dbt_dir:
    DBT_PROJECT_DIR = Path(_env_dbt_dir).resolve()
else:
    DBT_PROJECT_DIR = Path(__file__).resolve().parents[3] / "portfolio_analytics"


# ---------------------------------------------------------------------------
# Postgres resource
# ---------------------------------------------------------------------------

class PostgresResource(ConfigurableResource):
    """
    Thin wrapper around SQLAlchemy so assets can get a shared engine
    without importing DATABASE_URL everywhere.
    """
    database_url: str

    def get_engine(self) -> Engine:
        return create_engine(self.database_url)


# ---------------------------------------------------------------------------
# Preconfigured instances (used in Definitions)
# ---------------------------------------------------------------------------

def build_postgres_resource() -> PostgresResource:
    url = os.environ.get("DATABASE_URL")
    if not url:
        raise EnvironmentError(
            "DATABASE_URL environment variable is not set. "
            "Add it to your .env file or shell environment."
        )
    return PostgresResource(database_url=url)


def build_dbt_resource() -> DbtCliResource:
    return DbtCliResource(project_dir=str(DBT_PROJECT_DIR))