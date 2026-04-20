#!/bin/bash
set -e

echo ">>> Creating tables in database: ${POSTGRES_DB}"

# We use the -d flag to connect to the specific database
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "${POSTGRES_DB}" <<-EOSQL
    CREATE SCHEMA IF NOT EXISTS bronze;

    -- Create users table

    CREATE TABLE IF NOT EXISTS users (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name     VARCHAR(255),
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    is_active     BOOLEAN DEFAULT TRUE
    );    

    -- Create the raw prices table (yfinance)

    CREATE TABLE IF NOT EXISTS bronze.raw_prices (
    date  DATE NOT NULL,
    ticker      TEXT NOT NULL,
    open        NUMERIC,
    high        NUMERIC,
    low         NUMERIC,
    close       NUMERIC,
    volume      BIGINT,
    ingested_at TIMESTAMP NOT NULL,  
    -- For downstream user  querying
    user_id UUID REFERENCES users(id),    
    -- Prevents duplicate prices for the same day/ticker
    PRIMARY KEY (date, ticker, user_id)
    );

    -- Create the raw fred table (Federal Reserve API)

    CREATE TABLE IF NOT EXISTS bronze.raw_fred (
    date            DATE NOT NULL,
    series_id       TEXT NOT NULL,
    series_alias    TEXT,
    value           NUMERIC,
    ingested_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Matches your _get_last_loaded_date logic for quick lookups
    PRIMARY KEY (date, series_id) 
    );

    -- Create the transactions table

    CREATE TABLE IF NOT EXISTS bronze.transactions (
    transaction_id  SERIAL PRIMARY KEY,
    ticker          TEXT NOT NULL,
    asset_name      TEXT,
    asset_type      TEXT, -- e.g., 'Stock', 'ETF', 'Crypto'
    sector          TEXT,
    quantity        NUMERIC NOT NULL,
    purchase_price  NUMERIC NOT NULL,
    purchase_date   DATE NOT NULL,
    ingested_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- For downstream user  querying
    user_id UUID REFERENCES users(id)    
    );    
EOSQL

echo "All bronze tables ready in ${POSTGRES_DB}"