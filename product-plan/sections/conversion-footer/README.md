# Conversion & Footer Section

## Overview
Final conversion section with dramatic gradient CTA block and dark footer. Last opportunity for conversion plus essential contact/legal information.

## Components

### ConversionFooter
Combined component rendering final CTA and footer.

**Props:**
- `finalCta`: FinalCta - Headline, copy, CTA, proof points
- `footer`: Footer - Address, links, tagline
- `onCtaClick`: () => void - CTA callback
- `onLinkClick`: (href) => void - Footer link callback

## Data Structure

See `data.json` for sample data structure.

Key entities:
- `finalCta`: headline, copy, cta, proofPoints (array of strings)
- `footer`: address, links (array of {id, label, href}), tagline

## Design Features

- **Dramatic Gradient Background**: sky-500 → sky-600 → rose-500
- **Animated Gradient Blobs**: Multiple blobs with different timings (8s, 10s)
- **Grain Texture Overlay**: SVG noise filter for premium feel
- **Extra Large CTA Button**: White button with intense glow on hover
- **Proof Points**: Displayed below CTA with bullet separators
- **Dark Footer**: slate-950 background for strong visual termination
- **3-Column Footer Grid**: Address (left), links (center), tagline (right)
- **Copyright Line**: Dynamic year with center alignment

## Testing

See `tests.md` for complete test scenarios.

## Implementation Notes

- CTA section: Full-width gradient background
- CTA button: White bg with sky-600 text, reverses brand colors
- Footer: 3-column grid (desktop), stacks on mobile
- Links: Interactive buttons (not <a> tags for demo purposes)
- Copyright: Uses new Date().getFullYear() for dynamic year
