# 030. Hybrid Sequential Feedback Flow

Date: 2025-12-21

## Status

Accepted

## Context

Workshop feedback forms face competing goals: maximizing completion rates vs. collecting high-quality qualitative responses. Traditional survey designs often fail at both—long scrollable forms cause abandonment, while single-question flows frustrate users with simple inputs.

The post-workshop context is unique: attendees are mildly tired, often on mobile, and have limited attention. The feedback page must collect three types of data:

1. Quantitative (confidence rating)
2. Qualitative (two open-ended reflections)
3. Contact info (optional email)

## Decision

Implement a hybrid sequential flow that adapts presentation based on question complexity:

- **Inline steps** for low-friction inputs (confidence scale, optional email)
- **Full-viewport steps** for qualitative questions (one at a time, no distractions)

The flow progresses: confidence → valuable part → plan to build → email → success with downloads.

Key UX choices:

- Confidence scale auto-advances after selection (reduces clicks)
- Full-viewport textareas encourage thoughtful responses
- Email appears last and is explicitly optional
- No progress bars, gamification, or time pressure cues

## Consequences

**Positive:**

- Reduces cognitive load by matching UI density to question complexity
- Auto-advance on simple inputs maintains momentum
- Full-viewport forces focus on open-ended questions
- Optional email last doesn't block completion

**Negative:**

- More complex state management than single-page form
- Users can't see total question count upfront
- Back navigation required for corrections

## Alternatives Considered

1. **Single scrollable form** - Rejected: causes survey fatigue, lower completion rates
2. **Pure wizard (one question per page)** - Rejected: adds friction to simple inputs like rating scale
3. **Typeform-style animations** - Rejected: conflicts with "no gamification" constraint

## Related

- Planning: `.plan/.done/feat-workshop-feedback-page/`
