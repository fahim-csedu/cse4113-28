# CSEDU Web Systems Lab
## Standard SRS Structure (For All Teams)

Version: `1.0`  
Document Type: `Team Module SRS`  
Applies To: `Team 01` to `Team 16`

---

## 1. Document Control

### 1.1 SRS Metadata
- Team Number:
- Team Name:
- Module Name:
- Repository URL:
- SRS Version:
- Status: `Draft | Review | Approved | Baseline`
- Date:

### 1.2 Authors & Reviewers
| Role | Name | ID/Email | Signature/Approval Date |
|------|------|----------|--------------------------|
| Author |  |  |  |
| Reviewer (Faculty) |  |  |  |
| Cross-Team Reviewer |  |  |  |

### 1.3 Revision History
| Version | Date | Author | Change Summary |
|---------|------|--------|----------------|
| 0.1 |  |  | Initial draft |

---

## 2. Introduction

### 2.1 Purpose
Define the purpose of this module and the intended audience of this SRS.

### 2.2 Scope
Describe module boundaries: what this team will build, and what is explicitly out of scope.

### 2.3 Definitions, Acronyms, Abbreviations
| Term | Definition |
|------|------------|
| CSEDU | Department of Computer Science and Engineering, University of Dhaka |
| SSO | Single Sign-On |
| RBAC | Role-Based Access Control |

### 2.4 References
- Course/project brief
- Shared design system documentation
- API standards document
- Other team interface contracts

---

## 3. System Context

### 3.1 Product Vision Alignment
How this module contributes to the intended product ecosystem or standalone project objective.

### 3.2 Context Diagram (Module Boundary)
- External actors
- External systems
- Upstream/downstream teams

### 3.3 Assumptions & Constraints
- Technical constraints (stack, auth, DB, deployment)
- Organizational constraints
- Timeline assumptions

---

## 4. Stakeholders & User Classes

### 4.1 Stakeholder List
| Stakeholder | Interest | Influence | Priority |
|-------------|----------|-----------|----------|

### 4.2 User Classes & Permissions
| User Class | Description | Access Level | Related Roles (RBAC) |
|------------|-------------|--------------|----------------------|

---

## 5. Functional Requirements

### 5.1 Functional Decomposition
Break module into features/subsystems.

### 5.2 Functional Requirement List (Mandatory Table)
Requirement ID format must be: `FR-TXX-###`  
Example: `FR-T05-001`

| Req ID | Feature | Requirement Statement | Priority (M/S/C/W) | Source | Acceptance Criteria |
|--------|---------|-----------------------|--------------------|--------|---------------------|

Rules:
- Use one atomic requirement per row.
- Statement should be testable and unambiguous.
- Map each requirement to at least one acceptance criterion.

### 5.3 Use Cases / User Stories
For each major feature:
- Use Case ID: `UC-TXX-###`
- Primary Actor
- Preconditions
- Main Flow
- Alternate/Exception Flows
- Postconditions
- Linked `FR` IDs

---

## 6. External Interface Requirements

### 6.1 UI/UX Requirements (Shared Design System Compliance)
Must include:
- Shared UI stack confirmation (`Tailwind CSS + Shadcn UI`)
- Theme tokens used (color, typography, spacing, components)
- Page/layout consistency rules
- Accessibility baseline (keyboard navigation, contrast, labels)

### 6.2 API Contracts (Inbound/Outbound)
Endpoint ID format: `API-TXX-###`

| API ID | Direction (In/Out) | Method | Endpoint | Auth | Request Schema | Response Schema | Error Codes | Owner Team |
|--------|---------------------|--------|----------|------|----------------|-----------------|------------|------------|

### 6.3 Event/Message Contracts (If applicable)
| Event ID | Producer | Consumer | Trigger | Payload Schema | Delivery Guarantee |
|----------|----------|----------|---------|----------------|-------------------|

### 6.4 Integration Dependencies
Dependency ID format: `INT-TXX-###`

