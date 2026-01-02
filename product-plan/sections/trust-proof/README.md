# Trust & Proof Section

## Overview
Builds credibility with social proof (testimonials), trust badges, differentiation bullets ("Waarom MOZE?"), and FAQ accordion. Combines emotional persuasion with rational objection handling.

## Components

### TrustProof
Main combined component rendering all trust & proof subsections.

**Props:**
- `socialProof`: SocialProof - Headline and micro CTA
- `testimonial`: Testimonial - Quote, author, role, company
- `trustBadges`: TrustBadge[] - Certifications and trust signals
- `differentiation`: Differentiation - Headline and 4 differentiator bullets
- `faqs`: FAQ[] - 5 FAQ items with questions and answers
- `onMicroCta`: () => void - Micro CTA callback
- `onFaqToggle`: (faqId, isOpen) => void - FAQ toggle callback

### FaqAccordion
Expandable FAQ items with smooth transitions.

**Props:**
- `faqs`: FAQ[]
- `onFaqToggle`: (faqId, isOpen) => void

## Data Structure

See `data.json` for sample data structure.

Key entities:
- `socialProof`: headline, microCta
- `testimonial`: id, quote, author, role, company
- `trustBadges`: Array of {id, label, icon}
- `differentiation`: headline, items (array of {id, text})
- `faqs`: Array of {id, question, answer}

## Design Features

- **Glassmorphism Testimonial Card**: Gradient background, border, shadow
- **Quote Icon**: Circular badge in top-left corner
- **Trust Badges as Pills**: Backdrop blur, hover effects on icons
- **Micro CTA**: Ghost button with border animation on hover
- **Differentiation Grid**: 2x2 cards with stagger animations
- **FAQ Accordion**: Smooth expand/collapse, plus/minus toggle
- **Gradient Blobs**: Sky blob in social proof, rose blob in differentiation

## Testing

See `tests.md` for complete test scenarios.

## Implementation Notes

- Uses Lucide React for icons (Quote, Award, ShieldCheck, Lock)
- Social proof: white background, sky gradient
- Differentiation: slate-50 background, rose gradient
- FAQ: white background, max-width 3xl
- Only one FAQ open at a time
