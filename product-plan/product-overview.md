# MOZE Finance Landing Page

## Product Description

MOZE Finance is a bold, design-forward Next.js landing page that converts design/tech-conscious entrepreneurs through kinetic typography, GSAP scroll-triggered sequences, and Framer Motion micro-interactions. The site positions MOZE as a modern financial partner with clean white backgrounds and strategic animation, driving the primary conversion goal: "Plan een gesprek met MoMo."

## Problems This Product Solves

### Problem 1: Generic accounting websites are visually boring
Traditional accounting websites fail to engage modern entrepreneurs who value design and innovation. MOZE Finance breaks this pattern with kinetic typography, abstract 3D shapes, vibrant gradients, and a premium visual experience on clean white backgrounds.

### Problem 2: Buried conversion goals in cluttered layouts
Most accounting sites hide their CTAs in complex navigation and dense content. MOZE prioritizes conversion with strategic placement, scroll-driven storytelling (Hero → Problem → Solution → Trust → FAQ → Final CTA), and minimal friction to booking.

### Problem 3: Entrepreneurs face spreadsheet chaos and compliance anxiety
Business owners struggle with administrative overhead, deadline stress, and fear of penalties. MOZE communicates end-to-end automation, proactive advice, and fast onboarding ("Operationeel binnen 14 dagen") through clear Dutch copy and trust signals.

### Problem 4: Impersonal stock photos and muted palettes
Financial services often feel cold and corporate. MOZE uses custom abstract visuals, gradient blobs, floating data cards, and a distinctive color system to create a premium, human-yet-innovative brand: "Perfecte cijfers. Zonder de grijze pakken."

## Key Features

- **Kinetic Typography Hero**: GSAP scroll-triggered sequences with text splitting and complex timelines for standout visual impact
- **Framer Motion Interactions**: Layout animations, gestures, and micro-interactions on every element (hover glows, tilts)
- **Scroll-Driven Storytelling**: Polished Dutch copy flow from Problem/Agitation → Solution/Benefits → Social Proof → Differentiation → FAQ → Final CTA
- **Abstract Design Language**: 3D shapes, vibrant gradients (sky blue/rose coral), SVG patterns, and floating data cards on white backgrounds
- **Customized Components**: Heavily customized shadcn/ui base with responsive mobile-first design and reduced-motion fallbacks
- **60fps Performance**: GSAP + Framer Motion coexistence for complex, choreographed animations

## Sections

### 1. Hero & Introduction
Kinetic typography hero with primary CTA, trust signals, and the opening statement "Financiën met een creatief directeur"

### 2. Problem & Solution
Problem agitation ("Bonnetjes in een schoenendoos") flowing into four benefit solution blocks (Alles geregeld, Inzicht, Advies, Contact)

### 3. Trust & Proof
Social proof, testimonials, badges, differentiation points, and FAQ accordion to build credibility

### 4. Conversion & Footer
Final CTA block with gradient background and footer with contact details

## Design System

**Colors:**
- Primary: sky (Tailwind sky palette)
- Secondary: rose (Tailwind rose palette)
- Neutral: slate (Tailwind slate palette)

**Typography:**
- Heading: Space Grotesk (Google Fonts)
- Body: Manrope (Google Fonts)
- Mono: IBM Plex Mono (Google Fonts)

## Data Model

### Core Entities

**Testimonial**: Klantverhalen en quotes voor social proof. Bevat quote, naam, functie, bedrijfsnaam, en resultaten.

**FAQ**: Veelgestelde vragen met antwoorden in accordion. Behandelt onboarding tijd, veiligheid, kosten, integraties, en support.

**Benefit**: Oplossingsblokken die MOZE's waardepropositie uitleggen. Elk benefit heeft titel, beschrijving, en resultaat.

**TrustBadge**: Certificeringen, awards, en trust signals. Voorbeelden: "Bekroond accountant", "AVG-compliant", "Operationeel binnen 14 dagen".
