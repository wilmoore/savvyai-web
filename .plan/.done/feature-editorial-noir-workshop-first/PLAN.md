# Editorial Noir: Workshop-First Redesign

## Branch

`feature/editorial-noir-workshop-first`

## Decisions

- **Shell Width**: Option B - Anchor SectionIDs to 7xl spine, flexible content widths inside
- **Workshop Cards**: Option A - Rename Card 01 to "AI Literate", mute Cards 02-03 as roadmap
- **Luma CTA**: Option A - Placeholder URL (`https://lu.ma/savvy-ai-literate`)

---

## Implementation Tasks

### Phase 1: Shell Architecture (Alignment Fix)

**Goal**: Create a consistent vertical "spine" for SectionIDs while maintaining comfortable typography.

#### 1.1 Refactor Section Component

- Add outer shell container: `max-w-7xl mx-auto px-4 md:px-6`
- SectionID renders flush-left at shell boundary
- Inner content container maintains variable width (3xl/5xl/7xl)

**Files**:

- `src/components/marketing/Section.tsx`
- `src/components/marketing/SectionID.tsx`

#### 1.2 Update All Section Usages

- Ensure each section uses the new shell pattern
- SectionID must be OUTSIDE the content container, INSIDE the shell
- Verify mathematical alignment across ink/paper transitions

**Files**: All components in `src/components/home/`

---

### Phase 2: Programs Grid Redesign [ 03 / PROGRAMS ]

**Goal**: Active "AI Literate" card with emerald glow, roadmap cards muted.

#### 2.1 Update i18n Workshop Data

- Card 01: Rename to "AI Literate" with "Now Enrolling" status
- Cards 02-03: Keep names, add `status: "coming-soon"`

**Files**:

- `src/i18n/locales/en/homepage.json`

#### 2.2 Refactor OurWorkshops Component

- Active card: Hover lift + emerald glow + routes to `/workshops/ai-literate`
- Roadmap cards: Grayscale, 50% opacity, "Coming Soon" tag, "Get notified" link
- Add primary CTA below grid: "View AI Literate Curriculum" → `/workshop`

**Files**:

- `src/components/home/OurWorkshops.tsx`

---

### Phase 3: Routing & New Page

**Goal**: Create workshop detail page with redirect.

#### 3.1 Create Workshop Detail Page

- Path: `/workshops/ai-literate`
- Design: Editorial Noir (Ink/Paper sections, Geist fonts)
- Content:
  - Outcome-focused definition of "AI Literate"
  - "Who it's for / not for" blocks
  - Workshop modality details
  - Tangible artifacts section
  - CTA: "Register" button → Luma placeholder

**Files**:

- `app/workshops/ai-literate/page.tsx`
- `src/components/workshops/` (new directory)

#### 3.2 Configure Redirect

- `/workshop` → 302 redirect to `/workshops/ai-literate`

**Files**:

- `next.config.mjs`

---

### Phase 4: Zebra Rhythm Audit

**Goal**: Strictly enforce alternating Ink Black (#050505) / Paper White (#FFFFFF).

#### 4.1 Audit Current Section Order

Current pattern from `app/page.tsx`:

```
1.  Hero (INK)
2.  TrustBar (INK) ← Should be INK per spec
3.  WhoThisIsFor (PAPER)
4.  OurWorkshops (PAPER) ← Adjacent PAPER - review
5.  HowWeWork (INK)
6.  WorkshopsExplained (PAPER)
7.  WorkshopOutcomes (PAPER) ← Adjacent PAPER - review
8.  Protocol (INK)
9.  Pilot24 (PAPER)
10. Difference (PAPER) ← Adjacent PAPER - review
11. StatsGrid (INK)
12. Safety (INK) ← Adjacent INK - review
13. HomeFAQ (PAPER)
14. Audience (PAPER) ← Adjacent PAPER - review
15. StartCTA (INK)
16. BookingForm (PAPER)
```

**Decision**: Some adjacent same-background sections are intentional content groupings. Only fix if explicitly breaking visual rhythm.

---

### Phase 5: Verification

#### 5.1 Build & Lint

```bash
pnpm run build
pnpm run lint
```

#### 5.2 Visual Verification

- Use Playwright to capture snapshots
- Verify SectionID alignment across sections
- Confirm emerald glow on active workshop card
- Test `/workshop` redirect

---

## Success Criteria

1. SectionIDs form a perfect vertical spine across all sections
2. "AI Literate" card has emerald hover glow and routes correctly
3. Roadmap cards are visually muted with "Coming Soon" styling
4. `/workshops/ai-literate` page exists with Editorial Noir design
5. `/workshop` redirects to `/workshops/ai-literate`
6. No TypeScript errors, lint warnings, or build failures
7. First-time visitor (Fashion COO) sees elite engineering consultancy

---

## Files Changed Summary

### Modified

- `src/components/marketing/Section.tsx`
- `src/components/marketing/SectionID.tsx`
- `src/components/home/OurWorkshops.tsx`
- `src/components/home/*.tsx` (alignment updates)
- `src/i18n/locales/en/homepage.json`
- `next.config.mjs`

### Created

- `app/workshops/ai-literate/page.tsx`
- `src/i18n/locales/en/workshops.json`

---

## Related ADRs

- [026. Shell Architecture for Section Alignment](../../doc/decisions/026-shell-architecture-for-section-alignment.md)
- [027. Workshop Card State System](../../doc/decisions/027-workshop-card-state-system.md)
- [028. External Redirect Routes for Sharing](../../doc/decisions/028-external-redirect-routes-for-sharing.md)
