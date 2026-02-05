# Feature: Install Readiness Layer & Reframe Partnered Offering

Branch: `feat/readiness-layer-reframe-partnered`
Status: Planning Complete
Created: 2026-01-30

## Objective

Align the Savvy AI website with correct top-of-stack positioning by making the Readiness / Judgment Layer explicit, upstream, and authoritative.

**Core Message:** Savvy AI decides what happens next. Training and execution are conditional and downstream.

## Scope

Copy + structural adjustments only. No new pages. No redesign.

---

## Decisions (Locked)

### 1. Partners Page — Readiness Layer Placement

**Decision:** New section above existing content

- Readiness Layer must be **seen before** partnership models
- Gates are explicit, not implied
- Partners scan for authority and control

### 2. Two Lanes (/literate page) — Prominence of Clarification

**Decision:** Single clarifying line under the heading

- Functions as a guardrail, not a pitch
- One line blocks misinterpretation without dragging into process explanation
- More detail belongs in conversations, not on page

### 3. AI Literate Definition Title

**Decision:** Remove teaching language entirely

- "Teaches" pulls into training category
- Use: **"AI Literate produces lasting capability"**
- Outcome-oriented and stack-safe

---

## Implementation Plan

### Phase 1: Partners Page Restructure

**File:** `src/i18n/locales/en/partners.json`

1. Add new `readiness` section object above `hero`:
   - Label: "Readiness Layer"
   - Title: "Partnered: Control the Readiness Layer"
   - Body: Framing about universal readiness layer before training/certification/execution
   - Subsection: "Readiness & Placement Intelligence" with signal-oriented copy

2. Reframe `hero` section:
   - Remove "Scale AI training" language
   - Position as licensing judgment + gating

3. Reframe `models` section:
   - Condition all items with readiness language
   - Remove curriculum/training-first framing

**File:** `app/partners/page.tsx`

4. Add new section component for Readiness Layer (INK background, section 01)
5. Renumber existing sections (PARTNERS becomes 02, MODELS becomes 03, etc.)
6. Maintain zebra pattern integrity

### Phase 2: AI Literate Page Updates

**File:** `src/i18n/locales/en/literate.json`

1. Update `definition.title`:
   - FROM: "AI Literate teaches teams how to work with AI."
   - TO: "AI Literate produces lasting capability."

2. Update `lanes.description`:
   - Add clarifying line: "Both lanes begin with the same readiness layer."

3. Review all copy for training-first language:
   - Remove "learn," "teach," "curriculum" verbs
   - Replace with: readiness, evaluation, signal, decision quality

### Phase 3: Homepage System Card Update

**File:** `src/i18n/locales/en/homepage.json`

1. Update AI Literate system card `purpose`:
   - Condition training as post-readiness
   - Remove "Training and capability programs designed to..."
   - Replace with capability/signal-oriented language

### Phase 4: Site-Wide Language Audit

Search and update across all i18n files:

**Remove/De-emphasize:**

- Bootcamp
- Training-first language
- Curriculum framing

**Replace with:**

- Readiness
- Evaluation
- Signal
- Decision quality
- Placement intelligence
- Conditional next steps

---

## Files to Modify

| File                                | Changes                                            |
| ----------------------------------- | -------------------------------------------------- |
| `src/i18n/locales/en/partners.json` | Add readiness section, reframe hero/models         |
| `app/partners/page.tsx`             | Add Readiness section component, renumber sections |
| `src/i18n/locales/en/literate.json` | Update definition title, add lanes clarification   |
| `src/i18n/locales/en/homepage.json` | Update AI Literate system card purpose             |

---

## Acceptance Criteria

- [ ] Recruiter/partner can articulate: "Savvy AI decides what happens next"
- [ ] AI Literate is clearly downstream of readiness
- [ ] Partnered is understood as licensing judgment and gating, not just content
- [ ] No section implies education is the entry point
- [ ] Zebra pattern maintained on all pages
- [ ] All i18n keys valid and rendering

---

## What NOT to Add

- Tool names (Claude, Copilot, n8n, etc.)
- Role-specific tracks
- Curriculum outlines
- Certifications or completion language

---

## Related ADRs

- ADR-036: Homepage Page Boundary Enforcement
- ADR-038: Flagship System Status Tier
