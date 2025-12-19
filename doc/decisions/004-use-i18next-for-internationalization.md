# 004. Use i18next for Internationalization

Date: 2025-12-18

## Status

Accepted

## Context

The SavvyAI web application needed internationalization (i18n) infrastructure to support future multi-language requirements. We needed a solution that:

- Integrates well with React and TypeScript
- Provides browser language detection
- Supports namespace-based organization for maintainability
- Has a mature ecosystem and community support

## Decision

We chose **i18next** with `react-i18next` as the i18n framework, along with:

- `i18next-browser-languagedetector` for automatic language detection
- Component-scoped translation namespaces (one JSON file per major component/section)
- Static bundling of translations (no HTTP backend for initial implementation)

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

## Consequences

### Positive

- **React Integration**: `react-i18next` provides hooks (`useTranslation`) that integrate naturally with React components
- **Namespace Organization**: Component-scoped namespaces make it easy to find and update translations
- **Type Safety Ready**: Infrastructure supports adding TypeScript definitions for translation keys
- **Language Detection**: Automatic detection from browser settings with localStorage persistence
- **Mature Ecosystem**: Extensive documentation, plugins, and community support

### Negative

- **Bundle Size**: All translations are bundled; could impact initial load for apps with many languages
- **No Type Safety Yet**: Translation keys are strings without compile-time validation (can be added later)
- **Manual Sync Required**: No automated tooling to detect missing translations across locales

## Alternatives Considered

### react-intl (FormatJS)

- Pro: Strong TypeScript support, message extraction tooling
- Con: More verbose API, steeper learning curve
- Rejected: i18next's simpler API better suited for initial implementation

### DIY with Context API

- Pro: No dependencies, full control
- Con: Reinventing features that i18next provides out of the box
- Rejected: Not practical for production use

### Lingui

- Pro: Excellent extraction and compilation, ICU message format
- Con: Less adoption in React ecosystem, more complex build setup
- Rejected: i18next has broader community support

## Related

- Planning: `.plan/.done/feature-add-i18n-with-commit-hooks/`
- ADR-005: Enforce i18n with ESLint and commit hooks
