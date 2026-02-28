# QA Protocol (Lab 6 and Lab 7)

This protocol ensures teams test their own modules first, then peer teams augment and challenge those tests.

## Lab 6: Self-Test Pack (Owner Team)

Each team must submit:
- Test execution evidence (`npm test`, integration/e2e outputs, screenshots if needed)
- Coverage summary report
- Test plan mapping SRS acceptance criteria to tests
- Known issues list (with severity and workaround)

### Required Test Layers
- Unit tests for business logic and validation rules
- Integration tests for API endpoints and persistence behavior
- End-to-end tests for at least 3 critical user journeys
- Negative and edge-case tests (invalid input, auth failure, missing dependencies)

### Lab 6 Submission Checklist
- [ ] Test commands documented
- [ ] Tests run in clean environment
- [ ] Acceptance criteria mapping included
- [ ] Known issues documented
- [ ] Test data/seed instructions included

## Lab 7: Peer QA Augmentation (Reviewer Team)

Reviewer team responsibilities:
- Run owner team's existing tests first
- Add new tests that cover missed scenarios
- File reproducible bugs with evidence
- Evaluate UI quality, accessibility, and design-system compliance

### Minimum Peer QA Output
- New tests added by reviewer (recommended: 8-12 minimum)
- Bug report with severity and reproducible steps
- Coverage gap report against SRS acceptance criteria

### Bug Report Template
| Bug ID | Severity (Critical/High/Medium/Low) | Title | Steps to Reproduce | Expected | Actual | Evidence |
|--------|-------------------------------------|-------|--------------------|----------|--------|----------|
| B-01 |  |  |  |  |  |  |

### Test Augmentation Template
| Test ID | Layer (Unit/Integration/E2E) | Scenario | Why missing in owner tests | Result |
|---------|-------------------------------|----------|-----------------------------|--------|
| T-01 |  |  |  |  |

## Scoring Intent
- High score requires actionable failures, robust added tests, and clear evidence.
- "Everything works" with shallow or missing evidence should receive minimal credit.

## Final Gate Before Lab 8+
- Critical bugs from Lab 7 must be fixed or explicitly accepted with risk notes.
- Teams must update their tests to prevent regressions for discovered issues.
