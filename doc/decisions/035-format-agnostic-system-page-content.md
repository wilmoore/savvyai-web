# 035. Format-Agnostic System Page Content

Date: 2026-01-11

## Status

Accepted

## Context

The `/literate` page is the system definition page for AI Literate™. It previously contained a "Comparison" section titled "AI Literate vs AI Bootcamp" with a two-column layout comparing the system to a specific delivery format.

This created a **category error**: "Bootcamp" is an instance of a delivery format, not a peer concept to "AI Literate" (the system). The correct mental model is:

```
AI Literate (system) → Workshops (delivery layer) → Bootcamp, Leadership Series, Internal Training, etc. (formats)
```

By naming "Bootcamp" explicitly on the system page, we were:

- Freezing one delivery instance in place
- Accidentally elevating a format to a category
- Creating semantic debt that would break when new partners/formats are added

## Decision

Implement a **format-agnostic content rule** for the `/literate` system page:

1. **The system page must never name specific delivery formats** - not bootcamp, not cohort, not leadership series
2. **Use generic "workshops" as the delivery layer** - this is the correct abstraction level
3. **Specific formats belong elsewhere** - on `/workshops`, case studies, or partner pages

Applied changes:

- Hero subtitle: "AI bootcamps and training programs" → "practical AI training"
- Comparison section: Removed "AI Literate vs AI Bootcamp" two-column layout
- Replaced with format-agnostic "System vs Delivery" prose section

## Consequences

**Positive:**

- Can add unlimited partners and formats without rewriting system copy
- System page becomes stable for years
- Consistent abstraction layer across site
- Stops teaching readers the wrong mental model

**Negative:**

- Loss of concrete "Bootcamp" example on system page (acceptable - concrete examples live on `/workshops`)
- Requires discipline to maintain format-agnostic language on this page

## Rule (For Future Reference)

If a concept does not exist **independently of a partner**, it does not belong on `/literate`.

- Bootcamp does not exist independently (it's a partner-specific format)
- AI Literate does exist independently (it's the system)
- Workshops exist independently (it's the delivery layer)

## Related

- Planning: `.plan/.done/feature-literate-definition-section-update/`
- ADR 034: LinkedIn-Only CTA Strategy (same architectural cleanup era)
