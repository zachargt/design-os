import { useEffect, useRef, useState } from 'react';

export interface UseScrollAnimationOptions {
  /** Threshold for when the element is considered "visible" (0-1) */
  threshold?: number;
  /** Root margin for the intersection observer */
  rootMargin?: string;
  /** Whether to trigger animation only once */
  triggerOnce?: boolean;
  /** Whether the animation is enabled */
  enabled?: boolean;
}

/**
 * Hook to trigger animations when an element scrolls into view.
 * Uses Intersection Observer API for performance.
 *
 * @param options - Configuration options
 * @returns A tuple of [ref, isInView] where ref should be attached to the element
 *
 * @example
 * ```tsx
 * function FadeInSection({ children }) {
 *   const [ref, isInView] = useScrollAnimation({ threshold: 0.3, triggerOnce: true });
 *
 *   return (
 *     <div ref={ref} className={isInView ? 'opacity-100' : 'opacity-0'}>
 *       {children}
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<T>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    enabled = true,
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    // If triggerOnce and already triggered, skip
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [enabled, threshold, rootMargin, triggerOnce, hasTriggered]);

  return [ref, isInView];
}
