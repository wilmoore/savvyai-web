# 038. Flagship System Status Tier

Date: 2026-01-29

## Status

Accepted

## Context

The homepage systems section originally supported two status types: `active` and `coming-soon`. With the strategic repositioning around the Operational Structural Integrity Audit as the flagship offering, a third status tier was needed to:

1. Visually distinguish the flagship from other active systems
2. Signal primary offering without demoting AI Literate™
3. Support external links (LinkedIn) for flagship CTAs vs internal routes

## Decision

Add `flagship` as a third status tier in the System interface:

```typescript
status: 'flagship' | 'active' | 'coming-soon';
```

Visual treatment for flagship:

- Emerald ring accent (`ring-1 ring-emerald-500/30`)
- Emerald border (`border-emerald-500/50`)
- Lighter emerald text on CTAs (`text-emerald-300`)
- External link behavior (opens in new tab)

Card ordering convention:

1. Flagship (first position)
2. Active systems
3. Coming soon systems

## Consequences

**Positive:**

- Clear visual hierarchy between flagship and active offerings
- Flagship CTA can link externally (LinkedIn) while active systems link internally
- No changes required to existing active/coming-soon systems
- Grid updated to 4-column layout to accommodate additional card

**Negative:**

- Must maintain flagship as first array item by convention (not enforced in code)
- External link handling adds complexity to SystemsOverview component

## Alternatives Considered

1. **Use "featured" boolean instead of status**: Rejected - muddies the status semantics
2. **Separate flagship section above systems**: Rejected - duplicates card styling, breaks visual flow
3. **Highlight first active card automatically**: Rejected - too implicit, unclear intent

## Related

- ADR 036: Homepage Page Boundary Enforcement (homepage structure)
- Planning: `.plan/.done/feat-homepage-flagship-repositioning/`
