# Design System Finalization: Institutional Perfection

## Status: COMPLETE

## Decisions Locked

### 1. Luma Event URL

- **Decision**: Use `https://lu.ma/savvy-ai-literate` for both `/workshop` and `/register`
- **Status**: Already configured in `next.config.mjs` ✓

### 2. Section Numbering

- **Decision**: Renumber all sections sequentially (01-15)
- **Rationale**: "Institutional Blueprint" feel requires logical sequence from top to bottom

### 3. Logo Wall Format

- **Decision**: Keep text-based logos in Geist Sans with variable weights at 20% opacity
- **Rationale**: "Editorial" choice - looks like high-end architectural watermarks, prevents SVG style clutter

### 4. Zebra Pattern (High-Contrast Rhythm)

| Section ID | Name          | Background      | Component              | Reason                                             |
| ---------- | ------------- | --------------- | ---------------------- | -------------------------------------------------- |
| —          | HERO          | INK (#050505)   | Hero.tsx               | Billboard statement (no SectionID)                 |
| 01         | TRUST         | INK (#050505)   | TrustBar.tsx           | Logo wall continuation from hero                   |
| 02         | QUALIFICATION | PAPER (#FFFFFF) | WhoThisIsFor.tsx       | Self-selection on clean white                      |
| 03         | PROGRAMS      | INK (#050505)   | OurWorkshops.tsx       | Workshop cards with authority                      |
| 04         | PROCESS       | PAPER (#FFFFFF) | HowWeWork.tsx          | Technical blueprint on clean white                 |
| 05         | EXPERIENCE    | INK (#050505)   | WorkshopsExplained.tsx | What happens in workshop                           |
| 06         | ARTIFACTS     | PAPER (#FFFFFF) | WorkshopOutcomes.tsx   | Clean white for deliverable list                   |
| 07         | PROTOCOL      | INK (#050505)   | Protocol.tsx           | High-authority black for systems                   |
| 08         | METHOD        | PAPER (#FFFFFF) | Pilot24.tsx            | Clean readability for 24-hour pitch                |
| 09         | CONTRAST      | INK (#050505)   | Difference.tsx         | Authoritative "Why Us" on black                    |
| 10         | RESULTS       | PAPER (#FFFFFF) | StatsGrid.tsx          | **CRITICAL**: Massive black numbers on white paper |
| 11         | SECURITY      | INK (#050505)   | Safety.tsx             | Serious "locked down" black                        |
| 12         | FAQ           | PAPER (#FFFFFF) | HomeFAQ.tsx            | Clean white for text-heavy Q&A                     |
| 13         | QUALIFICATION | INK (#050505)   | Audience.tsx           | High-stakes "Who is this for" summary              |
| 14         | NEXT STEPS    | PAPER (#FFFFFF) | StartCTA.tsx           | Final clean "Pre-CTA" reset                        |
| 15         | CONTACT       | INK (#050505)   | BookingForm.tsx        | Institutional close on premium black               |

### 5. SectionID "Spine" Alignment

- **Priority**: ABSOLUTE
- **Requirement**: Every `[ XX / NAME ]` tag must be mathematically aligned to the same vertical x-axis
- **Implementation**: Shell architecture (7xl outer container) already in Section.tsx

---

## Implementation Tasks

### Phase 1: Zebra Pattern Fix

1. [x] Update Hero.tsx - confirm INK, no SectionID
2. [x] Update TrustBar.tsx - INK variant, SectionID="01"
3. [x] Update WhoThisIsFor.tsx - PAPER variant, SectionID="02"
4. [x] Update OurWorkshops.tsx - INK variant, SectionID="03"
5. [x] Update HowWeWork.tsx - PAPER variant, SectionID="04"
6. [x] Update WorkshopsExplained.tsx - INK variant, SectionID="05"
7. [x] Update WorkshopOutcomes.tsx - PAPER variant, SectionID="06"
8. [x] Update Protocol.tsx - INK variant, SectionID="07"
9. [x] Update Pilot24.tsx - PAPER variant, SectionID="08"
10. [x] Update Difference.tsx - INK variant, SectionID="09"
11. [x] Update StatsGrid.tsx - PAPER variant (CRITICAL), SectionID="10"
12. [x] Update Safety.tsx - INK variant, SectionID="11"
13. [x] Update HomeFAQ.tsx - PAPER variant, SectionID="12"
14. [x] Update Audience.tsx - INK variant, SectionID="13"
15. [x] Update StartCTA.tsx - PAPER variant, SectionID="14"
16. [x] Update BookingForm.tsx - INK variant, SectionID="15"

### Phase 2: StatsGrid Redesign (CRITICAL)

- [x] Invert the "Paper on Desk" pattern
- [x] Massive black numbers on white paper background
- [x] Remove ink background, use paper variant
- [x] Stats display directly on white background

### Phase 3: Logo Wall Polish

- [x] Text-based logos in tight 5-column grid (already implemented)
- [x] 20% monochrome opacity (already implemented)
- [x] All 10 logos present: Apple, Starbucks, Nordstrom, HP, Gap Inc, Aetna, Shutterstock, MapQuest, DavidsTea, Holt Renfrew

### Phase 4: Workshop Card Interaction

- [x] AI Literate card routes to `/workshops/ai-literate`
- [x] Emerald hover-glow with shadow effect
- [x] Other cards are 50% opacity/grayscale

### Phase 5: Workshop Detail Page

- [x] `/workshops/ai-literate` page exists and functions
- [x] Primary CTA links to Luma
- [x] Artifact Gallery featured prominently

### Phase 6: Redirect Verification

- [x] `/workshop` redirects to Luma URL (in next.config.mjs)
- [x] `/register` redirects to Luma URL (in next.config.mjs)

### Phase 7: Validation

- [x] TypeScript compilation passes
- [x] Production build passes without errors
- [ ] Visual verification of zebra pattern (pending review)
- [ ] Visual verification of SectionID spine alignment (pending review)

---

## Files to Modify

```
src/components/home/Hero.tsx
src/components/home/TrustBar.tsx
src/components/home/WhoThisIsFor.tsx
src/components/home/OurWorkshops.tsx
src/components/home/HowWeWork.tsx
src/components/home/WorkshopsExplained.tsx
src/components/home/WorkshopOutcomes.tsx
src/components/home/Protocol.tsx
src/components/home/Pilot24.tsx
src/components/home/Difference.tsx
src/components/home/StatsGrid.tsx
src/components/home/Safety.tsx
src/components/home/HomeFAQ.tsx
src/components/home/Audience.tsx
src/components/home/StartCTA.tsx
src/components/marketing/BookingForm.tsx
app/page.tsx (update comments)
```

## Known Issues to Address Later

- metadataBase warning in build (unrelated to design system - SEO configuration)
- ESLint not configured (project setup item)

## Implementation Complete

All zebra pattern changes implemented successfully:

- TypeScript compilation: PASSED
- Production build: PASSED
- SectionID sequential numbering: 01-15 verified in browser
- Zebra pattern: INK/PAPER alternation implemented across all 15 sections

## Related ADRs

- [029. Institutional Perfection Zebra Pattern](../../doc/decisions/029-institutional-perfection-zebra-pattern.md)
