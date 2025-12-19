# Implementation Plan: Complete Website Content Sections

## Overview

Complete the SavvyAI marketing website by adding all missing content sections to make the site feel finished, coherent, and trustworthy.

**Branch:** `feature/complete-website-content-sections`

---

## Confirmed Architecture

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS (Swiss Modernist design system)
- **Copy Management:** i18next with ESLint enforcement
- **Component Pattern:** `Section` wrapper + `useTranslation` hook

---

## Agreed Section Placement

### Homepage (Final Flow)

1. Hero
2. Problem
3. Belief
4. HowWeWork
5. Protocol (intro)
6. Pilot24
7. **Credibility** (NEW)
8. **Difference** (NEW)
9. **WorkshopsExplained** (NEW)
10. **WorkshopOutcomes** (NEW)
11. **BridgeToProtocol** (NEW)
12. **Safety** (NEW)
13. **HomeFAQ** (NEW)
14. Audience
15. **FinalCTAReinforcement** (NEW)
16. StartCTA
17. BookingForm

### Protocol Page (Final Flow)

1. Hero
2. Comparison
3. HowItWorks
4. Deliverables
5. **WhatThisIsNot** (NEW)
6. **AfterThePilot** (NEW)
7. FAQ
8. ReadyCTA

---

## Implementation Tasks

### Phase 1: Homepage Sections (8 new sections)

| #   | Component Name        | Purpose                                   | Section Variant |
| --- | --------------------- | ----------------------------------------- | --------------- |
| 1   | Credibility           | Light social proof, types of teams served | default         |
| 2   | Difference            | What makes SavvyAI different              | muted           |
| 3   | WorkshopsExplained    | Plain language workshop description       | default         |
| 4   | WorkshopOutcomes      | Typical outcomes from workshops           | muted           |
| 5   | BridgeToProtocol      | Connect homepage to /protocol             | default         |
| 6   | Safety                | Data, security, compliance brief          | muted           |
| 7   | HomeFAQ               | Lite FAQ for objection handling           | default         |
| 8   | FinalCTAReinforcement | Education-first framing reinforcement     | muted           |

### Phase 2: Protocol Page Sections (2 new sections)

| #   | Component Name | Purpose                           | Section Variant |
| --- | -------------- | --------------------------------- | --------------- |
| 1   | WhatThisIsNot  | Disqualify bad-fit, clarify scope | default         |
| 2   | AfterThePilot  | No lock-in, you decide            | muted           |

---

## File Changes Summary

### New Files to Create

**Homepage components:**

- `src/components/home/Credibility.tsx`
- `src/components/home/Difference.tsx`
- `src/components/home/WorkshopsExplained.tsx`
- `src/components/home/WorkshopOutcomes.tsx`
- `src/components/home/BridgeToProtocol.tsx`
- `src/components/home/Safety.tsx`
- `src/components/home/HomeFAQ.tsx`
- `src/components/home/FinalCTAReinforcement.tsx`

**Protocol components:**

- `src/components/protocol/WhatThisIsNot.tsx`
- `src/components/protocol/AfterThePilot.tsx`

### Files to Modify

- `src/i18n/locales/en/homepage.json` (add new section strings)
- `src/i18n/locales/en/protocol.json` (add new section strings)
- `src/components/home/index.ts` (export new components)
- `src/components/protocol/index.ts` (export new components)
- `app/page.tsx` (import and compose new homepage sections)
- `app/protocol/page.tsx` (import and compose new protocol sections)

---

## Copy Style Guidelines (from existing content)

- Short, declarative sentences
- No em dashes anywhere
- Calm, factual, understated tone
- Plain language, no jargon
- Directly addresses "teams" and "you"
- Uses periods to create emphasis between thoughts
- Lists use parallel structure
- No testimonials, logos, or unverifiable claims

---

## Constraints (Non-negotiable)

- Do not rewrite existing copy
- Do not add new services
- Do not add pricing
- Do not add testimonials
- Do not add animations or motion
- Do not introduce technical jargon
- Do not optimize for engineers
- Keep tone calm, plain, confident
- No em dashes anywhere

---

## Success Criteria

After implementation:

- Homepage feels complete, not skeletal
- A non-technical operator understands what SavvyAI does
- A skeptical buyer feels less risk, not more
- A bad-fit buyer self-selects out
- The Protocol page reads like a real product page, not a concept

---

## Definition of Done

- All 10 new sections implemented
- All copy in i18n JSON files (no hardcoded strings)
- ESLint passes (no i18n violations)
- Build passes with no errors or warnings
- Visual verification via browser
- No console errors

---

## Related ADRs

This implementation follows existing architectural patterns. No new ADRs required.

- [006. Swiss Modernist Light Theme Design System](../../doc/decisions/006-swiss-modernist-light-theme.md)
- [007. Marketing Component Architecture](../../doc/decisions/007-marketing-component-architecture.md)
- [008. Section-Level i18n Organization](../../doc/decisions/008-section-level-i18n-organization.md)
