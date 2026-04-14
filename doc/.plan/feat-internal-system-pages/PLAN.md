# Internal System Conversion Pages

## Summary

Turn each system card into a direct internal path: homepage hero funnels into /audit, while AI Literacy and Intent-Driven pages become compact conversion surfaces. No extra routing layers.

## Requirements

1. Homepage hero: primary CTA "Start Audit" (dominant), secondary "See Systems" (lower contrast); remove bridge block; delete RoutingCTAs section.
2. Systems cards: audit copy leads with revenue framing, CTA "Start Audit" → `/audit`; literacy copy supports seats with "View Sessions" → `/literate`; agentic copy supports builds with "Explore Builds" → `/intent-driven`.
3. `/audit`: hero + 3-field form (What do you sell? / Where is revenue getting stuck? / Urgency). Optional contact field only if needed. On submit show "We’ll review this and reach out directly." plus buttons for LinkedIn message (prefilled) and optional calendar link.
4. `/literate`: two stacked sections only—Join Session (current cohort details + CTA) and For Partners (paragraph + intentional partner CTA/form or prefilled DM).
5. `/intent-driven`: exactly two blocks—Intent-Driven Engineering (philosophy/book) with CTA "Start Here" and App Builds (free + paid cards) with CTA "Explore Builds". No email capture.
6. Kill all em/en dashes introduced during the work; keep copy sharp and revenue-first.

## ADRs

- ADR-034 LinkedIn-only CTA strategy (LinkedIn remains terminal handoff, not first touch)
- ADR-036 Homepage page boundary enforcement (homepage stays positioning + routing only)

## Tasks

1. Update homepage translations + Hero.tsx + SystemsOverview.tsx per new CTAs and remove RoutingCTAs.
2. Build `/audit` page with form + post-submit state per spec.
3. Simplify `/literate` to two stacked sections; wire partner CTA intentionally.
4. Create `/intent-driven` two-block hub.
5. Verify routing/link targets and run coderabbit.
