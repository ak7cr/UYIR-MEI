
# Button Component Variant Fixing

This document explains how to fix the TypeScript errors related to Button variants and sizes across the codebase.

## The Issue

The shadcn Button component has specific allowed values for variants and sizes:

### Allowed Variants:
- `"default"`
- `"destructive"`
- `"outline"`
- `"secondary"`
- `"ghost"`
- `"link"`

Our codebase was using `"primary"` which is not one of the allowed values.

### Allowed Sizes:
- `"default"`
- `"sm"`
- `"lg"`
- `"icon"`

Our codebase was using `"md"` which is not one of the allowed values.

## How to Fix

1. Replace all occurrences of `variant="primary"` with `variant="default"`
2. Replace all occurrences of `size="md"` with `size="default"`

This should be done across all component files where Button is used.

You can also run the script at `src/scripts/fixButtonVariants.js` to automatically fix these issues.

## Files Affected

The following files have issues with Button variants or sizes:

- src/components/home/ImpactStories.tsx
- src/components/layout/Navbar.tsx
- src/pages/GetInvolved.tsx
- src/pages/Give.tsx
- src/pages/Index.tsx
- src/pages/Services.tsx
- src/pages/Stories.tsx

## Other Issues

Some components were importing from the wrong path:
- Fixed import paths for Button in alert-dialog.tsx, pagination.tsx, and calendar.tsx.
- Added missing Lucide icon imports in Services.tsx and Stories.tsx.
