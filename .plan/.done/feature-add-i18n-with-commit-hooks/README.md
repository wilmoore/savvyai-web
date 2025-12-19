# Feature: Add i18n with Commit Hooks

## Overview

Add internationalization (i18n) infrastructure to the SavvyAI web application with strict commit/push guards that block hardcoded text strings in JSX.

## Branch

`feature/add-i18n-with-commit-hooks`

## Requirements

- **Languages**: English only initially (infrastructure ready for expansion)
- **Enforcement**: Strict - block commits if hardcoded JSX text isn't using i18n
- **Prettier**: Yes - add code formatting with pre-commit hooks

## Implementation Summary

### Dependencies Added

- `i18next` - Core i18n library
- `react-i18next` - React bindings with hooks
- `i18next-browser-languagedetector` - Auto-detect user language
- `eslint-plugin-i18next` - Detect hardcoded strings
- `husky` - Git hooks management
- `lint-staged` - Run linters on staged files
- `prettier` - Code formatting
- `eslint-config-prettier` - Disable conflicting ESLint rules

### Translation File Structure

```
src/i18n/
  index.ts
  locales/
    en/
      common.json      # Shared strings
      hero.json        # Hero component
      header.json      # Header/navigation
      services.json    # Services section
      about.json       # About section
      contact.json     # Contact form
      proof.json       # Stats section
      footer.json      # Footer
      errors.json      # Error messages, 404
```

### Components Migrated

1. Header.tsx
2. Footer.tsx
3. NotFound.tsx
4. Proof.tsx
5. About.tsx
6. Services.tsx
7. Contact.tsx
8. Hero.tsx

## Git Hook Enforcement Flow

1. Developer writes code with hardcoded string: `<p>Hello</p>`
2. Developer runs `git commit`
3. Husky triggers `.husky/pre-commit`
4. lint-staged runs ESLint on staged `.ts/.tsx` files
5. eslint-plugin-i18next detects `i18next/no-literal-string` error
6. Commit is BLOCKED with error message
7. Developer must use `{t('key')}` instead

## Testing

- `npm run lint` - Check for linting errors
- `npm run build` - Verify production build
- Test git hook by attempting to commit hardcoded strings

## Known Issues / Future Work

1. Translation Management: Consider Lokalise/Crowdin integration when adding languages
2. Lazy Loading: Current setup bundles all translations; could use HTTP backend for large apps
3. TypeScript Strict Types: Could add `i18next.d.ts` for type-safe translation keys

## Related ADRs

- [004. Use i18next for internationalization](../../../doc/decisions/004-use-i18next-for-internationalization.md)
- [005. Enforce i18n with ESLint and commit hooks](../../../doc/decisions/005-enforce-i18n-with-eslint-and-commit-hooks.md)
