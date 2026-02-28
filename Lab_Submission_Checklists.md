# Lab Submission Checklists

Use this file as the final pre-submission checklist for each lab.

## Lab 2: SRS Submission Checklist
- [ ] SRS follows [`Standard_SRS_Template.md`](./Standard_SRS_Template.md).
- [ ] At least 12 user stories have clear, testable acceptance criteria.
- [ ] Data model and constraints are documented.
- [ ] Inbound and outbound API dependencies are listed.
- [ ] Requirement IDs are consistent and traceable.
- [ ] Document includes unresolved risks and assumptions.

## Lab 3: Peer SRS Review Checklist
- [ ] Review report follows [`Lab3_SRS_Review_Template.md`](./Lab3_SRS_Review_Template.md).
- [ ] Findings are categorized by severity.
- [ ] At least 8 critical user stories are audited for testability.
- [ ] Integration and contract blindspots are explicitly listed.
- [ ] Mandatory fixes before Lab 4 are clearly stated.

## Lab 4: SDD-lite + API Contract Pack Checklist
- [ ] Document follows [`Lab4_SDD_Lite_API_Contract_Template.md`](./Lab4_SDD_Lite_API_Contract_Template.md).
- [ ] SDD-lite includes module context, components, and 2 critical flows.
- [ ] Data model summary includes key constraints.
- [ ] OpenAPI file (`openapi.yaml` or `openapi.json`) is generated and committed.
- [ ] At least 8 critical endpoints include success/failure examples.
- [ ] Auth matrix and error contract are complete.
- [ ] API namespace uses assigned `/api/v1/<team-path>`.

## Lab 6: Self-Test Pack Checklist
- [ ] Follow [`QA_Protocol_Lab6_Lab7.md`](./QA_Protocol_Lab6_Lab7.md) owner-team requirements.
- [ ] Unit, integration, and end-to-end tests are included.
- [ ] At least 3 critical user journeys are covered by e2e tests.
- [ ] Negative and edge-case tests are present.
- [ ] Test evidence and run commands are included.
- [ ] SRS acceptance criteria to tests mapping is attached.
- [ ] Known issues and limitations are documented.

## Lab 7: Peer QA Augmentation Checklist
- [ ] Follow [`QA_Protocol_Lab6_Lab7.md`](./QA_Protocol_Lab6_Lab7.md) reviewer-team requirements.
- [ ] Assigned team's baseline tests were run first.
- [ ] New peer-added tests are included (recommended: 8-12 minimum).
- [ ] Bug report includes severity, repro steps, expected vs actual, and evidence.
- [ ] Coverage gap report against SRS acceptance criteria is included.
- [ ] UI/accessibility/design-system findings are documented.

## Final Integration Readiness Checklist (Before Demo)
- [ ] Frontend routes are under assigned `/portal/<module>` base path.
- [ ] Team 01 gateway mapping has been verified for this module.
- [ ] API endpoints stay under assigned `/api/v1/<team-path>`.
- [ ] Authentication and role checks work for protected flows.
- [ ] Cross-team dependencies are smoke-tested and documented.
- [ ] Critical Lab 7 bugs are resolved or risk-accepted with notes.
