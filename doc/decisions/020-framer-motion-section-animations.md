# 020. Framer Motion for Section Animations

Date: 2025-12-19

## Status

Accepted

## Context

The editorial design required subtle but professional animations as users scroll through the page. Sections needed to fade in smoothly to create a polished, magazine-like reading experience without being distracting.

## Decision

Use Framer Motion for scroll-triggered section animations:

1. **Library choice** - Framer Motion for React animation primitives
2. **Animation pattern** - Fade-in with slight vertical translation (20px up)
3. **Trigger mechanism** - `whileInView` with `viewport={{ once: true, margin: '-50px' }}`
4. **Reusable wrapper** - `FadeInSection` component encapsulating animation logic
5. **Section integration** - `animate` prop on Section component (default: true)

Animation configuration:

- Duration: 0.6s
- Easing: `[0.25, 0.4, 0.25, 1]` (custom cubic bezier for smooth deceleration)
- Stagger: Optional `delay` prop for sequential reveals

## Consequences

**Positive:**

- Professional, polished user experience
- Performant GPU-accelerated animations
- Consistent animation behavior across all sections
- Easy to disable per-section with `animate={false}`

**Negative:**

- Additional bundle size (~15KB gzipped for framer-motion)
- Client-side rendering required for animations
- May affect Largest Contentful Paint if above-fold content animates

## Alternatives Considered

1. **CSS-only animations with IntersectionObserver** - Rejected due to more complex state management
2. **React Spring** - Similar capability but less intuitive API
3. **No animations** - Rejected as too static for editorial aesthetic
4. **GSAP** - Overkill for simple fade animations, larger bundle

## Related

- Planning: `.plan/.done/design-editorial-paper-ink-theme/`
- Component: `src/components/layout/FadeInSection.tsx`
