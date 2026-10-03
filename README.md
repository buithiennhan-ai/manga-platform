# Manga Platform

A modern comic/manga website starter built with Next.js, Tailwind CSS, and Prisma.

## Stack
- Next.js 14
- React 18
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Vercel-ready

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment file:
   ```bash
   cp .env.example .env
   ```
3. Update `DATABASE_URL` in `.env` for your PostgreSQL database.
4. Run Prisma generate:
   ```bash
   npx prisma generate
   ```
5. Run database seed (optional):
   ```bash
   npx prisma db push
   npx prisma db seed
   ```
6. Start development server:
   ```bash
   npm run dev
   ```

## Project structure
- `app/` - App router pages and routes
- `components/` - Reusable UI components
- `lib/` - Mock data and helper functions
- `prisma/` - Prisma schema and seed script

## Deployment
This project is ready to deploy to Vercel. Add the `DATABASE_URL` environment variable in your Vercel project settings.

## Notes
The project includes mock data for local demo usage, and database schema for production use.
