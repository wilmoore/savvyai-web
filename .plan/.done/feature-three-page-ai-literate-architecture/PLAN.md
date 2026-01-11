# Three-Page AI Literate Architecture

## Overview

Refactor AI Literate from a single page doing education + catalog + partnership into three purpose-built pages, each with a single job.

## Architecture

| Route        | Page                      | Job                                           | Primary CTA           |
| ------------ | ------------------------- | --------------------------------------------- | --------------------- |
| `/workshops` | AI Literate Workshops     | Show what's running, convert to registrations | Register              |
| `/literate`  | AI Literate™ — The System | Explain IP, establish authority               | Partner → `/partners` |
| `/literate`  | AI Literate™ — The System | Explain IP, establish authority               | LinkedIn DM           |
| `/partners`  | AI Literate Partnerships  | Convert interest to collaboration             | LinkedIn DM           |

## CTA Strategy

**All CTAs route to LinkedIn DM.** No booking forms. No external tools.

Copy standard:

> "To explore workshops or partnerships, DM on LinkedIn."

**Required:** LinkedIn profile URL (will add to `src/lib/constants.ts`)

## Information Flow

```
Proof → Understanding → Commitment
/workshops → /literate → /partners
```

## Redirect Rules

- `/workshops/ai-literate` → `/literate` (301)

## Canonical Framing

> **AI Literate™ is the system.**
> **Workshops are how it's delivered.**
> **Partnerships are how it scales.**

---

## Page Specifications

### Page 1: `/workshops`

**Sections (5):**

| #   | Name      | Variant | Content                                  |
| --- | --------- | ------- | ---------------------------------------- |
| 01  | WORKSHOPS | INK     | Hero: "AI Literate™ Workshops" + CTA     |
| 02  | OUTCOMES  | PAPER   | What participants leave with (4 bullets) |
| 03  | AUDIENCE  | INK     | "Who It's For" / "Not For" columns       |
| 04  | SCHEDULE  | PAPER   | Current workshop listing (April Sabral)  |
| 05  | SYSTEM    | INK     | Subtle link to /literate                 |

**Copy (from spec):**

Hero:

- Title: "AI Literate™ Workshops"
- Subtitle: "Practical, hands-on AI training built for leverage, not demos."
- Tagline: "AI Literate is the operating system behind our workshops. Bootcamps are how it's delivered."
- CTA: "View Upcoming Workshops"

Outcomes:

- Reusable AI workflows
- Measurable gains in speed and output
- Clear boundaries on what _not_ to automate
- Shared language that prevents AI theater
- Tagline: "This is not 'intro to AI.' This is applied leverage."

Audience For:

- Leaders under pressure to "do something with AI"
- Operators who need results, not slide decks
- Teams tired of tool demos that don't stick

Audience Not For:

- Prompt tutorials
- Theory-first training
- Inspiration without execution

Schedule:

- AI Bootcamp with April Sabral Leadership (Runs on AI Literate™)
- Links: View Schedule / Register
- Note: "Additional partners and workshops coming soon."

Footer Link:

- "Want to run AI training like this inside your organization?"
- → "DM on LinkedIn to discuss" → LinkedIn profile

---

### Page 2: `/literate`

**Sections (6):**

| #   | Name        | Variant | Content                                 |
| --- | ----------- | ------- | --------------------------------------- |
| 01  | SYSTEM      | INK     | Hero: "AI Literate™" system positioning |
| 02  | DEFINITION  | PAPER   | What AI Literate is (not a course)      |
| 03  | COMPARISON  | INK     | AI Literate vs AI Bootcamp              |
| 04  | PARTNERSHIP | PAPER   | How people partner                      |
| 05  | PROOF       | INK     | April Sabral case study                 |
| 06  | ACTION      | PAPER   | CTA to /partners                        |

**Copy (from spec):**

Hero:

- Title: "AI Literate™"
- Subtitle: "The system for running practical, high-impact AI bootcamps and training programs."
- Tagline: "Tools change. Leverage scales."

Definition:

- "AI Literate is not a course."
- System for:
  - Designing AI training that produces real output
  - Teaching workflows instead of tools
  - Turning AI into throughput, not excitement
- Tagline: "If you've seen AI bootcamps that actually work, this is how they're built."

Comparison (2-column):

AI Literate:

- The system
- The methodology
- Tool-agnostic
- Śavvy AI IP

AI Bootcamp:

