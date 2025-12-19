# Editorial "Paper & Ink" Theme Implementation Plan

> **Branch:** `design/editorial-paper-ink-theme`
> **Status:** IMPLEMENTED
> **Created:** 2025-12-19
> **Completed:** 2025-12-19

---

## Vision Summary

Transform SavvyAI.dev from "Workshop Authority Grammar" (light-mode default) to an "Editorial Paper & Ink" system that feels like a high-end design studio meets corporate institution. Target audience includes Fashion, Retail, and Design leaders alongside HR/Ops.

**Core Aesthetic:** Stark black/white "Zebra" rhythm with restrained Emerald accents.

---

## Implementation Summary

### Completed Tasks

1. **Installed framer-motion** - Added animation library for section transitions
2. **Added Geist Sans font** - Updated layout.tsx to use Geist Sans as primary font
3. **Updated CSS design tokens** - Created Paper & Ink theme system in globals.css
4. **Updated Tailwind config** - Added ink/paper colors, tighter tracking utilities
5. **Created FadeInSection** - Reusable Framer Motion animation wrapper
6. **Updated Section component** - Added ink/paper variants with automatic animations
7. **Refactored Header** - Dark floating glass style with backdrop blur
8. **Refactored Footer** - Ink black minimal design
9. **Updated CTAButton** - Sharp editorial edges, context-aware variants
10. **Created TrustBar** - Logo wall component with placeholder companies
11. **Created StatsGrid** - Business impact numbers on ink background
12. **Refactored Hero** - Massive billboard typography on ink background
13. **Refactored OurWorkshops** - Gallery board cards with editorial borders
14. **Refactored HowWeWork** - Technical blueprint with dashed connectors
15. **Refactored WorkshopOutcomes** - Artifact inventory with emerald checkmarks
16. **Updated all remaining sections** - Applied zebra rhythm throughout
17. **Updated page.tsx** - New section order with TrustBar and StatsGrid
18. **Fixed TypeScript errors** - Resolved type issues in bin/dev.ts

### Files Created

| File                                      | Purpose                                 |
| ----------------------------------------- | --------------------------------------- |
| `src/components/home/TrustBar.tsx`        | Logo wall with placeholder companies    |
| `src/components/home/StatsGrid.tsx`       | Business impact stats on ink background |
| `src/components/layout/FadeInSection.tsx` | Framer Motion animation wrapper         |

### Files Modified

| File                                         | Changes                                       |
| -------------------------------------------- | --------------------------------------------- |
| `app/layout.tsx`                             | Switched from Inter to Geist Sans font        |
| `app/globals.css`                            | Complete rewrite for Paper & Ink theme system |
| `app/page.tsx`                               | New section order with TrustBar and StatsGrid |
| `tailwind.config.ts`                         | Added ink/paper colors, editorial tracking    |
| `src/components/marketing/Section.tsx`       | Added ink/paper variants, Framer Motion       |
| `src/components/marketing/Header.tsx`        | Dark floating glass style                     |
| `src/components/marketing/Footer.tsx`        | Ink black minimal                             |
| `src/components/marketing/CTAButton.tsx`     | Sharp edges, context-aware                    |
| `src/components/marketing/BookingForm.tsx`   | Paper background, editorial styling           |
| `src/components/home/Hero.tsx`               | Massive billboard on ink background           |
| `src/components/home/OurWorkshops.tsx`       | Gallery board cards                           |
| `src/components/home/HowWeWork.tsx`          | Technical blueprint with dashed lines         |
| `src/components/home/WorkshopOutcomes.tsx`   | Artifact inventory                            |
| `src/components/home/Protocol.tsx`           | Refined ink styling                           |
| `src/components/home/HomeFAQ.tsx`            | Editorial FAQ cards                           |
| `src/components/home/Difference.tsx`         | Updated styling                               |
| `src/components/home/Safety.tsx`             | Ink background                                |
| `src/components/home/Pilot24.tsx`            | Paper background                              |
| `src/components/home/Audience.tsx`           | Paper background                              |
| `src/components/home/StartCTA.tsx`           | Ink background final CTA                      |
| `src/components/home/WhoThisIsFor.tsx`       | Paper styling                                 |
| `src/components/home/WorkshopsExplained.tsx` | Paper styling                                 |
| `src/components/home/index.ts`               | Added TrustBar and StatsGrid exports          |
| `src/components/layout/index.ts`             | Added FadeInSection export                    |
| `bin/dev.ts`                                 | Fixed TypeScript type issues                  |

---

## Section Order (Zebra Pattern)

| #   | Section            | Background      | Border                   |
| --- | ------------------ | --------------- | ------------------------ |
| 1   | Hero               | INK (#050505)   | -                        |
| 2   | TrustBar           | PAPER (#FFFFFF) | border-b border-black/10 |
| 3   | WhoThisIsFor       | PAPER           | -                        |
| 4   | OurWorkshops       | PAPER           | border-b border-black/10 |
| 5   | HowWeWork          | INK             | -                        |
| 6   | WorkshopsExplained | PAPER           | -                        |
| 7   | WorkshopOutcomes   | PAPER           | -                        |
| 8   | Protocol           | INK             | -                        |
| 9   | Pilot24            | PAPER           | -                        |
| 10  | Difference         | PAPER           | -                        |
| 11  | StatsGrid          | INK             | -                        |
| 12  | Safety             | INK             | -                        |
| 13  | HomeFAQ            | PAPER           | -                        |
| 14  | Audience           | PAPER           | -                        |
| 15  | StartCTA           | INK             | -                        |
| 16  | BookingForm        | PAPER           | -                        |

---

## Design System Summary

### Colors

- **Ink Black:** #050505 (dark sections)
- **Paper White:** #FFFFFF (light sections)
- **Emerald Accent:** #10B981 (CTAs, checkmarks only)
- **Borders (Ink):** white/10%
- **Borders (Paper):** black/10%

### Typography

- **Font:** Geist Sans (headings + body)
- **Mono Font:** Geist Mono (labels, stats)
- **Heading Style:** Bold, tracking-tighter (-0.04em)
- **Labels:** Mono, uppercase, tracking-widest

### Components

- **Cards:** rounded-md, context-aware borders
- **Buttons:** rounded-md (sharp editorial edges)
- **Sections:** Framer Motion fade-in animations

---

## Known Issues / Future Work

1. **TrustBar Logos:** Currently using placeholder text. Real company logos need to be provided.
2. **StatsGrid Data:** Using derived stats. Real data may need to be substituted.
3. **metadataBase Warning:** Next.js build shows warning about metadataBase not set.

---

## Verification

- [x] Build passes with no errors
- [x] TypeScript check passes
- [x] All sections follow zebra rhythm
- [x] Header is dark floating glass
- [x] Footer is ink black minimal
- [x] Typography uses Geist Sans
- [x] Emerald accent used sparingly
- [x] Fade-in animations on sections

---

## Related ADRs

- [019. Editorial Paper & Ink Theme](../../doc/decisions/019-editorial-paper-ink-theme.md)
- [020. Framer Motion for Section Animations](../../doc/decisions/020-framer-motion-section-animations.md)
- [021. Geist Sans Typography System](../../doc/decisions/021-geist-sans-typography.md)
