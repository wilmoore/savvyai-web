# 009. Four-Tier Typography Hierarchy

Date: 2025-12-19

## Status

Accepted

## Context

The SavvyAI homepage was content-complete but visually flat and document-like. All sections had similar visual weight with weak hierarchy and no rhythm. The page needed to feel designed, intentional, and confident without adding visual noise.

Swiss/modernist layout principles emphasize clear type hierarchy to guide scanning and establish authority. The existing typography had only two effective tiers (section headers and body text), making everything feel equally important.

## Decision

Establish a four-tier typography hierarchy across the homepage:

- **Tier 1 (Page Anchors)**: `text-6xl md:text-7xl lg:text-8xl font-semibold leading-none` - Reserved for Hero headline and major section anchors that should dominate the viewport
- **Tier 2 (Section Titles)**: `text-2xl md:text-3xl font-semibold tracking-tight` - Clearly scannable section headers
- **Tier 3 (Lead Text)**: `text-xl text-muted-foreground` - First 1-2 sentences under headers, providing orientation before detail
- **Tier 4 (Body Copy)**: `text-base text-foreground` - Supporting content, lists, and detailed explanations

## Consequences

**Positive:**

- Clear visual hierarchy guides users through content naturally
- Lead text (Tier 3) creates a reading rhythm: Headline → Lead → Detail
- Hero headline now reads as a thesis statement, not just a sentence
- Page feels more authoritative and intentionally designed

**Negative:**

- Requires discipline to maintain consistency across new sections
- Lead text styling must be applied manually to each section's intro paragraph
- Some sections may need judgment calls about what constitutes "lead" text

## Alternatives Considered

1. **Font-weight only differentiation**: Too subtle; doesn't create enough separation between tiers
2. **Color-only differentiation**: Competed with headers; made lead text feel like warnings
3. **Three-tier system**: Insufficient granularity; lead text and body copy would blur together

## Related

- Planning: `.plan/.done/design-homepage-swiss-modernist-hierarchy/`
- ADR-006: Swiss Modernist Light Theme (establishes design system foundation)
