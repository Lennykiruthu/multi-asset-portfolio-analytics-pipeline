A modern data stack portfolio project built with **PostgreSQL · dbt · Apache Superset**, fully containerised with Docker Compose. Raw asset price data is ingested via Python, transformed into analytical models with dbt, and visualised in a Superset dashboard.

---
## Stack

| Layer          | Tool                          |
| -------------- | ----------------------------- |
| Storage        | PostgreSQL 18                 |
| Transformation | dbt-postgres                  |
| Visualization  | Apache Superset               |
| Orchastration  | Docker Compose                |
| Ingestion      | Python (ingest-raw-prices.py) |
## Project Structure
```
.
├── portfolio_analytics/       # dbt project
│   ├── models/
│   ├── seeds/
│   ├── macros/
│   ├── tests/
│   ├── snapshots/
│   ├── dbt_project.yml
│   └── profiles.yml
├── superset_home/             # Superset state (git-ignored)
├── docker-compose.yml
├── Dockerfile.dbt
├── Dockerfile.superset
├── ingest-raw-prices.py
└── .env                       # secrets (git-ignored, create manually)
```

## Prerequisites
- Docker + Docker Compose v2
- Python 3.11+ (for running the ingestion script and superset on the host)

---
## Setup
1. Clone and create your .env
```
git clone https://github.com/lennykiruthu/multi-asset-portfolio-analytics-pipeline.git
cd multi-asset-portfolio-analytics-pipeline
```
   Create a `.env` file at the project root:
```
POSTGRES_USER=portfolio_user
POSTGRES_PASSWORD=your_password_here
POSTGRES_DB=portfolio_db
SUPERSET_SECRET_KEY=your_secret_key_here
```
   Generate a secure Superset key with:
```
openssl rand -base64 42
```
2. Build images
```
docker compose build
```
3. Start PostgreSQL and Superset
```
docker compose up --detach postgres superset
```
4. Initialize Superset _(first time only — skip if restoring `superset.db`)
```
docker exec -it portfolio_superset superset db upgrade
docker exec -it portfolio_superset superset fab create-admin \
  --username admin --firstname Admin --lastname User \
  --email admin@example.com --password your_admin_password
docker exec -it portfolio_superset superset init
```
5. Ingest raw data
```
source analytics-pipeline-venv/bin/activate
python ingest-raw-prices.py
```
6. Run dbt
```
docker compose run --rm dbt
```
7. Open Superset
	Navigate to [http://localhost:8088](http://localhost:8088) and log in with the admin credentials from step 4.
	
	To restore a dashboard export: **Settings → Import Dashboards → upload** `superset-portfolio-dashboard.zip`
---
## Useful Commands
```
# View service status
docker compose ps

# Follow logs
docker compose logs -f superset

# Run specific dbt commands
docker compose run --rm dbt test --profiles-dir /usr/app/dbt
docker compose run --rm dbt run --select <model_name> --profiles-dir /usr/app/dbt

# Open psql
docker exec -it portfolio_postgres psql -U $POSTGRES_USER -d $POSTGRES_DB

# Backup the database
docker exec portfolio_postgres pg_dump -U $POSTGRES_USER $POSTGRES_DB > backup.sql
```
---
## Git-Ignored Files
These are excluded from version control and must be transferred manually (e.g. via `scp`) when redeploying:

| File                         | Purposee                                              |
| ---------------------------- | ----------------------------------------------------- |
| `.env`                       | All secrets and credentials                           |
| `.superset_home/superset.db` | Superset metadata - dashboards, users, DB connections |

---
## Deploying to AWS EC2
1. Launch a t3.medium Ubuntu 22.04 instnace with an Elastic IP
2. Open inbound ports: `22`(SSH), `8088`(Superset), `5432`(VPC-internal only)
3. Install Docker on the instance
```
sudo apt update && sudo apt install -y docker.io docker-compose-v2
sudo usermod -aG docker ubuntu && newgrp docker
```
4. Clone the repo and scp your `.env` and `superset.db` to the instance if present
5. Follow setup steps 2-7 above - commands are identical

	Access superset at `http://<elastic-ip>:8088`