# 007. Marketing Component Architecture

Date: 2024-12-18

## Status

Accepted

## Context

The marketing website required a complete redesign with new pages (homepage, protocol page) while preserving the ability to reference or restore the previous implementation. The codebase needed a clear organization pattern that:

- Separated new marketing components from legacy code
- Allowed page-specific sections to be composable
- Made shared components reusable across pages
- Preserved old code for reference without polluting the route structure

## Decision

Organize components into purpose-specific directories:

```
src/components/
├── legacy/           # Archived v1 components (preserved, not deleted)
├── marketing/        # Shared marketing components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx   # Reusable section wrapper with variant support
│   ├── CTAButton.tsx # Consistent CTA styling
│   └── BookingForm.tsx
├── home/             # Homepage-specific sections
└── protocol/         # Protocol page-specific sections

app/
├── _archive/         # Old routes (underscore excludes from Next.js routing)
│   └── homepage-v1/
```

Each directory has an `index.ts` barrel export for clean imports.

## Consequences

**Positive:**

- Clear separation of concerns
- Easy to find components by purpose
- Legacy code preserved for reference
- Archive routes excluded by Next.js convention (underscore prefix)
- Barrel exports enable clean import statements

**Negative:**

- More directories to navigate
- Some duplication between home/Hero and protocol/Hero naming
- Legacy components may become stale over time

## Alternatives Considered

1. **Delete old components entirely** - Rejected to preserve reference and enable quick rollback if needed
2. **Single components/ directory with prefixes** - Rejected because it becomes hard to navigate as component count grows
3. **Separate package for marketing** - Over-engineered for current scope

## Related

- Planning: `.plan/.done/feature-savvyai-marketing-website-v2/`
