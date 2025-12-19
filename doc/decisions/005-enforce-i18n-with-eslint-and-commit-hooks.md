# 005. Enforce i18n with ESLint and Commit Hooks

Date: 2025-12-18

## Status

Accepted

## Context

After adding i18n infrastructure, we needed a mechanism to prevent developers from accidentally introducing hardcoded strings in JSX. Without enforcement, the codebase would gradually accumulate untranslatable text, defeating the purpose of i18n.

Key requirements:

- Block commits containing hardcoded JSX text in application components
- Allow hardcoded strings in UI library components (shadcn/ui) which don't need translation
- Integrate with existing development workflow without friction
- Provide clear error messages to guide developers

## Decision

We implemented a multi-layer enforcement approach:

### 1. ESLint Plugin: `eslint-plugin-i18next`

Configured with `no-literal-string` rule at ERROR level to detect hardcoded strings:

```javascript
"i18next/no-literal-string": [
  "error",
  {
    mode: "jsx-text-only",
    "jsx-attributes": {
      include: ["alt", "aria-label", "placeholder", "title", ...],
      exclude: ["className", "id", "href", "src", ...]
    }
  }
]
```

### 2. Selective Enforcement

i18n rules only apply to application components, not UI library components:

```javascript
// i18n enforcement only for application components
{
  files: ["src/components/*.tsx", "app/**/*.tsx"],
  rules: { "i18next/no-literal-string": "error" }
}
```

This excludes `src/components/ui/*.tsx` (shadcn components) which shouldn't be modified for i18n.

### 3. Git Hooks: Husky + lint-staged

Pre-commit hook runs ESLint on staged files:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

### 4. Prettier Integration

Added Prettier for consistent formatting:

- `eslint-config-prettier` to disable conflicting rules
- `eslint-plugin-prettier` to report formatting issues as ESLint errors

## Consequences

### Positive

- **Immediate Feedback**: Developers see i18n violations during commit, not in CI
- **Selective Scope**: UI library components remain untouched, reducing noise
- **Consistent Formatting**: Prettier ensures code style consistency
- **Clear Guidance**: Error messages point to specific violations with fix instructions

### Negative

- **Commit Friction**: Developers must fix i18n issues before committing
- **False Positives**: Some technical strings may trigger warnings (mitigated by exclusion patterns)
- **Learning Curve**: New developers must understand the i18n workflow

## Alternatives Considered

### CI-only Enforcement

- Pro: No local hook overhead
- Con: Developers waste time on PRs that fail CI for i18n issues
- Rejected: Shift-left approach catches issues earlier

### Warning Level Instead of Error

- Pro: Less friction, gradual adoption
- Con: Warnings tend to be ignored, defeating the purpose
- Rejected: Strict enforcement needed to maintain i18n discipline

### Custom Regex-based Script

- Pro: Full control over detection logic
- Con: Reinventing what ESLint plugins already do well
- Rejected: eslint-plugin-i18next is mature and configurable

### Enforce on All Files

- Pro: Simpler configuration
- Con: Would require modifying shadcn/ui components (not recommended)
- Rejected: Selective enforcement is more practical

## Related

- Planning: `.plan/.done/feature-add-i18n-with-commit-hooks/`
- ADR-004: Use i18next for internationalization
