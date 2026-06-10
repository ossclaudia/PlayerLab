# PlayerLab — PRD

## Problem Statement
Premium, modern, high-end landing page for **PlayerLab**, a football development academy at the football fields of Sanguedo, Portugal. The site must feel closer to Nike/Adidas elite sports performance brand than a traditional football school. Dark theme, electric blue (#0055FF) accent, Portuguese (PT) language, with three specialised development areas: Technique, Performance and Position.

## User Choices
- **Accent color**: Electric Blue (#0055FF)
- **Language**: Portuguese (PT)
- **Coaches**: fictional placeholder profiles with generic photos
- **Registration form**: functional, persisted in MongoDB
- **Location map**: real embedded Google Maps iframe (Sanguedo, Santa Maria da Feira)

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + lucide-react. Single page with anchor scroll sections.
- **Backend**: FastAPI + Motor + MongoDB. Single resource: `registrations`.
- **Design system**: Barlow Condensed (headings) + Manrope (body), `#0A0A0A` ink palette, electric blue accent, no rounded corners, grain/glow utilities.

## Pages / Sections (implemented)
1. Hero — cinematic image, "DESENVOLVE O TEU JOGO" + CTAs
2. Manifesto — split layout
3. Three Labs — Technique / Performance / Position cards
4. Development Process — vertical timeline (4 steps)
5. Why PlayerLab — 6 feature grid
6. Training Experience — bento gallery
7. Coaches — 3 profile cards (placeholders)
8. Location — info + Google Maps iframe
9. FAQ — shadcn accordion (5 questions)
10. Final CTA
11. Footer

## Backend Endpoints
- `GET /api/` health
- `POST /api/registrations` — create inscription
- `GET /api/registrations` — list inscriptions (recent first)
- `GET /api/stats` — total + labs metadata

## Implemented (2026-06-10)
- Full landing page in Portuguese with all 11 sections
- Functional registration dialog (modal) bound to `POST /api/registrations`
- Validations: name 2-100, age 6-25, valid email, lab_interest enum, phone ≥6
- Embedded Google Maps with custom dark/invert filter
- Smooth scroll, framer motion entrance + hover animations
- Mobile responsive navbar with drawer
- All data-testid attributes for QA
- 100% backend tests (9/9) + frontend Playwright tests pass

## Prioritised Backlog
**P1**
- Add admin dashboard to view/manage registrations
- Email confirmation (Resend / SendGrid) when a registration is submitted
- Replace coach placeholders with real profiles + photos
- Add a press / media kit section

**P2**
- Multi-language toggle (PT / EN)
- Schedule/calendar of available training sessions
- Testimonials / parents quotes section
- SEO meta + Open Graph tags + sitemap

**P3**
- Stripe-based deposit for registration
- Player progress portal (private area)
