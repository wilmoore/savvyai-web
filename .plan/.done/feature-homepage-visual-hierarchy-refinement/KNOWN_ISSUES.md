# Known Issues (Not Addressed in This PR)

These issues were identified but are outside the scope of this visual hierarchy refinement task:

## 1. tsconfig.tsbuildinfo Should Be Gitignored

- **File:** `tsconfig.tsbuildinfo`
- **Issue:** This is a generated TypeScript incremental build metadata file that should not be committed
- **Resolution:** Add to `.gitignore` and remove from tracking

## 2. Hardcoded Colors in not-found.tsx

- **File:** `app/not-found.tsx` (line 14)
- **Issue:** Uses hardcoded hex colors (`#2563EB`, `#3B82F6`) instead of design tokens
- **Resolution:** Replace with Tailwind utilities or design tokens (e.g., `text-primary`)

## 3. Missing Favicon

- **File:** `/logomark-inverted.ico`
- **Issue:** 404 error for favicon resource
- **Resolution:** Add the missing favicon file or update the reference

## 4. metadataBase Not Set

- **Issue:** Warning during build about metadataBase not set for social open graph images
- **Resolution:** Set metadataBase in layout.tsx or metadata exports
