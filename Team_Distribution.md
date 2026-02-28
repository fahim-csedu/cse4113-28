# Bangla Academy Total Automation System
## Internet Programming Lab — Team Distribution & Project Outline

---

## Background

**Bangla Academy** is the premier institution dedicated to the promotion, preservation, and development of the Bengali language, literature, and culture. Established in 1955, it plays a vital role in linguistic research, literary publication, and organizing cultural events — most notably the **Amar Ekushey Book Fair**, Bangladesh's largest literary event, commemorating International Mother Language Day.

The academy functions through **eight distinct divisions**, each responsible for research, publication, translation, dictionary development, cultural activities, training, and administration. Over the decades, Bangla Academy has amassed vast literary and historical resources that now require modern digital solutions for efficient management and dissemination.

## The Need for Total Automation

Bangla Academy currently operates with several manual and semi-digital processes. These outdated methods lead to inefficiencies, data vulnerabilities, redundancies, and operational bottlenecks. This lab envisions a **Bangla Academy Total Automation System (BATAS)** — a centralized, cloud-enabled platform that integrates all administrative and operational functions to improve efficiency, collaboration, and service delivery.

## Unified System Architecture & Development Workflow

To avoid merge conflicts and simulate industry-standard decentralized development, this project will use an **Independent Microservices (Polyrepo)** architecture. Each team will operate with high autonomy while strictly adhering to shared contracts for integration.

- **Independent Repositories:** Each team will manage its own separate GitHub repository (e.g., `batas-team01-auth`, `batas-team02-mms`). You will build and run your applications as independent full-stack services.
- **API Gateway Routing:** A centralized API Gateway will stitch the system together by routing traffic to the appropriate team's service (e.g., `/api/v1/auth` to Team 01, `/api/v1/library` to Team 03).
- **Shared Authentication & Authorization:** All modules will authenticate against Team 01's central Single Sign-On (SSO) system using Role-Based Access Control (RBAC).
- **Micro-frontends & Navigation:** Team 01 will provide the portal shell and navigation bar. Menu links will redirect to the UIs hosted by the respective teams, providing a seamless experience for end-users.
- **Shared Design System (Tailwind CSS + Shadcn UI):** To ensure the final product looks like a single, cohesive application, all teams MUST standardize on **Tailwind CSS and Shadcn UI**. A **Shared Starter Template Repository** will be provided that comes pre-configured with the official Bangla Academy color palette, typography, and standard layout components. Every team must bootstrap their project from this exact template.
- **Cross-Team Integration via Docker:** Because each team builds independently, you will use **Docker and Docker Compose** for local integration. When testing features that depend on another team's API, you will easily spin up their services using a shared `docker-compose.yml` configuration.
- **Common Tech Stack (Recommended):** Frontend — React/Next.js; Backend — Node.js/Express or Django REST Framework; Database — PostgreSQL; Auth — JWT/OAuth 2.0.

---

## Team Distribution

### Team 01 — Central Authentication, User Management & Portal

**Module:** Core Platform & Identity Service

**Scope:**
- User registration (public users, members, authors, staff, agents) with email/phone verification
- Single Sign-On (SSO) and Role-Based Access Control (RBAC) engine
- User profile management (personal info, avatar, preferences)
- Unified dashboard/portal landing page that aggregates widgets from other modules
- Central notification service (in-app notification center, email/SMS dispatch queue)
- System-wide audit logging

**Key Deliverables:** Registration & login pages, admin panel for user/role management, notification API, portal dashboard shell, API gateway configuration.

---

### Team 02 — Manuscript Management System (MMS)

**Module:** Manuscript Submission, Review & Editorial Workflow

**Scope:**
- Author manuscript submission portal (file upload with metadata — title, abstract, keywords, category)
- Automated and manual reviewer assignment (based on expertise tags)
- Multi-stage review workflow: Submitted → Under Review → Revision Required → Accepted / Rejected
- Real-time status tracking dashboard for authors, reviewers, and editors
- Reviewer feedback forms with structured scoring and free-text comments
- Version control for manuscript revisions
- Notification triggers at each workflow stage

**Key Deliverables:** Submission form, reviewer dashboard, editorial admin panel, status tracker, review history log.

---

### Team 03 — Digital Library & Catalog System

**Module:** Library Management System (LMS)

**Scope:**
- Digital catalog with advanced search (by title, author, subject, ISBN, year, language)
- Book lending and return management with due-date tracking
- Member account with borrowing history, wishlist, and hold requests
- Barcode/QR-code integration for physical book check-in/check-out
- Overdue notifications and fine calculation
- Librarian admin panel for catalog CRUD, bulk import, and reporting
- Integration point with Team 04 (E-book) for unified catalog display

