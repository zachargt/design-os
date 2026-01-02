// =============================================================================
// Data Types
// =============================================================================

export interface CtaButton {
  label: string
  variant: 'primary' | 'secondary'
}

export interface FinalCta {
  headline: string
  copy: string
  cta: CtaButton
  proofPoints: string[]
}

export interface FooterLink {
  id: string
  label: string
  href: string
}

export interface Footer {
  address: string
  links: FooterLink[]
  tagline: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ConversionFooterProps {
  /** Final CTA section with headline, copy, and button */
  finalCta: FinalCta
  /** Footer with address, links, and tagline */
  footer: Footer
  /** Called when user clicks the final CTA button */
  onCtaClick?: () => void
  /** Called when user clicks a footer link */
  onLinkClick?: (href: string) => void
}
