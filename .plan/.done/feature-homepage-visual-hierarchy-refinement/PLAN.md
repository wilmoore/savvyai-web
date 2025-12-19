# Homepage Visual Hierarchy Refinement

## Branch

`feature/homepage-visual-hierarchy-refinement`

## Objective

Improve visual hierarchy, readability, and perceived quality of the existing homepage without changing core copy, structure, or intent. This is a presentation and hierarchy pass, not a rewrite.

## Design Principles (Swiss Modernist)

- Scale creates attention
- Spacing creates comfort
- Contrast creates clarity
- Keep the system calm, legible, and maintainable

---

## Implementation Plan

### Phase 1: Create SectionGroup Component

**File:** `src/components/marketing/SectionGroup.tsx`

Create a wrapper component responsible for:

- Background color (white or muted)
- Vertical padding for the group
- Grouping rhythm

```tsx
interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
  className?: string;
}
```

The Section component remains responsible for:

- max-width
- internal spacing
- typography

---

### Phase 2: Increase Section Base Padding

**File:** `src/components/marketing/Section.tsx`

Change base vertical padding from `py-16 md:py-24` to `py-20 md:py-28`

This provides the ~15-25% increase in vertical spacing globally.

---

### Phase 3: Hero Section Refinements

**File:** `src/components/home/Hero.tsx`

Changes:

1. ~~Increase headline scale~~ → KEEP CURRENT (already at spec)
2. Reduce opacity/weight of "Practical AI" tagline so it supports, not competes
   - Change from `text-muted-foreground` to `text-muted-foreground/70` or similar
3. Increase vertical spacing above/below hero
   - Adjust from `pt-24 md:pt-36 pb-20 md:pb-32` to `pt-28 md:pt-40 pb-24 md:pb-36`
4. Add more space between headline and subhead
   - Increase `mb-8` on h1 to `mb-10` or `mb-12`

---

### Phase 4: Lead Paragraph Styling

Apply to first 1-2 sentences under each section heading:

- Font size: `text-xl` (many already have this)
- Color: `text-muted-foreground` (slightly muted)
- Weight: normal (not bold)

Body copy below should remain smaller (`text-base`) and darker (`text-foreground`) for contrast.

Sections to review:

- Problem ✓ (already has text-xl intro)
- Belief
- HowWeWork
- Protocol
- Pilot24
- Credibility
- Difference
- WorkshopsExplained
- WorkshopOutcomes
- BridgeToProtocol
- Safety
- HomeFAQ
- Audience
- StartCTA

---

### Phase 5: Section Grouping Implementation

**File:** `app/page.tsx`

Apply SectionGroup wrappers with alternating backgrounds:

| Group | Sections                                                 | Background                |
| ----- | -------------------------------------------------------- | ------------------------- |
| 1     | Hero                                                     | default (white)           |
| 2     | Problem + Belief                                         | muted                     |
| 3     | HowWeWork + Protocol + Pilot24                           | default                   |
| 4     | Credibility + Difference                                 | muted                     |
| 5     | WorkshopsExplained + WorkshopOutcomes + BridgeToProtocol | default                   |
| 6     | Safety + HomeFAQ                                         | muted                     |
| 7     | Audience                                                 | default                   |
| 8     | StartCTA + BookingForm                                   | muted (strong separation) |

Remove individual `variant="muted"` from sections once grouped.

---

### Phase 6: Heading Refinements

Increase section heading size slightly:

- From `text-2xl md:text-3xl` to `text-3xl md:text-4xl`
- Add more spacing below headings: `mb-8` → `mb-10`

---

### Phase 7: List Spacing Improvements

Increase line height and spacing between list items:

- From `space-y-3` to `space-y-4` or `space-y-5`
- Ensure consistent bullet alignment

---

### Phase 8: Final CTA Section

**Files:** `src/components/home/StartCTA.tsx`, `src/components/marketing/BookingForm.tsx`

- Increase padding within the group
- Ensure strong visual separation from preceding content
- Consider additional top padding on the group wrapper

---

## Files to Modify

1. `src/components/marketing/SectionGroup.tsx` (NEW)
2. `src/components/marketing/Section.tsx`
3. `src/components/marketing/index.ts`
4. `src/components/home/Hero.tsx`
5. `src/components/home/Problem.tsx`
6. `src/components/home/Belief.tsx`
7. `src/components/home/HowWeWork.tsx`
8. `src/components/home/Protocol.tsx`
9. `src/components/home/Pilot24.tsx`
10. `src/components/home/Credibility.tsx`
11. `src/components/home/Difference.tsx`
12. `src/components/home/WorkshopsExplained.tsx`
13. `src/components/home/WorkshopOutcomes.tsx`
14. `src/components/home/BridgeToProtocol.tsx`
15. `src/components/home/Safety.tsx`
16. `src/components/home/HomeFAQ.tsx`
17. `src/components/home/Audience.tsx`
18. `src/components/home/StartCTA.tsx`
19. `src/components/marketing/BookingForm.tsx`
20. `app/page.tsx`

---

## Success Criteria

After changes:

- [x] Page feels easier to scan
- [x] Headline anchors the page immediately
- [x] Each section feels clearly distinct
- [x] Reading feels comfortable and unhurried
- [x] Site feels premium and thoughtful, not bare
- [x] No copy changes
- [x] No new sections added
- [x] No animations added
- [x] Build passes with no errors
- [x] TypeScript passes with no errors

## Implementation Status: COMPLETE

All phases implemented successfully. See KNOWN_ISSUES.md for pre-existing issues not addressed in this PR.

## Related ADRs

- [012. SectionGroup Component for Visual Grouping](../../doc/decisions/012-section-group-component-for-visual-grouping.md)

---

## Known Constraints

- DO NOT change copy meaning
- DO NOT add new sections
- DO NOT remove existing sections
- DO NOT add animations
- DO NOT add testimonials, logos, or graphics
- DO NOT introduce hype language
- ONLY adjust scale, spacing, grouping, and contrast