| Dependency ID | Depends On Team | Purpose | Contract Type (API/Event/DB/File) | Blocking? (Y/N) | Fallback Behavior |
|---------------|------------------|---------|------------------------------------|-----------------|-------------------|

---

## 7. Data Requirements

### 7.1 Data Entities & Business Rules
Entity ID format: `ENT-TXX-###`

| Entity | Description | Key Fields | Validation Rules | Retention |
|--------|-------------|------------|------------------|-----------|

### 7.2 Data Dictionary
| Field Name | Type | Required | Constraints | Example |
|------------|------|----------|------------|---------|

### 7.3 ER Diagram / Logical Data Model
Attach diagram and explain relationships.

### 7.4 Data Migration / Seed Data (If needed)

---

## 8. Non-Functional Requirements

NFR ID format: `NFR-TXX-###`

### 8.1 Performance
| NFR ID | Metric | Target | Measurement Method |
|--------|--------|--------|--------------------|

### 8.2 Security & Privacy
- AuthN/AuthZ behavior
- Sensitive data handling
- Audit logging
- OWASP-relevant controls

### 8.3 Reliability & Availability
- Uptime target
- Backup/recovery expectations
- Failure handling

### 8.4 Scalability

### 8.5 Usability & Accessibility

### 8.6 Maintainability & Observability
- Logging, monitoring, tracing
- Coding/documentation standards

### 8.7 Localization
- Bangla/English content rules
- Unicode handling

---

## 9. Validation & Testability

### 9.1 Requirement Traceability Matrix (Mandatory)
| FR ID | NFR ID (if any) | Use Case ID | API ID | Test Case ID | Status |
|-------|------------------|-------------|--------|--------------|--------|

### 9.2 Acceptance Test Scenarios
Test ID format: `TC-TXX-###`

| Test ID | Linked Req IDs | Preconditions | Steps | Expected Result |
|---------|-----------------|---------------|-------|-----------------|

### 9.3 Integration Test Scenarios
Must include at least two cross-team integration tests.

---

## 10. Risks, Issues, and Open Decisions

### 10.1 Risk Register
| Risk ID | Description | Probability | Impact | Mitigation | Owner |
|---------|-------------|-------------|--------|------------|-------|

### 10.2 Known Issues / Technical Debt

### 10.3 Open Questions for Other Teams

---

## 11. Delivery Plan & Milestones

### 11.1 Phase Mapping
Map this SRS scope to Phase 1/2/3 outputs.

### 11.2 Milestone Checklist
- `M1`: SRS baseline approved
- `M2`: API contracts reviewed with dependent teams
- `M3`: Core features implemented
- `M4`: Integration tests passed

---

## 12. Appendices

### Appendix A: Diagrams
- Use case diagram
- ER diagram
- High-level flow diagram

### Appendix B: Sample Payloads
- API request/response examples

### Appendix C: Compliance Checklist (Mandatory)
| Item | Yes/No | Evidence Section |
|------|--------|------------------|
| Uses required heading structure |  |  |
| Uses required ID formats |  |  |
| Includes at least 2 integration dependencies |  |  |
| Includes traceability matrix |  |  |
| Includes design system compliance section |  |  |

---

## ID & Naming Convention (Global Rule)

- Team code: `T01` ... `T16`
- Functional requirement: `FR-TXX-###`
- Non-functional requirement: `NFR-TXX-###`
- Use case: `UC-TXX-###`
- API contract: `API-TXX-###`
- Integration dependency: `INT-TXX-###`
- Entity: `ENT-TXX-###`
- Test case: `TC-TXX-###`
- Risk: `RISK-TXX-###`

This prevents ID collisions when all team SRS documents are merged.

---

## Minimum Completion Criteria (For Submission)

A team SRS is considered complete only if all are true:
- All mandatory tables are filled.
- At least `15` functional requirements are documented (or justified if fewer).
- At least `8` non-functional requirements are documented.
- At least `2` confirmed integration dependencies are defined with contracts.
- Traceability matrix maps every `FR` to at least one `TC`.
- Shared design system compliance is explicitly described.
