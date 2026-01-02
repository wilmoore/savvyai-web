# Feature: Reframe Programs Section with AI Literate Hierarchy

## Summary

Restructure the Programs section to reflect how Savvy AI actually operates:

- **AI Literate** = umbrella brand (stable landing page)
- **AI Literate · Bootcamp** = live virtual training format (public, cohort-based)
- **AI Literate · Team Session** = private, company-specific format (advisory)
- **Remove** the third card (24-Hour Pilot Build) entirely

## Problem Statement

The current page promises packaged, repeatable enterprise workshops with a clear program ladder. Reality: Savvy AI does advisory + diagnosis + bespoke problem-solving. The page creates a gap between expectations and delivery.

## Solution

Two-card structure that matches what's sellable today:

| Card | Name                       | Status        | Audience            | Description               |
| ---- | -------------------------- | ------------- | ------------------- | ------------------------- |
| 01   | AI Literate · Bootcamp     | Now Enrolling | Individuals & teams | Live virtual training     |
| 02   | AI Literate · Team Session | Now Booking   | Companies           | Private, company-specific |

## Implementation Steps

### 1. Update i18n content (`src/i18n/locales/en/homepage.json`)

**Section metadata:**

- `ourWorkshops.label`: "AI Literate" (brand, not "Our Workshops")
- `ourWorkshops.title`: "Choose the format that fits your goal"
- `ourWorkshops.subtitle`: "Every engagement starts with clarity. Where it goes depends on what you need."

**Card 01 - Bootcamp:**

```json
{
  "name": "AI Literate · Bootcamp",
  "description": "A practical, no-fluff session on using AI to reclaim time, sharpen workflows, and operate with leverage.",
  "audience": "Individuals & teams",
  "duration": "3 hours",
  "status": "active",
  "statusLabel": "Now Enrolling",
  "outcomes": [
    "Shared AI vocabulary (no hype)",
    "Clear constraints and opportunities",
    "Actionable next steps"
  ],
  "href": "/workshops/ai-literate"
}
```

**Card 02 - Team Session:**

```json
{
  "name": "AI Literate · Team Session",
  "description": "A focused working session to align teams, cut through hype, and identify the right AI opportunities for your organization.",
  "audience": "Companies",
  "duration": "Half-day to full-day",
  "status": "active",
  "statusLabel": "Now Booking",
  "outcomes": [
    "Team alignment on AI direction",
    "Workflow audit with opportunities marked",
    "Clear recommendation on what to build (and what not to)"
  ],
  "href": "/contact"
}
```

**Remove Card 03** (24-Hour Pilot Build) from the workshops array.

**Update primary CTA:**

- `ourWorkshops.primaryCta`: "View upcoming Bootcamps" or "See how it works"

### 2. Update component (`src/components/home/OurWorkshops.tsx`)

- No structural changes needed (already data-driven)
- Verify grid displays cleanly with 2 cards (may need responsive adjustment)
- Both cards should now be active (emerald glow, clickable)

### 3. Update workshop registry (`src/lib/workshop-config.ts`)

- Keep `ai-literate` as the active workshop
- No new slugs needed (Team Session routes to /contact)

### 4. Verification

- [ ] Build passes
- [ ] Lint passes
- [ ] Visual verification: 2 cards, both active styling
- [ ] Card 01 links to /workshops/ai-literate
- [ ] Card 02 links to /contact (or appropriate CTA)
- [ ] Section title updated
- [ ] No third card visible

## Files to Modify

| File                                   | Change                              |
| -------------------------------------- | ----------------------------------- |
| `src/i18n/locales/en/homepage.json`    | Update ourWorkshops section         |
| `src/components/home/OurWorkshops.tsx` | Potentially adjust grid for 2 cards |

## ADR Compliance

- **ADR 029**: Section remains 03 (INK), zebra pattern preserved
- **ADR 008**: Content stays in homepage.json under ourWorkshops
- **ADR 031**: Only ai-literate remains in registry (no change needed)

## Definition of Done

- [ ] Two cards displayed (Bootcamp + Team Session)
- [ ] Both cards have active styling (emerald glow, clickable)
- [ ] Section title reflects new framing
- [ ] No errors, warnings, or regressions
- [ ] Visual verification confirms design intent
