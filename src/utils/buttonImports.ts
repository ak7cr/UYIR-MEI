
// This file provides a utility function to import the correct Button component
// to avoid casing issues between Button.tsx and button.tsx

import { Button as ButtonComponent } from '@/components/ui/Button';

// Export the Button component for use throughout the application
export { ButtonComponent as Button };
