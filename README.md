# Eric's BPMF Game

A gamified Rails application for teaching children BPMF (Zhuyin), the phonetic alphabet used in Taiwan.

## Quick Start

```bash
# Build and start containers
docker compose build
docker compose up -d

# The app will be available at:
# http://localhost:3000
```

## Main Commands

```bash
# Start containers
docker compose up -d

# Stop containers
docker compose down

# View logs
docker compose logs -f bpmf

# Restart containers
docker compose restart

# Rebuild after changes
docker compose build
docker compose up -d
```

## Access

- **Application**: http://localhost:3000
- **Database**: PostgreSQL (internal)

The database is automatically set up on first run (create, migrate, seed).

## Development vs Production

This project has separate configurations for development and production:

- **Development**: Use `docker-compose.yml` (default)
- **Production**: Use `docker-compose.prod.yml`

For production deployment, see [README.DEPLOYMENT.md](README.DEPLOYMENT.md) for detailed AWS deployment instructions.
