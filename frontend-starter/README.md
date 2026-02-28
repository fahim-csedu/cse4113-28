# Bangla Academy Frontend Starter

Shared frontend baseline for all 16 teams in Bangla Academy.

## Goals
- Keep UI consistent across all modules.
- Make cross-team integration predictable.
- Enforce a shared design system and project conventions.

## Tech Baseline
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Shadcn UI-compatible setup

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Team Onboarding Checklist
- Set your team code in `.env.local` (`NEXT_PUBLIC_TEAM_CODE=T01` ... `T16`).
- Add your module routes under `src/app/(module)/...`.
- Keep shared shell (`AppShell`) and design tokens unchanged unless approved globally.
- Add API client wrappers under `src/lib/`.
- Keep RBAC checks in route/page loaders and UI guards.

## Standard Folder Structure
```text
frontend-starter/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
    components/
      layout/
        app-shell.tsx
      ui/
        button.tsx
    config/
      navigation.ts
    lib/
      utils.ts
```

## Design Rules
- Use CSS variables in `globals.css` for colors/spacing/radius.
- Reuse shared UI primitives in `src/components/ui`.
- Do not hardcode random colors in feature pages.
- Keep all pages responsive for desktop + mobile.

## Integration Rules
- Use `NEXT_PUBLIC_API_BASE_URL` for service calls.
- Keep API contracts versioned (`/api/v1/...`).
- Handle error states and loading states consistently.
- Follow team-specific API base paths defined in root [`README.md`](../README.md).

## AI Agent Rules
Use the repository root [`AGENTS.md`](../AGENTS.md) when working with AI coding agents.
