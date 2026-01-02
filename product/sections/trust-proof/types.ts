// =============================================================================
// Data Types
// =============================================================================

export interface CtaButton {
  label: string
  variant: 'primary' | 'secondary'
}

export interface SocialProof {
  headline: string
  microCta: CtaButton
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export interface TrustBadge {
  id: string
  label: string
  icon: string
}

export interface Differentiator {
  id: string
  text: string
}

export interface Differentiation {
  headline: string
  items: Differentiator[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface TrustProofProps {
  /** Social proof headline and micro-CTA */
  socialProof: SocialProof
  /** Client testimonial with quote and attribution */
  testimonial: Testimonial
  /** Trust badges (awards, compliance, security) */
  trustBadges: TrustBadge[]
  /** Differentiation section with headline and items */
  differentiation: Differentiation
  /** FAQ items for accordion */
  faqs: FAQ[]
  /** Called when user clicks the micro-CTA */
  onMicroCta?: () => void
  /** Called when user toggles an FAQ item */
  onFaqToggle?: (faqId: string) => void
}
