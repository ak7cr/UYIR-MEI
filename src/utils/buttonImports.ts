
// This file provides a utility function to import the correct Button component
// to avoid casing issues between Button.tsx and button.tsx

import { Button as ButtonComponent, buttonVariants, type ButtonProps } from '@/components/ui/Button';

// Export the button component
export { ButtonComponent as Button, buttonVariants, type ButtonProps };

// Add helper types for common button props patterns
export type ButtonWithClassProps = ButtonProps & {
  className?: string;
  fullWidth?: boolean; // Support for fullWidth prop
};

// Helper function to apply fullWidth class if needed
export const getButtonClassNames = (className?: string, fullWidth?: boolean): string => {
  return `${fullWidth ? 'w-full' : ''} ${className || ''}`.trim();
};
