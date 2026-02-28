# BATAS AI Agent Working Standard

This file defines how AI agents must operate across all BATAS team repositories.

## 1) Mission
- Help teams deliver production-ready module features.
- Preserve shared architecture and design consistency.
- Reduce integration risk across all 16 teams.

## 2) Scope of Agent Changes
- Allowed: feature code, tests, docs, refactor with no behavior break, API client/server contract updates.
- Not allowed without explicit instruction: destructive git operations, credential changes, production secrets, deleting major modules.

## 3) Required Engineering Standards
- Language: TypeScript for frontend code.
- Architecture: modular, reusable components, clear separation of UI/domain/data.
- UI: must follow shared design tokens and components.
- Accessibility: keyboard support, semantic elements, labels, and contrast-compliant colors.
- Security: validate inputs, handle auth tokens safely, avoid sensitive data leaks.
- Observability: structured error logging and clear failure states.

## 4) Branching and Commit Policy
- Upstream workflow: every team must **fork this repository first**, then create feature/fix branches in the fork.
- Branch naming: `feature/<team>-<short-topic>` or `fix/<team>-<short-topic>`.
- Commit messages: Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`).
- AI traceability: for AI-assisted commits, include prompt context in commit body/footer:
  - `Prompt:` short summary of the request/instruction used
  - `Tooling:` agent/tool used (if applicable)
  - `Validation:` tests/checks run
- Keep commits focused and reversible.
- Keep a continuous history in your fork; do not squash away implementation history before instructor review unless explicitly requested.

## 5) Pull Request Standard
Each PR must include:
- Problem statement and approach.
- Changed files summary.
- Screenshots/GIF for UI changes.
- Test evidence (unit/integration/manual).
- API contract impact (if any).
- Risks and rollback notes.

## 6) Definition of Done (DoD)
A change is done only if:
- Code builds and lints successfully.
- Tests pass or test updates are included.
- New behavior is documented.
- No hardcoded team-specific style overrides violating shared design.
- Integration dependencies are respected.

## 7) API and Integration Discipline
- Use versioned endpoints (`/api/v1/...`).
- Keep to your team's assigned base path from root `README.md`.
- Keep frontend routes under your team's assigned namespace from root `README.md` Frontend Integration Plan.
- Do not silently change response schema.
- For breaking changes: update contract docs and notify impacted teams.
- Always include explicit error handling and typed response models.

## 8) Testing Expectations
- Add/adjust unit tests for logic changes.
- Add integration tests for cross-team contracts where possible.
- Include manual QA steps for UI workflows.

## 9) Documentation Updates
When code behavior changes, update:
- `README.md` (setup/use changes)
- SRS/SDD traceability entries (if requirements are affected)
- API docs/sample payloads

## 10) Agent Execution Workflow
1. Read task and identify impacted requirements.
2. Inspect existing code and contracts before editing.
3. Propose minimal safe change set.
4. Implement with clear typing and reusable patterns.
5. Run lint/tests/build.
6. Summarize what changed, why, and remaining risks.

## 11) Agentic Tool Best Practices
- Use AI/agent tools to accelerate delivery, but keep human ownership of final decisions.
- Verify generated code against team requirements, API contracts, and shared design tokens before commit.
- Ask agents for small, reviewable change sets instead of large one-shot rewrites.
- Require explicit test evidence for AI-generated logic.
- Never commit secrets, tokens, or private data from prompts or tool outputs.

## 12) Prompt Template for Team Usage
Use this structure when asking AI agents for coding tasks:

```text
Context:
- Team: TXX
- Module:
- Requirement IDs:
- Related API contracts:

Task:
- (exact feature/fix)

Constraints:
- Use shared design system
- Keep backward compatibility for existing contracts
- Add/adjust tests

Output expected:
- Code changes
- Test evidence
- Short risk note
```

## 13) Escalation Rules
- If requirements conflict with shared architecture, stop and flag the conflict.
- If integration contract is unclear, create a blocking question before implementing.
- If security/privacy impact is high, request human review before merge.
