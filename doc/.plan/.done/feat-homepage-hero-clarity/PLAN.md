# Homepage Hero Clarity Refresh

## Summary

Improve the homepage hero positioning statement and tone to emphasize revenue outcomes while maintaining the existing layout.

## Requirements

1. Replace the small header text line with: “We fix what’s blocking revenue before anything else gets built.”
2. Remove every em dash (—) and en dash (–) that appears in hero copy or any other visible homepage section, substituting commas, periods, or sentence breaks to keep a sharp tone.
3. Preserve layout/typography structure; the new line must sit cleanly above the existing headline.
4. No new sections or scope creep; this is purely a clarity and tone edit.

## Acceptance Criteria

- The new line renders above the hero headline without spacing regressions.
- No em/en dashes exist anywhere in the rendered homepage content.
- Tone feels direct and human; typography balance is untouched.

## Related ADRs

- **ADR-034 (LinkedIn-Only CTA Strategy):** Keep CTAs routed through the centralized LinkedIn constant; do not introduce forms.
- **ADR-036 (Homepage Page Boundary Enforcement):** Homepage stays positioning + routing only; this effort is a copy refinement within the hero, not a new section.

## Open Questions

- None at this time; requirements specify exact copy and scope limits.

## Implementation Steps

1. Update hero tagline copy in `src/i18n/locales/en/homepage.json`.
2. Audit the homepage translation file for em/en dashes and rewrite sentences to use commas, periods, or sentence breaks.
3. Ensure `Hero.tsx` still renders the tagline line as expected (no structural changes anticipated).
4. Run lint/format if needed and execute `coderabbit --prompt-only` per workflow.
