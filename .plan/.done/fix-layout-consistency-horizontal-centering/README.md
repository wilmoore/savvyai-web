# Fix: Layout Consistency & Horizontal Centering

## Problem Statement

Several sections on the homepage have inconsistent horizontal layout:

1. **Workshop Cards (Section 03)** - Bunched up on left, not using horizontal space
2. **HowWeWork (Section 04)** - Dashed connector line appears on top of step circles (z-index issue)
3. **Example Artifacts (Section 06)** - Not properly centered

Root cause: The `Section` component's "shell architecture" left-aligns inner content instead of centering it.

## Design Decision

**Hybrid Approach**: SectionID tags stay left-aligned (editorial spine) but main content (cards, grids) centers within the section.

## Technical Analysis

### Current Section Architecture (Section.tsx:72-75)

```tsx
<div className="max-w-7xl mx-auto px-4 md:px-6">
  <div className={cn(sizeClasses[size])}>{children}</div> // LEFT-ALIGNED
</div>
```

### Solution

Modify the Section component to:

1. Keep the 7xl outer shell centered
2. Center the inner content container with `mx-auto`
3. Maintain the editorial spine effect through SectionID positioning

### HowWeWork Z-Index Fix

Current issue: Dashed line at `top-12` sits above step circles
Solution: Lower z-index of the dashed line so it passes behind the circles

## Implementation Steps

1. **Section.tsx**: Add `mx-auto` to inner content container
2. **HowWeWork.tsx**: Lower z-index of dashed connector line (currently at default, needs to be below step circles' z-10)
3. **OurWorkshops.tsx**: Change from `size="wide"` to `size="full"` for better horizontal utilization with 3-column grid
4. **Verify**: Check all sections for proper centering

## Affected Files

- `src/components/marketing/Section.tsx`
- `src/components/home/HowWeWork.tsx`
- `src/components/home/OurWorkshops.tsx`

## Changes Made

### Section.tsx (line 75)

```tsx
// Before
<div className={cn(sizeClasses[size])}>{children}</div>

// After
<div className={cn(sizeClasses[size], 'mx-auto')}>{children}</div>
```

### HowWeWork.tsx (line 45)

```tsx
// Before
<div className="absolute top-12 left-[10%] right-[10%] h-px border-t border-dashed border-black/20" />

// After
<div className="absolute top-12 left-[10%] right-[10%] h-px border-t border-dashed border-black/20 z-0" />
```

### OurWorkshops.tsx (line 39)

```tsx
// Before
<Section variant="ink" size="wide" className="border-b border-white/10">

// After
<Section variant="ink" size="full" className="border-b border-white/10">
```

## Definition of Done

- [x] All section content centers horizontally within the viewport
- [x] SectionID tags maintain consistent left alignment (editorial spine)
- [x] HowWeWork dashed line passes behind step circles
- [x] No visual regressions in other sections
- [x] Build and lint pass
