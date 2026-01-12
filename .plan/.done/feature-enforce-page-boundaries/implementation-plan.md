# Implementation Plan: Enforce Page Boundaries

## Overview

Transform the homepage from a 15-section workshop-focused page to a 6-section positioning + routing page.

---

## Target Homepage Structure

```
┌─────────────────────────────────────┐
│ HERO (INK)                          │
│ - Positioning statement             │
│ - No formats, no delivery details   │
├─────────────────────────────────────┤
│ 01 TRUST (INK)                      │
│ - TrustBar with system-focused copy │
│ - "Teams running Śavvy AI systems"  │
├─────────────────────────────────────┤
│ 02 SYSTEMS (PAPER)                  │
│ - AI Literate card → /literate      │
│ - Product Bakery card → /bakery     │
│ - Onboarding System → /onboarding   │
├─────────────────────────────────────┤
│ 03 DIFFERENCE (INK)                 │
│ - Founder narrative                 │
│ - Why Śavvy AI is different         │
├─────────────────────────────────────┤
│ 04 ROUTING (PAPER)                  │
│ - View Workshops → /workshops       │
│ - Explore AI Literate → /literate   │
│ - Message on LinkedIn               │
├─────────────────────────────────────┤
│ FOOTER (INK)                        │
│ - Navigation only                   │
└─────────────────────────────────────┘
```

---

## Sections Being Removed/Relocated

| Section               | Component                | Action                    |
| --------------------- | ------------------------ | ------------------------- |
| 02 WhoThisIsFor       | `WhoThisIsFor.tsx`       | Remove (redundant)        |
| 03 OurWorkshops       | `OurWorkshops.tsx`       | Replace → SystemsOverview |
| 04 HowWeWork          | `HowWeWork.tsx`          | Move → /workshops         |
| 05 WorkshopsExplained | `WorkshopsExplained.tsx` | Move → /workshops         |
| 06 WorkshopOutcomes   | `WorkshopOutcomes.tsx`   | Move → /workshops         |
| 07 Protocol           | `Protocol.tsx`           | Move → /workshops         |
| 08 Pilot24            | `Pilot24.tsx`            | Move → /workshops         |
| 10 StatsGrid          | `StatsGrid.tsx`          | Remove (workshop metrics) |
| 11 Safety             | `Safety.tsx`             | Move → /workshops         |
| 12 HomeFAQ            | `HomeFAQ.tsx`            | Move → /workshops         |
| 13 Audience           | `Audience.tsx`           | Remove (redundant)        |
| 14 StartCTA           | `StartCTA.tsx`           | Remove (delivery funnel)  |
| 15 BookingForm        | `BookingForm`            | Remove from homepage      |

---

## New Components

### SystemsOverview.tsx

```tsx
// 3-column card grid
// Each card:
// - System name (AI Literate, Product Bakery, Onboarding System)
// - One-line purpose
// - Link to system page
// - No outcomes, no delivery details
```

### RoutingCTAs.tsx

```tsx
// Clean CTA section
// - View Workshops → /workshops
// - Explore AI Literate → /literate
// - Message on LinkedIn → external
```

---

## Implementation Phases

### Phase 1: New Components (Priority)

1. SystemsOverview.tsx
2. RoutingCTAs.tsx
3. i18n strings

### Phase 2: Homepage Modifications

4. Simplify Hero.tsx
5. Update TrustBar copy
6. Rewrite page.tsx

### Phase 3: Content Relocation

7. Expand /workshops with moved content
8. Update workshops.json

### Phase 4: Cleanup

9. Remove unused components
10. ADR-036

---

## Files Changed

### New Files

- `src/components/home/SystemsOverview.tsx`
- `src/components/home/RoutingCTAs.tsx`
- `doc/decisions/036-homepage-page-boundary-enforcement.md`

### Modified Files

- `app/page.tsx` (major rewrite)
- `app/workshops/page.tsx` (add sections)
- `src/components/home/Hero.tsx` (simplify)
- `src/components/home/TrustBar.tsx` (copy update)
- `src/components/home/index.ts` (exports)
- `src/i18n/locales/en/homepage.json` (major changes)
- `src/i18n/locales/en/workshops.json` (add content)

### Potentially Removed Files

- `src/components/home/WhoThisIsFor.tsx`
- `src/components/home/OurWorkshops.tsx`
- `src/components/home/HowWeWork.tsx`
- `src/components/home/WorkshopsExplained.tsx`
- `src/components/home/WorkshopOutcomes.tsx`
- `src/components/home/Protocol.tsx`
- `src/components/home/Pilot24.tsx`
- `src/components/home/StatsGrid.tsx`
- `src/components/home/Safety.tsx`
- `src/components/home/HomeFAQ.tsx`
- `src/components/home/Audience.tsx`
- `src/components/home/StartCTA.tsx`

---

## Risk Assessment

| Risk                   | Mitigation                                          |
| ---------------------- | --------------------------------------------------- |
| Breaking zebra pattern | Careful section ordering with INK/PAPER alternation |
| Lost SEO value         | Content moves to /workshops, not deleted            |
| User confusion         | Clear routing CTAs guide visitors                   |
| Missing content        | /workshops becomes comprehensive                    |

---

## Success Metrics

- Homepage loads with 6 sections
- All workshop content accessible via /workshops
- No "what happens when" content on homepage
- Build passes without errors
- Visual consistency maintained
