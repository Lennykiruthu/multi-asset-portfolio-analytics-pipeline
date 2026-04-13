#!/bin/bash
# Runs once on first postgres container start (only when the data volume is empty).
# Creates the Dagster metadata DB using the DAGSTER_DB env var from .env.
set -e

echo ">>> Checking for Dagster database: ${DAGSTER_DB}"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE "${DAGSTER_DB}" OWNER "${POSTGRES_USER}"'
    WHERE NOT EXISTS (
        SELECT FROM pg_database WHERE datname = '${DAGSTER_DB}'
    )\gexec
EOSQL

echo ">>> Dagster database ready."
