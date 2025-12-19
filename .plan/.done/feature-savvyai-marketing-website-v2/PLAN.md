# SavvyAI Marketing Website v2

## Feature Summary

Two-page marketing website for SavvyAI positioning as an education-first AI partner.

**Branch:** `feature/savvyai-marketing-website-v2`

---

## Requirements

### Pages

1. **Homepage** (`/`) - Orient visitors, establish trust, introduce Savvy Pilot Protocol
2. **Protocol Page** (`/protocol`) - Deep-dive sales letter for the Savvy Pilot Protocol

### Design System

| Aspect       | Decision                                         |
| ------------ | ------------------------------------------------ |
| Visual Style | Swiss / modernist                                |
| Typography   | Inter (semibold for headlines, regular for body) |
| Background   | Light (white or very light gray)                 |
| Text         | Near-black (#111827 or similar)                  |
| Accent       | One restrained color for CTAs                    |
| Spacing      | Generous whitespace, grid-based                  |
| Animations   | None                                             |

### CTA Wiring

- Homepage CTAs: Link to `#book` anchor
- Protocol CTAs: Link to `/#book` (homepage booking section)
- CTA Labels:
  - Homepage: "Start with a Workshop", "Book a Conversation"
  - Protocol: "Book a Pilot", "Book Your Pilot Protocol"

### i18n Strategy

Use i18n at the **section level**:

- `homepage.hero`
- `homepage.problem`
- `homepage.belief`
- `homepage.howWeWork`
- `homepage.protocol`
- `homepage.pilot24`
- `homepage.audience`
- `homepage.cta`
- `homepage.booking`
- `protocol.hero`
- `protocol.comparison`
- `protocol.howItWorks`
- `protocol.deliverables`
- `protocol.faq`
- `protocol.cta`

### Navigation

- Minimal header
- Logo links to homepage
- Primary CTA links to `#book`
- "Explore the Savvy Pilot Protocol" links to `/protocol`

---

## Architecture Decisions

### 1. Component Organization

```
src/components/
├── legacy/           # Archived v1 components
├── marketing/        # New marketing components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx   # Reusable section wrapper
│   ├── CTAButton.tsx # Consistent CTA styling
│   └── BookingForm.tsx
├── home/             # Homepage-specific sections
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Belief.tsx
│   ├── HowWeWork.tsx
│   ├── Protocol.tsx
│   ├── Pilot24.tsx
│   ├── Audience.tsx
│   └── StartCTA.tsx
└── protocol/         # Protocol page sections
    ├── Hero.tsx
    ├── Comparison.tsx
    ├── HowItWorks.tsx
    ├── Deliverables.tsx
    ├── FAQ.tsx
    └── ReadyCTA.tsx
```

### 2. Route Structure

```
app/
├── page.tsx          # New homepage
├── layout.tsx        # Updated root layout (Inter font)
├── protocol/
│   └── page.tsx      # Protocol page
└── _archive/         # Reference only, not linked
    └── homepage-v1/
        └── page.tsx
```

### 3. Tailwind Theme Updates

- Add light theme colors to CSS variables
- Add Inter font configuration
- Keep existing dark theme available for future use

---

## Implementation Steps

### Phase 1: Setup

1. Archive existing homepage to `_archive/homepage-v1/`
2. Move existing components to `components/legacy/`
3. Configure Inter font in layout.tsx
4. Update Tailwind config with light theme colors
5. Create i18n translation files

### Phase 2: Shared Components

6. Create marketing Header component
7. Create marketing Footer component
8. Create Section wrapper component
9. Create CTAButton component
10. Create BookingForm component

### Phase 3: Homepage

11. Create Hero section
12. Create Problem section ("Why AI Feels Hard")
13. Create Belief section ("Our Belief")
14. Create HowWeWork section
15. Create Protocol section (intro)
16. Create Pilot24 section ("Why 24 Hours")
17. Create Audience section ("Who This Is For")
18. Create StartCTA section (final CTA)
19. Assemble homepage

### Phase 4: Protocol Page

20. Create Protocol Hero section
21. Create Comparison section ("Old Way vs Savvy Way")
22. Create HowItWorks section (phases)
23. Create Deliverables section ("What You Get")
24. Create FAQ section
25. Create ReadyCTA section
26. Assemble protocol page

### Phase 5: Verification

27. Browser verification with Playwright
28. Responsive testing
29. Console error check
30. Run build, lint, tests

---

## Color Palette (Proposed)

```css
/* Light Theme */
--background: #ffffff; /* Pure white */
--background-muted: #f9fafb; /* Gray 50 - subtle sections */
--foreground: #111827; /* Gray 900 - primary text */
--foreground-muted: #6b7280; /* Gray 500 - secondary text */
--accent: #0f766e; /* Teal 700 - CTA color */
--accent-hover: #0d9488; /* Teal 600 - CTA hover */
--border: #e5e7eb; /* Gray 200 - subtle borders */
```

---

## Known Constraints

- No em dashes anywhere in copy
- No animations or motion effects
- No additional pages beyond homepage and /protocol
- No pricing tables or testimonials
- Backend wiring for contact form is out of scope (TODO comment)

---

## Definition of Done

- [ ] Homepage renders all sections with exact copy
- [ ] Protocol page renders all sections with exact copy
- [ ] Navigation works correctly (logo, CTAs, protocol link)
- [ ] Booking form placeholder is functional with TODO comment
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] No console errors or warnings
- [ ] Build passes without errors
- [ ] Lint passes without errors
- [ ] Swiss/modernist visual style achieved

---

## Related ADRs

- [006. Swiss Modernist Light Theme Design System](../../../doc/decisions/006-swiss-modernist-light-theme.md)
- [007. Marketing Component Architecture](../../../doc/decisions/007-marketing-component-architecture.md)
- [008. Section-Level i18n Organization](../../../doc/decisions/008-section-level-i18n-organization.md)
