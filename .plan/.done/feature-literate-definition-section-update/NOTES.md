# Feature: Update /literate Definition Section

## Branch

`feature/literate-definition-section-update`

## Scope

Originally a surgical swap of definition section copy, expanded to fix a category error in the comparison section.

## Problem Identified

The `/literate` page had a "category error" - it was comparing "AI Literate" (the system) to "AI Bootcamp" (a delivery format instance). This creates semantic debt that breaks when new formats are added.

**Correct mental model:**

```
AI Literate (system) → Workshops (delivery layer) → Bootcamp, Leadership Series, etc. (formats)
```

## Changes Made

1. **Definition section** - Updated copy to artifact-focused messaging
2. **Hero subtitle** - Changed "bootcamps and training programs" → "practical AI training"
3. **Comparison section** - Removed "AI Literate vs AI Bootcamp" two-column layout, replaced with format-agnostic "System vs Delivery" prose section

## New Definition Copy

```
AI Literate is not a course.

It's a system for designing AI training that leaves artifacts behind:
- Reusable AI workflows
- Explicit decisions on what to automate and what not to
- Shared decision frameworks teams keep using

If nothing remains after training, nothing changed.
```

## New Comparison Copy

```
AI Literate defines the system.
Workshops are how it's delivered.

AI Literate is the underlying system for designing and running AI training. It defines:
- How training is structured
- What gets taught and what doesn't
- How workflows are built and reused
- How AI becomes leverage instead of theater

That system can be delivered through different workshop formats, depending on context.

No format is privileged. The system stays the same.
```

## Verification

- Build passes
- Page size reduced (2.09 kB vs 2.19 kB)
- Zebra pattern preserved

## Related ADRs

- ADR-035: Format-Agnostic System Page Content (created in this PR)
- ADR-029: Institutional Perfection Zebra Pattern
- ADR-019: Editorial Paper & Ink Theme
