# CLAUDE.md — Serapeum Landing

## Project overview

Next.js 15 landing page for the Serapeum app. Includes a live interactive Oracle demo that proxies requests to the production API via a server-side JWT handler. Deployed on Vercel at `serapeum.app`.

- **Framework:** Next.js 15.3.1 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript (strict)
- **Runtime:** Node.js (Vercel serverless)

---

## Key commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (usually port 3001 if 3000 is taken)
npm run build        # Production build (must pass before deploying)
npm run lint         # ESLint
```

---

## Directory structure

```text
src/
├── app/
│   ├── api/
│   │   └── chat/route.ts   # Server-side proxy → api.serapeum.app/orchestratorFlow
│   ├── globals.css          # Design system: tokens, Oracle bar animations, utilities
│   ├── layout.tsx           # Space Grotesk font, metadata
│   └── page.tsx             # Root page — composes all sections
└── components/
    ├── Nav.tsx              # Sticky nav, transparent → frosted on scroll
    ├── Hero.tsx             # ParticleBackground + OracleBars + CTA
    ├── Features.tsx         # 3-column feature cards + SectionHeader export
    ├── OracleDemo.tsx       # Live chat UI (calls /api/chat)
    ├── Architecture.tsx     # Layer diagram + Oracle pipeline
    ├── TechStack.tsx        # Tech grid
    ├── Download.tsx         # APK / DMG / iOS coming soon
    ├── Footer.tsx           # Links
    ├── OracleBars.tsx       # 3-bar Oracle animation (idle ↔ searching)
    └── ParticleBackground.tsx  # Canvas particle system (ssr: false)
```

---

## Design system

All tokens are in `src/app/globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `--color-accent` | `#930df2` | Primary violet — buttons, glows |
| `--color-accent-light` | `#b060ff` | Lighter violet |
| `--color-cyan` | `#60c8ff` | Accent cyan |
| `--color-surface` | `#1e1e1e` | Cards |
| `--color-surface2` | `#141414` | Sections |
| `--color-text-muted` | `#bdbdbd` | Secondary text |

Font: **Space Grotesk** (via `next/font/google`). Background: `#0d0d0d`.

### Oracle bar animation classes
- `.oracle-bar-idle` — white glow pulse + subtle drift
- `.oracle-bar-searching` — color cycle `#930df2 → #1e88e5 → #00897b → #ffb300`

---

## Oracle demo — how it works

1. User types a query in `OracleDemo.tsx`
2. `POST /api/chat` with `{ query: string }`
3. `src/app/api/chat/route.ts` signs in to Supabase with demo user credentials, caches the JWT, and proxies to `https://api.serapeum.app/orchestratorFlow` with `{ data: { query, language: "en" } }`
4. Response is `AgentResponseSchema`: `{ message: string, data?: { featured?, media[], books[], games[] } }`
5. Results rendered as `ResultCard` components with type badges

### Required env vars

```bash
SUPABASE_URL=          # Supabase project URL
SUPABASE_ANON_KEY=     # Supabase public anon key
DEMO_USER_EMAIL=       # demo@serapeum.app
DEMO_USER_PASSWORD=    # Must be quoted in .env.local if it contains #
```

In `.env.local` for local dev. In Vercel → Settings → Environment Variables for production (no quoting needed in Vercel UI).

---

## Key patterns

- `SectionHeader` is exported from `Features.tsx` and reused across all sections
- `ParticleBackground` is loaded with `dynamic(..., { ssr: false })` in `Hero.tsx` — canvas requires browser APIs
- `OracleBars` accepts `{ searching: boolean }` — switches CSS class for idle vs searching animation
- `/api/chat/route.ts` caches the Supabase access token in module scope (best-effort across warm serverless instances)

---

## Deployment

- **Platform:** Vercel, connected to `cmacera/serapeum-landing`
- **Domain:** `serapeum.app`
- **Auto-deploy:** every push to `main`
- **API:** `https://api.serapeum.app` (serapeum-api repo, separate Vercel project)

---

## Linear

**Project:** Serapeum Landing

