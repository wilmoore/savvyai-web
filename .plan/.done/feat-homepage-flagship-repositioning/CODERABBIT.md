# CodeRabbit Review Prompt

## PR Summary

**Title:** feat: Homepage flagship repositioning - Operational Structural Integrity Audit

**Description:**
Re-anchors Śavvy AI homepage around the flagship Operational Structural Integrity Audit offering, positioning the company as a structural integrity assessor rather than an AI consultancy.

## Changes

### Copy Updates (i18n)

- **Hero Section**: New eyebrow, headline, subheadline, clarification, and CTAs focused on structural integrity audits
- **Systems Section**: Added flagship system card, updated AI Literate™ description, revised subtitle
- **Difference Section**: Updated founder narrative and comparison items (5 → 4)
- **Footer**: New tagline "Structural integrity first. Leverage second."

### Component Updates

- **CTAButton.tsx**: Added `external` prop for opening links in new tabs
- **Hero.tsx**: Primary CTA now links to LinkedIn (external), secondary links to #systems
- **SystemsOverview.tsx**: Added `flagship` status support with distinct styling (emerald ring accent)

## Review Focus Areas

1. **i18n**: Verify all copy changes align with brand voice and messaging requirements
2. **Type Safety**: Confirm `flagship` status addition doesn't break existing type expectations
3. **External Links**: Verify proper `rel="noopener noreferrer"` on all external links
4. **Grid Layout**: Systems section changed from 3-col to 4-col grid - ensure responsive behavior is correct
5. **ADR Compliance**: Changes align with ADR-036 (homepage positioning only) and ADR-029 (zebra pattern)

## Testing Notes

- Build passes: ✅
- TypeScript: ✅ No errors
- Visual verification pending (dev server restart required)
