# Lab 7 Testing Baseline Protocol

Use this protocol to define and submit your own project's baseline test suite before peer QA.

## Part A: Instructions

### Objective
Establish a reliable test baseline so peer teams can validate and extend it in Lab 8.

### Team Responsibilities
- Set up test structure for unit, integration, and e2e layers.
- Ensure critical user journeys are covered.
- Include negative and boundary-case tests.
- Provide deterministic run instructions.
- Ensure tests can run in a clean environment.

### Minimum Requirements
- Unit tests for core business rules.
- Integration tests for critical API/data flows (if applicable).
- Playwright e2e tests for core journeys.
- Clear mapping between SRS acceptance criteria and tests.

## Part B: Submission Template

### 1) Metadata
- Team:
- Project Name:
- Repository URL:
- Commit/Tag:
- Date:

### 2) Test Commands
| Command | Purpose | Result (Pass/Fail) | Notes |
|---------|---------|--------------------|-------|
| `npm test` |  |  |  |
| `npx playwright test` |  |  |  |

### 3) Coverage by Layer
| Layer | Number of Tests | Critical Flows Covered | Gaps |
|-------|-----------------|------------------------|------|
| Unit |  |  |  |
| Integration |  |  |  |
| E2E |  |  |  |

### 4) Acceptance Criteria Mapping
| SRS Story/Requirement ID | Test IDs | Status |
|--------------------------|----------|--------|
|  |  |  |

### 5) Known Issues
| Issue ID | Severity | Description | Workaround |
|----------|----------|-------------|------------|
| K-01 |  |  |  |