**Key Deliverables:** Public catalog search UI, member borrowing portal, librarian admin panel, barcode scanning interface, reports (popular books, overdue items).

---

### Team 04 — E-Book Conversion & Digital Reading Platform

**Module:** E-Book Repository & Reader

**Scope:**
- E-book upload and metadata management (EPUB, PDF formats)
- Online e-book reader with adjustable font size, bookmarking, highlighting, and annotation
- OCR pipeline interface: upload scanned pages → trigger OCR processing → review/correct output → publish as searchable e-book
- Bangla Unicode text rendering and search within e-books
- Categories, tags, and curated collections
- Integration with Team 03 (Library) for unified discovery and with Team 05 (E-Commerce) for paid e-book downloads

**Key Deliverables:** E-book upload admin, web-based reader, OCR workflow interface, e-book catalog page.

---

### Team 05 — Online Bookstore & E-Commerce Platform

**Module:** Book Sales & E-Commerce

**Scope:**
- Product catalog (physical books & e-books) with search, filter, and sort
- Shopping cart and multi-step checkout flow
- Real-time inventory sync between online and physical store stock
- Order management (placement, confirmation, processing, shipping status, delivery)
- Payment gateway integration (bKash, Nagad, card payments via SSLCommerz/Stripe)
- Order history, invoices, and digital receipts
- Customer reviews and ratings
- Integration with Team 06 (Discounts) for dynamic pricing

**Key Deliverables:** Storefront UI, cart & checkout, order tracking page, admin order management dashboard, payment integration.

---

### Team 06 — Member & Agent Discount Management

**Module:** Discount, Coupon & Loyalty Engine

**Scope:**
- Member/agent verification against central user database (Team 01)
- Rule-based discount engine: member tier discounts, agent commission rates, seasonal promotions, bulk order discounts
- Coupon code generation, distribution, and redemption tracking
- Real-time discount application at checkout (API consumed by Team 05)
- Agent sales tracking and commission reports
- Loyalty points system: earn on purchase, redeem for discounts
- Admin panel for creating/managing discount rules and campaigns

**Key Deliverables:** Discount rules admin, coupon management UI, loyalty points dashboard, agent commission report, checkout discount API.

---

### Team 07 — Event Management & Hall Booking System

**Module:** Events, Seminars & Venue Reservation

**Scope:**
- Event creation and publishing (name, date, venue, description, speakers, registration link)
- Public event calendar with filtering (by type, date, venue)
- Online event registration with ticket generation (QR-coded)
- Hall/venue booking: availability calendar, booking request, approval workflow, conflict detection
- Recurring event support (weekly seminars, annual book fair)
- Event check-in via QR scan
- Post-event feedback collection
- Admin panel for venue management, pricing, and booking approval

**Key Deliverables:** Public event listing page, registration form, hall availability calendar, booking request flow, admin approval dashboard, QR check-in interface.

---

### Team 08 — Membership & Payment Processing

**Module:** Membership Lifecycle & Online Payments

**Scope:**
- Membership application form with document upload (ID, photo, credentials)
- Membership tiers (General, Student, Lifetime, Institutional) with different privileges
- Online payment for new memberships and renewals (bKash, Nagad, card)
- Auto-renewal reminders and grace period handling
- Digital membership card generation (with QR code for verification)
- Payment history, receipts, and refund processing
- Membership directory (searchable, with privacy controls)
- Integration with Team 01 (Auth) for role assignment and Team 06 (Discounts) for member benefits

**Key Deliverables:** Membership application portal, payment checkout, digital card generator, renewal management, admin membership dashboard.

---

### Team 09 — Training Management System (TMS)

**Module:** Training Programs, Courses & Certification

**Scope:**
- Training program catalog (title, description, schedule, instructor, prerequisites, fee)
- Online application and selection workflow (apply → shortlist → confirm → enroll)
- Participant management (attendance per session, progress tracking)
- Online payment for training fees (integrated with payment gateway)
- Course materials upload and distribution (PDFs, slides, video links)
- Assessment/quiz module for participant evaluation
- Certificate generation upon completion (downloadable PDF with unique verification code)
- Trainer and participant feedback forms

**Key Deliverables:** Training catalog page, application flow, participant dashboard, assessment interface, certificate generator, admin panel.

---

### Team 10 — Human Resources & Attendance Management

**Module:** Employee Management, Attendance & Payroll

**Scope:**
- Employee database (personal info, designation, department/division, joining date, documents)
- Digital attendance logging (web check-in/check-out with IP/location, biometric integration placeholder)
- Leave management (apply, approve, balance tracking, leave calendar)
- Shift and schedule management
- Attendance reports (daily, monthly, division-wise)
- Payroll calculation based on attendance, leave, overtime
- Salary slip generation (downloadable PDF)
- HR admin panel for managing employees, departments, and policies

