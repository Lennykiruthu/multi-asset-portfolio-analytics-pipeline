from setuptools import find_packages, setup

setup(
    name="dagster_orchestration",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "dagster",
        "dagster-dbt",
        "dagster-postgres",
        "dagster-webserver",
        "dbt-core",
        "dbt-postgres",
        "yfinance",
        "pandas",
        "requests",
        "sqlalchemy",
        "psycopg2-binary",
        "python-dotenv",
    ],
)