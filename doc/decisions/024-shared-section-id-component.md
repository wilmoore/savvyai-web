# 024. Shared SectionID Component

Date: 2025-12-19

## Status

Accepted

## Context

ADR 022 introduced the Section ID system (`[ NN / LABEL ]` badges) but noted as a negative consequence that the markup was duplicated across components rather than extracted to a shared component. This led to:

- Inconsistent positioning across sections (alignment drift in sections 07+)
- Repeated styling code in every section component
- Risk of styling divergence when making design updates

## Decision

Extract the Section ID pattern into a reusable `SectionID` component:

```tsx
interface SectionIDProps {
  number: string; // "01", "02", etc.
  name: string; // "TRUST", "PROCESS", etc.
  variant?: 'ink' | 'paper';
  className?: string;
}
```

**Implementation:**

- Location: `src/components/marketing/SectionID.tsx`
- Exported via barrel: `src/components/marketing/index.ts`
- Styling: `text-xs font-mono uppercase tracking-widest mb-6`
- Colors: `text-white/30` (ink variant), `text-black/30` (paper variant)

**Usage:**

```tsx
<SectionID number="01" name="TRUST" variant="ink" />
```

## Consequences

**Positive:**

- Single source of truth for Section ID styling
- Guaranteed alignment across all sections
- Easy to update design system-wide
- Variant prop ensures correct colors match section backgrounds

**Negative:**

- Additional import required in each section component
- Slight increase in component tree depth

## Alternatives Considered

1. **Section component prop**: Add `sectionId` prop to parent `<Section>` component
   - Rejected: Reduces flexibility for custom positioning and spacing

2. **CSS-only approach**: Use global classes with BEM naming
   - Rejected: Component approach better fits React architecture and type safety

3. **Keep inline**: Leave duplicate code in each component
   - Rejected: Already caused alignment drift issues

## Related

- Supersedes: `022-section-id-system.md` (addresses negative consequence)
- Planning: `.plan/.done/fix-alignment-drift-brand-authority/`
