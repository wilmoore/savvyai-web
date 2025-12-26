# Feature: Rename Brand from Savvy to Śavvy

## Branch

`feature/brand-rename-savvy-to-savvy-diacritic`

## Requirements

- Rename user-facing brand text `Savvy` → `Śavvy` and `Savvy AI` → `Śavvy AI`
- Only applies to the brand name in user-facing text
- Code identifiers (variable names, object keys, translation keys) remain unchanged
- URLs remain unchanged (external links)

## Files Modified

1. `src/lib/constants.ts` - Brand definition
2. `src/i18n/locales/en/homepage.json` - Homepage copy
3. `src/i18n/locales/en/protocol.json` - Protocol page copy
4. `src/i18n/locales/en/about.json` - About page copy
5. `src/components/ui/logo.tsx` - Logo text and alt
6. `src/components/marketing/Footer.tsx` - Copyright
7. `app/layout.tsx` - Metadata
8. `app/resources/gpt-guide/page.tsx` - Link text
9. `app/resources/gpt-guide/layout.tsx` - Metadata

## Intentionally Excluded

- Code comments (developer-facing)
- Variable names and object keys
- URLs (external links)
- `package.json` project name
- `next.config.mjs` redirect paths