- The delivery format
- Partner-branded
- Live and cohort-based
- Runs on AI Literate

Tagline: "AI Bootcamp is the room. AI Literate is the engine."

Partnership Methods:

- Licensed to training providers
- Embedded into leadership programs
- Used to run internal bootcamps
- Taught via train-the-trainer onboarding
- Tagline: "If you want repeatable results, you don't need new tools. You need a better system."

Proof:

- Title: "AI Bootcamp with April Sabral Leadership"
- Started as a one-off session
- Expanded into a recurring program
- Demand-driven, hands-on, no fluff
- Tagline: "That wasn't accidental. It was AI Literate applied."

CTA:

- "Interested in partnering with AI Literate?"
- → "DM on LinkedIn" → LinkedIn profile
- → "See Workshops in Action" → /workshops

---

### Page 3: `/partners`

**Sections (4):**

| #   | Name     | Variant | Content                       |
| --- | -------- | ------- | ----------------------------- |
| 01  | PARTNERS | INK     | Hero: Partnership positioning |
| 02  | MODELS   | PAPER   | Partnership models            |
| 03  | PROOF    | INK     | Why it works (April example)  |
| 04  | CONNECT  | PAPER   | CTA to LinkedIn DM            |

**Copy (derived from spec):**

Hero:

- Title: "AI Literate Partnerships"
- Subtitle: "Scale AI training through your organization or program."

Partnership Models:

- License AI Literate for your training programs
- Embed into leadership development curriculum
- Run internal bootcamps for your teams
- Train-the-trainer certification

Proof:

- Brief reference to April Sabral partnership success

CTA:

- Title: "Ready to Partner?"
- Description: "We're keeping this lightweight. DM on LinkedIn to start the conversation."
- → "DM on LinkedIn" → LinkedIn profile
- Subtext: "Early-stage partnerships handled directly."

---

## Implementation Steps

### Phase 1: Infrastructure

1. Create `/app/workshops/page.tsx` (new directory page)
2. Create `/app/literate/page.tsx` (system page)
3. Create `/app/partners/page.tsx` (partnership page)
4. Add 301 redirect from `/workshops/ai-literate` to `/literate`

### Phase 2: i18n

1. Add `workshops.directory` namespace in `workshops.json`
2. Add `literate` namespace in new `literate.json`
3. Add `partners` namespace in new `partners.json`
4. Update i18n config to load new namespaces

### Phase 3: Navigation

1. Update homepage workshop card links
2. Update Header navigation (if applicable)
3. Update Footer links
4. Cross-link pages per spec

### Phase 4: Cleanup

1. Remove or archive old `/workshops/ai-literate/page.tsx` (after redirect is in place)
2. Preserve feedback route at `/workshops/[slug]/feedback`
3. Run build and lint checks
4. Verify all links work

---

## ADR Compliance

| ADR | Requirement                      | Compliance                                              |
| --- | -------------------------------- | ------------------------------------------------------- |
| 007 | Marketing component architecture | Using existing components from `@/components/marketing` |
| 019 | Editorial Paper & Ink theme      | Binary INK/PAPER, Emerald CTAs only                     |
| 026 | Shell architecture               | All sections use shell pattern                          |
| 029 | Zebra pattern                    | Strict alternation, sequential SectionIDs               |

---

## Files to Create/Modify

**Create:**

- `app/workshops/page.tsx` (workshops directory)
- `app/literate/page.tsx` (system page)
- `app/partners/page.tsx` (partnerships page)
- `src/i18n/locales/en/literate.json`
- `src/i18n/locales/en/partners.json`

**Modify:**

- `src/lib/constants.ts` (add LinkedIn URL)
- `src/i18n/locales/en/workshops.json` (add directory content)
- `src/i18n/config.ts` (add new namespaces)
- `next.config.ts` (add redirect)
- `src/components/home/OurWorkshops.tsx` (update links if needed)

**Archive/Remove:**

- `app/workshops/ai-literate/page.tsx` (redirect handles this route)

---

## Success Criteria

- [ ] `/workshops` shows workshop directory with registration CTAs
- [ ] `/literate` explains AI Literate system with clear positioning
- [ ] `/partners` converts interest to LinkedIn DM
- [ ] `/workshops/ai-literate` redirects to `/literate` (301)
- [ ] Zebra pattern maintained on all pages
- [ ] All i18n keys properly structured
- [ ] Build passes with no errors
- [ ] Lint passes with no warnings
