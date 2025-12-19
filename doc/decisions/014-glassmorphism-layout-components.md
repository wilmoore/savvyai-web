# 014. Glassmorphism Layout Components

Date: 2025-12-19

## Status

Accepted

## Context

The Executive Dark Mode redesign required new layout primitives that would work effectively on dark backgrounds. Standard card and section components from the light theme (ADR-007) relied on shadows and subtle borders that don't translate well to dark UIs.

The design called for a premium, depth-creating visual system that maintains readability while adding visual interest to the dark interface.

## Decision

Create a new layout component library in `src/components/layout/` using glassmorphism (frosted glass) effects:

**Components Created:**

- `GlassCard` - Semi-transparent cards with backdrop blur and subtle borders
- `SectionDark` - Dark-themed section wrapper with contrast variants
- `SectionLabel` - Monospace uppercase labels for section identification
- `TwoColumnSection` - Split layouts with configurable ratios
- `NumberedStep` - Step indicators for process flows

**Glass Effect Implementation:**

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
```

**Elevated Variant:**

```css
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

## Consequences

**Positive:**

- Creates depth without heavy shadows
- Works harmoniously with dark backgrounds
- Provides clear visual containment for content groups
- Subtle hover states enhance interactivity
- Reusable across homepage and protocol pages

**Negative:**

- `backdrop-filter` has performance cost on mobile
- Requires careful contrast management for accessibility
- May need fallbacks for browsers without backdrop-filter support

## Alternatives Considered

1. **Solid dark cards** - Tested but felt flat and less premium
2. **Border-only cards** - Lacked visual weight and containment
3. **Gradient backgrounds** - Too busy for editorial aesthetic

## Related

- Extends: ADR-007 (Marketing Component Architecture)
- Planning: `.plan/.done/design-executive-dark-mode-reskin/`
