# 032. Phased Feedback Storage with Stub API

Date: 2025-12-21

## Status

Accepted

## Context

Workshop feedback needs persistent storage, but the target system (Notion) was identified during planning as a Phase 2 deliverable. The team needed to:

1. Build and test the complete frontend flow immediately
2. Maintain a clean integration boundary for future Notion wiring
3. Avoid blocking frontend work on backend decisions

## Decision

Implement a stub API endpoint (`/app/api/feedback/route.ts`) that:

1. Validates the request payload (required fields, workshop validity, confidence range)
2. Logs feedback to server console with truncated content
3. Returns success response immediately

```typescript
// Phase 1: Log feedback (stub implementation)
// TODO: Phase 2 - Wire to Notion API
console.log('[Feedback Received]', {
  workshopSlug: body.workshopSlug,
  confidence: body.confidence,
  valuablePart: body.valuablePart.substring(0, 100) + '...',
  // ...
});

return NextResponse.json({ success: true });
```

The API contract (request/response shape) is production-ready; only the storage implementation changes in Phase 2.

## Consequences

**Positive:**

- Frontend can be fully tested end-to-end
- Clean separation of concerns (UI vs. storage)
- API contract defined and stable before Notion integration
- Zero refactoring needed when storage is added
- Feedback is logged for debugging during development

**Negative:**

- Feedback is not persisted in Phase 1
- Requires explicit Phase 2 follow-up

## Alternatives Considered

1. **Wire Notion immediately** - Rejected: larger scope, blocks frontend delivery
2. **LocalStorage only** - Rejected: no server-side validation, not production-ready pattern
3. **Airtable (existing pattern)** - Considered: Notion preferred for future workflow integration

## Related

- Planning: `.plan/.done/feat-workshop-feedback-page/`
- Known Issues: `.plan/.done/feat-workshop-feedback-page/KNOWN_ISSUES.md`
