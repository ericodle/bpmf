#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Wait for PostgreSQL (using DATABASE_HOST from environment)
DB_HOST=${DATABASE_HOST:-db}
DB_USER=${DATABASE_USER:-bpmf_user}

echo "Waiting for PostgreSQL at $DB_HOST..."
until pg_isready -h "$DB_HOST" -U "$DB_USER"; do
  sleep 1
done

echo "PostgreSQL is ready!"

# Set up database (create, migrate) - no seeding in production
echo "Setting up database..."
bundle exec rails db:create || true
bundle exec rails db:migrate || true

# Execute the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

