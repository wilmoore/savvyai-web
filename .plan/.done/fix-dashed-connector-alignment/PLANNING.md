# Fix: Dashed Connector Alignment

## Problem Statement

The dashed connector line in the "How Teams Work With Savvy" section is not properly aligned with the numbered step circles. The line appears to pass through the top portion of the circles rather than their centers, and the green connection dots are at inconsistent heights.

## Root Cause Analysis

**File:** `src/components/home/HowWeWork.tsx`

### Current Implementation (Lines 44-46, 64-66)

```tsx
{
  /* Dashed connector line */
}
<div className="absolute top-10 left-[10%] right-[10%] h-px border-t border-dashed border-black/20" />;

{
  /* Connection dot */
}
<div className="absolute top-10 -right-4 w-2 h-2 rounded-full bg-emerald-500/50" />;
```

### Math Breakdown

1. **Phase tag height:** `text-[10px]` with ~1.25 line-height = ~12.5px
2. **Phase tag margin:** `mb-3` = 0.75rem = 12px
3. **Total before circle:** ~24.5px
4. **Circle dimensions:** `w-12 h-12` = 48px
5. **Circle center offset:** 24px
6. **Circle center from container top:** 24.5 + 24 = **~49px**
7. **Current line position:** `top-10` = 2.5rem = **40px**
8. **Misalignment:** ~9px too high

## Solution

Change `top-10` (40px) to `top-12` (48px) or use an arbitrary value `top-[49px]` for pixel-perfect alignment.

### Recommended Fix

Use `top-12` (48px) which is close enough and maintains Tailwind's spacing scale consistency.

## Files to Modify

1. `src/components/home/HowWeWork.tsx` - Fix dashed line and connection dot positioning

## Scope

- Fix HowWeWork section alignment
- Review entire page for similar issues
- Verify all fixes in browser

## Definition of Done

- [x] Dashed connector line passes through center of step circles
- [x] Green connection dots are vertically aligned with the line
- [x] No visual regressions on desktop or mobile views
- [x] Page reviewed for any similar alignment issues

## Changes Made

**File:** `src/components/home/HowWeWork.tsx`

1. **Line 45:** Changed dashed connector from `top-10` to `top-12` (40px → 48px)
2. **Line 65:** Changed connection dots from `top-10` to `top-12` and added `-translate-y-1/2` for perfect centering

## CodeRabbit Analysis

No issues found with the code changes. Only pre-existing suggestions about `.gitignore` entries for build artifacts.
