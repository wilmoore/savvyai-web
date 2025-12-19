# Workshop Authority Grammar Redesign

## Branch: `design/workshop-authority-grammar`

## Related ADRs

- [016. Workshop Authority Light Theme](../../doc/decisions/016-workshop-authority-light-theme.md)
- [017. Section Band Layout System](../../doc/decisions/017-section-band-layout-system.md)
- [018. Tiered Label System](../../doc/decisions/018-tiered-label-system.md)

## Objective

Convert the current SaaS narrative grammar to a Facilitator-style Workshop Authority Grammar while preserving ALL existing content and sections.

---

## Design Decisions (Confirmed)

| Decision       | Choice                                                |
| -------------- | ----------------------------------------------------- |
| Dark Mode      | Preserve but disable (keep CSS, light mode active)    |
| Section Labels | Humanist sans, sentence case (Inter, "The Challenge") |
| Emerald Accent | Keep #10B981, remove glow/neon effects                |
| Backgrounds    | White (#FFFFFF) + Warm Gray (#FAFAF8) alternation     |

---

## Current State Problems

1. **Dark mode as default** - Deep black (#050505) with glassmorphism
2. **GlassCard overuse** - Primary layout primitive throughout
3. **Continuous visual flow** - No cognitive resets between ideas
4. **Neon/cyber aesthetics** - Glow animations, backdrop blur
5. **Dense section grouping** - Multiple concepts crammed together
6. **SaaS rhythm** - Alternating dark backgrounds, startup pitch feel

---

## Target State: Workshop Authority Grammar

### Psychology

- Daytime, rooms, whiteboards, groups, learning, facilitation

### Visual Principles

- Light mode only (default)
- Full-width section bands (not cards)
- Clear cognitive resets between bands
- Outcomes before reasoning
- Structure as proof of credibility
- Institutional clarity over aesthetic cleverness

### Color Palette (Light Theme)

- Primary Background: #FFFFFF (white)
- Secondary Background: #FAFAF8 (warm gray)
- Text Primary: #1A1A1A (near black)
- Text Secondary: #4A4A4A (dark gray)
- Text Muted: #6B6B6B (medium gray)
- Accent: #10B981 (emerald, restrained use)
- Borders: #E5E5E5 (light gray)

### Typography

- Headings: Inter (humanist sans)
- Body: Inter, generous line height (1.7-1.8)
- Labels: Inter, sentence case (NOT uppercase mono)
- Mono: Reserved ONLY for "WORKSHOP", "OUTPUT", "ARTIFACT" tags

---

## Section Mapping: Facilitator-Style Bands

### Homepage Band Structure

| Band                  | Purpose                             | Sections Included                    |
| --------------------- | ----------------------------------- | ------------------------------------ |
| **Orientation**       | First impression, establish context | Hero                                 |
| **Problem**           | Articulate the challenge            | Problem                              |
| **Belief + Method**   | Our philosophy and approach         | Belief, HowWeWork                    |
| **Program Structure** | The offering                        | Protocol, Pilot24                    |
| **Workshop Details**  | What actually happens               | WorkshopsExplained, WorkshopOutcomes |
| **Bridge**            | Transition to next step             | BridgeToProtocol                     |
| **Credibility**       | Trust building                      | Credibility, Difference              |
| **Reassurance**       | Address concerns                    | Safety, HomeFAQ, Audience            |
| **Decision**          | Final CTA                           | StartCTA, BookingForm                |

### Protocol Page Band Structure

| Band             | Purpose                   | Sections Included |
| ---------------- | ------------------------- | ----------------- |
| **Orientation**  | Protocol headline         | Hero              |
| **Contrast**     | Old way vs new way        | Comparison        |
| **Process**      | How it works step-by-step | HowItWorks        |
| **Outcomes**     | What you get              | Deliverables      |
| **Clarity**      | What this is not          | WhatThisIsNot     |
| **Continuation** | What happens next         | AfterThePilot     |
| **Answers**      | Remaining questions       | FAQ               |
| **Decision**     | Ready to start            | ReadyCTA          |

---

## Implementation Steps

### Phase 1: Design System Foundation

1. **Update globals.css**
   - Create new Workshop Authority light theme as default
   - Preserve dark mode CSS in commented section
   - Remove glow/neon animations
   - Add warm gray background utilities
   - Update glass utilities to light mode equivalents

2. **Update tailwind.config.ts**
   - Add warm gray color tokens
   - Update default theme colors
   - Preserve dark mode config (disabled)

3. **Create new layout primitives**
   - `SectionBand.tsx` - Full-width band component with white/warm-gray variants
   - `BandLabel.tsx` - Sentence case, Inter labels (replaces SectionLabel)
   - `OutcomeBlock.tsx` - Visual anchor for "what teams leave with"

4. **Update existing primitives**
   - `Section.tsx` - Light mode styles
   - `SectionGroup.tsx` - Light mode backgrounds
   - `GlassCard.tsx` - Convert to light mode card (subtle shadows, no blur)

### Phase 2: Homepage Redesign

5. **Update app/page.tsx**
   - Remove dark background
   - Re-organize sections into Facilitator bands
   - Add visual breaks between bands
   - Ensure proper spacing rhythm

6. **Update each homepage component** (preserve content, change styling):
   - Hero.tsx - Light mode, stronger hierarchy
   - Problem.tsx - Remove GlassCard, use band styling
   - Belief.tsx - Remove GlassCard, use band styling
   - HowWeWork.tsx - Light mode
   - Protocol.tsx - Light mode, outcome emphasis
   - Pilot24.tsx - Light mode
   - Credibility.tsx - Light mode
   - Difference.tsx - Light mode, remove cards
   - WorkshopsExplained.tsx - Light mode
   - WorkshopOutcomes.tsx - Light mode, outcome emphasis
   - BridgeToProtocol.tsx - Light mode
   - Safety.tsx - Light mode
   - HomeFAQ.tsx - Light mode
   - Audience.tsx - Light mode
   - StartCTA.tsx - Light mode

### Phase 3: Protocol Page Redesign

7. **Update app/protocol/page.tsx**
   - Remove dark background
   - Apply band structure

8. **Update each protocol component**:
   - Hero.tsx - Light mode
   - Comparison.tsx - Light mode
   - HowItWorks.tsx - Light mode
   - Deliverables.tsx - Light mode, outcome emphasis
   - WhatThisIsNot.tsx - Light mode
   - AfterThePilot.tsx - Light mode
   - FAQ.tsx - Light mode
   - ReadyCTA.tsx - Light mode

### Phase 4: Shared Components

9. **Update marketing components**
   - Header.tsx - Light mode (white bg, dark text)
   - Footer.tsx - Light mode
   - CTAButton.tsx - Light mode variants
   - BookingForm.tsx - Light mode form styling

### Phase 5: Cleanup & Verification

10. **Remove unused dark mode utilities**
11. **Run lint and type checks**
12. **Visual verification in browser**
13. **Code review preparation**

---

## Files to Modify

### Core Style Files

- [ ] `app/globals.css`
- [ ] `tailwind.config.ts`

### Layout Components

- [ ] `src/components/layout/GlassCard.tsx`
- [ ] `src/components/layout/SectionLabel.tsx`
- [ ] `src/components/layout/SectionDark.tsx` (may delete)

### Marketing Components

- [ ] `src/components/marketing/Section.tsx`
- [ ] `src/components/marketing/SectionGroup.tsx`
- [ ] `src/components/marketing/Header.tsx`
- [ ] `src/components/marketing/Footer.tsx`
- [ ] `src/components/marketing/CTAButton.tsx`
- [ ] `src/components/marketing/BookingForm.tsx`

### Page Files

- [ ] `app/page.tsx`
- [ ] `app/protocol/page.tsx`

### Homepage Sections (15 files)

- [ ] `src/components/home/Hero.tsx`
- [ ] `src/components/home/Problem.tsx`
- [ ] `src/components/home/Belief.tsx`
- [ ] `src/components/home/HowWeWork.tsx`
- [ ] `src/components/home/Protocol.tsx`
- [ ] `src/components/home/Pilot24.tsx`
- [ ] `src/components/home/Credibility.tsx`
- [ ] `src/components/home/Difference.tsx`
- [ ] `src/components/home/WorkshopsExplained.tsx`
- [ ] `src/components/home/WorkshopOutcomes.tsx`
- [ ] `src/components/home/BridgeToProtocol.tsx`
- [ ] `src/components/home/Safety.tsx`
- [ ] `src/components/home/HomeFAQ.tsx`
- [ ] `src/components/home/Audience.tsx`
- [ ] `src/components/home/StartCTA.tsx`

### Protocol Sections (8 files)

- [ ] `src/components/protocol/Hero.tsx`
- [ ] `src/components/protocol/Comparison.tsx`
- [ ] `src/components/protocol/HowItWorks.tsx`
- [ ] `src/components/protocol/Deliverables.tsx`
- [ ] `src/components/protocol/WhatThisIsNot.tsx`
- [ ] `src/components/protocol/AfterThePilot.tsx`
- [ ] `src/components/protocol/FAQ.tsx`
- [ ] `src/components/protocol/ReadyCTA.tsx`

### New Files to Create

- [ ] `src/components/layout/SectionBand.tsx`
- [ ] `src/components/layout/BandLabel.tsx`
- [ ] `src/components/layout/OutcomeBlock.tsx`

---

## Success Criteria

When complete, the site should feel like:

- An executive workshop program
- A credible facilitation institution
- Something HR, Ops, or Procurement would trust
- Calm, structured, human, daylight-oriented

It should NOT feel like:

- A SaaS homepage
- A startup pitch
- A product launch
- A design flex

---

## Known Constraints

- DO NOT rewrite any copy
- DO NOT invent new sections
- DO NOT add testimonials, logos, or pricing
- DO NOT add theatrical animations
- DO NOT add dashboards or product UI metaphors

---

## Verification Checklist

- [ ] All existing content preserved
- [ ] Light mode is default
- [ ] Dark mode CSS preserved but inactive
- [ ] No glow/neon effects
- [ ] Cards used only for grouped items (not dominant structure)
- [ ] Full-width section bands as primary layout
- [ ] Clear cognitive resets between bands
- [ ] Outcomes visually emphasized
- [ ] Labels in sentence case (not uppercase mono)
- [ ] Emerald accent restrained to CTAs and key outcomes
- [ ] Build passes with no errors
- [ ] Lint passes with no errors
