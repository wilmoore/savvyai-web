# Feature: ŚavvyBuild Page (/build)

## Summary

Create the `/build` page for ŚavvyBuild - the custom AI program design and delivery offering. Premium positioning with application-required framing.

## Page Structure

| #   | Section | Variant | Content                                                                 |
| --- | ------- | ------- | ----------------------------------------------------------------------- |
| 01  | BUILD   | INK     | Hero: "We design and deliver AI-native programs that fit your audience" |
| 02  | SCOPE   | PAPER   | What we build: custom curricula, internal tools, team programs          |
| 03  | FIT     | INK     | Who it's for / Who it's not for                                         |
| 04  | PROOF   | PAPER   | Testimonials placeholder: "Select client work available upon request"   |
| 05  | APPLY   | INK     | Application CTA linking to /#book                                       |

## Design Constraints

- Follow Editorial Noir Institutional Perfection theme (ADR-029)
- Use shell architecture for SectionID alignment (ADR-026)
- Strict INK/PAPER zebra alternation
- Emerald (#10B981) for CTAs only
- All text via i18n (`useTranslation('build')`)

## Implementation Steps

1. Create i18n namespace: `src/i18n/locales/en/build.json`
2. Register namespace in i18n config
3. Create page component: `app/build/page.tsx`
4. Implement 5 sections following zebra pattern
5. Verify build and visual appearance

## Files to Create/Modify

| File                             | Action                              |
| -------------------------------- | ----------------------------------- |
| `src/i18n/locales/en/build.json` | Create - all page content           |
| `src/i18n/index.ts`              | Modify - register 'build' namespace |
| `app/build/page.tsx`             | Create - page component             |

## Definition of Done

- [ ] Page renders at /build
- [ ] 5 sections with correct zebra pattern
- [ ] All content from i18n
- [ ] CTA links to /#book
- [ ] Build passes
- [ ] Visual verification confirms design intent
