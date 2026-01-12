# Feature: Enforce Page Boundaries + Remove Workshop Duplication

**Branch:** `feature/enforce-page-boundaries`
**Status:** In Progress
**Created:** 2026-01-11

---

## Summary

Architectural refactor to enforce page responsibility boundaries. The homepage is reduced to **positioning + routing only** (5-6 sections). Workshop-specific content is relocated to `/workshops`. A new Systems Overview section replaces workshop cards.

## Enforcement Rule

> **If a section explains "what happens when," it cannot live on the homepage.**

---

## Final Homepage Structure (Target)

| #   | Section    | Content                                              | Background |
| --- | ---------- | ---------------------------------------------------- | ---------- |
| -   | Hero       | Positioning only, no formats                         | INK        |
| 01  | Trust      | TrustBar with system-focused copy                    | INK        |
| 02  | Systems    | AI Literate, Product Bakery, Onboarding System cards | PAPER      |
| 03  | Difference | Founder POV, why Savvy AI is different               | INK        |
| 04  | Routing    | CTAs to /workshops, /literate, LinkedIn              | PAPER      |
| -   | Footer     | Navigation only                                      | INK        |

---

## Current Section Migration Table

| Current # | Component                | Current Content                           | Decision    | Destination                    |
| --------- | ------------------------ | ----------------------------------------- | ----------- | ------------------------------ |
| Hero      | `Hero.tsx`               | Billboard + CTAs                          | **MODIFY**  | Homepage (simplify CTAs)       |
| 01        | `TrustBar.tsx`           | Company logos                             | **KEEP**    | Homepage (update copy)         |
| 02        | `WhoThisIsFor.tsx`       | Audience bullets                          | **REMOVE**  | N/A (redundant)                |
| 03        | `OurWorkshops.tsx`       | Workshop cards                            | **REPLACE** | Homepage → SystemsOverview     |
| 04        | `HowWeWork.tsx`          | 4-step process                            | **MOVE**    | /workshops                     |
| 05        | `WorkshopsExplained.tsx` | "What Happens in a Workshop"              | **MOVE**    | /workshops                     |
| 06        | `WorkshopOutcomes.tsx`   | "What Teams Leave With"                   | **MOVE**    | /workshops                     |
| 07        | `Protocol.tsx`           | 3-phase pilot protocol                    | **MOVE**    | /workshops                     |
| 08        | `Pilot24.tsx`            | 24-hour pilot justification               | **MOVE**    | /workshops                     |
| 09        | `Difference.tsx`         | Founder narrative + comparison            | **KEEP**    | Homepage                       |
| 10        | `StatsGrid.tsx`          | Business impact numbers                   | **REMOVE**  | N/A (workshop-focused metrics) |
| 11        | `Safety.tsx`             | Data/security assurance                   | **MOVE**    | /workshops (or remove)         |
| 12        | `HomeFAQ.tsx`            | FAQ questions                             | **MOVE**    | /workshops                     |
| 13        | `Audience.tsx`           | Final qualification check                 | **REMOVE**  | N/A (redundant)                |
| 14        | `StartCTA.tsx`           | "Every Engagement Starts with a Workshop" | **REMOVE**  | N/A (delivery funnel)          |
| 15        | `BookingForm`            | Contact form                              | **REMOVE**  | N/A (moved to /workshops)      |

---

## New Components Required

### 1. SystemsOverview.tsx

- 3-card grid for AI Literate, Product Bakery, Onboarding System
- Each card: Name + one-line purpose + link to system page
- No outcomes, no delivery details
- Follows zebra pattern (PAPER background)

### 2. RoutingCTAs.tsx

- Primary navigation section before footer
- CTAs: View Workshops, Explore AI Literate, Message on LinkedIn
- Clean, minimal design

---

## i18n Changes Required

### homepage.json

- Remove: ourWorkshops, howWeWork, workshopsExplained, workshopOutcomes, protocol, pilot24, stats, safety, homeFaq, audience, finalCta
- Add: systemsOverview (new section)
- Modify: hero (simplify), trustBar (system-focused copy)

### workshops.json

- Add: Relocated content from homepage (howWeWork, workshopsExplained, outcomes, protocol, pilot24, faq)

---

## Implementation Steps

### Phase 1: Create New Homepage Components

1. Create `SystemsOverview.tsx` component
2. Create `RoutingCTAs.tsx` component
3. Add i18n strings for new sections

### Phase 2: Modify Existing Homepage Components

4. Simplify `Hero.tsx` (remove delivery-focused CTAs)
5. Update `TrustBar.tsx` copy to be system-focused
6. Review/simplify `Difference.tsx` if needed

### Phase 3: Update Homepage Page

7. Rewrite `app/page.tsx` with new 6-section structure
8. Update section numbering (ADR-029 compliance)

### Phase 4: Relocate Content to /workshops

9. Add relocated sections to `/workshops` page
10. Update workshops.json with moved content
11. Ensure /workshops is comprehensive for delivery detail

### Phase 5: Cleanup

12. Remove unused homepage components
13. Remove unused i18n strings
14. Update any internal links

### Phase 6: ADR Documentation

15. Create ADR-036: Homepage Page Boundary Enforcement

---

## Acceptance Criteria

- [ ] Homepage no longer explains workshops
- [ ] Homepage has 5-6 sections only
- [ ] /workshops is the single source of truth for delivery detail
- [ ] /literate remains system-focused and abstract
- [ ] No workshop-specific sections remain on homepage
- [ ] Adding a new system does not require homepage changes
- [ ] TrustBar copy is system-focused
- [ ] New SystemsOverview section links to system pages
- [ ] Zebra pattern maintained (ADR-029)
- [ ] All i18n properly organized

---

## Related ADRs

- ADR-029: Institutional Perfection Zebra Pattern
- ADR-033: Shell Content Centering
- ADR-035: Format-Agnostic System Page Content
- ADR-036: (NEW) Homepage Page Boundary Enforcement
