# 016. Workshop Authority Light Theme

Date: 2025-12-19

## Status

Accepted

## Context

The previous design system used an "Executive Dark Mode" theme (ADR-013) with deep black backgrounds (#050505), glassmorphism effects, and neon/glow animations. While visually striking, this SaaS-style aesthetic was misaligned with the target audience: low-trust, non-technical decision makers (HR, Ops, Procurement) who associate workshops with daytime, rooms, whiteboards, and professional facilitation.

The visual language needed to shift from "startup pitch" to "credible workshop program" to build trust with executive buyers.

## Decision

We replaced the dark mode theme with a "Workshop Authority" light theme as the default, characterized by:

- **Primary Background**: White (#FFFFFF)
- **Secondary Background**: Warm Gray (#FAFAF8) for band alternation
- **Text Hierarchy**: Near black (#1A1A1A) to medium gray (#6B6B6B)
- **Accent**: Emerald (#10B981) restrained to CTAs and key outcomes
- **Borders**: Light gray (#E5E5E5) for subtle structure
- **Border Radius**: 8px (0.5rem) for institutional feel

The dark mode CSS is preserved in a `.dark` class for future use but is not active by default.

## Consequences

**Positive:**

- Visual language now matches executive workshop expectations
- Improved readability and accessibility with high contrast ratios
- Reduced visual complexity (no glow animations, backdrop blur)
- Easier to maintain without complex glassmorphism effects
- Warm gray (#FAFAF8) provides visual variety without jarring contrast

**Negative:**

- Breaking change from previous dark aesthetic
- Some existing components required significant restyling
- Dark mode capability preserved but requires manual activation

## Alternatives Considered

1. **Preserve dark mode as option**: Rejected because maintaining two themes doubles maintenance burden and the dark aesthetic fundamentally conflicts with workshop authority positioning.

2. **Neutral gray theme**: Rejected as too corporate/bland. Warm gray provides subtle warmth appropriate for facilitation context.

3. **Full removal of dark mode CSS**: Rejected to preserve future optionality if needed for specific contexts.

## Related

- Supersedes: ADR-013 (Executive Dark Mode)
- Planning: `.plan/.done/design-workshop-authority-grammar/`
