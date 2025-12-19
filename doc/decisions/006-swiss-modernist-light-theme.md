# 006. Swiss Modernist Light Theme Design System

Date: 2024-12-18

## Status

Accepted

## Context

SavvyAI needed to reposition from a generic "dev shop" to a trusted, education-first AI partner. The existing dark-themed website with animated elements and serif typography conveyed a technical/product-focused aesthetic that didn't align with the new positioning inspired by AJ&Smart and Facilitator.com.

The new brand strategy required:

- Calm, confident presentation
- Trust and education as primary signals
- Plain, practical language over clever or academic tone
- Authority through structure, not visual drama

## Decision

Implement a Swiss/modernist design system with:

1. **Light background** (white/light gray) instead of dark theme
2. **Inter font** instead of Playfair Display serif
3. **Teal accent color** (#0f766e) for CTAs - calm and confident
4. **No animations** - structure and copy do the work
5. **Generous whitespace** and grid-based layout
6. **HSL CSS variables** for consistent theming

The dark theme is preserved in CSS for potential future use but is not active.

## Consequences

**Positive:**

- Site feels calm, open, and trustworthy
- Readability improved for long-form content (protocol page)
- Aligns with education-first positioning
- Typography hierarchy drives attention without visual noise

**Negative:**

- Logo asset may need light-theme variant
- Existing dark-themed pages (gpt-guide) now visually inconsistent
- Breaking change for any users who bookmarked the old design

## Alternatives Considered

1. **Keep dark theme with Swiss typography** - Rejected because dark themes signal "tool" or "engineering" which conflicts with education-first positioning
2. **Space Grotesk font** - Rejected because it adds personality/cleverness that conflicts with plain, practical tone
3. **Blue accent color** - Rejected in favor of teal for calmer, more confident feel

## Related

- Planning: `.plan/.done/feature-savvyai-marketing-website-v2/`
