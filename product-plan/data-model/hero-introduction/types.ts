// =============================================================================
// Data Types
// =============================================================================

export interface CtaButton {
  label: string
  variant: 'primary' | 'secondary'
}

export interface HeroContent {
  headline: string
  subhead: string
  primaryCta: CtaButton
  secondaryCta: CtaButton
}

export interface TrustBadge {
  id: string
  label: string
  icon: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeroIntroductionProps {
  /** The hero content with headline, subhead, and CTA labels */
  hero: HeroContent
  /** Trust badges displayed in the trust line below CTAs */
  trustBadges: TrustBadge[]
  /** Called when user clicks the primary CTA button */
  onPrimaryCtaClick?: () => void
  /** Called when user clicks the secondary CTA button */
  onSecondaryCtaClick?: () => void
}
