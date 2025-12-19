# 017. Section Band Layout System

Date: 2025-12-19

## Status

Accepted

## Context

The previous design relied heavily on GlassCard components (ADR-014) as the primary layout primitive, creating a "card-centric" visual rhythm typical of SaaS marketing sites. This approach:

- Created visual noise with too many bordered containers
- Made content feel fragmented rather than flowing
- Lacked clear cognitive resets between major ideas
- Suggested "product features" rather than "workshop structure"

Workshop and facilitation programs typically use full-width horizontal bands that guide readers through a narrative with clear visual breaks.

## Decision

We introduced a Section Band layout system with:

1. **SectionBand component**: Full-width container with white/warm-gray background variants
   - `variant="white"`: White background (#FFFFFF)
   - `variant="warm"`: Warm gray background (#FAFAF8)
   - Consistent vertical padding (py-16 md:py-24)
   - Centered content with configurable max-width

2. **Visual rhythm**: Alternating white and warm backgrounds create cognitive resets between major sections

3. **Card usage**: Reserved for genuinely grouped items (lists of features, comparison grids) rather than as dominant structure

4. **GlassCard adaptation**: Updated for light mode with subtle shadows instead of glassmorphism, used sparingly

## Consequences

**Positive:**

- Clear visual separation between major content areas
- Content flows naturally without box fatigue
- Matches expectations for workshop/program documentation
- Easier to scan and navigate
- Reduced visual complexity

**Negative:**

- Less visual "pop" compared to card-heavy designs
- Requires discipline to not over-use cards
- Band alternation must be carefully planned to avoid awkward transitions

## Alternatives Considered

1. **Keep card-centric design with light colors**: Rejected because cards as primary layout still create SaaS visual rhythm.

2. **Use borders instead of background color for separation**: Rejected as too weak for clear cognitive resets.

3. **Single white background throughout**: Rejected as visually monotonous without clear section breaks.

## Related

- Modifies: ADR-014 (Glassmorphism Layout Components)
- Planning: `.plan/.done/design-workshop-authority-grammar/`
