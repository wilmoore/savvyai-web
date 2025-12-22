# Workshop Feedback Page Implementation Plan

## Branch

`feat/workshop-feedback-page`

## Summary

Build a Workshop Feedback page accessed via QR code after workshops. Collects high-signal feedback and grants access to workshop downloads after submission.

---

## Confirmed Requirements

### Route

- Pattern: `/workshops/{workshop-slug}/feedback`
- Only configured workshops allowed (404 for unknown slugs)

### Form Structure (Hybrid Sequential Flow)

| Step | Type          | Question                                                        | Input                            |
| ---- | ------------- | --------------------------------------------------------------- | -------------------------------- |
| 1    | Inline        | "How confident do you feel using AI tools after this workshop?" | Radio buttons (1-10), horizontal |
| 2    | Full-viewport | "What was the most valuable part of the workshop for you?"      | Auto-expanding textarea          |
| 3    | Full-viewport | "What is one thing you plan to build or improve using AI?"      | Auto-expanding textarea          |
| 4    | Inline        | Email (optional)                                                | Text input with helper text      |

### Constraints

- No gamification, progress bars, icons, emojis
- No decorative labels or editorial theater
- Simple functional transitions only

### Post-Submit Behavior

- Replace form inline with downloads section
- No redirect
- Neutral confirmation copy

### Data Flow

- Phase 1: Stub API endpoint (`/api/feedback`)
- Phase 2 (future): Wire to Notion

### Downloads

- Source: i18n `workshops.json` (add `downloads` array per workshop)
- Simple list, no effects or upsells

---

## Technical Design

### Types (`/src/types/workshop.ts`)

```typescript
export interface WorkshopDownload {
  label: string;
  url: string;
}

export interface WorkshopFeedback {
  workshopSlug: string;
  confidence: number; // 1-10
  valuablePart: string;
  planToBuild: string;
  email?: string;
  submittedAt: string;
}

export interface WorkshopConfig {
  slug: string;
  title: string;
  active: boolean;
  downloads: WorkshopDownload[];
}
```

### Config (`/src/lib/workshop-config.ts`)

```typescript
export const WORKSHOPS: Record<string, WorkshopConfig> = {
  'ai-literate': {
    slug: 'ai-literate',
    title: 'AI Literate',
    active: true,
    downloads: [], // Populated from i18n
  },
};

export function getWorkshop(slug: string): WorkshopConfig | undefined;
export function isValidWorkshop(slug: string): boolean;
```

### i18n Updates (`workshops.json`)

Add feedback translations and downloads:

```json
{
  "aiLiterate": {
    ...existing,
    "feedback": {
      "confidenceQuestion": "How confident do you feel using AI tools after this workshop?",
      "valuableQuestion": "What was the most valuable part of the workshop for you?",
      "planQuestion": "What is one thing you plan to build or improve using AI?",
      "emailLabel": "Email",
      "emailHelper": "Only if you want us to follow up or send the downloads.",
      "submit": "Submit",
      "success": "Feedback submitted. Your materials are available below.",
      "downloadsLabel": "Workshop Materials"
    },
    "downloads": [
      { "label": "AI Capability Map Template", "url": "/downloads/ai-literate/capability-map.pdf" },
      { "label": "Workflow Audit Worksheet", "url": "/downloads/ai-literate/workflow-audit.pdf" }
    ]
  },
  "common": {
    "feedback": {
      "notFound": "This workshop is no longer accepting feedback.",
      "error": "Something went wrong. Please try again."
    }
  }
}
```

### Components

#### 1. ConfidenceScale (`/src/components/workshops/ConfidenceScale.tsx`)

- Horizontal row of numbered buttons 1-10
- Single tap selects
- Subtle hover/focus states
- Clear selected state (emerald background)

#### 2. FullViewportTextarea (`/src/components/workshops/FullViewportTextarea.tsx`)

- Full viewport container
- Large auto-expanding textarea
- Question as prominent heading
- Navigation buttons (Back / Continue)

#### 3. FeedbackForm (`/src/components/workshops/FeedbackForm.tsx`)

- State machine for steps (1-4 + submitted)
- Uses React Hook Form
- Handles transitions between steps
- Calls API on submit

#### 4. WorkshopDownloads (`/src/components/workshops/WorkshopDownloads.tsx`)

- Simple list of download links
- Renders after successful submission

### Page (`/app/workshops/[slug]/feedback/page.tsx`)

- Dynamic route with slug param
- Validates workshop exists and is active
- Returns 404 for invalid workshops
- Renders FeedbackForm or success state

### API Route (`/app/api/feedback/route.ts`)

- POST handler
- Validates payload
- Stub implementation: logs to console, returns success
- Prepared for Notion integration

---

## File Structure

```
/app
  /api
    /feedback
      route.ts              # Stub API endpoint
  /workshops
    /[slug]
      /feedback
        page.tsx            # Feedback page

/src
  /components
    /workshops
      ConfidenceScale.tsx   # 1-10 radio button scale
      FullViewportTextarea.tsx  # Full-screen text input
      FeedbackForm.tsx      # Main form orchestrator
      WorkshopDownloads.tsx # Download list component
      index.ts              # Exports

  /lib
    workshop-config.ts      # Workshop configuration

  /types
    workshop.ts             # TypeScript interfaces

  /i18n
    /locales/en
      workshops.json        # Updated with feedback + downloads
```

---

## Implementation Steps

1. **Types & Config**
   - Create `/src/types/workshop.ts`
   - Create `/src/lib/workshop-config.ts`

2. **i18n Translations**
   - Add `feedback` and `downloads` to `aiLiterate` in `workshops.json`
   - Add `common.feedback` for shared strings

3. **Components**
   - Build `ConfidenceScale` component
   - Build `FullViewportTextarea` component
   - Build `WorkshopDownloads` component
   - Build `FeedbackForm` orchestrator

4. **API Route**
   - Create `/app/api/feedback/route.ts` (stub)

5. **Page Route**
   - Create `/app/workshops/[slug]/feedback/page.tsx`

6. **Testing**
   - E2E tests for complete feedback flow
   - Test invalid workshop slug returns 404

7. **Verification**
   - Browser testing with Playwright
   - Lint and build checks

---

## Design Decisions

### Why Radio Buttons for Confidence Scale

- Discrete, intentional choice (not fuzzy slider)
- Lower cognitive friction on mobile
- Better accessibility (keyboard, screen readers)
- Matches mental model of "1-10 scale"

### Why Full Viewport for Text Questions

- Reduces cognitive load
- Encourages thoughtful responses
- No scroll fatigue
- Clear focus on one question at a time

### Why Inline Email Last

- Doesn't block completion
- Non-threatening position
- Clear optional status

### Why Stub API First

- Clean boundary for Notion integration
- Allows full E2E testing of form flow
- Production-ready structure from day one

---

## Out of Scope (Future)

- [ ] Notion API integration (Phase 2)
- [ ] Analytics/tracking
- [ ] Admin dashboard for viewing feedback
- [ ] Multiple language support
- [ ] A/B testing different question orders

---

## Related ADRs

- [030. Hybrid Sequential Feedback Flow](../../doc/decisions/030-hybrid-sequential-feedback-flow.md)
- [031. Workshop Slug Validation Guard](../../doc/decisions/031-workshop-slug-validation-guard.md)
- [032. Phased Feedback Storage with Stub API](../../doc/decisions/032-phased-feedback-storage-stub-api.md)
