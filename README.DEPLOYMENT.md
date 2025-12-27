# Deployment Guide

This guide explains how to deploy Eric's BPMF Game to production.

## Development vs Production

### Development Environment

For local development, use:

```bash
docker compose up -d
```

This uses:
- `Dockerfile` (development-optimized)
- `docker-compose.yml` (includes volume mounts for live code reloading)
- Seeds the database automatically
- Runs in development mode

### Production Environment

For production deployment, use:

```bash
docker compose -f docker-compose.prod.yml up -d
```

This uses:
- `Dockerfile.prod` (production-optimized with asset precompilation)
- `docker-compose.prod.yml` (production configuration)
- No database seeding
- Runs in production mode

## Environment Variables

### Development

1. Copy `.env.development.example` to `.env.development`
2. Fill in your values (defaults are fine for local dev)

### Production

1. Copy `.env.production.example` to `.env.production`
2. **IMPORTANT**: Generate a secure `SECRET_KEY_BASE`:
   ```bash
   docker compose exec bpmf rails secret
   ```
3. Set secure database credentials
4. **NEVER commit `.env.production` to git!**

## AWS Deployment Options

### Option 1: AWS ECS (Recommended)

1. **Build and push your image to ECR:**
   ```bash
   # Build production image
   docker build -f Dockerfile.prod -t erics-bpmf-game:latest .
   
   # Tag for ECR
   docker tag erics-bpmf-game:latest <account-id>.dkr.ecr.<region>.amazonaws.com/erics-bpmf-game:latest
   
   # Push to ECR
   docker push <account-id>.dkr.ecr.<region>.amazonaws.com/erics-bpmf-game:latest
   ```

2. **Set up RDS PostgreSQL:**
   - Create an RDS PostgreSQL instance
   - Note the endpoint, username, and password
   - Update your ECS task definition with these values

3. **Create ECS Task Definition:**
   - Use the pushed image
   - Set environment variables from AWS Secrets Manager or Parameter Store
   - Configure health checks

4. **Set up Application Load Balancer:**
   - Add HTTPS/SSL certificate
   - Route traffic to your ECS service

### Option 2: AWS App Runner

1. Push your code to GitHub
2. Connect App Runner to your repository
3. Configure build command: `docker build -f Dockerfile.prod -t . .`
4. Set environment variables in App Runner console
5. Connect to RDS for database

### Option 3: EC2 with Docker Compose

1. Launch an EC2 instance
2. Install Docker and Docker Compose
3. Copy your code and `.env.production`
4. Run: `docker compose -f docker-compose.prod.yml up -d`
5. Set up nginx reverse proxy for SSL

## Production Checklist

- [ ] Use AWS RDS for database (don't use containerized DB in production)
- [ ] Set `SECRET_KEY_BASE` environment variable
- [ ] Configure `DATABASE_HOST` to point to RDS endpoint
- [ ] Set secure `DATABASE_PASSWORD`
- [ ] Enable HTTPS/SSL (via ALB or nginx)
- [ ] Set up proper logging (CloudWatch Logs)
- [ ] Configure backups for RDS
- [ ] Set up monitoring and alerts
- [ ] Review security groups and IAM roles
- [ ] Test database migrations in staging first

## Local Production Testing

To test production setup locally:

```bash
# Set environment variables
export SECRET_KEY_BASE=$(docker compose exec bpmf rails secret)
export DATABASE_PASSWORD=your_password

# Run production compose
docker compose -f docker-compose.prod.yml up -d
```

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_HOST` is correct
- Check security groups allow connections
- Ensure database credentials are correct

### Asset Issues
- Ensure assets are precompiled: `RAILS_ENV=production rails assets:precompile`
- Check `RAILS_SERVE_STATIC_FILES=true` is set

### Performance
- Consider using a CDN for static assets
- Use Puma with multiple workers in production
- Enable Rails caching

