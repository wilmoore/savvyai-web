# Known Issues

## Deferred for Future Consideration

### 1. Brand Name Usage in Founder Narrative (Legal Review)

**Location:** `src/i18n/locales/en/homepage.json` lines 136-137

**Issue:** CodeRabbit flagged that the founder narrative copy names Apple, Starbucks, Nordstrom, and HP. These are intentional references to the founders' professional backgrounds.

**Recommendation:**

- Confirm factual accuracy of founders' work history at these companies
- Obtain legal sign-off if using brand names in marketing context
- Alternative: Replace with neutral language if needed (e.g., "leading global retailers and technology firms")

**Status:** Intentionally kept per requirements. Legal review recommended before production deployment.

---

## Resolved During This PR

### 1. Hardcoded English Strings in Artifact Cards (i18n)

**Location:** `src/components/home/WorkshopOutcomes.tsx` lines 242-261

**Resolution:** Added i18n keys to `homepage.json` under `workshopOutcomes.artifacts` and updated component to use `t()` lookups.
