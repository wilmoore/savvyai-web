# Fix: pnpm Lockfile Sync

## Problem

Vercel deployment failing with `ERR_PNPM_OUTDATED_LOCKFILE` because `pnpm-lock.yaml` is out of sync with `package.json`.

## Root Cause

Project was migrated from Vite to Next.js, but the lockfile wasn't regenerated afterward. The lockfile contains:

- 4 removed dependencies: `react-router-dom`, `@vitejs/plugin-react-swc`, `lovable-tagger`, `vite`
- 10 new dependencies not in lockfile
- 1 version mismatch: `eslint-plugin-react-refresh` (lockfile: 0.4.20, manifest: 0.4.26)

## Solution

Regenerate `pnpm-lock.yaml` by running `pnpm install` locally.

## Verification

- Local build must succeed (`pnpm build`)
- Vercel deployment must succeed after merge

## Files Changed

- `pnpm-lock.yaml` (regenerated)
