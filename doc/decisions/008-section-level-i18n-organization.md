# 008. Section-Level i18n Organization

Date: 2024-12-18

## Status

Accepted

## Context

The marketing website needed internationalization support while maintaining copy that could be reviewed and updated as cohesive blocks. The existing i18n setup used fine-grained keys (e.g., `hero.title`, `hero.subtitle`) which worked but made it harder to see complete sections in context.

For marketing copy specifically, reviewers need to see how headlines, body text, and CTAs work together as a unit.

## Decision

Organize i18n translations at the **section level** rather than sentence-by-sentence:

```json
{
  "hero": {
    "tagline": "Practical AI.",
    "headline": "Taught first. Built second.",
    "description": "We help teams adopt AI...",
    "clarification": {
      "line1": "You do not need to be technical.",
      "line2": "You need a clear plan..."
    },
    "cta": {
      "primary": "Start with a Workshop",
      "secondary": "Book a Conversation"
    }
  },
  "problem": { ... },
  "belief": { ... }
}
```

Each page gets its own namespace (`homepage`, `protocol`) with sections as top-level keys.

## Consequences

**Positive:**

- Copy reviewers can see complete sections in context
- Easier to maintain consistency within a section
- Section structure mirrors component structure
- Simpler to add/remove entire sections

**Negative:**

- Larger JSON objects per section
- Some nesting depth (e.g., `hero.clarification.line1`)
- Less granular reuse (can't share individual sentences across sections)

## Alternatives Considered

1. **Sentence-level keys** (`hero.title`, `hero.subtitle`) - Rejected for marketing pages because it fragments copy that should be reviewed together
2. **Markdown files per section** - Rejected because it loses type safety and structured access
3. **CMS integration** - Out of scope for initial implementation; i18n provides foundation for future CMS

## Related

- Planning: `.plan/.done/feature-savvyai-marketing-website-v2/`
- ADR: `004-use-i18next-for-internationalization.md`
