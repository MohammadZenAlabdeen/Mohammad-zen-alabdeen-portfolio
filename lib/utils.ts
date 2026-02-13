import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Sleep utility for delays
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Format delay for staggered animations
 */
export const getDelayClass = (index: number): string => {
  const delays = ['scroll-reveal-delay-1', 'scroll-reveal-delay-2', 'scroll-reveal-delay-3', 'scroll-reveal-delay-4'];
  return delays[index % delays.length] || '';
};
