
// This file provides a utility function to import the correct Button component
// to avoid casing issues between Button.tsx and button.tsx

import { Button as ButtonComponent, buttonVariants } from '@/components/ui/Button';

// Create a wrapper component that accepts fullWidth and passes the rest of the props
import React from 'react';

// Export the Button component for use throughout the application
export { ButtonComponent as Button, buttonVariants };

// Define an extended button component that accepts fullWidth prop
const ExtendedButton = React.forwardRef(
  ({ className, fullWidth, ...props }, ref) => {
    const fullWidthClass = fullWidth ? 'w-full' : '';
    return (
      <ButtonComponent 
        ref={ref}
        className={`${fullWidthClass} ${className || ''}`} 
        {...props} 
      />
    );
  }
);

ExtendedButton.displayName = 'ExtendedButton';

export { ExtendedButton };
