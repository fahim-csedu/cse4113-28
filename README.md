# CSEDU Project Tracks Guide

## Development Repository Policy
- Every team must develop in a **public Git repository** throughout the semester.
- Private development is not allowed for coursework submission.
- Teams must submit their **public repository link at the end of Lab 4**.
- Teams can create and manage their own repositories directly (forking this repo is not required).

## 1) Authentication Policy

### Default Shared Auth (for internal department systems)
- Use Google Sign-In (OAuth).
- Suggested domain mapping:
  - Students: `@cs.du.ac.bd`
  - Teachers and officers: `@cse.du.ac.bd`
- Keep role mapping explicit in documentation.

### Exception for Independent Public Apps
- Teams building fully public independent apps are not required to follow the shared auth rule.
- They may use any suitable auth approach, or no login if the product scope allows it.

## 2) Recommended Projects for Department Use

These projects reflect the department-oriented ideas and reduce fragmentation.

### Project A: Core Department Website + CMS + Scholarship + Events/Auditorium/Lab Booking
Module: CMS, Blog, News, Public Engagement, Events, Venue Reservation, Scholarship Management

Scope:
- Public-facing website with dynamic pages, news, announcements, and blog
- WYSIWYG CMS for non-technical staff
- Bangla/English multi-language support and translation workflow
- Gallery management (images/videos)
- Contact/inquiry forms and response tracking
- SEO metadata, sitemap generation, social sharing metadata
- Scholarship management:
  - publish scholarship notices
  - open/close application windows
  - support one-off and monthly scholarships
  - support multiple scholarship categories with different amounts
  - review and export applications
  - publish recipient lists
  - post regular scholarship updates
- Event publishing, public calendar, registrations, and Auditorium/Lab booking workflow
- Event check-in (QR) and post-event feedback
- Room/lab booking calendar for classes and events

Key Deliverables:
- Public website frontend
- CMS admin panel
- Scholarship management panel
- News/blog + gallery + contact + language switcher
- Event listing and hall/lab booking admin/approval workflows

### Project B: Academic Operations Suite
Module: Curriculum, Class Routine, Exam Routine, Invigilation Assignment

