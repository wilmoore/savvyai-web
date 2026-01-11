# Śavvy AI Brand Guidelines

## Brand Name

**Correct:** Śavvy AI
**Incorrect:** Savvy AI, Şavvy AI, Savvý AI

### The Diacritic

The brand name uses **Ś** (S with acute accent), NOT:

- S with cedilla (Ş)
- Plain S without diacritic
- Any other variant

| Character | Unicode | Name                                | Usage             |
| --------- | ------- | ----------------------------------- | ----------------- |
| **Ś**     | U+015A  | Latin Capital Letter S with Acute   | **CORRECT**       |
| Ş         | U+015E  | Latin Capital Letter S with Cedilla | INCORRECT         |
| S         | U+0053  | Latin Capital Letter S              | INCORRECT (plain) |

### How to Type Ś

**macOS:**

- Option + E, then Shift + S
- Or copy from this document

**Windows:**

- Alt + 0346 (numeric keypad)
- Or use Character Map

**JSON files:**

- Use the literal character `Ś` directly
- Avoid unicode escapes when possible
- If escapes needed: `\u015a` (lowercase hex)

### Brand Applications

| Context          | Correct        | Incorrect            |
| ---------------- | -------------- | -------------------- |
| Company name     | Śavvy AI       | Savvy AI             |
| Product name     | ŚavvyBuild     | SavvyBuild           |
| Possessive       | Śavvy's        | Savvy's              |
| Domain reference | savvyai.dev    | (domain unchanged)   |
| Code identifiers | savvyai, savvy | (ASCII only in code) |

### Code vs. Display

- **User-facing text**: Always use Śavvy AI with the diacritic
- **Code identifiers**: Use ASCII `savvy` (variables, file names, URLs)
- **Package names**: Use ASCII `savvyai-web`

### Canonical Source

The brand name is defined in:

```
src/lib/constants.ts → SITE_CONFIG.name = 'Śavvy AI'
```

All user-facing brand references should derive from or match this constant.

### Related Products

| Product         | Correct Spelling |
| --------------- | ---------------- |
| Main brand      | Śavvy AI         |
| Custom programs | ŚavvyBuild       |
| Training system | AI Literate™     |

## Visual Identity

### Colors

| Name    | Hex     | Usage                                 |
| ------- | ------- | ------------------------------------- |
| Ink     | #050505 | Primary background (dark sections)    |
| Paper   | #FFFFFF | Secondary background (light sections) |
| Emerald | #10B981 | CTAs and accents only                 |

### Typography

- **Headings**: Geist Sans, tracked tighter
- **Metadata**: Geist Mono, uppercase, tracked wider
- **Body**: Geist Sans, regular weight

### Design System

The site uses "Editorial Noir" - a strict black/white zebra pattern with emerald accents. See ADR-019 and ADR-029 for details.

---

_Last updated: 2026-01-11_
