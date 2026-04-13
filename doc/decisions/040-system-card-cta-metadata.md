# 040. System Cards Source CTA Metadata from Translations

Date: 2026-04-13

## Status

Accepted

## Context

The homepage systems section now needs to communicate three distinct offers: Revenue Recovery Audit, AI Literacy, and Agentic Software Engineering. Each system requires its own CTA label, action, and destination (sometimes external-only on LinkedIn). The previous implementation derived CTA labels purely from card status (flagship, active, coming-soon), which limited copy specificity and prevented one card from linking externally while another remained internal. Marketing must be able to adjust CTA language and link behavior without another code change each time messaging shifts.

## Decision

Store CTA metadata alongside each system entry in `homepage.json` and have `SystemsOverview` read that metadata. Each system can now provide `ctaLabel` text and an `external` flag, allowing LinkedIn-only CTAs for revenue work while leaving AI Literate routed internally. Status continues to drive visual treatment, but CTA copy, icons, and link behavior are sourced from translations so content teams can remap offers without touching component logic.

## Consequences

- Positive: Future messaging pivots (e.g., revenue vs. governance) stay within localization files and can be shipped faster.
- Positive: Third system (Agentic Software Engineering) can participate as a live CTA even if it points off-site, while still respecting flagship styling rules.
- Negative: Translation schema becomes stricter; missing `ctaLabel` or `external` fields could lead to inconsistent UI if not supplied.
- Negative: More data now lives in JSON instead of TypeScript, so validation relies on runtime usage and reviewers.

## Alternatives Considered

1. Keep CTA labels derived from status and hardcode text in TypeScript — rejected because it still requires code edits for future copy swaps and cannot differentiate link destinations.
2. Promote a new "ctaType" enum — rejected as more rigid and less clear to translators than explicit metadata fields.

## Related

- Planning: `.plan/.done/feat-homepage-copy-remap-conversion/PLAN.md`
