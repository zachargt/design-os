// =============================================================================
// Data Types
// =============================================================================

export interface CtaButton {
  label: string
  variant: 'primary' | 'secondary'
}

export interface PainPoint {
  id: string
  text: string
  icon: string
}

export interface Problem {
  headline: string
  painPoints: PainPoint[]
  cta: CtaButton
}

export interface Benefit {
  id: string
  icon: string
  title: string
  description: string
  result: string
}

export interface Solution {
  intro: string
  cta: CtaButton
}

// =============================================================================
// Component Props
// =============================================================================

export interface ProblemSolutionProps {
  /** The problem section with headline and pain points */
  problem: Problem
  /** The solution intro text and CTA */
  solution: Solution
  /** Array of benefit cards to display */
  benefits: Benefit[]
  /** Called when user clicks the secondary CTA (problem section) */
  onSecondaryCta?: () => void
  /** Called when user clicks the primary CTA (solution section) */
  onPrimaryCta?: () => void
}
