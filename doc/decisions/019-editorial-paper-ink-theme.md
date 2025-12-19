# 019. Editorial Paper & Ink Theme

Date: 2025-12-19

## Status

Accepted

## Context

The previous "Workshop Authority Grammar" theme (light-mode default) needed transformation to appeal to Fashion, Retail, and Design leaders. The site required a more editorial, premium aesthetic that communicates institutional credibility while maintaining visual impact.

## Decision

Implement an "Editorial Paper & Ink" design system with:

1. **Zebra rhythm pattern** - Strict alternation between Ink Black (#050505) and Paper White (#FFFFFF) sections
2. **Minimal color palette** - Only two backgrounds with Emerald (#10B981) reserved exclusively for CTAs and checkmarks
3. **Context-aware borders** - 1px borders using white/10% on ink sections, black/10% on paper sections
4. **CSS custom properties** - Theme variants via `.theme-ink` class that flips all design tokens
5. **Section component variants** - `variant="ink"` and `variant="paper"` props for consistent theming

## Consequences

**Positive:**

- High-contrast design creates visual impact and premium feel
- Strict zebra pattern provides predictable visual rhythm
- Limited color palette enforces restraint and editorial consistency
- CSS custom properties enable easy theming of child components

**Negative:**

- Less flexibility for designers wanting varied background colors
- Requires careful section ordering to maintain zebra pattern
- Components must be context-aware (ink vs paper) for proper styling

## Alternatives Considered

1. **Dark-only theme** - Rejected as too oppressive for long-form reading
2. **Gradient sections** - Rejected as less editorial and harder to maintain
3. **Multi-color palette** - Rejected as diluting the stark editorial impact

## Related

- Planning: `.plan/.done/design-editorial-paper-ink-theme/`
- Supersedes: ADR 016 (Workshop Authority Light Theme)
