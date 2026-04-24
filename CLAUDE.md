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

## MCP servers available

- `mcp__github__*` — GitHub (PRs, issues, branches, releases)
- `mcp__claude_ai_Linear__*` — Linear (tickets: team DEVELOPMENT, project Serapeum Landing, prefix DEV)

---

## Linear + GitHub workflow

**Linear team:** DEVELOPMENT · **Project:** Serapeum Landing · **Identifier prefix:** `DEV`

### Ticket state automation

- **Move to `In Progress` automatically** when starting work on a ticket — no need to ask.
- All other state transitions (`In Review`, `Done`, `Canceled`, etc.) require an explicit request.

### Starting a new feature

1. Create or pick a ticket in Linear (MCP or UI): assign to self, project = Serapeum Landing.
2. **Move ticket to `In Progress`** (automatic — no need to ask).
3. Create a branch: `git checkout -b feat/<short-description>`.
4. Implement, commit with conventional commits.
5. Create the PR: title must start with `[DEV-XX]`. Body should include `Closes DEV-XX`.
6. Move ticket to `In Review` when the PR is open (explicit request required).

### Available Linear states

| State | Use when |
|---|---|
| Backlog | Not yet started |
| Todo | Ready to pick up |
| In Progress | Actively working |
| In Review | PR open, awaiting review |
| Done | PR merged |
| Canceled / Duplicate | — |

---

## Commit conventions

- Format: `type(scope): description` (Conventional Commits)
- No `Co-Authored-By: Claude` in commits
- No Claude attribution in PR bodies
- PR title format: `[DEV-XX] type(scope): description`