Scope: (Inspiration - https://routine.farefin.com/)
- Multi-version curriculum management
- Class and exam routine generation
- Conflict detection (room/time/teacher constraints)
- Invigilation assignment creator with constraints and workload balancing
- Publish/export schedules for students and faculty
- Thesis supervision and defense scheduling manager
- Find missing courses for a student who gets admitted to one curriculum and shifts to new curriculum (Example - https://docs.google.com/spreadsheets/d/1lX9IrMGa9XMRvncLe_Kd-c_v5P0Rr8GQT1wYOV1eT_Y/edit?gid=1463163706#gid=1463163706)
- Possible integration with last semester's billing system from Team Formula1

Key Deliverables:
- Planner/admin UI
- Conflict report view
- Published routine portal
- Invigilation roster generation and export

### Project C: CSEDU Students' Club Portal
Context source: [CSEDU Students' Club Constitution](https://docs.google.com/document/d/1cRhEzLumAzjyUBqJHPyJX3c5VUDqreub2800BtLxCuI/edit?tab=t.0)

Scope:
- Membership registration and rule acknowledgement workflow
- Executive committee role management aligned with constitution roles
- Election and committee-term tracking support
- Event/workshop/carnival planning and volunteer management
- Notice publication for policy actions (membership cancellation, decisions)
- Fund, budget, and periodic expenditure reporting support
- Media/publication workflow for club communication

Key Deliverables:
- Club public portal + member dashboard
- Executive operations panel
- Event/volunteer module
- Finance/reporting module

### Project D: Central Inventory and Infrastructure Management
Module: Department-Wide Inventory, Asset Tracking, Infrastructure Monitoring

Scope:
- Department-wide asset inventory (labs, classrooms, offices, devices, network hardware)
- Asset lifecycle tracking (procurement, allocation, transfer, maintenance, disposal)
- Server/PC usage and availability monitoring
- Allocation and usage tracking
- Health/status dashboard and incident logs
- Maintenance request and lifecycle tracking

Key Deliverables:
- Operations dashboard
- Booking/allocation workflow
- Asset registry and maintenance management

### Project E: VM Provisioning Portal
Module: Student VM Request and Provisioning Control

Scope:
- VM request and approval workflow
- Quota policies (CPU/RAM/storage/time)
- Lifecycle management (pending/running/stopped/expired)
- Usage and quota visibility
- Optional integration with infrastructure platform APIs

Key Deliverables:
- Request/approval portal
- Admin quota and provisioning controls
- Student VM lifecycle view

### Project F: Digital Knowledge Platform
Module: Digital Archive + Research Repository + Student Project Showcase + Digital Library & Catalog

Scope:
- Document/media uploads with rich metadata
- Multi-format media support (PDF, DOCX, audio, video, images)
- Search and browse (Bangla and English)
- Versioning and lifecycle (draft/review/published/archived)
- Access tiers (public/member/staff/restricted)
- Research outputs, lab portfolio, and student project showcase
- Bulk upload and metadata editing tools
- Advanced library catalog search
- Lending/return workflow with due tracking
- Member account features (history, wishlist, hold requests)
- Barcode/QR support for physical operations
- Overdue and fine management
- Librarian CRUD, import, and reporting

Key Deliverables:
- Archive upload and metadata editor
- Public search/browse and media viewer
- Research and showcase pages
- Public catalog portal
- Member borrowing workflow
- Librarian operations dashboard and reports

## 3) Suggested Additional Project Ideas 
- Internship and alumni placement tracker
- Department helpdesk and ticketing portal

## 4) Labs 2-10 Roadmap

### Lab 2: Problem Definition + SRS v1
- Problem scope, users, constraints, risks
- User stories and acceptance criteria
- Wireframes and data model draft

### Lab 3: Peer SRS Evaluation
- Review another team's SRS
- Log critical/important/suggestion issues
- Provide manual test cases and revision feedback

### Lab 4: Sprint 1 Implementation
- Talk to stakeholders
- Build initial vertical slices to distribute workload
- Ship working MVP flows
- Submit public repository link

### Lab 5: Sprint 2 Implementation
- Expand coverage and complete core flows
- Improve reliability and error handling

### Lab 6: Peer UI Critique (after two sprints)
- Usability and accessibility review
- Design consistency feedback with evidence
- Prioritized UI fixes list

### Lab 7: Testing Baseline
- Team-owned unit/integration/e2e setup
- Playwright coverage for critical flows

### Lab 8: Peer QA
- Another team extends tests and runs adversarial QA
- Bug findings plus feature suggestions are both required outputs
- Classify findings: bug, ambiguity, enhancement idea

### Lab 9: Hardening and Deployment Readiness
- Address critical bugs and high-value enhancements
- Final documentation, runbook, and deployment packaging

### Lab 10: Final Defense
- Live demo
- Architecture and implementation Q&A
- Test evidence and design rationale walkthrough

## 5) Marks Distribution
| Submission | Marks |
|------------|-------|
| Lab 2: Problem Definition + SRS v1 | 15 |
| Lab 3: Peer SRS Evaluation | 10 |
| Lab 4: SDD-lite + API Contract Pack | 10 |
| Lab 6: Peer UI Critique | 10 |
| Lab 8: Peer QA | 15 |
| Lab 10: Final Project Evaluation | 40 |
| **Total** | **100** |

Presentation labs:
- Labs 3, 6, 8, and 10 are team presentations during lab.
- Each of the evaluated labs still requires the corresponding written submission/artifacts.


## 6) Supporting Templates and Protocols
- [`Standard_SRS_Template.md`](./Standard_SRS_Template.md)
- [`Lab3_SRS_Review_Template.md`](./Lab3_SRS_Review_Template.md)
- [`Lab4_SDD_Lite_API_Contract_Template.md`](./Lab4_SDD_Lite_API_Contract_Template.md)
- [`Lab6_UI_Critique_Protocol.md`](./Lab6_UI_Critique_Protocol.md)
- [`Lab7_Testing_Baseline_Protocol.md`](./Lab7_Testing_Baseline_Protocol.md)
- [`Lab8_Peer_QA_Augmentation_Protocol.md`](./Lab8_Peer_QA_Augmentation_Protocol.md)
- [`Lab_Submission_Checklists.md`](./Lab_Submission_Checklists.md)
