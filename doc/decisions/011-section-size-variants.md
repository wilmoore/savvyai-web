# 011. Section Component Size Variants

Date: 2025-12-19

## Status

Accepted

## Context

The Section component used a fixed `max-w-4xl` (56rem/896px) container width. This was too wide for comfortable reading of long-form body text (optimal line length is 60-75 characters, roughly 48rem for body copy).

However, the Hero section with its large headline benefits from additional width to breathe.

## Decision

Add a `size` prop to the Section component:

```typescript
interface SectionProps {
  // ... existing props
  size?: 'default' | 'wide';
}
```

- `default`: `max-w-3xl` (48rem/768px) - Standard sections with body text
- `wide`: `max-w-4xl` (56rem/896px) - Hero and headline-only sections

Changed the default from 4xl to 3xl, applying the narrower width to most content.

## Consequences

**Positive:**

- Body text line length now in comfortable 60-75 character range
- Hero section can use wider container without affecting other sections
- Single prop addition; minimal API surface increase
- Backward compatible (existing sections get better default)

**Negative:**

- Slight breaking change if any code expected 4xl width by default
- Must explicitly use `size="wide"` for Hero-style sections

## Alternatives Considered

1. **Apply max-w-prose to body paragraphs only**: Added complexity without clear benefit; inconsistent container widths within sections
2. **Keep 4xl everywhere**: Poor reading experience for content-heavy sections
3. **Use max-w-2xl (42rem)**: Too narrow; felt cramped and precious

## Related

- Planning: `.plan/.done/design-homepage-swiss-modernist-hierarchy/`
- ADR-009: Four-Tier Typography Hierarchy
- ADR-010: Section Background Rhythm
