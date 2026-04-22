# Software Requirements Specification (SRS) & System Design Document

## Project Name: Bibaho Nibondhon (Digital Marriage & Divorce Registration System)

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the Software Requirements Specification (SRS) and System Design for "Bibaho Nibondhon", a comprehensive digital platform aimed at streamlining and modernizing the process of marriage and divorce registration in Bangladesh. This document serves as a blueprint for developers, stakeholders, and administrators to understand the system's requirements, features, and architectural design.

### 1.2 Scope
"Bibaho Nibondhon" is a secure web-based application designed to facilitate citizens in applying for marriage and divorce registrations online. It will additionally provide dedicated portals for Marriage Registrars (Kajis) to review, manage, and approve/reject applications within their jurisdictions, and an Administrator role to oversee the platform and verify Kaji credentials. 

### 1.3 Definitions, Acronyms, and Abbreviations
* **NID:** National Identity Card
* **Kaji:** A state-appointed marriage registrar authorized to conduct and register marriages and divorces under Islamic law.
* **Denmohor:** The financial settlement or gift given by the groom to the bride in an Islamic marriage.
* **Ukil:** The legal representative or guardian of the bride during a marriage.
* **ORM:** Object-Relational Mapping (e.g., Prisma)
* **SRS:** Software Requirements Specification

---

## 2. Overall Description

### 2.1 Product Perspective
The system is built as a standalone web platform utilizing modern web technologies. It provides three primary user interfaces: Citizens, Kajis, and System Administrators. It integrates with external services such as Stripe for payment processing and Cloudinary for media asset management.

### 2.2 User Characteristics
* **Citizens (Users):** General public utilizing the system to file for marriage or divorce. They are expected to have basic internet literacy and a valid NID.
* **Marriage Registrars (Kaji):** Government-authorized registrars who need an intermediate level of digital literacy to manage applications, update profiles, and perform digital verification.
* **Administrators:** Highly trusted personnel responsible for monitoring the platform, verifying Kaji applications, and maintaining system integrity.

### 2.3 Operating Environment
* **Client-Side:** Modern web browsers (Google Chrome, Mozilla Firefox, Safari, Edge) on desktop and mobile devices.
* **Server-Side:** Node.js environment (v18 or higher).
* **Database:** MongoDB (Atlas or local instance).

### 2.4 Design and Implementation Constraints
* **Authentication:** NextAuth.js is strictly utilized for handling NID-based user logins and role-based access.
* **Database Management:** Prisma ORM is strictly employed to interact with MongoDB.
* **Performance:** The platform must provide real-time status updates and efficiently manage high traffic specifically during wedding seasons.

### 2.5 Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Frontend Library:** React 18
* **Styling & UI:** Tailwind CSS, Ant Design (antd)
* **Animations:** Framer Motion
* **State Management:** Redux Toolkit
* **Authentication:** NextAuth.js v5
* **Database ORM:** Prisma
* **Database:** MongoDB
* **Payments:** Stripe
* **Media Storage:** Cloudinary
* **Data Fetching:** SWR & Axios

---

## 3. System Features & Functional Requirements

### 3.1 Citizen (User) Module
#### 3.1.1 NID-Based Authentication
* **Description:** Users must register and log in securely using their National Identity Number as the primary identifier.
* **Inputs:** NID and Password.
* **Outputs:** Secure session creation.

#### 3.1.2 Marriage Application Management
* **Description:** Users can fill out extensive forms detailing groom/bride data, witnesses, guardian (ukil), denmohor, and location.
* **Features:** Upload photos and digital signatures for the groom and bride. Select the respective Kaji for the designated area.
* **Status Tracking:** Users can view the real-time processing status of their application (Pending, Accepted, Rejected).

#### 3.1.3 Divorce Application Management
* **Description:** Legally binding divorce filing process detailing husband/wife info, witnesses, and the documented reason for separation.
* **Status Tracking:** Independent tracking for the divorce resolution state.

#### 3.1.4 Digital Payments
* **Description:** Secure payment of registration fees or Kaji service fees via Stripe integration.

### 3.2 Marriage Registrar (Kaji) Module
#### 3.2.1 Professional Profile Management
* **Description:** Kajis must register indicating their designated jurisdiction (Division, District, Upazila), government license number, and organizations.
* **Status:** Initial registrations are marked as `PENDING` until Administratively verified into `ACTIVE`.

