# 013. Executive Dark Mode as Default Theme

Date: 2025-12-19

## Status

Accepted

## Context

The Savvy AI marketing website originally used a Swiss Modernist light theme (ADR-006). While clean and professional, the light theme conveyed a more generic SaaS aesthetic. The business wanted to differentiate with a more premium, editorial, and institutional feel—aligned with the "Calm. Sharp. Credible. Disciplined." design philosophy.

Reference sites like Morningside.ai and Facilitator.com demonstrated that dark themes can effectively convey authority, sophistication, and premium positioning in the AI consulting space.

## Decision

Replace the light Swiss Modernist theme with an "Executive Dark Mode" design system as the default visual presentation:

**Color System:**

- Primary background: `#050505` (deep black)
- Contrast sections: `#0D1117` (GitHub dark-style)
- Accent: `#10B981` (emerald green)
- Text hierarchy: white at 100%, 70%, 50%, and 40% opacity

**Key Characteristics:**

- Dark-first design with high contrast
- Emerald accent for CTAs and interactive elements
- Preserved light theme tokens in CSS for potential future use

## Consequences

**Positive:**

- Stronger brand differentiation from competitors
- Premium, editorial aesthetic aligns with consulting positioning
- Reduces eye strain for extended reading
- Emerald accent provides clear visual hierarchy

**Negative:**

- Light theme is no longer exposed in UI (preserved in tokens only)
- May need logo variants for different contexts
- OG images may need regeneration for proper social previews

## Alternatives Considered

1. **Light/dark toggle** - Rejected for MVP; adds complexity without clear user demand
2. **Light theme refinement** - Did not achieve the premium differentiation needed
3. **Navy/blue dark theme** - Tested but emerald provided better energy/contrast

## Related

- Supersedes: ADR-006 (Swiss Modernist Light Theme)
- Planning: `.plan/.done/design-executive-dark-mode-reskin/`
