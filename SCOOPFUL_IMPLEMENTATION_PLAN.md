# Scoopful Website Refinement & Partner Acquisition MVP
## Implementation Plan & Technical Architecture

**Client Prospect:** Scoopful (Scoops N Swirls Ice Cream LLP, Bengaluru)  
**Engineering Team:** ANSTAT Senior Product Engineering  
**Version:** 1.0.0  
**Target Delivery Date:** October 2026  

---

## 1. Architectural Strategy & Technology Stack

### 1.1 Core Foundations
- **Framework:** React 19 + TypeScript + Vite.
  - *Rationale:* Delivers blazing-fast client-side routing, rock-solid typing for complex franchise models and lead lifecycles, and a production bundle that loads instantly without framework bloat.
- **Styling Architecture:** Pure Vanilla CSS with Design System Tokens in `src/styles/design-system.css` and scoped modular CSS.
  - *Rationale:* Avoids generic Tailwind utility classes that lead to identical-looking templates. Allows handcrafted typographic nuances, artisanal color balances, and fluid responsive behaviors tailored specifically to Scoopful's identity.
- **Icons:** SVG icons via `lucide-react`. Consistent 1.75 stroke-width, aligned to font metrics. Zero emojis used in interface elements.
- **Assets:** Authentic, high-resolution Scoopful photography already downloaded from the live domain into `/public/img/` (hero honey sundae, pistachio scoop, dusk parlour render, daylight exterior, counter queues, training, cold chain, and 31 authentic menu photos).
- **Downloads:** Verified 2026 PDF guides hosted locally in `/public/downloads/` for 1-click customer access.

### 1.2 Routing Architecture
Using a robust client-side history router supporting clean browser URLs:
- `/` — Refined Consumer Homepage (artisanal hero, interactive flavour discovery, authentic brand story, verified outlets, customer reviews, commercial gateways).
- `/franchise` — Dedicated Franchise Investor Experience (FOCO vs FOFO comparison matrix, Founding Partner Programme under ₹10L, Compact vs Signature Parlours, process timeline, interactive ROI breakdown, downloadable prospectuses).
- `/partners` — Scoopful Commercial & B2B Partner Hub (overview of Franchise, Café Revenue Share, Territory Distribution, HORECA Bulk Supply, Corporate Catering, White-Label OEM + Interactive Qualification Flow).
- `/partner-dashboard` — Concept Operational Lead Management Dashboard (live lead storage, status pipeline, search, filters, lead inspection drawer, timeline notes, export, and secure pin protection).
- `/privacy-policy` & `/terms` — Authentic legal terms preserved from official records.

---

## 2. Design Tokens & Visual Language ("Scoopful Editorial Premium")

### 2.1 Color Palette
- **Deep Plum (`--color-plum: #3E2350`)**: Primary brand color for headlines, prominent buttons, and high-contrast accents.
- **Mauve (`--color-mauve: #7A4E8C`)**: Secondary brand accent for badges, interactive focus indicators, and subtitles.
- **Warm Vanilla (`--color-vanilla: #FFFBF3`)**: Primary page background offering an organic, creamy warmth rather than harsh clinical white.
- **Pure Paper (`--color-paper: #FFFFFF`)**: Card surfaces and contrast panels.
- **Rich Cocoa (`--color-cocoa: #3B2418`)**: Primary body copy color providing rich readability with warm undertones.
- **Soft Slate (`--color-soft: #54434E`)**: Subtitles and metadata (contrast ratio tuned to 5.4:1 against vanilla for WCAG AA compliance).
- **Artisanal Gold (`--color-gold: #FFB800`)**: Primary consumer and order action button background.
- **Gold Ink (`--color-gold-ink: #7A5600`)**: Deep gold accent text.
- **Cream Accent (`--color-cream: #FFF4D6`)**: Highlight badge backgrounds.
- **Soft Lilac (`--color-lilac: #F4ECF8`)**: Interactive hover states and subtle category chips.
- **Subtle Line (`--color-line: #E5DAEA`)**: Borders, table dividers, and structural rules.

### 2.2 Typography
- **Display Heading:** `Fraunces`, optical sizing 9..144, weights 500, 600, 700. Editorial, organic serif with high personality.
- **Body & UI:** `Work Sans`, weights 400, 500, 600. Clean, highly legible sans-serif with excellent micro-contrast.

---

## 3. Component Hierarchy & File Structure

