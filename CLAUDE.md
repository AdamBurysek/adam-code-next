# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**adam-code-next** is a portfolio website built as a monorepo with a Next.js frontend and a Strapi headless CMS backend. The site showcases work, articles, and professional information with multilingual support (English and Czech).

## Repository Structure

```
adam-code-next/
├── packages/
│   ├── backend/          # Strapi CMS (Node 20, SQLite)
│   └── frontend/         # Next.js 15 app (React 19, TypeScript)
├── example/              # Example data/configuration
├── index.js              # Root script for concurrent dev
└── package.json          # Root workspace config
```

## Common Commands

### Development
- **Full stack (both frontend and backend):** `node index.js`
  - Uses `concurrently` to start both servers
  - Backend runs on `http://localhost:1337` (Strapi admin panel at `/admin`)
  - Frontend runs on `http://localhost:3000` (Next.js with Turbopack)

### Frontend (packages/frontend/)
- **Dev server:** `npm run dev` — Next.js with Turbopack, auto-reload
- **Build:** `npm run build` — Production build
- **Start:** `npm run start` — Run production build
- **Lint:** `npm run lint` — ESLint (AirBnB config + TypeScript)
- **Test:** `npm run test` — Vitest
- **Test UI:** `npm run test:ui` — Vitest with browser dashboard

### Backend (packages/backend/)
- **Dev server:** `npm run develop` — Strapi with auto-reload
- **Build:** `npm run build` — Build admin panel
- **Start:** `npm run start` — Production server (no auto-reload)
- **Seed example data:** `npm run seed:example` — Uses `scripts/seed.js`
- **Upgrade Strapi:** `npm run upgrade:latest` or `npm run upgrade:dry`

## Architecture

### Frontend (Next.js 15, React 19)
- **App Router:** File-based routing in `app/` directory with dynamic locale prefix `[locale]/`
- **Internationalization (i18n):** Via `next-i18n-router` and `react-i18next`
  - Locales: English (`en`), Czech (`cs`)
  - Config: `i18nConfig.ts` (default: `en`, no prefix for default)
  - Translations: `locales/` directory with JSON files per language
- **Key Pages:** 
  - `[locale]/page.tsx` — Home
  - `[locale]/about/page.tsx` — About
  - `[locale]/skills/page.tsx` — Skills
- **Components:** Navbar, Footer, ThemeSwitcher, ProjectLinksBox, etc.
- **Middleware:** `middleware.ts` handles locale routing
- **Analytics:** Vercel Analytics and Speed Insights

### Backend (Strapi 5.54.0)
- **Database:** SQLite via `better-sqlite3` (configured in `database/` directory)
- **Content Types:** Located in `src/api/*/content-types/` — defines data models
  - `article` — Blog posts
  - `author` — Author profiles
  - `category` — Article categories
  - `about` — About page content
  - `global` — Site-wide settings
- **Structure per Content Type:**
  - `content-types/` — Data schema definition
  - `controllers/` — HTTP handlers
  - `routes/` — API routes
  - `services/` — Business logic
- **Shared Components:** `src/components/shared/` — Reusable Strapi components
- **Admin UI:** Strapi admin panel at `http://localhost:1337/admin`
- **Plugins:** Users & Permissions plugin enabled
- **Config:** `config/` directory stores database, server, API, and admin settings

## Key Technologies

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Frontend** | Next.js | 15.3.1 | App Router, SSR, Turbopack |
| | React | 19.1.0 | Latest stable |
| | TypeScript | ^5.4.5 | Strict mode configured |
| | i18next | 23.11.3 | Translations (en, cs) |
| | Motion | 12.9.3 | Animation library |
| **Backend** | Strapi | 5.54.0 | Headless CMS |
| | Node.js | >=20.0.0 <=26.x.x | Engine requirement |
| | SQLite | via better-sqlite3 | Database |
| **Shared** | React Select | 5.10.2 | Dropdown component |
| | Tabler Icons | 3.36.0 | Icon library |

## Development Notes

### Environment Setup
- Backend requires `.env` file in `packages/backend/` with keys like `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, etc.
- Example provided in `packages/backend/.env.example`
- Frontend uses Next.js defaults, no env file required for local dev

### Testing
- Frontend uses **Vitest** (not Jest) with React Testing Library
- Run single test: `npm run test -- path/to/test.spec.ts` (from frontend dir)
- Backend has no dedicated test commands (Strapi testing via manual API calls or Strapi testing utilities)

### Linting & Formatting
- **Frontend ESLint:** AirBnB config with TypeScript support, Prettier integration
- **Formatting:** Prettier configured in both packages
- Root `package.json` has Prettier and Husky (git hooks) as shared dependencies

### Database & Content Management
- SQLite database stored in `packages/backend/database/`
- Strapi auto-creates admin user on first run
- Seed data can be loaded via `npm run seed:example` (see `scripts/seed.js`)

### Building for Production
1. Backend: `npm run build` (from `packages/backend/`)
2. Frontend: `npm run build` (from `packages/frontend/`)
3. Run with: `npm run start` in each package

## Working with the Codebase

### Adding a New Content Type (Backend)
1. Create folder in `src/api/[content-type-name]/`
2. Add schema in `content-types/index.ts`
3. Add controller in `controllers/[name].ts`
4. Add routes in `routes/index.ts`
5. (Optional) Add service in `services/[name].ts` for business logic

### Adding a New Page (Frontend)
1. Create folder `app/[locale]/[page-name]/`
2. Add `page.tsx` file
3. Export metadata and component
4. Locale routing is automatic via middleware and `[locale]` prefix

### Fetching Data from Backend
- Frontend calls Strapi API at `http://localhost:1337/api/...`
- Content Types API endpoints: `/api/[content-type]` (e.g., `/api/articles`)
- See `app/lib/` for any data fetching utilities

## Git & Deployment
- Current branch: `strapi`
- Main development happens on feature branches; PRs merge to `main`
- No CI/CD config visible; deployment likely manual or via Strapi Cloud
