import { useEffect, useState } from 'react';

/**
 * Hook to detect if the user prefers reduced motion.
 * Respects the `prefers-reduced-motion` media query for accessibility.
 *
 * @returns {boolean} True if the user prefers reduced motion
 *
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = useReducedMotion();
 *
 *   if (prefersReducedMotion) {
 *     return <StaticVersion />;
 *   }
 *
 *   return <AnimatedVersion />;
 * }
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
