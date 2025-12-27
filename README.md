# BPMF Learning Game

A gamified Rails application for teaching children the BPMF phonetic alphabet used in Taiwan. This app provides step-by-step lessons with interactive exercises, points, levels, and achievements.

## Features

- 🎮 **Gamified Learning**: Earn points, level up, and unlock achievements
- 📚 **Step-by-Step Lessons**: Progressive learning with locked lessons until prerequisites are completed
- 🏆 **Achievement System**: Unlock badges as you progress
- 📊 **Progress Tracking**: Monitor your learning journey with detailed statistics
- 🎨 **Beautiful UI**: Modern, colorful interface designed for children
- 🐳 **Docker Support**: Easy setup with Docker and Docker Compose

## Prerequisites

- Docker
- Docker Compose

## Setup Instructions

1. **Build and start the containers:**
   ```bash
   docker compose build
   docker compose up -d
   ```

   The database will be automatically created, migrated, and seeded on first startup.

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

## Usage

- **Home Page**: View your progress, stats, and start learning
- **Lessons**: Browse all available lessons and track completion
- **Progress**: See detailed statistics about your learning journey
- **Achievements**: View all badges and achievements you've earned

## Learning Path

The app includes lessons for:
- Introduction to BPMF
- Basic symbols: ㄅ (B), ㄆ (P), ㄇ (M), ㄈ (F)
- Practice exercises
- Additional symbols: ㄉ (D), ㄊ (T), ㄋ (N), ㄌ (L)
- More practice and advanced lessons

## Development

### Running Commands

To run Rails commands in the container:
```bash
docker compose exec web rails <command>
```

### Viewing Logs

```bash
docker compose logs -f web
```

### Stopping the Application

```bash
docker compose down
```

### Resetting the Database

```bash
docker compose exec web rails db:reset
```

## Project Structure

- `app/models/` - Data models (User, Lesson, LessonProgress, Achievement)
- `app/controllers/` - Application controllers
- `app/views/` - View templates
- `db/migrate/` - Database migrations
- `db/seeds.rb` - Seed data with initial BPMF lessons

## Technologies

- Ruby on Rails 7.1
- PostgreSQL
- Docker & Docker Compose
- HTML/CSS/JavaScript

## License

This project is for educational purposes.

