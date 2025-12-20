# 029. Institutional Perfection Zebra Pattern

Date: 2025-12-20

## Status

Accepted

## Context

The "Editorial Noir" design system previously used an inconsistent section background pattern. Sections 07, 08, and 11 used grey backgrounds, breaking the editorial rhythm. The SectionID metadata tags ([ XX / NAME ]) were not mathematically aligned across sections, undermining the "engineering-grade quality" messaging for C-suite retail and fashion executives.

The design needed to communicate institutional authority through visual precision.

## Decision

Implement a strict binary "zebra" pattern with no grey backgrounds:

1. **Binary Colors Only**: INK (#050505) and PAPER (#FFFFFF) - no intermediate greys
2. **Perfect Alternation**: Every adjacent section alternates between INK and PAPER
3. **Sequential Numbering**: SectionIDs numbered 01-15 in document order
4. **Spine Alignment**: All [ XX / NAME ] tags anchored to max-w-7xl "spine" via shell architecture

The final pattern:

- Hero (INK, no SectionID)
- 01 TRUST (INK) → 02 QUALIFICATION (PAPER) → 03 PROGRAMS (INK) → ...
- Continues alternating to 15 CONTACT (INK)

**Critical Change**: StatsGrid (RESULTS) changed from INK with white card to PAPER with direct black numbers - massive typography on white creates maximum editorial impact.

## Consequences

**Positive:**

- Consistent "Vogue-meets-McKinsey" editorial aesthetic
- Mathematical precision communicates engineering discipline
- SectionID spine creates institutional feel (like magazine page markers)
- Black numbers on white paper (StatsGrid) creates maximum readability and impact
- Design can be shared with C-suite executives with confidence

**Negative:**

- Less flexibility for future section additions (must maintain alternation)
- Requires updating all downstream components when pattern changes
- Some sections required complete color scheme rewrites

## Alternatives Considered

1. **Three-color system** (INK, PAPER, GREY): Rejected - grey reduces contrast and editorial impact
2. **Content-based coloring** (dark for authority, light for details): Rejected - creates inconsistent rhythm
3. **Keep StatsGrid "Paper on Desk"** pattern: Rejected - white card on black is less impactful than direct black on white for numbers

## Related

- ADR 019: Editorial Paper & Ink Theme (original system)
- ADR 023: Paper on Desk Stats Pattern (now superseded for StatsGrid)
- ADR 026: Shell Architecture for Section Alignment (spine alignment)
- Planning: `.plan/.done/design-institutional-perfection-final/`
