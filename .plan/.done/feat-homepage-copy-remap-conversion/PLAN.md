# Homepage Copy Remap for Conversion

## Summary

Text-only changes to improve homepage clarity, urgency, and conversion. No layout, spacing, or structural changes.

## Requirements (from user)

### Hero Section

- KEEP headline: "Structural integrity first. Leverage second."
- REPLACE subheadline/body with: "Workshops, revenue audits, and agentic systems for organizations building with AI."
- REMOVE extra paragraphs that dilute clarity

### Systems Section - 3 Cards Remap

| Card                | Current                                        | New                                                                                      |
| ------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **1 (Flagship)**    | "Operational Structural Integrity Audit"       | **"Revenue Recovery Audit"**                                                             |
|                     | Long purpose about structural risk             | "Identify and recover revenue leaks across billing, infrastructure, and lifecycle gaps." |
|                     | -                                              | Small: "7-day audit. Measurable impact."                                                 |
|                     | "Request Audit"                                | **"Run a Revenue Audit"**                                                                |
| **2 (Active)**      | "Capability & Decision Literacy" / AI Literate | **"AI Literacy"**                                                                        |
|                     | Long purpose about execution capability        | "Turn your team or audience into AI operators through live, practical workshops."        |
|                     | -                                              | Small: "Next session: [placeholder date]"                                                |
|                     | "Explore system"                               | **"View Workshops"**                                                                     |
| **3 (Coming Soon)** | "Governance & Operating Models"                | **"Agentic Software Engineering"**                                                       |
|                     | Governance frameworks language                 | "Build production-ready agent systems with routing, reusable skills, and guardrails."    |
|                     | "Explore system"                               | **"Build Your Agent System"**                                                            |
|                     | "Coming Soon" badge                            | **Remove badge entirely** - make it clickable                                            |

### Cleanup

- Remove governance framework references
- Remove institutional decision system language
- Remove abstract consulting language
- Each card: one purpose, one action

## Related ADRs

- **ADR-036**: Homepage Page Boundary Enforcement - homepage is positioning + routing only
- **ADR-038**: Flagship System Status Tier - flagship has visual emphasis
- **ADR-039**: Readiness Layer Top-of-Stack - recent work positioned readiness first
- **ADR-040**: System Cards Source CTA Metadata from Translations - per-card CTAs defined in i18n

**Note**: This request fundamentally repositions the offerings from "structural integrity audits" to "revenue recovery audits" and from "governance frameworks" to "agentic software engineering." This is a strategic pivot in messaging.

## Files to Modify

1. `src/i18n/locales/en/homepage.json` - All copy changes
2. `src/components/home/Hero.tsx` - May need to remove text elements
3. `src/components/home/SystemsOverview.tsx` - May need to update CTA text sources, remove "coming-soon" status

## Implementation Steps

1. Update `homepage.json` hero section
   - Replace description, supporting, clarification, audience with single line
   - Update CTAs

2. Update `homepage.json` systemsOverview.systems array
   - Card 1: New name, purpose, CTA text
   - Card 2: New name (remove subname), purpose, add supporting line
   - Card 3: New name, purpose, change status from "coming-soon" to "active"

3. Update Hero.tsx
   - Remove supporting, clarification, audience paragraphs (or conditionally render)

4. Update SystemsOverview.tsx
   - Add support for small supporting line under purpose
   - Update CTA text to come from i18n

## Success Criteria

User understands in under 5 seconds:

1. We help you find lost revenue
2. We train you to use AI
3. We help you build agent systems
