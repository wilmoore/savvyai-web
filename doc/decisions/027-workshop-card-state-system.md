# 027. Workshop Card State System

Date: 2024-12-19

## Status

Accepted

## Context

The Programs section needed to communicate a product roadmap visually:

- One workshop is currently available ("AI Literate")
- Two workshops are planned but not yet enrolling ("Workflow Integration", "24-Hour Pilot Build")

Enterprise buyers expect to see a tiered system of offerings, even if only one is currently available. This signals maturity and a deliberate product strategy.

## Decision

Implement a status-based card system in the `OurWorkshops` component:

1. **Active Cards** (`status: "active"`):
   - Full color, emerald accent border
   - Hover lift animation with emerald glow (`hover:shadow-emerald-500/10`)
   - Clickable, routes to detail page (`/workshops/ai-literate`)
   - "Now Enrolling" status badge
   - Arrow indicator in bottom-right

2. **Roadmap Cards** (`status: "coming-soon"`):
   - Grayscale filter + 50% opacity (`grayscale opacity-60`)
   - No hover effects, not clickable (wrapped in `div` not `Link`)
   - "Coming Soon" status badge
   - Secondary "Get notified" / "Join waitlist" text link

Status is driven by i18n data, making it easy to update when workshops become available.

## Consequences

**Positive:**

- Clear visual hierarchy between available and upcoming offerings
- Communicates product roadmap without explicit "roadmap" section
- Easy to promote a workshop by changing `status` in i18n
- Maintains consistent card structure for all states

**Negative:**

- Grayscale cards may feel less engaging to visitors
- Requires maintaining status in i18n data

## Alternatives Considered

1. **Hide upcoming workshops**: Loses opportunity to show product vision
2. **Show all as active but with "Coming Soon" modal**: Frustrating UX, feels like bait-and-switch
3. **Separate sections for active/roadmap**: Adds visual complexity, harder to maintain

## Related

- Planning: `.plan/.done/feature-editorial-noir-workshop-first/`
- Component: `src/components/home/OurWorkshops.tsx`
- i18n: `src/i18n/locales/en/homepage.json`
