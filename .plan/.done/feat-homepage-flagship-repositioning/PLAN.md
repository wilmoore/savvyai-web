# Plan: Homepage Flagship Repositioning

## Objective

Re-anchor Śavvy AI around the flagship **Operational Structural Integrity Audit**, positioning the company above AI consultancies while preserving existing aesthetics and site structure.

**This is a COPY-ONLY change.** No layout, component, or navigation refactors.

---

## Relevant ADRs

- **ADR-036**: Homepage is positioning + routing only. Must not explain delivery mechanics.
- **ADR-029**: Strict INK/PAPER zebra pattern.

---

## Files to Modify

### 1. `src/i18n/locales/en/homepage.json`

**Hero Section Changes:**
| Key | Current | New |
|-----|---------|-----|
| `hero.tagline` | "Systems for leverage." | "SYSTEMS FOR STRUCTURAL INTEGRITY" |
| `hero.headline` | "Taught first. Owned forever." | "Before you add AI, automation, or scale, we assess whether your organization can safely support additional load." |
| `hero.description` | "We design systems that teach teams how to create and apply leverage with AI." | "Śavvy AI conducts independent Operational Structural Integrity Audits to determine whether critical operations are truly load-bearing or quietly compromised by bottlenecks, hidden dependencies, and informal power." |
| `hero.clarification` | "You don't need to be technical." | "We do not implement, build, or remediate.\nWe determine what is structurally sound — and what is not." |
| `hero.cta.primary` | "Explore Our Systems" | "Request an Integrity Audit" |
| `hero.cta.secondary` | "View Workshops" | "Explore Our Systems" |

**Systems Section Changes:**
| Key | Current | New |
|-----|---------|-----|
| `systemsOverview.title` | "Systems we build" | "Our Systems" |
| `systemsOverview.subtitle` | "Each system creates leverage your team owns." | "Each system addresses a different layer of organizational leverage — from structural reality to capability and execution." |

**Systems Array Changes:**

- Insert new system at position 0:
  ```json
  {
    "name": "Operational Structural Integrity Audit",
    "purpose": "An independent assessment of whether an organization's operations can safely support additional load. We identify structural risk, single-point dependencies, and hidden fragility before AI, automation, or scale amplify failure.",
    "href": "#contact",
    "status": "flagship"
  }
  ```
- Update AI Literate™ (now position 1):
  ```json
  {
    "name": "AI Literate™",
    "purpose": "Capability and training programs designed to raise baseline competence after structural risks are understood. AI Literate helps teams apply leverage safely once operations are sound.",
    "href": "/literate",
    "status": "active"
  }
  ```

**Difference Section Changes:**
| Key | Current | New |
|-----|---------|-----|
| `difference.founderHeadline` | "Designed by operators, for teams who need leverage." | "Designed by operators, for organizations that need structural clarity." |
| `difference.founderBody` | (current) | "Śavvy AI works at the level where failure actually originates: operations, ownership, and decision flow. Our work is shaped by years inside complex organizations where scale, leverage, and accountability matter — and where adding new technology without structural integrity creates risk, not advantage." |

**Comparison Items Changes:**

```json
{
  "typical": "Programs that end when the session ends",
  "savvy": "Structural clarity before leverage"
},
{
  "typical": "Inspiration without accountability",
  "savvy": "Systems that compound safely over time"
},
{
  "typical": "Tools without structural context",
  "savvy": "Decisions grounded in operational reality"
},
{
  "typical": "Advice that assumes readiness",
  "savvy": "Capability that rests on sound foundations"
}
```

### 2. `src/i18n/locales/en/footer.json`

| Key       | Current                                                                                           | New                                            |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `tagline` | "Making artificial intelligence practical, accessible, and transformative for modern businesses." | "Structural integrity first. Leverage second." |

### 3. `src/components/home/SystemsOverview.tsx`

Add support for `"flagship"` status badge:

- Current: Only supports `"active"` and `"coming-soon"`
- Add: `"flagship"` with special styling (distinct from active)

Badge styling for flagship:

- Prominent emerald styling similar to "Active" but with "FLAGSHIP" text
- Keep card as clickable link

### 4. `src/lib/constants.ts`

Potentially add contact/audit request link if needed for CTA.

---

## Implementation Steps

1. **Update homepage.json** - All hero, systems, and difference copy changes
2. **Update footer.json** - Tagline change
3. **Update SystemsOverview.tsx** - Add flagship status support
4. **Verify visually** - Check all sections render correctly
5. **Run lint/build** - Ensure no errors

---

## Verification Checklist

- [ ] Hero shows new eyebrow, headline, subheadline, clarification
- [ ] Hero CTAs read "Request an Integrity Audit" and "Explore Our Systems"
- [ ] Systems section shows 4 cards (Flagship first, then AI Literate, then 2 coming-soon)
- [ ] Flagship card has distinct "FLAGSHIP" badge
- [ ] AI Literate description updated
- [ ] Difference section header and body copy updated
- [ ] Comparison columns show new 4 items
- [ ] Footer tagline reads "Structural integrity first. Leverage second."
- [ ] No TypeScript errors
- [ ] Build passes
- [ ] Visual appearance matches Editorial Noir design system

---

## Out of Scope

- Layout changes
- Navigation changes
- Component refactors
- New routes or pages
