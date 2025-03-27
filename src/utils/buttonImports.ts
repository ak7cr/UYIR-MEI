
// This file provides a utility function to import the correct Button component
// to avoid casing issues between Button.tsx and button.tsx

import ButtonCustom from '@/components/ui/Button';
import { Button as ButtonShadcn } from '@/components/ui/button';

// Export both button components to be used based on context
export { ButtonCustom as Button, ButtonShadcn };
