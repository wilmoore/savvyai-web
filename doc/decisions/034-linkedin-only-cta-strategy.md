# 034. LinkedIn-Only CTA Strategy

Date: 2025-01-11

## Status

Accepted

## Context

The site had "Book a Conversation" CTAs throughout the header, footer, and various pages. This implied the existence of booking forms, calendars, or external scheduling tools. However:

1. No booking system was actually configured
2. Forms create friction and maintenance burden
3. Early-stage partnerships are better served by direct conversation
4. The target audience (leaders, operators) expects direct access, not forms

## Decision

Replace all booking-related CTAs with LinkedIn DM links:

- Header CTA: "Book a Conversation" → "Message on LinkedIn"
- Footer nav: "Contact" → "LinkedIn"
- All partnership/inquiry CTAs route to the LinkedIn profile

The LinkedIn URL is centralized in `src/lib/constants.ts` as `EXTERNAL_LINKS.LINKEDIN`.

## Consequences

**Positive:**

- Removes broken/misleading booking CTAs
- Reduces friction for serious inquiries
- Leverages existing LinkedIn network and credibility
- Zero maintenance (no calendar sync, form handling)
- Direct access signals high-touch service

**Negative:**

- No tracking of inquiry volume (LinkedIn doesn't expose this)
- Relies on LinkedIn platform availability
- May filter out some leads who prefer email/forms

## Alternatives Considered

1. **Calendly integration** - Rejected: adds complexity, implies high volume that doesn't exist yet
2. **Contact form** - Rejected: creates maintenance, often ignored by serious buyers
3. **Email link** - Rejected: less professional, spam-prone

## Related

- Planning: `.plan/.done/feature-three-page-ai-literate-architecture/`
