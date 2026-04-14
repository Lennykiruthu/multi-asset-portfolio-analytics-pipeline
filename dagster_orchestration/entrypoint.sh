#!/bin/bash
set -e

echo "Generating dbt manifest..."
cd /usr/app/dbt && dbt parse --profiles-dir .

echo "Starting $@..."
exec "$@"