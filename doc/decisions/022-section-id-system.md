# 022. Section ID System

Date: 2025-12-19

## Status

Accepted

## Context

The landing page needed a more "systems thinking" and "technical blueprint" aesthetic to appeal to enterprise decision-makers. Standard section headings felt generic and didn't convey the structured, methodical approach of the Savvy AI offering.

Premium editorial publications and institutional design often use systematic numbering and labeling to create a sense of rigor and organization.

## Decision

Add a Section ID badge to every major section on the landing page using the format `[ NN / LABEL ]`:

- **Format**: Square brackets, zero-padded two-digit number, forward slash, uppercase label
- **Typography**: Geist Mono, text-xs, uppercase, tracking-widest
- **Color**: `text-black/30` on paper sections, `text-white/30` on ink sections
- **Position**: Top-left of each section, above the section heading

15 sections received unique identifiers:

- `[ 01 / TRUST ]` through `[ 15 / CONTACT ]`

## Consequences

**Positive:**

- Creates institutional, procurement-friendly aesthetic
- Provides visual wayfinding for long-form landing page
- Reinforces "systems thinking" brand positioning
- Consistent pattern across all sections

**Negative:**

- Additional markup in each component (not extracted to shared component)
- Hard-coded English labels (flagged for future i18n)
- More visual elements to maintain consistency across future sections

## Alternatives Considered

1. **Section component prop**: Add `sectionId` prop to `<Section>` component
   - Rejected: Would require prop drilling and reduce flexibility for positioning

2. **CSS-based numbering**: Use CSS counters for automatic numbering
   - Rejected: Labels are semantic (TRUST, PROGRAMS) not just numbers

3. **Centered positioning**: Position IDs centered above headings
   - Rejected: Top-left provides better visual hierarchy and reading flow

## Related

- Planning: `.plan/.done/design-high-density-editorial-perfection/`
- ADR: `019-editorial-paper-ink-theme.md` (establishes zebra pattern)
