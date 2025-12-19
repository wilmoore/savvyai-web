# 012. SectionGroup Component for Visual Grouping

Date: 2025-12-19

## Status

Accepted

## Context

The homepage had multiple sections that visually blurred together. While ADR-010 established the pattern of alternating backgrounds for visual rhythm, the implementation was handled at the individual Section level via a `variant` prop. This created several issues:

1. **Conceptual confusion**: Background color is a page-level layout concern, not a section concern
2. **Maintenance burden**: Changing groupings required modifying multiple Section components
3. **Lack of intent clarity**: Reading the page composition didn't reveal the visual rhythm pattern
4. **Tight coupling**: Section components needed awareness of their position in the page

## Decision

Create a dedicated `SectionGroup` wrapper component that owns visual grouping concerns:

```tsx
interface SectionGroupProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
  className?: string;
}
```

**Separation of concerns:**

- `Section`: max-width, internal spacing, typography
- `SectionGroup`: background color, group-level padding, visual rhythm

This follows Swiss modernist principles where clear blocks of content are defined at the layout level, not through component prop gymnastics.

## Consequences

### Positive

- **Clear mental model**: Anyone reading page composition can see the visual rhythm
- **Less prop complexity**: No need for `first | middle | last | groupIndex` logic
- **Easier iteration**: Adjust padding, background, or dividers at group level without touching sections
- **Semantic clarity**: `SectionGroup variant="muted"` communicates intent immediately
- **Reusable sections**: Section components remain dumb and portable

### Negative

- **Additional wrapper**: Adds one more component layer in the JSX tree
- **Migration effort**: Required removing `variant="muted"` from individual sections

## Alternatives Considered

### Modify Section component with group props

Add `groupPosition?: 'first' | 'middle' | 'last'` or similar props to Section.

**Rejected because:**

- Leaks layout concerns into content components
- Requires coordination between adjacent sections
- More complex prop API

### CSS-only alternation with `:nth-child`

Use CSS selectors to automatically alternate backgrounds.

**Rejected because:**

- Doesn't allow semantic grouping of 2-3 related sections
- Inflexible when content order changes
- Hidden implementation detail

## Related

- ADR-010: Section Background Rhythm for Visual Grouping (establishes the pattern)
- ADR-011: Section Component Size Variants
- Planning: `.plan/.done/feature-homepage-visual-hierarchy-refinement/`