#### 3.2.2 Application Processing
* **Description:** Access to a tailored dashboard displaying pending marriage and divorce applications routed to their specific jurisdiction.
* **Actions:** Approve (Accept) or Reject applications based on documentation validity and physical/legal constraints.

### 3.3 Administrator Module
#### 3.3.1 Kaji Verification
* **Description:** A specialized view to validate Kaji license details against government records before granting platform access. Admin changes status from `PENDING` to `ACTIVE` (or `REJECTED`).

#### 3.3.2 System Oversight
* **Description:** An all-encompassing oversight dashboard to monitor application throughput, view platform analytics, and manage systemic issues.

### 3.4 System Use Cases
* **UC-1: Register as a Citizen** - A new user signs up using their NID and password.
* **UC-2: Apply for Marriage** - A registered citizen fills out the marriage form, uploads proof, selects a Kaji, and submits the application.
* **UC-3: Track Application Status** - A citizen logs in to check if their application is PENDING, ACCEPTED, or REJECTED.
* **UC-4: Apply for Divorce** - A registered citizen submits a divorce application with reasons and witnesses.
* **UC-5: Pay Registration Fees** - A citizen pays government or Kaji fees securely via Stripe.
* **UC-6: Register as a Kaji** - A Kaji submits their NID, License Number, and geographical jurisdiction for admin review.
* **UC-7: Review Marriage/Divorce Application** - An active Kaji views pending applications in their jurisdiction and approves or rejects them based on validity.
* **UC-8: Verify Kaji Identity (Admin)** - An administrator reviews newly registered Kajis and activates their profile.
* **UC-9: System Analytics & Oversight (Admin)** - An administrator accesses the dashboard to view platform analytics and monitor registration throughput.

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements
* The system should support high concurrent application submissions without degradation in response time (page load under 2 seconds).
* Architecture utilizing React Server Components (Next.js) must reduce Client-side Javascript payloads.

### 4.2 Security Requirements
* Sensitive data such as Passwords must be heavily encrypted using `bcryptjs`.
* All API endpoints handling user-submitted data must be secured and robust against unauthorized access.
* Payment handling strictly adheres to PCI-DSS compliances provided via Stripe UI wrappers.

### 4.3 Data Integrity & Recovery
* Ensure atomicity while saving extensive interrelated application states.
* Database backups should be configured independently to ensure zero data-loss toleration mapping.

---

## 5. System Architecture & Design

### 5.1 Architecture Overview
The system follows a modern **Full-Stack Monolith Architecture** utilizing **Next.js 14 App Router**. 
* **Frontend:** React 18 with Server Components, tailored with Tailwind CSS and Ant Design. Redux is used to manage transient client state, while SWR/Server Actions manage data fetching.
* **Backend:** Next.js Server Actions and Route Handlers form the API layer.
* **Data Layer:** Prisma ORM translates object code directly to MongoDB schemas. 

### 5.2 Database Design (Schema Definition)
The database architecture incorporates three primary entity collections:
1. **User Collection:** Stores citizen data. Contains relation mappings to a single ongoing `MarriageApplication` or `DivorceApplication`.
2. **Kaji Collection:** Stores Registrar profiles. Linked to arrays of `MarriageApplication` and `DivorceApplication` entities assigned to them. Encompasses geographic limits and statuses (`PENDING`, `ACTIVE`, `REJECTED`).
3. **Application Collections (Marriage / Divorce):** Independent collections structuring the complex form data.
   * `MarriageApplication`: Structurally holds Groom info, Bride Info, Witness mapping, Marriage details (Denmohor, Date, Location), Digital Signatures, and Status Enums (`PENDING`, `ACCEPTED`, `REJECTED`).
   * `DivorceApplication`: Structurally holds Husband/Wife data, witnesses, reasonings, and Status Enums.

### 5.3 UI/UX Layout Design
* **Design Language:** Clean, formal, yet accessible UI using Ant Design and Tailwind CSS utilities. High utilization of white space, readable typography, and distinct notifications.
* **Animations:** Framer Motion enables smooth transition mappings between extensive multi-step forms (e.g., splitting Bride, Groom, Witness sections into progressive steps).
* **Responsive Design:** Fully mobile-first approach ensuring users can capture/upload identity requirements directly from their phone browsers.

### 5.4 Third-Party Integrations
* **Stripe:** Responsible for handling secure checkout sessions and webhook confirmations for final application submission processing.
* **Cloudinary:** Remote storage instance where groom/bride pictures and signature files are uploaded. Next.js accesses these via generated CDN URLs to prevent server resource exhaustion.

---
*End of Document*
