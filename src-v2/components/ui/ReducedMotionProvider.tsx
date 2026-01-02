import React, { createContext, useContext } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ReducedMotionContextValue {
  /** Whether the user prefers reduced motion */
  prefersReducedMotion: boolean;
}

const ReducedMotionContext = createContext<ReducedMotionContextValue>({
  prefersReducedMotion: false,
});

/**
 * Hook to access the reduced motion context.
 * Must be used within a ReducedMotionProvider.
 *
 * @returns The reduced motion context value
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { prefersReducedMotion } = useReducedMotionContext();
 *
 *   return (
 *     <motion.div
 *       initial={{ opacity: 0 }}
 *       animate={{ opacity: 1 }}
 *       transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export function useReducedMotionContext(): ReducedMotionContextValue {
  const context = useContext(ReducedMotionContext);
  if (!context) {
    throw new Error(
      'useReducedMotionContext must be used within a ReducedMotionProvider'
    );
  }
  return context;
}

export interface ReducedMotionProviderProps {
  /** Child components that will have access to the reduced motion context */
  children: React.ReactNode;
}

/**
 * Provider component that makes the reduced motion preference available
 * to all descendant components via the useReducedMotionContext hook.
 *
 * Automatically detects the user's system preference for reduced motion
 * and updates when the preference changes.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ReducedMotionProvider>
 *       <MyAnimatedComponents />
 *     </ReducedMotionProvider>
 *   );
 * }
 * ```
 */
export function ReducedMotionProvider({
  children,
}: ReducedMotionProviderProps): React.ReactElement {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ReducedMotionContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
