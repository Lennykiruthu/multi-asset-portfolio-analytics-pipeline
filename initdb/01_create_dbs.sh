#!/bin/bash
set -e

# Create Dagster Metadata DB
echo ">>> Checking for Dagster database: ${DAGSTER_DB}"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE "${DAGSTER_DB}" OWNER "${POSTGRES_USER}"'
    WHERE NOT EXISTS (
        SELECT FROM pg_database WHERE datname = '${DAGSTER_DB}'
    )\gexec
EOSQL

# Create Portfolio Analytics DB
echo ">>> Checking for Portfolio database: ${POSTGRES_DB}"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE "${POSTGRES_DB}" OWNER "${POSTGRES_USER}"'
    WHERE NOT EXISTS (
        SELECT FROM pg_database WHERE datname = 'portfolio_db'
    )\gexec
EOSQL

echo ">>> All databases ready."