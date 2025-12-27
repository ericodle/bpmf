FROM ruby:3.2.2

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
    nodejs \
    postgresql-client \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Create a non-root user
RUN adduser --system --group app

# Install bundler
RUN gem install bundler

# Install gems - generate fresh lockfile to avoid dependency conflicts
COPY Gemfile ./
RUN bundle install && bundle lock

# Copy application code (Gemfile.lock is in .dockerignore so it won't overwrite)
COPY . .

# Ensure gems are still available after copying code
RUN bundle install

# Set proper permissions for app directory
RUN chown -R app:app /app || true

# Copy and set permissions for entrypoint
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Switch to non-root user
USER app

# Expose port
EXPOSE 3000

# Use entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]

# Start server (development mode)
CMD ["rails", "server", "-b", "0.0.0.0"]

