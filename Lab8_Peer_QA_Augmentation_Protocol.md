# Lab 8 Peer QA Augmentation Protocol

Use this protocol to run deep peer QA on another team's project and extend their test coverage.

## Part A: Instructions

### Objective
Find real defects, improve test depth, and propose high-value enhancements.

### Reviewer Responsibilities
- Run the owner team's existing tests first.
- Add new tests for missing scenarios.
- Validate critical flows, negative cases, and boundary cases.
- Classify findings as:
  - Application bug
  - Spec ambiguity
  - Environment/setup issue
  - Enhancement opportunity

### Minimum Requirements
- Add at least 8 new tests (recommended baseline).
- Provide reproducible bug reports with evidence.
- Provide feature/enhancement suggestions with rationale.

## Part B: Submission Template

### 1) Review Metadata
- Reviewing Team:
- Reviewed Team:
- Product Name:
- Review Date:
- Build/Commit Reviewed:

### 2) Baseline Test Execution
| Command | Result (Pass/Fail) | Notes |
|---------|---------------------|-------|
| `npm test` |  |  |
| `npx playwright test` |  |  |

### 3) Added Test Cases
| Test ID | Layer (Unit/Integration/E2E) | Scenario | Why Missing Previously | Result |
|---------|-------------------------------|----------|------------------------|--------|
| T-01 |  |  |  |  |

### 4) Bug Findings
| Bug ID | Severity (Critical/High/Medium/Low) | Title | Steps to Reproduce | Expected | Actual | Evidence | Classification |
|--------|-------------------------------------|-------|--------------------|----------|--------|----------|----------------|
| B-01 |  |  |  |  |  |  |  |

### 5) Feature and Enhancement Suggestions
| Suggestion ID | Category (UX/Feature/Performance/Security) | Suggestion | Why It Helps | Priority |
|---------------|--------------------------------------------|------------|--------------|----------|
| E-01 |  |  |  |  |

### 6) QA Summary
- Total new tests added:
- Critical issues found:
- High issues found:
- Must-fix items before Lab 9:
1.
2.
3.
