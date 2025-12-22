# 031. Workshop Slug Validation Guard

Date: 2025-12-21

## Status

Accepted

## Context

The feedback page route `/workshops/{slug}/feedback` accepts a dynamic slug parameter. Without validation, this creates several risks:

- Orphan feedback for non-existent workshops
- Broken QR codes from typos polluting data
- Ambiguous data when correlating feedback to workshops
- Historical workshops that should no longer accept feedback

The system needs to distinguish between active workshops that accept feedback and everything else.

## Decision

Implement a workshop configuration registry (`/src/lib/workshop-config.ts`) that explicitly lists valid workshops with an `active` flag. The feedback page validates slugs against this registry before rendering.

```typescript
export const WORKSHOPS: Record<string, WorkshopConfig> = {
  'ai-literate': { slug: 'ai-literate', title: 'AI Literate', active: true },
};

export function isValidWorkshop(slug: string): boolean {
  const workshop = WORKSHOPS[slug];
  return workshop !== undefined && workshop.active;
}
```

Invalid or inactive slugs display: "This workshop is no longer accepting feedback."

## Consequences

**Positive:**

- Prevents orphan feedback data
- QR code typos fail loudly (better than silent data pollution)
- Historical workshops can be marked inactive
- Single source of truth for workshop validity
- Enables future features (workshop-specific download configs)

**Negative:**

- Requires config update when adding new workshops
- Slightly more setup overhead than "accept anything"

## Alternatives Considered

1. **Accept any slug** - Rejected: leads to orphan data, ambiguous feedback, cleanup burden
2. **Database lookup** - Rejected: over-engineered for current needs, adds latency
3. **404 page** - Considered: gentler message chosen to avoid implying user error

## Related

- Planning: `.plan/.done/feat-workshop-feedback-page/`
