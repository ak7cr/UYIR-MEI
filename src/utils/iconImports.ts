
// This file provides import fixes for Lucide icons that are missing or have naming issues

import { 
  Calendar, 
  User, 
  Heart, 
  MessageSquare, 
  Search, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Utensils,
  Home,
  GraduationCap,
  BookOpen,
  Building,
  LifeBuoy
} from 'lucide-react';

// Re-export icons with correct names
export {
  Calendar,
  User,
  Heart,
  MessageSquare,
  Search,
  Tag,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Home,
  GraduationCap,
  Building as Stethoscope, // Using Building as a substitution for Stethoscope
  BookOpen,
  LifeBuoy
};

// Export React's useState for Stories component that imports it incorrectly
export { useState } from 'react';
