# Executive Dark Mode Reskin

## Overview

Transform the Savvy AI marketing website from a light Swiss Modernist theme to an **Executive Dark Mode** design system. This is a **visual and structural redesign** of existing content—not a new site build.

### Design Philosophy

- **Calm. Sharp. Credible. Disciplined.**
- Editorial + institutional + premium aesthetic
- Think Morningside.ai meets Facilitator.com

---

## Confirmed Requirements

### Theme

- Apply Executive Dark Mode as **default visible theme**
- Preserve existing light theme tokens for future use
- No light mode optimization at this time

### Layout Scope

- **Full restructuring** of all sections
- Recompose using asymmetric grids, two-column splits, card systems
- Do NOT introduce new sections, copy, or features

### Components

- Create reusable layout primitives (TwoColumnSection, AsymmetricGrid, GlassCard)

### Typography

- **Inter** for all headings and body (the "voice")
- **Geist Mono** for metadata, labels, phase names, tags (the "interface")
- Use mono sparingly: section labels, step numbers, protocol phase names, card tags

---

## Design System Tokens

### Colors

```css
/* Primary backgrounds */
--background: #050505 /* deep black */ --background-secondary: #0d1117 /* section contrast */
  /* Accent */ --accent: #10b981 /* emerald */ --accent-foreground: #ffffff /* Borders */
  --border: rgba(255, 255, 255, 0.1) /* Text */ --foreground: #ffffff
  --foreground-secondary: rgba(255, 255, 255, 0.7) --foreground-muted: rgba(255, 255, 255, 0.5);
```

### Typography

```css
/* Headings - Inter */
font-family: var(--font-inter);
letter-spacing: -0.02em; /* tight tracking */

/* Metadata - Geist Mono */
font-family: var(--font-geist-mono);
text-transform: uppercase;
letter-spacing: 0.05em;
font-size: 0.75rem;
```

### Components

```css
/* Glass Card */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;

/* Primary Button */
background: #10b981;
color: #ffffff;
border-radius: 8px;

/* Secondary Button (ghost) */
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.2);
color: #ffffff;
```

---

## Layout Primitives to Create

### 1. SectionDark

Base section wrapper with dark theme support.

- Props: `variant` ('default' | 'contrast'), `size` ('default' | 'wide' | 'full')
- Handles background color, padding, container constraints

### 2. TwoColumnSection

Split layout with content on one side, explanation on other.

- Props: `reverse` (boolean), `ratio` ('50-50' | '60-40' | '40-60')
- Responsive: stacks on mobile

### 3. AsymmetricGrid

Uneven grid for visual interest.

- Props: `pattern` ('large-small' | 'small-large' | 'featured')

### 4. GlassCard

Premium card with glassmorphism effect.

- Props: `variant` ('default' | 'elevated' | 'bordered')
- Includes hover state

### 5. SectionLabel

Mono metadata label for section identification.

- Props: `children`, `className`
- Applies Geist Mono styling

### 6. NumberedStep

Step indicator with number in circle.

- Props: `number`, `title`, `description`
- Uses accent color for number

---

## Section-by-Section Redesign Plan

### Homepage Sections

#### 1. Hero

**Current:** Centered single-column
**Redesign:**

- Left-aligned headline (break from centered pattern)
- Large typography with mono tagline above
- Two CTAs in row
- Subtle gradient mesh or glow behind headline

#### 2. Problem + Belief (grouped)

**Current:** Two separate centered sections
**Redesign:**

- Two-column split: Problem left, Belief right
- Glass cards for each
- Shared `contrast` background
- Section label: "THE CHALLENGE"

#### 3. HowWeWork

**Current:** Centered paragraphs
**Redesign:**

- Section label: "OUR APPROACH"
- Left-aligned with constrained width
- Numbered steps in vertical timeline pattern

#### 4. Protocol

**Current:** Centered list
**Redesign:**

- Two-column: content left, phase cards right
- Glass cards for each phase (ASSESS, DESIGN, PILOT)
- Link to /protocol page prominent

#### 5. Pilot24

**Current:** Centered paragraphs
**Redesign:**

- Featured card treatment (larger glass card)
- "24 HOURS" mono tag
- Asymmetric with icon/illustration area

#### 6. Credibility + Difference (grouped)

**Current:** Two separate centered sections
**Redesign:**

- Credibility: Full-width with large pull quote styling
- Difference: 2x2 grid of glass cards with numbered items

#### 7. WorkshopsExplained + WorkshopOutcomes + BridgeToProtocol

**Current:** Three separate sections
**Redesign:**

- Section label: "WORKSHOPS"
- WorkshopsExplained: Two-column (intro left, details right)
- WorkshopOutcomes: Grid of outcome cards (3 columns)
- BridgeToProtocol: Minimal transition with arrow or chevron

#### 8. Safety + FAQ (grouped)

**Current:** Standard sections
**Redesign:**

- Section label: "TRUST & SAFETY"
- Safety: Left-aligned with icon list
- FAQ: Accordion with glass card styling

#### 9. Audience

**Current:** Two-column grid (For/Not For)
**Redesign:**

