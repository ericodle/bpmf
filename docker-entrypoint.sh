#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Wait for PostgreSQL
echo "Waiting for PostgreSQL..."
until pg_isready -h db -U bpmf_user; do
  sleep 1
done

echo "PostgreSQL is ready!"

# Set up database (create, migrate, seed) - idempotent operations
echo "Setting up database..."
# Ensure we have write permissions
chmod -R 755 /app/db || true
bundle exec rails db:create || true
bundle exec rails db:migrate || true
bundle exec rails db:seed || true

# Execute the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

