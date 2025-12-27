#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# In development with volume mounts, ensure Gemfile.lock is writable
# (it's owned by host user, but container needs to write to it)
if [ -f /app/Gemfile.lock ]; then
  chmod 666 /app/Gemfile.lock 2>/dev/null || true
  chown root:root /app/Gemfile.lock 2>/dev/null || true
fi

# Wait for PostgreSQL
DB_HOST=${DATABASE_HOST:-db}
DB_USER=${DATABASE_USER:-bpmf_user}

echo "Waiting for PostgreSQL at $DB_HOST..."
until pg_isready -h "$DB_HOST" -U "$DB_USER"; do
  sleep 1
done

echo "PostgreSQL is ready!"

# Set up database (create, migrate, seed) - idempotent operations
# Only seed in development
echo "Setting up database..."
RAILS_ENV=${RAILS_ENV:-development}
bundle exec rails db:create || true
bundle exec rails db:migrate || true

if [ "$RAILS_ENV" = "development" ]; then
  bundle exec rails db:seed || true
fi

# Execute the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

