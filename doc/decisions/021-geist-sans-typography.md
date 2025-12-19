# 021. Geist Sans Typography System

Date: 2025-12-19

## Status

Accepted

## Context

The editorial design required typography that conveys both technical credibility and modern design sensibility. The font needed to work well at large display sizes for billboard-style headlines while remaining readable for body text.

## Decision

Adopt Geist Sans as the primary typeface:

1. **Font family** - Geist Sans for headings and body, Geist Mono for labels and stats
2. **Package** - `geist` npm package with Next.js font optimization
3. **Tracking** - Tight letter-spacing for headlines (`tracking-tighter: -0.04em`)
4. **Weight contrast** - Bold (700) for headlines, Regular (400) for body
5. **Label treatment** - Mono font, uppercase, widest tracking for section labels

Typography scale:

- Hero: 5xl-8xl (responsive), bold, tracking-tighter
- Section headings: 3xl-4xl, bold, tracking-tighter
- Subheadings: lg-xl, regular
- Body: base, regular
- Labels: xs, mono, uppercase, tracking-widest

## Consequences

**Positive:**

- Modern, tech-forward aesthetic aligns with AI consulting positioning
- Excellent rendering at all sizes due to Next.js font optimization
- Geist Mono complements sans for technical/data elements
- Tight tracking creates distinctive editorial headlines

**Negative:**

- Dependency on Vercel's geist package
- Less traditional than serif options for "institutional" feel
- Tight tracking can reduce readability at smaller sizes

## Alternatives Considered

1. **Inter** - Previous choice, rejected as too ubiquitous and generic
2. **Helvetica/Arial** - Classic but lacks modern tech credibility
3. **Custom serif** - Rejected as too traditional for AI consulting brand
4. **Variable font with custom axes** - Unnecessary complexity for current needs

## Related

- Planning: `.plan/.done/design-editorial-paper-ink-theme/`
- Configuration: `app/layout.tsx`, `tailwind.config.ts`
