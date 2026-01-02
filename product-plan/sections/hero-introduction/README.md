# Hero & Introduction Section

## Overview
The opening section of the MOZE Finance landing page with kinetic typography hero. Combines a bold headline with GSAP text-splitting animations, primary and secondary CTAs, and trust signals to generate immediate trust and action.

## Components

### HeroIntroduction
Main hero component with kinetic typography, CTAs, trust badges, and scroll indicator.

**Props:**
- `hero`: HeroContent - Headline, subhead, and CTA labels
- `trustBadges`: TrustBadge[] - Trust signals with icons
- `onPrimaryCta`: () => void - Primary CTA callback
- `onSecondaryCta`: () => void - Secondary CTA callback

### TrustBadgeList
Displays trust badges as pill-shaped cards with icons.

**Props:**
- `badges`: TrustBadge[] - Array of trust badges

## Data Structure

See `data.json` for sample data structure.

Key entities:
- `hero`: Headline, subhead, primaryCta, secondaryCta
- `trustBadges`: Array of id, label, icon

## Design Features

- **Kinetic Typography**: GSAP SplitType character-level animations
- **Asymmetric Layout**: Headline offset left, subhead offset right
- **Multiple Gradient Layers**: Animated gradient blobs with different timings
- **Grain Texture**: SVG noise filter for premium feel
- **Floating Shapes**: Geometric shapes with custom float animation
- **Staggered Animations**: Orchestrated entrance sequence (headline 200ms, subhead 600ms, CTA 1000ms, badges 1400ms)
- **Intense CTA Glow**: Gradient background with blur effect on hover
- **Scroll Indicator**: Bouncing chevron at bottom

## Testing

See `tests.md` for complete test scenarios.

## Implementation Notes

- Requires GSAP and SplitType dependencies
- Uses Space Grotesk for headings, Manrope for body text
- Full viewport height section
- Mobile responsive with stacked CTAs
- Supports reduced-motion preferences
