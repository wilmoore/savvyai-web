# 026. Shell Architecture for Section Alignment

Date: 2024-12-19

## Status

Accepted

## Context

The website's section layout had "alignment drift" where `[ XX / NAME ]` section ID tags were positioned differently across sections depending on their content width (`max-w-3xl`, `max-w-5xl`, `max-w-7xl`). This created an inconsistent visual experience and broke the "vertical spine" that guides readers down the page.

Editorial magazine layouts (Vogue, McKinsey reports) maintain a consistent left margin for metadata and headlines, regardless of body text width.

## Decision

Implement a "shell architecture" in the Section component:

1. **Outer Shell**: A consistent `max-w-7xl mx-auto px-4 md:px-6` container that establishes the fixed left edge
2. **Inner Content**: A variable-width container (`max-w-3xl`, `max-w-5xl`, or `max-w-7xl`) that is LEFT-ALIGNED within the shell (no `mx-auto`)

This ensures all `SectionID` components and headings share the same left edge while allowing body text to have comfortable reading widths.

```tsx
// Shell mode (shell=true, default)
<div className="max-w-7xl mx-auto px-4 md:px-6">
  {' '}
  {/* Shell */}
  <div className={sizeClasses[size]}>
    {' '}
    {/* Content, left-aligned */}
    {children}
  </div>
</div>
```

## Consequences

**Positive:**

- Consistent vertical "spine" for section IDs across all sections
- Headings and metadata always align perfectly across ink/paper transitions
- Maintains comfortable reading widths for body text
- Backward compatible via `shell` prop (defaults to `true`)

**Negative:**

- Content is now left-aligned rather than centered on wide screens
- Requires understanding of the shell pattern for future section development

## Alternatives Considered

1. **Center all content and SectionID independently**: Would require absolute positioning or complex layout, fragile across responsive breakpoints
2. **Force all sections to same width**: Would make text-heavy sections unreadable (lines too long)
3. **Manual alignment per section**: Not maintainable, prone to drift

## Related

- Planning: `.plan/.done/feature-editorial-noir-workshop-first/`
- Component: `src/components/marketing/Section.tsx`
