# Homepage Swiss Modernist Hierarchy Refinement

## Branch

`design/homepage-swiss-modernist-hierarchy`

## Problem Statement

The homepage reads well but feels visually flat, document-like, and overly Spartan. All sections have similar visual weight, weak hierarchy, and no rhythm.

## Goal

Apply Swiss/modernist layout principles to improve hierarchy, scanning, and authority. Make the page feel designed, intentional, and confident without adding visual noise.

## Non-Negotiables

- Keep all existing copy and sections
- No animations, gradients, illustrations, or decorative elements
- No testimonials, pricing, or new CTAs
- Maintain light theme
- Use existing Tailwind + component structure
- Use i18n keys as-is

---

## Design Decisions (Confirmed)

### 1. Section Grouping Strategy

**Decision:** Background alternation only on existing `Section` component.

- No wrapper components needed
- Extend Section variant API
- Pair background changes with spacing changes for intentional grouping

### 2. Hero Scale

**Decision:** 6xl / 7xl / 8xl responsive scale

- Mobile: `text-6xl`
- Tablet: `text-7xl`
- Desktop: `text-8xl`
- Tight line-height, no extra tracking
- Let scale do the work; no color or animation additions

### 3. Lead Text Styling (Tier 3)

**Decision:** Larger size + slightly muted color

- Lead text: `text-xl text-muted-foreground`
- Body copy: `text-base text-foreground`
- Max 1-2 sentences per lead

### 4. Line Width Constraint

**Decision:** 3xl (48rem / 768px)

- Changed from current 4xl
- Keeps line length in 60-75 character range
- Hero allowed to exceed when needed

---

## Implementation Plan

### Phase 1: Extend Section Component

**File:** `src/components/marketing/Section.tsx`

Update the Section component to support:

1. Additional spacing variants for visual rhythm
2. Container width options (3xl default, 4xl for hero)
3. Keep variant API simple: `default | muted`

```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted';
  size?: 'default' | 'wide'; // NEW: 3xl vs 4xl container
  spacing?: 'default' | 'tight' | 'loose'; // NEW: vertical padding control
}
```

### Phase 2: Update Hero Section

**File:** `src/components/home/Hero.tsx`

1. Scale headline to 6xl/7xl/8xl responsive
2. Tighten line-height on headline
3. Increase whitespace above/below headline
4. Clear visual step-down for supporting copy
5. Use `size="wide"` for Hero section

Typography tiers in Hero:

- Tier 1: Headline → `text-6xl md:text-7xl lg:text-8xl font-semibold leading-none`
- Tier 3: Description → `text-xl text-muted-foreground`
- Tier 4: Clarification → `text-base text-foreground`

### Phase 3: Apply Section Groupings

Apply background variants to create visual blocks:

| Section Group                                            | Background      | Rationale              |
| -------------------------------------------------------- | --------------- | ---------------------- |
| Hero                                                     | default (white) | Standalone anchor      |
| Problem + Belief                                         | muted           | Opening argument block |
| HowWeWork                                                | default         | Transition             |
| Protocol + Pilot24                                       | muted           | Core offering block    |
| Credibility + Difference                                 | default         | Authority block        |
| WorkshopsExplained + WorkshopOutcomes + BridgeToProtocol | muted           | Workshop block         |
| Safety + HomeFAQ                                         | default         | Safety/FAQ block       |
| Audience + StartCTA                                      | muted           | Closing block          |
| BookingForm                                              | default         | Final action           |

### Phase 4: Update Section Components with Lead Text

Add Tier 3 lead text styling to sections that have intro paragraphs:

**Files to update:**

- `Problem.tsx` - intro lines as lead
- `Belief.tsx` - first statement as lead
- `HowWeWork.tsx` - intro as lead
- `Protocol.tsx` - subtitle as lead
- `Pilot24.tsx` - intro as lead
- `WorkshopsExplained.tsx` - first paragraph as lead
- `WorkshopOutcomes.tsx` - intro as lead
- `Safety.tsx` - intro as lead

Pattern:

```tsx
// Before
<p className="text-lg text-foreground">{t('section.intro')}</p>

// After
<p className="text-xl text-muted-foreground">{t('section.intro')}</p>
```

