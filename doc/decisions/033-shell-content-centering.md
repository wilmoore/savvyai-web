# 033. Shell Content Centering

Date: 2025-12-25

## Status

Accepted

## Context

The shell architecture (ADR-026) established a consistent left edge for SectionID tags by left-aligning inner content within a centered outer shell. However, this caused main content (cards, grids, text) to bunch up on the left side of the viewport instead of utilizing horizontal space effectively.

Specifically:

- Workshop cards in Section 03 clustered on the left
- HowWeWork step layout didn't center properly
- Content felt unbalanced on wider screens

The editorial spine effect from SectionID tags was working correctly, but the body content needed to center within its container.

## Decision

Refine the shell architecture to **center inner content** while maintaining the editorial spine effect:

```tsx
// Before (ADR-026)
<div className="max-w-7xl mx-auto px-4 md:px-6">
  <div className={sizeClasses[size]}>{children}</div>  // Left-aligned
</div>

// After (this ADR)
<div className="max-w-7xl mx-auto px-4 md:px-6">
  <div className={cn(sizeClasses[size], 'mx-auto')}>{children}</div>  // Centered
</div>
```

This works because:

1. The outer 7xl shell is centered on the page
2. SectionID components are positioned relative to the outer shell (maintaining consistent left edge)
3. The inner content container (`max-w-3xl`, `max-w-5xl`, etc.) is now centered within the shell
4. Content within the inner container flows naturally

Additional fixes included:

- **HowWeWork**: Added `z-0` to dashed connector line so it passes behind step circles (which have `z-10`)
- **OurWorkshops**: Changed from `size="wide"` to `size="full"` for better 3-column grid utilization

## Consequences

**Positive:**

- Content properly utilizes horizontal viewport space
- Cards and grids center naturally
- SectionID spine remains consistent (left edge preserved)
- Better visual balance on wide screens

**Negative:**

- None identified - this is strictly an improvement over ADR-026

## Alternatives Considered

1. **Per-section centering**: Add `mx-auto` only to specific sections. Rejected because this would fragment the pattern and make it harder to maintain consistency.

2. **Remove shell architecture**: Revert to pre-ADR-026 centered containers. Rejected because this would break the SectionID alignment spine.

## Related

- Supersedes behavior in: ADR-026 (shell architecture)
- Planning: `.plan/.done/fix-layout-consistency-horizontal-centering/`
- Components:
  - `src/components/marketing/Section.tsx`
  - `src/components/home/HowWeWork.tsx`
  - `src/components/home/OurWorkshops.tsx`
