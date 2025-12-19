# Fix: Vercel Next.js Configuration

## Problem

Vercel deployment fails with:

```
Error: No Output Directory named "dist" found after the Build completed.
```

## Root Cause

Vercel project settings retained `outputDirectory: "dist"` from the previous Vite setup. Next.js outputs to `.next` and Vercel auto-detects this when the framework is properly configured.

## Solution

Create `vercel.json` with explicit Next.js framework configuration to override any legacy project settings.

## Files Changed

- `vercel.json` (created)
