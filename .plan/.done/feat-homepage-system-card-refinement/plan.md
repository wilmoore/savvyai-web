# Homepage System Card Refinement (Authority & Hierarchy)

## Summary

Micro-alignment pass on homepage systems section to reinforce three-system hierarchy and improve visual clarity.

## Changes

### 1. Capability System - Title Hierarchy Cleanup

- Remove parentheses from AI Literate™ subname
- Reduce subname from `text-lg` to `text-sm` for clear subordination
- Keep italic styling

### 2. Governance System - Visual Authority Adjustment

- Increase opacity from `opacity-60` to `opacity-75`
- Increase text contrast from `text-black/40` to `text-black/55`
- Update CTA text: "Learn more" → "Explore system" (taxonomy alignment)

### 3. Subtitle Copy Tightening

- Before: "Each system addresses a different layer of organizational leverage — from structural integrity to capability and long-term durability."
- After: "Each system addresses a different layer of leverage — from structural integrity to long-term durability."

## Files Modified

- `src/components/home/SystemsOverview.tsx`
- `src/i18n/locales/en/homepage.json`

## ADR Compliance

- ADR-019: No emerald on backgrounds (preserved)
- ADR-029: INK/PAPER zebra pattern (preserved)
- ADR-036: No delivery mechanics on homepage (preserved)
- ADR-038: Flagship/active/coming-soon hierarchy (preserved)
