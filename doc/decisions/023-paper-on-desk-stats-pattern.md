# 023. Paper-on-Desk Stats Pattern

Date: 2025-12-19

## Status

Accepted

## Context

The Stats/Results section needed to display business impact metrics (24h, 100%, 1, 0) with high visual impact. The original design used white text on the ink (dark) background, which was functional but lacked the editorial sophistication of premium publications.

The goal was to achieve a "Vogue-meets-McKinsey" aesthetic while preserving the ink/paper zebra rhythm established in ADR-019.

## Decision

Implement a "Paper on Desk" pattern where a white card floats on the ink background:

**Structure:**

```
Section (ink background)
└── White Card (shadow-lg, rounded-md)
    └── 4-column grid with divide-x dividers
        └── Stat blocks (massive black numbers, mono labels)
```

**Specifications:**

- **Card**: `bg-white rounded-md shadow-lg p-8 md:p-12 max-w-5xl mx-auto`
- **Grid**: `grid-cols-2 md:grid-cols-4` with `md:divide-x md:divide-black/10`
- **Numbers**: `font-extrabold tracking-tighter text-ink` at 5xl-7xl scale
- **Labels**: `font-mono uppercase tracking-wider text-black/40`

## Consequences

**Positive:**

- Preserves zebra rhythm (ink section background maintained)
- Creates visual break that draws attention to key metrics
- White card provides high contrast for black typography
- 1px vertical dividers add technical grid aesthetic
- Pattern is reusable for future "highlight" sections

**Negative:**

- Description text at `text-black/50` may have WCAG contrast issues
- Additional nesting depth in component structure
- Card shadow may need adjustment for different contexts

## Alternatives Considered

1. **Switch to paper background**: Make entire section white
   - Rejected: Breaks zebra rhythm, creates visual monotony

2. **White text on ink**: Keep existing dark-on-dark approach
   - Rejected: Numbers weren't impactful enough, felt "standard business"

3. **Glass card effect**: Use backdrop-blur on white/10 card
   - Rejected: Too subtle, needed stronger contrast for numbers

## Related

- Planning: `.plan/.done/design-high-density-editorial-perfection/`
- ADR: `019-editorial-paper-ink-theme.md` (establishes zebra pattern)
- ADR: `021-geist-sans-typography.md` (font system for numbers)
