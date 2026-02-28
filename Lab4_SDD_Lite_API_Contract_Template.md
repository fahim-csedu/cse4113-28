# Lab 4 Combined Deliverable: SDD-lite + API Contract Pack

This is a lightweight design and contract document for fast implementation and cross-team integration.

## 1) Team and Module Info
- Team:
- Module:
- Repository URL:
- Commit/Tag for this document:
- Related SRS version:

## 2) SDD-lite Architecture Summary

### 2.1 Context and Responsibilities
- Module responsibilities:
- Non-responsibilities (explicitly out of scope):
- Upstream dependencies:
- Downstream consumers:

### 2.2 Component Breakdown
List major components only.

| Component | Purpose | Inputs | Outputs | Notes |
|-----------|---------|--------|---------|-------|
|  |  |  |  |  |

### 2.3 Critical Flow Sequences
Describe at least two critical end-to-end flows.

Flow 1:
- Trigger:
- Steps:
1.
2.
3.
- Success result:
- Failure branches:

Flow 2:
- Trigger:
- Steps:
1.
2.
3.
- Success result:
- Failure branches:

### 2.4 Data Model Summary
- Core entities:
- Key relationships:
- Important constraints (unique, nullable, range, FK behavior):

## 3) API Contract Pack

### 3.1 Contract Files
- OpenAPI file location (`openapi.yaml` or `openapi.json`):
- API base path (must match assigned namespace):

### 3.2 Endpoint Inventory (Critical Endpoints)
List minimum 8 critical endpoints.

| Endpoint | Method | Auth Role(s) | Success Code | Error Codes | Consumer Team(s) |
|----------|--------|--------------|--------------|-------------|------------------|
| `/api/v1/...` |  |  |  |  |  |

### 3.3 Request/Response Examples
For each critical endpoint include:
- 1 successful request/response example
- 1 failure request/response example
- Validation rules and edge cases

### 3.4 Auth and Authorization Matrix

| Endpoint | Public/Auth Required | Allowed Roles | Forbidden Roles | Notes |
|----------|----------------------|---------------|-----------------|-------|
|  |  |  |  |  |

### 3.5 Error Contract
Standardize error response shape.

```json
{
  "error": {
    "code": "STRING_CODE",
    "message": "Human-readable message",
    "details": {}
  }
}
```

- List canonical error codes:
1.
2.
3.

### 3.6 Contract Change Policy
- Breaking change rules:
- Notification channel/process:
- Backward compatibility window:

## 4) Test Readiness for Other Teams
- Postman/Bruno collection location:
- Seed/test data setup steps:
- Known unstable endpoints (if any):
- Mock/stub guidance for unavailable dependencies:

## 5) Exit Checklist
- [ ] API namespace uses assigned `/api/v1/<team-path>`
- [ ] OpenAPI spec is generated and committed
- [ ] Auth matrix completed
- [ ] Error contract completed
- [ ] At least 8 critical endpoints documented with examples
- [ ] Dependencies and integration points are explicit