**Key Deliverables:** Employee portal (attendance, leave, payslips), HR admin dashboard, attendance reports, payroll module.

---

### Team 11 — Financial Management & Accounting

**Module:** Budgeting, Accounts & Financial Reporting

**Scope:**
- Chart of accounts and double-entry bookkeeping
- Budget creation and tracking per division/project
- Expense requisition and approval workflow (submit → review → approve → disburse)
- Revenue tracking (book sales from Team 05, membership fees from Team 08, training fees from Team 09, hall bookings from Team 07)
- Bank reconciliation interface
- Financial reports: income statement, balance sheet, cash flow, budget vs. actual
- Audit trail for all financial transactions
- Integration points with Teams 05, 07, 08, 09 for revenue data

**Key Deliverables:** Accounting dashboard, budget planner, expense approval flow, financial report generator, audit log viewer.

---

### Team 12 — Inventory & Asset Management

**Module:** Physical Asset Tracking & Inventory Control

**Scope:**
- Asset registry (furniture, equipment, IT assets, vehicles) with unique asset IDs and QR codes
- Asset lifecycle tracking: procurement → assignment → maintenance → disposal
- Real-time inventory tracking for consumables (stationery, printing supplies)
- Automated low-stock alerts and reorder point configuration
- Asset allocation per division/employee with transfer history
- Maintenance scheduling and service history logging
- Depreciation calculation for fixed assets
- Inventory audit and stocktake workflows

**Key Deliverables:** Asset registry UI, inventory dashboard, low-stock alerts, maintenance scheduler, asset assignment flow, depreciation report.

---

### Team 13 — Logistics & Transport Management

**Module:** Vehicle Fleet, Routing & Delivery

**Scope:**
- Vehicle registry (academy vehicles, rentals) with documents (registration, insurance, fitness)
- Vehicle booking and scheduling (trip request → approval → assignment)
- Route planning and trip logging (origin, destination, distance, purpose)
- Fuel consumption tracking and cost analysis
- Driver management (assignment, license tracking)
- Maintenance scheduling and service alerts
- Delivery tracking for book shipments (linked to Team 05 orders)
- Reports: vehicle utilization, fuel costs, maintenance expenses

**Key Deliverables:** Vehicle booking portal, trip log, fuel tracker, maintenance calendar, delivery status page, fleet dashboard.

---

### Team 14 — Document & Archive Management (DMS)

**Module:** Digital Archive, Folklore & Research Repository

**Scope:**
- Document upload with rich metadata (title, author, date, division, type, keywords, language)
- Support for multiple media types: text (PDF, DOCX), audio, video, images
- Folklore digital archive (songs, stories, proverbs) with regional/geographical tagging
- Full-text search across all archived documents (Bangla and English)
- Version history and document lifecycle (draft → review → published → archived)
- Access control: public, member-only, staff-only, restricted
- Bulk upload and batch metadata assignment
- Integration with Team 02 (Manuscripts) for published works archival

**Key Deliverables:** Archive upload interface, public search & browse portal, media viewer (audio/video player, document viewer), admin metadata editor.

---

### Team 15 — Content Management & Public Website

**Module:** CMS, Blog, News & Public Engagement

**Scope:**
- Public-facing website with dynamic content management (pages, news, announcements, blog)
- WYSIWYG content editor for non-technical staff
- Multi-language support (Bangla and English) with content translation workflow
- News and announcement publishing with categories and scheduling
- Photo and video gallery management
- Contact forms and inquiry management
- SEO optimization, sitemap generation, and social media meta tags
- Integration with Team 07 (Events) for homepage event highlights and Team 05 (Bookstore) for featured books

**Key Deliverables:** Public website frontend, CMS admin panel, news/blog section, gallery, contact page, language switcher.

---

### Team 16 — Analytics, Reporting & Admin Dashboard

**Module:** Business Intelligence & System-Wide Reporting

**Scope:**
- Centralized admin super-dashboard with KPIs from all modules
- Data visualization: charts, graphs, heatmaps (using Chart.js / D3.js / Recharts)
- Pre-built reports: sales performance, membership growth, library usage, event attendance, HR stats, financial summaries
- Custom report builder (select module, date range, filters → generate)
- Data export (PDF, Excel, CSV)
- System health monitoring: API response times, error rates, active users
- Usage analytics: most viewed books, popular events, peak login times
- Scheduled report delivery via email

**Key Deliverables:** Super admin dashboard, visual report pages, custom report builder, export functionality, system health panel.

---

## Integration Map

