# Bangla Academy Lab Kit

Shared course repository for the **Bangla Academy Total Automation System (BATAS)** lab.

This repository provides common standards and starter assets so 16 independent teams can build separate modules that merge into one cohesive product.

## Repository Contents
- [`Team_Distribution.md`](./Team_Distribution.md): full module distribution, integration map, and phase expectations.
- [`Standard_SRS_Template.md`](./Standard_SRS_Template.md): mandatory SRS structure all teams must follow.
- [`Lab3_SRS_Review_Template.md`](./Lab3_SRS_Review_Template.md): required format for peer SRS review.
- [`Lab4_SDD_Lite_API_Contract_Template.md`](./Lab4_SDD_Lite_API_Contract_Template.md): combined SDD-lite + API contract pack template.
- [`QA_Protocol_Lab6_Lab7.md`](./QA_Protocol_Lab6_Lab7.md): mandatory self-test and peer-QA protocol.
- [`Lab_Submission_Checklists.md`](./Lab_Submission_Checklists.md): pre-submission checklists for each lab.
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
9. Follow the **Frontend Integration Plan** section below for mandatory frontend base paths and final merge workflow.

## Lab Deliverables (Required)
| Lab | Submission |
|-----|------------|
| Lab 2 | Team SRS using [`Standard_SRS_Template.md`](./Standard_SRS_Template.md) |
| Lab 3 | Peer SRS review report using [`Lab3_SRS_Review_Template.md`](./Lab3_SRS_Review_Template.md) |
| Lab 4 | Combined SDD-lite + API contract pack using [`Lab4_SDD_Lite_API_Contract_Template.md`](./Lab4_SDD_Lite_API_Contract_Template.md) |
| Lab 6 | Self-test pack using [`QA_Protocol_Lab6_Lab7.md`](./QA_Protocol_Lab6_Lab7.md) |
| Lab 7 | Peer QA augmentation report using [`QA_Protocol_Lab6_Lab7.md`](./QA_Protocol_Lab6_Lab7.md) |

Lab 4 rule:
- API contract pack must include generated OpenAPI (`openapi.yaml` or `openapi.json`) plus human-written auth/error/examples.

## Before Submission (Quick Checklist)
- Lab 2: use [Lab_Submission_Checklists.md](./Lab_Submission_Checklists.md#lab-2-srs-submission-checklist)
- Lab 3: use [Lab_Submission_Checklists.md](./Lab_Submission_Checklists.md#lab-3-peer-srs-review-checklist)
- Lab 4: use [Lab_Submission_Checklists.md](./Lab_Submission_Checklists.md#lab-4-sdd-lite--api-contract-pack-checklist)
- Lab 6: use [Lab_Submission_Checklists.md](./Lab_Submission_Checklists.md#lab-6-self-test-pack-checklist)
- Lab 7: use [Lab_Submission_Checklists.md](./Lab_Submission_Checklists.md#lab-7-peer-qa-augmentation-checklist)

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

## Frontend Integration Plan (One Unified Website)
This defines how 16 independent team frontends will be combined into one Bangla Academy website without route conflicts.

### Final Integration Model
- All teams keep separate repositories and deployments.
- A central web gateway exposes one domain (example: `https://portal.example.edu`).
- Each team frontend is mounted under a unique frontend base path.
- Team 01 owns the global shell, authentication entry, and cross-module navigation.
- Team 01 defines and maintains the final gateway routing configuration.

### Mandatory Frontend Base Paths
| Team | Module | Frontend Base Path |
|------|--------|--------------------|
| T01 | Auth & Portal | `/portal/auth` |
| T02 | Manuscript Management | `/portal/manuscripts` |
| T03 | Library & Catalog | `/portal/library` |
| T04 | E-Book Platform | `/portal/ebooks` |
| T05 | E-Commerce | `/portal/store` |
| T06 | Discount & Loyalty | `/portal/discounts` |
| T07 | Events & Hall Booking | `/portal/events` |
| T08 | Membership | `/portal/memberships` |
| T09 | Training | `/portal/training` |
| T10 | HR & Attendance | `/portal/hr` |
| T11 | Finance & Accounting | `/portal/finance` |
| T12 | Inventory & Assets | `/portal/assets` |
| T13 | Logistics & Transport | `/portal/logistics` |
| T14 | Document & Archive | `/portal/archive` |
| T15 | CMS & Website | `/portal/cms` |
| T16 | Analytics & Reporting | `/portal/analytics` |

Rules:
- Do not create pages outside your assigned base path.
- Do not link directly to another team's internal child routes unless the route is documented and stable.

### Team Build Contract
- Build from `frontend-starter`.
- Set `NEXT_PUBLIC_APP_BASE_PATH` to your assigned frontend base path.
- Keep internal links route-relative (`/`, `/reports`, etc.) so Next.js applies base path automatically.
- Expose a health route under the same namespace (example: `/portal/library/health`).

### How Final Assembly Works
1. Team frontends are deployed as separate services/containers.
2. Team 01 gateway routes path prefixes to each team frontend service.
3. API Gateway routes `/api/v1/...` paths to team backends.
4. Team 01 shell links users into each module base path.
5. Shared SSO is used for authentication and RBAC.

### Final Integration Checklist
- Use the final checklist in [`Lab_Submission_Checklists.md`](./Lab_Submission_Checklists.md#final-integration-readiness-checklist-before-demo).

## Frontend Starter Setup
```bash
cd frontend-starter
npm install
cp .env.example .env.local
npm run dev
```

For deterministic installs, generate and commit `frontend-starter/package-lock.json` after the first install.

## Public Sharing Notes
- This repo is intended for educational use.
- No production credentials or secrets should be committed.
- Use issue and PR templates for standard communication.

## License
See [`LICENSE`](./LICENSE).
