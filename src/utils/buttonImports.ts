
// This file provides a utility function to import the correct Button component
// to avoid casing issues between Button.tsx and button.tsx

import { Button as ButtonCustom } from '@/components/ui/Button';
import { Button as ButtonShadcn } from '@/components/ui/Button';

// Export both button components to be used based on context
export { ButtonCustom, ButtonShadcn };
