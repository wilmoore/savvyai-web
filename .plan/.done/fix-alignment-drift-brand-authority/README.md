# Alignment Drift Fix & Brand Authority Update

## Branch

`fix/alignment-drift-brand-authority`

## Overview

Five refinements to SavvyAI.dev homepage:

1. Fix Section ID `[ XX / NAME ]` alignment drift (sections 07+)
2. Update Trust Bar with founder-background company names
3. Correct workshop copy in Section 05
4. Add founder narrative intro to Section 09
5. Add Visual Inventory mini-UI SVGs to Section 06

## Key Decisions

- **SectionID Component**: Shared reusable component for guaranteed consistency
- **Artifact UIs**: SVG illustrations (decorative, not interactive)
- **Founder Narrative**: Added as intro above existing comparison layout

## Files Modified

- `src/components/marketing/SectionID.tsx` (NEW)
- `src/components/marketing/index.ts`
- `src/components/home/TrustBar.tsx`
- `src/components/home/Protocol.tsx`
- `src/components/home/StatsGrid.tsx`
- `src/components/home/Safety.tsx`
- `src/components/home/WorkshopsExplained.tsx`
- `src/components/home/WorkshopOutcomes.tsx`
- `src/components/home/Difference.tsx`
- `src/components/home/WhoThisIsFor.tsx`
- `src/components/home/OurWorkshops.tsx`
- `src/components/home/HowWeWork.tsx`
- `src/components/home/Pilot24.tsx`
- `src/components/home/HomeFAQ.tsx`
- `src/components/home/Audience.tsx`
- `src/i18n/locales/en/homepage.json`

## Trust Bar Companies

Apple, Starbucks, Nordstrom, HP, Gap Inc, Aetna, Shutterstock, MapQuest, DavidsTea, Holt Renfrew

## Related ADRs

- [024. Shared SectionID Component](../../doc/decisions/024-shared-section-id-component.md)
- [025. Visual Inventory SVG Illustrations](../../doc/decisions/025-visual-inventory-svg-illustrations.md)
