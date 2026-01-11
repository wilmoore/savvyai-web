# Śavvy AI Web Project

## Brand Name - CRITICAL

**The brand name is Śavvy AI** (S with acute accent: Ś, Unicode U+015A)

**NOT:**

- Savvy AI (missing diacritic)
- Şavvy AI (wrong diacritic - cedilla)

See `doc/brand/README.md` for complete brand guidelines.

## Quick Reference

| Correct      | Incorrect          |
| ------------ | ------------------ |
| Śavvy AI     | Savvy AI, Şavvy AI |
| ŚavvyBuild   | SavvyBuild         |
| AI Literate™ | AI Literate        |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **i18n**: react-i18next
- **Design System**: Editorial Noir (see ADR-019, ADR-029)

## Key Directories

```
app/              # Next.js pages
src/components/   # React components
  marketing/      # Shared marketing components
  home/           # Homepage sections
src/i18n/         # Translations
doc/decisions/    # Architecture Decision Records
doc/brand/        # Brand guidelines
```

## Design System Rules

1. **Zebra Pattern**: Strict INK (#050505) / PAPER (#FFFFFF) alternation
2. **Emerald Accent**: #10B981 for CTAs only - never backgrounds
3. **Shell Architecture**: All sections use max-w-7xl shell with inner content width
4. **SectionID**: Every section gets sequential numbering (01, 02, 03...)

## External Links

All external URLs should be defined in `src/lib/constants.ts`.
