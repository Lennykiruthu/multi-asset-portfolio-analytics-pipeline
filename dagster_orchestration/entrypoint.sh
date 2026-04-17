#!/bin/bash
set -e

MANIFEST="/usr/app/dbt/target/manifest.json"

echo "Waiting for dbt manifest..."
until [ -f "$MANIFEST" ]; do
  echo "  manifest not found, waiting..."
  sleep 2
done

echo "Validating manifest..."
python3 -c "
import orjson, sys
try:
    orjson.loads(open('$MANIFEST','rb').read())
    print('Manifest OK.')
except Exception as e:
    print(f'Manifest corrupt: {e}')
    sys.exit(1)
"

echo "Starting $@..."
exec "$@"