```
                        ┌──────────────────┐
                        │   Team 01        │
                        │  Auth & Portal   │
                        └────────┬─────────┘
                                 │ SSO / RBAC / Notifications
          ┌──────────┬───────────┼───────────┬──────────────┐
          │          │           │           │              │
     ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐  ┌──────▼──────┐
     │Team 02 │ │Team 03 │ │Team 07 │ │Team 10 │  │  Team 16    │
     │Manusc. │ │Library │ │Events  │ │  HR    │  │  Analytics  │
     └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘  └──────▲──────┘
         │          │          │          │               │
         │     ┌────▼───┐     │     ┌────▼───┐           │
         │     │Team 04 │     │     │Team 11 │     (reads from all)
         │     │E-Books │     │     │Finance │           │
         │     └────┬───┘     │     └────▲───┘           │
         │          │         │          │               │
         ▼     ┌────▼───┐    │     ┌────┤               │
     ┌───────┐ │Team 05 │    │     │    │               │
     │Team 14│ │E-Comm. ◄────┘     │ ┌──▼────┐          │
     │Archive│ └────┬───┘          │ │Team 12│          │
     └───────┘      │              │ │Assets │          │
                ┌───▼────┐         │ └───────┘          │
                │Team 06 │    ┌────▼───┐                │
                │Discount│    │Team 13 │                │
                └───┬────┘    │Logist. │                │
                    │         └────────┘                │
                ┌───▼────┐                              │
                │Team 08 │    ┌────────┐                │
                │Members ├───►│Team 09 │                │
                └────────┘    │Training│                │
                              └────┬───┘                │
                                   │                    │
                              ┌────▼───┐                │
                              │Team 15 │                │
                              │Website │────────────────┘
                              └────────┘
```

## Project Phases (Per Team)

| Phase | Deliverable | Description |
|-------|-------------|-------------|
| **Phase 1** | Software Requirements Specification (SRS) | Functional & non-functional requirements, use case diagrams, user stories, data dictionary, ER diagram |
| **Phase 2** | SDD-lite + API Contract Pack | Lightweight architecture and design notes, sequence flows, data model summary, generated OpenAPI spec, auth/error/examples for critical endpoints |
| **Phase 3** | Implementation & Demo | Working prototype with core features, API documentation, unit tests, integration test with at least one other team's module, live demo |

## Cross-Team Integration Requirements

Each team must implement **at least two integration points** with other teams' modules:

| Team | Must Integrate With |
|------|-------------------|
| Team 01 (Auth) | All teams (provides SSO) |
| Team 02 (Manuscripts) | Team 01 (Auth), Team 14 (Archive) |
| Team 03 (Library) | Team 01 (Auth), Team 04 (E-Books) |
| Team 04 (E-Books) | Team 03 (Library), Team 05 (E-Commerce) |
| Team 05 (E-Commerce) | Team 06 (Discounts), Team 13 (Logistics) |
| Team 06 (Discounts) | Team 05 (E-Commerce), Team 08 (Membership) |
| Team 07 (Events) | Team 01 (Auth), Team 11 (Finance) |
| Team 08 (Membership) | Team 01 (Auth), Team 06 (Discounts) |
| Team 09 (Training) | Team 08 (Membership), Team 11 (Finance) |
| Team 10 (HR) | Team 01 (Auth), Team 11 (Finance) |
| Team 11 (Finance) | Team 05 (E-Commerce), Team 10 (HR) |
| Team 12 (Assets) | Team 10 (HR), Team 11 (Finance) |
| Team 13 (Logistics) | Team 05 (E-Commerce), Team 12 (Assets) |
| Team 14 (Archive) | Team 02 (Manuscripts), Team 15 (Website) |
| Team 15 (Website) | Team 07 (Events), Team 05 (E-Commerce) |
| Team 16 (Analytics) | Team 11 (Finance), Team 01 (Auth) |

---

## Summary Table

| Team | Module Name | Primary Domain |
|------|------------|----------------|
| 01 | Central Auth & Portal | Identity, SSO, Notifications |
| 02 | Manuscript Management | Editorial Workflow |
| 03 | Digital Library & Catalog | Library Operations |
| 04 | E-Book Platform | Digital Reading & OCR |
| 05 | Online Bookstore | E-Commerce & Sales |
| 06 | Discount & Loyalty Engine | Pricing & Promotions |
| 07 | Events & Hall Booking | Venue & Event Management |
| 08 | Membership & Payments | Member Lifecycle |
| 09 | Training Management | Courses & Certification |
| 10 | HR & Attendance | Workforce Management |
| 11 | Financial Management | Accounting & Budget |
| 12 | Inventory & Assets | Asset Tracking |
| 13 | Logistics & Transport | Fleet & Delivery |
| 14 | Document & Archive | Digital Preservation |
| 15 | CMS & Public Website | Public Engagement |
| 16 | Analytics & Reporting | Business Intelligence |