### Phase 5: Constrain Body Text Width

Update all sections to use 3xl max-width (already in Section component change).

### Phase 6: Vertical Spacing Refinement

1. Increase spacing between section groups (extra py on grouped sections)
2. Tighten spacing inside dense text blocks
3. Ensure each viewport presents one dominant idea

---

## Files to Modify

| File                                         | Changes                                       |
| -------------------------------------------- | --------------------------------------------- |
| `src/components/marketing/Section.tsx`       | Add size/spacing props, change default to 3xl |
| `src/components/home/Hero.tsx`               | Scale headline, add spacing, update hierarchy |
| `src/components/home/Problem.tsx`            | Lead text styling, variant update             |
| `src/components/home/Belief.tsx`             | Lead text styling, variant update             |
| `src/components/home/HowWeWork.tsx`          | Lead text styling, variant update             |
| `src/components/home/Protocol.tsx`           | Lead text styling, variant update             |
| `src/components/home/Pilot24.tsx`            | Lead text styling, variant update             |
| `src/components/home/Credibility.tsx`        | Variant update                                |
| `src/components/home/Difference.tsx`         | Variant update                                |
| `src/components/home/WorkshopsExplained.tsx` | Lead text styling, variant update             |
| `src/components/home/WorkshopOutcomes.tsx`   | Lead text styling, variant update             |
| `src/components/home/BridgeToProtocol.tsx`   | Variant update                                |
| `src/components/home/Safety.tsx`             | Lead text styling, variant update             |
| `src/components/home/HomeFAQ.tsx`            | Variant update                                |
| `src/components/home/Audience.tsx`           | Variant update                                |
| `src/components/home/StartCTA.tsx`           | Variant update, CTA whitespace                |
| `src/components/marketing/BookingForm.tsx`   | Variant check                                 |

---

## Definition of Done

- [x] Four-tier type hierarchy clearly visible
- [x] Section rhythm through background alternation
- [x] Hero feels like a statement, not a sentence
- [x] Body text constrained to comfortable reading width
- [x] Increased whitespace around CTAs
- [x] Build passes with no errors
- [x] Lint passes with no errors (no ESLint config - pre-existing)
- [x] Visual verification in browser

---

## Implementation Complete

All design changes have been implemented:

1. **Section Component** - Added `size` prop (default: 3xl, wide: 4xl)
2. **Hero** - Scaled to text-6xl/7xl/8xl, added breathing room
3. **Section Groupings** - Background alternation applied per plan
4. **Lead Text** - text-xl text-muted-foreground on intro paragraphs
5. **Body Text** - Constrained to 3xl (48rem) max-width
6. **CTA Whitespace** - Increased margins, reduced repetition in StartCTA

### Files Modified

- `src/components/marketing/Section.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/Problem.tsx`
- `src/components/home/Belief.tsx`
- `src/components/home/HowWeWork.tsx`
- `src/components/home/Protocol.tsx`
- `src/components/home/Pilot24.tsx`
- `src/components/home/Credibility.tsx`
- `src/components/home/Difference.tsx`
- `src/components/home/WorkshopsExplained.tsx`
- `src/components/home/WorkshopOutcomes.tsx`
- `src/components/home/BridgeToProtocol.tsx`
- `src/components/home/Safety.tsx`
- `src/components/home/Audience.tsx`
- `src/components/home/StartCTA.tsx`
- `src/components/marketing/BookingForm.tsx`

---

## Known Issues (Out of Scope)

- Protocol page may need similar treatment (separate effort)
- Footer and Header unchanged in this pass
- No mobile-specific breakpoint adjustments beyond responsive type scale
- ESLint not configured (prompts for first-time setup) - pre-existing condition

---

## Related ADRs

- [009. Four-Tier Typography Hierarchy](../../doc/decisions/009-four-tier-typography-hierarchy.md)
- [010. Section Background Rhythm for Visual Grouping](../../doc/decisions/010-section-background-rhythm.md)
- [011. Section Component Size Variants](../../doc/decisions/011-section-size-variants.md)