- Keep two-column structure
- Add glass card backgrounds
- Check/X icons more prominent
- Section label: "IS THIS FOR YOU?"

#### 10. StartCTA + BookingForm

**Current:** Stacked sections
**Redesign:**

- Section label: "NEXT STEPS"
- Two-column: CTA content left, form right
- Form in elevated glass card
- Primary background with subtle glow

### Protocol Page Sections

Apply same design system:

- SectionDark with contrast variants
- Glass cards for deliverables
- Timeline/step patterns for HowItWorks
- Comparison table with dark styling

---

## Implementation Order

### Phase 1: Foundation

1. Add Geist Mono font to Next.js
2. Update globals.css with dark theme tokens
3. Update tailwind.config.ts with new colors
4. Create layout primitives:
   - SectionDark
   - GlassCard
   - SectionLabel

### Phase 2: Layout Components

5. Create TwoColumnSection
6. Create AsymmetricGrid
7. Create NumberedStep

### Phase 3: Homepage Redesign

8. Update Header (dark variant)
9. Redesign Hero
10. Redesign Problem + Belief
11. Redesign HowWeWork
12. Redesign Protocol
13. Redesign Pilot24
14. Redesign Credibility + Difference
15. Redesign Workshop sections
16. Redesign Safety + FAQ
17. Redesign Audience
18. Redesign StartCTA + BookingForm
19. Update Footer (dark variant)

### Phase 4: Protocol Page

20. Apply design system to Protocol page sections

### Phase 5: Polish

21. Framer Motion entrance animations (subtle)
22. Responsive testing and adjustments
23. Verify all i18n translations still work
24. Run build and lint checks

---

## Technical Notes

### Font Setup

```tsx
// app/layout.tsx
import { GeistMono } from 'geist/font/mono';

// Apply CSS variable
<body className={`${inter.variable} ${geistMono.variable}`}>
```

### Color Updates

Keep existing HSL pattern but update values:

```css
:root {
  /* Override for dark mode default */
  --background: 0 0% 2%; /* #050505 */
  --foreground: 0 0% 100%; /* white */
  --primary: 160 84% 39%; /* #10B981 emerald */
  --muted: 215 19% 7%; /* #0D1117 */
  --border: 0 0% 100% / 0.1;
}
```

### Breaking Changes

- Light theme will not be visible by default
- Section backgrounds will invert (white -> dark)
- All text colors will invert (dark -> light)

---

## Files to Create

```
src/components/layout/
├── SectionDark.tsx
├── TwoColumnSection.tsx
├── AsymmetricGrid.tsx
├── GlassCard.tsx
├── SectionLabel.tsx
├── NumberedStep.tsx
└── index.ts
```

## Files to Modify

```
app/layout.tsx              # Add Geist Mono font
app/globals.css             # Dark theme tokens
tailwind.config.ts          # New color utilities

src/components/marketing/
├── Header.tsx              # Dark variant
├── Footer.tsx              # Dark variant
├── SectionGroup.tsx        # Dark backgrounds
└── Section.tsx             # Dark backgrounds

src/components/home/
├── Hero.tsx
├── Problem.tsx
├── Belief.tsx
├── HowWeWork.tsx
├── Protocol.tsx
├── Pilot24.tsx
├── Credibility.tsx
├── Difference.tsx
├── WorkshopsExplained.tsx
├── WorkshopOutcomes.tsx
├── BridgeToProtocol.tsx
├── Safety.tsx
├── HomeFAQ.tsx
├── Audience.tsx
└── StartCTA.tsx

src/components/protocol/
├── Hero.tsx
├── Comparison.tsx
├── HowItWorks.tsx
├── Deliverables.tsx
├── WhatThisIsNot.tsx
├── AfterThePilot.tsx
├── FAQ.tsx
└── ReadyCTA.tsx

app/page.tsx                # Update section grouping
app/protocol/page.tsx       # Apply dark system
```

---

## Definition of Done

- [ ] All homepage sections redesigned with Executive Dark Mode
- [ ] All protocol page sections redesigned
- [ ] Layout primitives created and reusable
- [ ] Geist Mono integrated for metadata
- [ ] Responsive across mobile/tablet/desktop
- [ ] No visual regressions in content (same copy, same sections)
- [ ] Build passes with no errors
- [ ] Lint passes with no errors
- [ ] Framer Motion animations subtle and performant

---

## Known Limitations / Future Work

1. **Light theme toggle** - Preserved in tokens but not exposed in UI
2. **Logo variant** - May need dark-compatible logo variant
3. **Form inputs** - Will need dark-styled focus states
4. **OG images** - May need regeneration for dark theme

---

## Reference Inspiration

- **Morningside.ai** - Calm, premium, confident, sparse
- **Facilitator.com** - Structured, educational, credible

---

## Related ADRs

- [013. Executive Dark Mode as Default Theme](../../doc/decisions/013-executive-dark-mode-theme.md)
- [014. Glassmorphism Layout Components](../../doc/decisions/014-glassmorphism-layout-components.md)
- [015. Dual Typography System (Inter + Geist Mono)](../../doc/decisions/015-dual-typography-system.md)