```
scoopful/
├── public/
│   ├── assets/
│   │   ├── favicon-32.png
│   │   └── apple-touch-icon.png
│   ├── downloads/
│   │   ├── scoopful-franchise-partner-guide-2026.pdf
│   │   ├── scoopful-foco-franchise-prospectus-2026.pdf
│   │   ├── scoopful-fofo-franchise-prospectus-2026.pdf
│   │   └── scoopful-founding-partner-programme-2026.pdf
│   └── img/
│       ├── scoopful-logo.png
│       ├── hero-honey-sundae.jpg
│       ├── pistachio-scoop.jpg
│       ├── cover_dusk.jpg
│       ├── day_exterior.jpg
│       ├── wide_interior.jpg
│       ├── counter_queue.jpg
│       ├── training.jpg
│       ├── coldchain.jpg
│       └── menu/ (menu-01.jpg .. menu-31.jpg)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── CookieConsent.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FlavourGallery.tsx
│   │   │   ├── BrandDifferentiators.tsx
│   │   │   ├── StorySection.tsx
│   │   │   ├── OutletFinder.tsx
│   │   │   ├── CustomerReviews.tsx
│   │   │   ├── CafePartnershipTeaser.tsx
│   │   │   └── CommercialGateway.tsx
│   │   ├── franchise/
│   │   │   ├── FranchiseHero.tsx
│   │   │   ├── ModelComparison.tsx
│   │   │   ├── FoundingProgrammeCard.tsx
│   │   │   ├── FormatBreakdown.tsx
│   │   │   ├── FinancialAssumptions.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── FranchiseFAQ.tsx
│   │   │   └── DocumentDownloads.tsx
│   │   ├── partners/
│   │   │   ├── PartnerProgrammes.tsx
│   │   │   ├── QualificationWizard.tsx
│   │   │   └── WhatsAppHandshakePreview.tsx
│   │   ├── dashboard/
│   │   │   ├── DashboardHeader.tsx
│   │   │   ├── MetricsSummary.tsx
│   │   │   ├── LeadTable.tsx
│   │   │   ├── LeadFilters.tsx
│   │   │   ├── LeadDetailDrawer.tsx
│   │   │   └── DemoBadgeBanner.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Modal.tsx
│   │       └── Toast.tsx
│   ├── data/
│   │   ├── flavoursData.ts
│   │   ├── outletsData.ts
│   │   ├── franchiseData.ts
│   │   ├── reviewsData.ts
│   │   └── initialLeads.ts
│   ├── services/
│   │   ├── leadStorageService.ts
│   │   └── whatsappService.ts
│   ├── styles/
│   │   ├── design-system.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── dashboard.css
│   ├── types/
│   │   ├── lead.ts
│   │   └── franchise.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Key Functional Implementations

### 4.1 Resilient Lead Capture & WhatsApp Handshake Flow
1. **Step-by-Step Qualification:**
   - Step 1: Partner interest (Franchise, Café Freezer, Territory Distribution, HORECA, White Label) + Contact Info (Full Name, Phone, Email, City).
   - Step 2: Commercial qualification (Capital readiness, Timeline to launch, Experience in F&B, Site readiness with sq ft).
2. **Double-Save Guarantee:**
   - On submission, lead is immediately assigned an RFC4122 UUID, formatted with current timestamp and client attribution metadata, and written to persistent storage (`localStorage` + in-memory store).
   - A clear success confirmation displays the lead reference number (e.g. `SCP-2026-9482`).
3. **Smart WhatsApp Fallback:**
   - Once saved, user is offered the option to instantly launch WhatsApp with a cleanly encoded pre-filled message including their Lead Reference ID.
   - If WhatsApp fails to launch or user closes it, the lead is already permanently captured in the system and appears directly in Scoopful's `/partner-dashboard`.

### 4.2 Concept Partner Management Dashboard (`/partner-dashboard`)
1. **Security & PIN Access:**
   - Demo access gate with transparent founder demonstration PIN (`scoopful2026` or 1-click Instant Demo Access) preventing accidental search indexation.
2. **Pipeline Views & Metrics:**
   - Total Enquiries, High-Value Franchise Inquiries, Café Placements, Pipeline Capital Value, Pending Action count.
   - Distinct "Illustrative Concept Data" banner so live business metrics are never falsified.
3. **Lead Operations:**
   - Search across name, city, phone, and company.
   - Filter by status (`New`, `Contacted`, `Qualified`, `Site Scouted`, `LOI Sent`, `Agreement Signed`, `Disqualified`) and programme.
   - Interactive Detail Drawer: view full submission, change status, add internal notes, trigger direct WhatsApp or mailto action, copy lead summary.
   - CSV Export for CRM export.

---

## 5. Review & Verification Plan (Mandatory Iterative Loops)
- **Loop 1:** Discovery & Planning (Completed via `SCOOPFUL_AUDIT.md` and `SCOOPFUL_IMPLEMENTATION_PLAN.md`).
- **Loop 2:** Design System & Core Scaffold (Establish CSS tokens, components, routes, verify dev server starts).
- **Loop 3:** Desktop Visual Critique (1440px / 1280px browser review via `browser_subagent`, fix top 5 visual weaknesses).
- **Loop 4:** Mobile & Tablet Critique (390px / 360px / 768px viewports, fix spacing, touch targets, tables).
- **Loop 5:** Functional Validation (Menu navigation, modal order dialog, qualification wizard submit, WhatsApp prefill, lead status mutation in dashboard, error states).
- **Loop 6:** Accessibility & Performance Validation (Contrast checks, keyboard tabs, screen reader labels, zero console errors).
- **Loop 7:** Adversarial Creative Director Review (Eliminate generic elements, test brand authenticity).
- **Loop 8:** Final Regression & Documentation (`DESIGN_SYSTEM.md`, `QA_REPORT.md`, `DEMO_GUIDE.md`).
