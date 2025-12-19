# 010. Section Background Rhythm for Visual Grouping

Date: 2025-12-19

## Status

Accepted

## Context

The homepage contained 15+ sections rendered sequentially, all with similar visual weight. Users experienced a long, undifferentiated vertical stack that felt like reading a document rather than navigating a designed product page.

Swiss/modernist layouts use subtle background tone shifts to create visual "chapters" without relying on decorative elements like borders, cards, or dividers.

## Decision

Use alternating background colors on the Section component to group related sections into visual blocks:

| Visual Block     | Sections                                               | Background      |
| ---------------- | ------------------------------------------------------ | --------------- |
| Anchor           | Hero                                                   | white (default) |
| Opening Argument | Problem, Belief                                        | muted           |
| Transition       | HowWeWork                                              | white           |
| Core Offering    | Protocol, Pilot24                                      | muted           |
| Authority        | Credibility, Difference                                | white           |
| Workshops        | WorkshopsExplained, WorkshopOutcomes, BridgeToProtocol | muted           |
| Safety/FAQ       | Safety, HomeFAQ                                        | white           |
| Closing          | Audience, StartCTA                                     | muted           |
| Final Action     | BookingForm                                            | white           |

The existing `Section` component already supports `variant="default" | "muted"`. No new wrapper components were introduced.

## Consequences

**Positive:**

- Visual rhythm emerges naturally from background alternation
- Related sections read as unified "chapters" without explicit grouping markup
- Reversible and easy to tune without structural changes
- Maintains semantic HTML structure (each section remains independent)

**Negative:**

- Grouping is implicit; developers must understand the visual pattern
- Adding new sections requires deciding which group they belong to
- Risk of losing rhythm if sections are reordered without updating variants

## Alternatives Considered

1. **Wrapper components for groups**: Introduced unnecessary abstraction and risked turning a design pass into a refactor
2. **Border/divider-based grouping**: Against Swiss modernist principles; adds visual noise
3. **Card-based sections**: Too heavy; makes content feel compartmentalized rather than flowing

## Related

- Planning: `.plan/.done/design-homepage-swiss-modernist-hierarchy/`
- ADR-009: Four-Tier Typography Hierarchy
