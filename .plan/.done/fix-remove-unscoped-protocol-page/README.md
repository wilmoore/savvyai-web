# Bug Fix: Remove Unscoped Protocol Page

## Date

2025-12-26

## Summary

Remove the `/protocol` page as the offering has not been fully scoped. The page was using an outdated "Workshop Authority" design system instead of the current "Editorial Noir Institutional Perfection" theme, but rather than fix the styling for an unready feature, we're removing it entirely.

## Root Cause Analysis

- Protocol page used outdated design system (Workshop Authority vs Editorial Noir)
- Copy/messaging was unclear about what "Protocol" vs "Pilot" meant
- Timeline claims ("24 hours") conflicted with described process (2+ days)
- Page purpose was redundant with homepage sections (07 PROTOCOL, 08 METHOD)
- The offering itself hasn't been fully scoped yet

## Decision

Remove the protocol page entirely. ADRs and i18n content can be preserved for future reference when the offering is properly scoped.

## Changes Made

1. Archived `app/protocol/` to `app/_archive/protocol-page/` (page.tsx renamed to .bak)
2. Archived `src/components/protocol/*` to `app/_archive/protocol-components/`
3. Removed "The Protocol" link from Header navigation
4. Removed "The Protocol" link from Footer navigation
5. Updated homepage Protocol section to remove CTA link (no longer links to /protocol)
6. Added `app/_archive` to eslint ignores
7. Preserved `src/i18n/locales/en/protocol.json` for future reference

## Files Changed

- `app/protocol/` → `app/_archive/protocol-page/`
- `src/components/protocol/` → `app/_archive/protocol-components/`
- `src/components/marketing/Header.tsx` - removed /protocol link
- `src/components/marketing/Footer.tsx` - removed /protocol link
- `src/components/home/Protocol.tsx` - removed CTA and Link import
- `eslint.config.js` - added app/\_archive to ignores

## Related ADRs

- ADR 019: Editorial Paper & Ink Theme
- ADR 029: Institutional Perfection Zebra Pattern

## Backlog

If the Protocol/Pilot offering is scoped in the future, a new implementation should:

1. Follow the Editorial Noir design system (zebra pattern, SectionID spine)
2. Clarify naming (Protocol vs Pilot)
3. Have accurate timeline claims
4. Differentiate from homepage content
