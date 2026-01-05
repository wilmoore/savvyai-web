# 034. AI Literate Brand Hierarchy

Date: 2026-01-03

## Status

Accepted

## Context

The Programs section was structured as three separate workshop offerings (AI Literate, Workflow Integration, 24-Hour Pilot Build) with a "productized workshop" framing. This created a gap between marketing promises and actual service delivery, which focuses on advisory, diagnosis, and bespoke problem-solving.

The existing structure implied:

- Packaged, repeatable enterprise workshops
- Clear program ladder (Half-day → Full-day → 24-hour build)
- Teams show up, leave with artifacts, done

Reality:

- Engagements start as conversations, not programs
- Scope emerges during the work, not before
- Delivery is founder-led, high-touch, and adaptive

## Decision

Restructure the Programs section using **AI Literate as the umbrella brand** with distinct **format cards** underneath:

1. **AI Literate · Bootcamp** - Live virtual training (public, cohort-based)
2. **AI Literate · Team Session** - Private, company-specific sessions (advisory)
3. **ŚavvyBuild** - Custom AI program design and delivery (application-required)

Key changes:

- Section label: "AI Literate" (brand) instead of "Our Workshops"
- Section title: "Choose the format that fits your goal"
- All cards are active (sellable today) with honest status labels
- Clear differentiation: public training vs private sessions vs custom builds

## Consequences

**Positive:**

- Matches how the business actually operates
- Creates clean narrative: Train (Bootcamp) → Go deeper (Team Session) → Build custom (ŚavvyBuild)
- Each card is sellable without explanation or hedging
- Natural upsell path without overpromising
- Filters unserious leads through "Application Required" on ŚavvyBuild

**Negative:**

- Requires new pages (/contact, /build) to support card links
- May need future iteration as offerings evolve

## Alternatives Considered

1. **Keep original 3-card structure with "Coming Soon" badges** - Rejected: weakens credibility and creates false promises
2. **Two cards only (remove third entirely)** - Initially implemented, then reversed: ŚavvyBuild fills a real need for custom work
3. **Advisory/consulting framing** - Rejected: too abstract, doesn't communicate the hands-on nature of the work

## Related

- Planning: `.plan/.done/feature-reframe-programs-ai-literate-hierarchy/`
- ADR 008: Section-Level i18n Organization (content structure)
- ADR 027: Workshop Card State System (card visual states)
