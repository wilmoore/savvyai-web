# 036. Homepage Page Boundary Enforcement

Date: 2026-01-11

## Status

Accepted

## Context

The homepage had grown to 15 sections, many of which explained **workshop delivery mechanics**:

- "What Happens in a Workshop" (WorkshopsExplained)
- "What Teams Leave With" (WorkshopOutcomes)
- "The Śavvy Pilot Protocol" (Protocol)
- "Why We Build a Pilot in 24 Hours" (Pilot24)
- Workshop-specific FAQ (HomeFAQ)
- Multiple audience/qualification sections

This created several architectural problems:

1. **Duplication**: Workshop content existed on both homepage and `/workshops`
2. **Abstraction leakage**: Homepage explained "what happens when" rather than "what we build"
3. **Scaling friction**: Adding new systems would require homepage rewrites
4. **Job confusion**: Homepage was acting as a sales funnel, not a positioning page

The correct mental model is:

```
Homepage (positioning + routing) → System Pages (what it is) → /workshops (how it's delivered)
```

## Decision

Implement **strict page boundary enforcement** with one core rule:

> **If a section explains "what happens when," it cannot live on the homepage.**

### New Homepage Structure (6 sections)

| #   | Section    | Content                                                        | Background |
| --- | ---------- | -------------------------------------------------------------- | ---------- |
| -   | Hero       | Positioning only, no delivery details                          | INK        |
| 01  | Trust      | System-focused credibility                                     | INK        |
| 02  | Systems    | AI Literate, Product Bakery, Onboarding (cards, not workshops) | PAPER      |
| 03  | Difference | Founder POV, why Śavvy AI is different                         | INK        |
| 04  | Routing    | CTAs to /workshops, /literate, LinkedIn                        | PAPER      |
| -   | Footer     | Navigation only                                                | INK        |

### Sections Removed from Homepage

- WhoThisIsFor (redundant)
- OurWorkshops → **Replaced** by SystemsOverview
- HowWeWork → **Moved** to /workshops
- WorkshopsExplained → **Moved** to /workshops
- WorkshopOutcomes → **Removed** (covered by /workshops)
- Protocol → **Moved** to /workshops
- Pilot24 → **Removed** (delivery justification)
- StatsGrid → **Removed** (workshop-focused metrics)
- Safety → **Moved** to /workshops
- HomeFAQ → **Moved** to /workshops
- Audience → **Removed** (redundant)
- StartCTA → **Removed** (delivery funnel)
- BookingForm → **Removed** (moved to /workshops)

### TrustBar Copy Update

Changed from workshop-focused to system-focused:

- Before: "Teams from the world's most innovative companies"
- After: "Teams running Śavvy AI systems"

## Consequences

**Positive:**

- Homepage is now pure positioning + routing
- Adding new systems does not require homepage changes
- `/workshops` is the single source of truth for delivery detail
- Clear job for each page reduces confusion
- Reduced homepage size improves load time

**Negative:**

- Homepage has less content (intentional - less is more)
- Some visitors may need an extra click to reach workshop details (acceptable - that's what `/workshops` is for)

## Architectural Constraint (Permanent)

**No page may explain delivery mechanics outside of `/workshops`.**

This constraint applies to:

- Timing and schedules
- Step-by-step process explanations
- Artifact inventories
- Workshop outcomes
- Protocol details

## Page Responsibilities (Authoritative)

### Homepage (`/`)

- Establish Śavvy AI positioning
- Name the systems we build
- Route visitors to correct next page
- **MUST NOT** explain how workshops work

### Workshops Page (`/workshops`)

- Single source of truth for delivery detail
- What workshops are, what happens, what participants leave with
- Schedules, replays, instances
- **Allowed** to be long and comprehensive

### System Pages (e.g., `/literate`)

- Define what the system is
- Describe artifacts it produces
- Show supported engagement modes
- **MUST NOT** explain delivery mechanics

## Related

- ADR 035: Format-Agnostic System Page Content (same architectural era)
- ADR 029: Institutional Perfection Zebra Pattern (section structure)
- Planning: `.plan/feature-enforce-page-boundaries/`
