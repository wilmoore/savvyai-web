# Homepage Copy Remap for Conversion

## Status: COMPLETE

## Summary

Text-only changes to improve homepage clarity, urgency, and conversion. No layout, spacing, or structural changes.

## Changes Made

### Hero Section

- **KEPT** headline: "Structural integrity first. Leverage second."
- **KEPT** description: "Workshops, revenue audits, and agentic systems for organizations building with AI."
- **REMOVED** tagline (set to empty)
- **REMOVED** primaryMicro CTA subtext (set to empty)
- **UPDATED** primary CTA: "Start Audit" → "Run a Revenue Audit"
- **UPDATED** primary CTA link: /audit → LinkedIn

### Systems Section - 3 Cards

| Card             | Changes                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **1 (Flagship)** | Name: "Revenue Recovery Audit"                                                                    |
|                  | Purpose: "Identify and recover revenue leaks across billing, infrastructure, and lifecycle gaps." |
|                  | Supporting line: "7-day audit. Measurable impact."                                                |
|                  | CTA: "Run a Revenue Audit" → LinkedIn                                                             |
| **2 (Active)**   | Name: "AI Literacy" (removed subname "AI Literate™")                                              |
|                  | Purpose: "Turn your team or audience into AI operators through live, practical workshops."        |
|                  | Supporting line: "Next session: Coming soon"                                                      |
|                  | CTA: "View Workshops" → /literate                                                                 |
| **3 (Active)**   | Name: "Agentic Software Engineering"                                                              |
|                  | Purpose: "Build production-ready agent systems with routing, reusable skills, and guardrails."    |
|                  | CTA: "Build Your Agent System" → LinkedIn                                                         |

### Cleanup

- Removed systemsOverview subtitle (institutional language)
- Card 3 status changed from conceptual to `active` (clickable)

## Files Modified

1. `src/i18n/locales/en/homepage.json` - All copy changes
2. `src/components/home/Hero.tsx` - Conditional rendering for empty tagline/micro, LinkedIn CTA
3. `src/components/home/SystemsOverview.tsx` - Added `supportingLine` field support

## Success Criteria Verification

User can instantly understand:

1. ✓ We help you find lost revenue (Revenue Recovery Audit)
2. ✓ We train you to use AI (AI Literacy)
3. ✓ We help you build agent systems (Agentic Software Engineering)

## Build Status

- TypeScript: ✓ No errors
- Next.js build: ✓ Successful
