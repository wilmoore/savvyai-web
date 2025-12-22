# Known Issues - Workshop Feedback Page

## Deferred to Future Efforts

### 1. E2E Test Infrastructure

**Status**: Not implemented
**Reason**: Project lacks E2E test framework (Playwright/Cypress)
**Impact**: Manual browser testing confirmed full flow works
**Recommendation**: Set up E2E testing infrastructure as separate effort, then add:

- Test for valid workshop feedback flow (all 4 steps + success)
- Test for invalid workshop slug (404 handling)
- Test for form validation (required fields)
- Test for API error handling

### 2. Notion API Integration

**Status**: Stub implementation (Phase 1)
**Reason**: Phased approach per user request
**Current Behavior**: Feedback logged to server console
**Next Step**: Wire `/api/feedback` to Notion API in Phase 2

### 3. Download Files

**Status**: Placeholder URLs
**Reason**: Actual PDF files not yet created
**Current URLs**:

- `/downloads/ai-literate/capability-map.pdf`
- `/downloads/ai-literate/workflow-audit.pdf`
- `/downloads/ai-literate/pilot-framework.pdf`
  **Next Step**: Create actual PDF files and place in `/public/downloads/ai-literate/`

### 4. MetadataBase Warning

**Status**: Pre-existing issue (not introduced by this PR)
**Warning**: `metadataBase property in metadata export is not set`
**Location**: Build output
**Recommendation**: Set `metadataBase` in root layout.tsx for proper OG image resolution

---

## Verified Working

- [x] Confidence scale (1-10 radio buttons)
- [x] Auto-advance after confidence selection
- [x] Full-viewport textarea for valuable part question
- [x] Full-viewport textarea for plan question
- [x] Back navigation between steps
- [x] Continue button disabled until text entered
- [x] Optional email field (submit works without email)
- [x] Form submission to API
- [x] Success state with downloads list
- [x] Invalid workshop slug shows "not accepting feedback" message
- [x] Lint passes on all new files
- [x] Build succeeds
