# Lab 3 SRS Review Template

Use this template when reviewing another team's SRS.

## 1) Review Metadata
- Reviewing Team:
- Reviewed Team:
- Reviewed Module:
- Review Date:
- SRS Version / Commit:

## 2) Executive Summary
- Overall clarity (1-5):
- Overall testability (1-5):
- Integration readiness (1-5):
- Top 3 risks:
1.
2.
3.

## 3) Findings by Severity
List each finding with evidence.

| ID | Severity (Critical/High/Medium/Low) | Area | Description | Evidence (Section/Page) | Suggested Fix |
|----|-------------------------------------|------|-------------|--------------------------|---------------|
| F-01 |  |  |  |  |  |

## 4) Interface and Dependency Checks
- Are external interface boundaries clear (APIs, files, forms, or services)?
- Are request/input and response/output shapes sufficiently defined (if applicable)?
- Are auth and role expectations explicit (if applicable)?
- Are error scenarios and failure states defined?
- Are dependencies and handoff points identified correctly?

Notes:
- 

## 5) Acceptance Criteria Audit
Select at least 8 critical user stories and mark status.

| Story ID | Testable? (Yes/No) | Ambiguity Found | Missing Edge Case | Recommendation |
|----------|--------------------|-----------------|-------------------|----------------|
| US-01 |  |  |  |  |

## 6) Data Model Audit
- Missing entities/relationships:
- Field constraints missing (length/null/unique/index/range):
- Potential normalization issues:
- PII/security/privacy concerns:

## 7) Final Recommendation
- Release readiness for implementation sprint:
  - [ ] Ready
  - [ ] Ready with conditions
  - [ ] Not ready
- Mandatory fixes before Lab 4:
1.
2.
3.
