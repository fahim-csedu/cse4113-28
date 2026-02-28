# Bangla Academy Lab Kit

Shared course repository for the **Bangla Academy Total Automation System (BATAS)** lab.

This repository provides common standards and starter assets so 16 independent teams can build separate modules that merge into one cohesive product.

## Repository Contents
- [`Team_Distribution.md`](./Team_Distribution.md): full module distribution, integration map, and phase expectations.
- [`Standard_SRS_Template.md`](./Standard_SRS_Template.md): mandatory SRS structure all teams must follow.
- [`frontend-starter/`](./frontend-starter): shared frontend baseline (Next.js + TypeScript + Tailwind + shadcn-compatible setup).
- [`AGENTS.md`](./AGENTS.md): canonical AI-agent working standard.

## How Students Should Use This Repo
1. Read the module scope in `Team_Distribution.md`.
2. Fork this repository to your team GitHub organization/account and keep your work in the fork.
3. Create your team repository/module implementation from `frontend-starter`.
4. Keep feature/fix branches in your fork and open PRs with full implementation history.
5. Use Conventional Commits and include AI prompt traceability in commit body/footer for AI-assisted work (`Prompt:`, `Tooling:`, `Validation:`).
6. Prepare your SRS using `Standard_SRS_Template.md`.
7. Follow `AGENTS.md` rules for AI-assisted development.
8. Keep integration contracts versioned and stable (`/api/v1/...`).

## Canonical API Namespace Map
To avoid endpoint collisions, each team must keep all module APIs under its assigned base path:

| Team | Module | Base Path |
|------|--------|-----------|
| T01 | Auth & Portal | `/api/v1/auth` |
| T02 | Manuscript Management | `/api/v1/manuscripts` |
| T03 | Library & Catalog | `/api/v1/library` |
| T04 | E-Book Platform | `/api/v1/ebooks` |
| T05 | E-Commerce | `/api/v1/store` |
| T06 | Discount & Loyalty | `/api/v1/discounts` |
| T07 | Events & Hall Booking | `/api/v1/events` |
| T08 | Membership | `/api/v1/memberships` |
| T09 | Training | `/api/v1/training` |
| T10 | HR & Attendance | `/api/v1/hr` |
| T11 | Finance & Accounting | `/api/v1/finance` |
| T12 | Inventory & Assets | `/api/v1/assets` |
| T13 | Logistics & Transport | `/api/v1/logistics` |
| T14 | Document & Archive | `/api/v1/archive` |
| T15 | CMS & Website | `/api/v1/cms` |
| T16 | Analytics & Reporting | `/api/v1/analytics` |

Rule:
- New endpoints must be created only under your team base path (for example, Team 02 uses `/api/v1/manuscripts/submissions`).
- Do not create top-level sibling namespaces owned by another team.

## Frontend Starter Setup
```bash
cd frontend-starter
npm install
cp .env.example .env.local
npm run dev
```

For deterministic installs, generate and commit `frontend-starter/package-lock.json` after the first install.

## Mandatory Standards
- Shared design system: Tailwind CSS + shadcn-compatible patterns.
- Consistent requirement IDs and traceability matrix in SRS.
- Minimum two cross-team integration points per module.
- PRs must include test evidence and contract impact notes.

## Suggested Student Submission Artifacts
- SRS (Phase 1)
- SDD + API contract docs (Phase 2)
- Working module + test evidence + integration demo (Phase 3)

## Public Sharing Notes
- This repo is intended for educational use.
- No production credentials or secrets should be committed.
- Use issue and PR templates for standard communication.

## License
See [`LICENSE`](./LICENSE).
