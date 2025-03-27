
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

## How We Fixed It

1. We replaced all occurrences of `variant="primary"` with `variant="default"`
2. We replaced all occurrences of `size="md"` with `size="default"`
3. We created a utility in `src/utils/buttonImports.ts` to handle the `fullWidth` prop with a className utility

## The fullWidth Solution

The original Button component didn't have a `fullWidth` prop, but many of our components were using it. 
We solved this by creating a helper function:

```typescript
// From src/utils/buttonImports.ts
export const getButtonClassNames = (className?: string, fullWidth?: boolean): string => {
  return `${fullWidth ? 'w-full' : ''} ${className || ''}`.trim();
};
```

This allows us to use the `fullWidth` functionality with the proper shadcn Button component:

```tsx
// Before:
<Button variant="primary" size="md" fullWidth>
  Apply Now
</Button>

// After:
<Button variant="default" size="default" className={getButtonClassNames("", true)}>
  Apply Now
</Button>
```

## Files Affected

The following files had issues with Button variants or sizes and were fixed:

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

## Automated Fix Script

We created an automated script that can be run to fix all button variants and sizes issues:

```bash
node src/scripts/fixButtonVariantsAll.js
```

This script will scan all .tsx files, replace the incorrect variants and sizes, and update the fullWidth prop to use the className approach.
