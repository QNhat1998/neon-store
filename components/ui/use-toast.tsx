'use client';

import { toast as sonnerToast } from 'sonner';

/**
 * Hook wrapper để API giống Shadcn UI v1.
 */
export function useToast() {
  return { toast: sonnerToast };
}
