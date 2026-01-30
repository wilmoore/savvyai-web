# Homepage System Map Revision (v2)

## Objective

Align the homepage with Śavvy AI's long-term system map by:

- Preserving flagship authority of Operational Structural Integrity Audit
- Removing execution-adjacent systems (Product Bakery, Onboarding)
- Reframing AI Literate as capability system (not center of gravity)
- Introducing Governance & Operating Models as third pillar
- Maintaining Editorial Noir visual structure

## Relevant ADRs

| ADR     | Status   | Impact                                 |
| ------- | -------- | -------------------------------------- |
| ADR-036 | Enforced | Homepage is positioning + routing only |
| ADR-038 | Enforced | Flagship status tier preserved         |
| ADR-029 | Enforced | Zebra pattern maintained               |

## Scope

**COPY-ONLY** — no component logic or styling changes except grid adjustment.

## Implementation Steps

### Step 1: Update i18n (`homepage.json`)

**SystemsOverview section:**

1. Replace `systemsOverview.subtitle`:
   - FROM: "Each system addresses a different layer of leverage — from structural integrity to capability and execution."
   - TO: "Each system addresses a different layer of organizational leverage — from structural integrity to capability and long-term durability."

2. Replace `systemsOverview.systems` array with 3 items:
   ```json
   [
     {
       "name": "Operational Structural Integrity Audit",
       "purpose": "An independent assessment of whether an organization's operations can safely support additional load. We identify structural risk, single-point dependencies, and hidden fragility before AI, automation, or scale amplify failure.",
       "href": "https://linkedin.com/in/wilmoore",
       "status": "flagship"
     },
     {
       "name": "Capability & Decision Literacy",
       "subname": "AI Literate™",
       "purpose": "Training and capability programs designed to raise baseline competence after structural integrity is confirmed. Teams learn how to think, decide, and apply leverage safely once operations are sound.",
       "href": "/literate",
       "status": "active"
     },
     {
       "name": "Governance & Operating Models",
       "purpose": "Frameworks that institutionalize sound decisions over time. We define ownership, escalation paths, change control, and accountability so structural integrity does not decay as organizations grow.",
       "href": "#",
       "status": "coming-soon"
     }
   ]
   ```

**Difference section:**

3. Replace `difference.founderBody`:
   - TO: "Śavvy AI works at the level where failure actually originates: operations, ownership, and decision flow. Our work is shaped by years inside complex organizations where leverage, scale, and accountability matter — and where adding new technology without structural integrity creates risk, not advantage."

4. Replace `difference.comparisons[].savvy` values:
   - "Structural clarity before leverage"
   - "Systems that compound safely over time"
   - "Decisions grounded in operational reality"
   - "Capability that rests on sound foundations"

### Step 2: Update SystemsOverview Component

1. Change grid from `lg:grid-cols-4` to `lg:grid-cols-3`
2. Handle `subname` field for AI Literate™ display (renders as italicized subtitle)
3. Update CTA text rendering:
   - Flagship: "Request Audit →"
   - Active: "Explore system →"
   - Coming Soon: "Learn more →" (non-clickable, grayed)

### Step 3: Verify

- [ ] Build passes
- [ ] Lint passes
- [ ] Visual inspection via Playwright
- [ ] Three-system stack renders correctly
- [ ] All CTAs work (flagship external, active internal, coming-soon disabled)

## Files Changed

| File                                      | Change Type            |
| ----------------------------------------- | ---------------------- |
| `src/i18n/locales/en/homepage.json`       | Copy updates           |
| `src/components/home/SystemsOverview.tsx` | Grid + subname support |

## Definition of Done

- All copy matches change request exactly
- 3-column grid on desktop
- No regressions in other homepage sections
- Build/lint clean
