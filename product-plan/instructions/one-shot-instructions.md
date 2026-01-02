# One-Shot Implementation Instructions

This document provides complete instructions for implementing the entire MOZE Finance landing page in a single session. For step-by-step milestone approach, see `instructions/incremental/`.

---

## Project Overview

MOZE Finance is a bold, design-forward Next.js landing page that converts design/tech-conscious entrepreneurs through kinetic typography, GSAP scroll-triggered sequences, and Framer Motion micro-interactions. The site positions MOZE as a modern financial partner with clean white backgrounds and strategic animation.

**Tech Stack:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- GSAP + SplitType (kinetic typography)
- Google Fonts (Space Grotesk, Manrope, IBM Plex Mono)
- Radix UI Icons + Lucide React

**Design System:**
- Primary: sky (Tailwind sky palette)
- Secondary: rose (Tailwind rose palette)
- Neutral: slate (Tailwind slate palette)
- Heading: Space Grotesk
- Body: Manrope
- Mono: IBM Plex Mono

---

## Setup & Foundation

### 1. Initialize Project

```bash
npx create-next-app@latest moze-finance-landing --typescript --tailwind --app --no-src-dir
cd moze-finance-landing
```

### 2. Install Dependencies

```bash
npm install @radix-ui/react-icons lucide-react gsap @gsap/react split-type
npm install -D @tailwindcss/typography
```

### 3. Configure Tailwind CSS v4

**CRITICAL**: This project uses Tailwind CSS v4. Do NOT create a `tailwind.config.js` file.

Update `app/globals.css`:
```css
@import "tailwindcss";

/* Design Tokens */
:root {
  --color-primary: theme('colors.sky.500');
  --color-primary-hover: theme('colors.sky.600');
  --color-secondary: theme('colors.rose.500');
  --color-secondary-hover: theme('colors.rose.600');
  --color-neutral-50: theme('colors.slate.50');
  --color-neutral-100: theme('colors.slate.100');
  --color-neutral-900: theme('colors.slate.900');
  --color-neutral-950: theme('colors.slate.950');

  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Manrope', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out;
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}
```

### 4. Configure Google Fonts

Update `app/layout.tsx`:
```tsx
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'MOZE Finance - Financiën met een creatief directeur',
  description: 'Administratie, advies, en inzicht zonder gedoe. Operationeel binnen 14 dagen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  )
}
```

---

## Component Implementation

### Directory Structure

Create this structure:
```
components/
├── shell/
│   ├── AppShell.tsx
│   ├── MainNav.tsx
│   └── index.ts
├── hero-introduction/
│   ├── HeroIntroduction.tsx
│   ├── TrustBadgeList.tsx
│   ├── icon-map.tsx
│   └── index.ts
├── problem-solution/
│   ├── ProblemSolution.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── BenefitCard.tsx
│   ├── icon-map.tsx
│   └── index.ts
├── trust-proof/
│   ├── TrustProof.tsx
│   ├── FaqAccordion.tsx
│   └── index.ts
└── conversion-footer/
    ├── ConversionFooter.tsx
    └── index.ts

types/
├── hero-introduction.ts
├── problem-solution.ts
├── trust-proof.ts
└── conversion-footer.ts

data/
├── hero-introduction/
│   └── data.json
├── problem-solution/
│   └── data.json
├── trust-proof/
│   └── data.json
└── conversion-footer/
    └── data.json
```

### Copy Components & Types

All component code and types are provided in the `sections/` directory. Copy each component exactly as provided:

1. **Shell Components**: Copy from `shell/components/`
2. **Hero Components**: Copy from `sections/hero-introduction/components/`
3. **Problem Solution Components**: Copy from `sections/problem-solution/components/`
4. **Trust Proof Components**: Copy from `sections/trust-proof/components/`
5. **Conversion Footer Components**: Copy from `sections/conversion-footer/components/`

### Copy Data Files

Copy all data files from `data-model/` to your `data/` directory:
- `data-model/hero-introduction/data.json` → `data/hero-introduction/data.json`
- `data-model/problem-solution/data.json` → `data/problem-solution/data.json`
- `data-model/trust-proof/data.json` → `data/trust-proof/data.json`
- `data-model/conversion-footer/data.json` → `data/conversion-footer/data.json`

### Copy Type Definitions

Copy all type files from `data-model/` to your `types/` directory:
- `data-model/hero-introduction/types.ts` → `types/hero-introduction.ts`
- `data-model/problem-solution/types.ts` → `types/problem-solution.ts`
- `data-model/trust-proof/types.ts` → `types/trust-proof.ts`
- `data-model/conversion-footer/types.ts` → `types/conversion-footer.ts`

---

## Main Page

Update `app/page.tsx`:
```tsx
import { AppShell } from '@/components/shell'
import { HeroIntroduction } from '@/components/hero-introduction'
import { ProblemSolution } from '@/components/problem-solution'
import { TrustProof } from '@/components/trust-proof'
import { ConversionFooter } from '@/components/conversion-footer'
import heroData from '@/data/hero-introduction/data.json'
import problemSolutionData from '@/data/problem-solution/data.json'
import trustProofData from '@/data/trust-proof/data.json'
import conversionFooterData from '@/data/conversion-footer/data.json'

export default function Home() {
  return (
    <AppShell onCtaClick={() => console.log('Book conversation')}>
      <HeroIntroduction
        hero={heroData.hero}
        trustBadges={heroData.trustBadges}
        onPrimaryCta={() => console.log('Primary CTA clicked')}
        onSecondaryCta={() => console.log('Secondary CTA clicked')}
      />
      <ProblemSolution
        problem={problemSolutionData.problem}
        solution={problemSolutionData.solution}
        benefits={problemSolutionData.benefits}
        onSecondaryCta={() => console.log('Secondary CTA clicked')}
        onPrimaryCta={() => console.log('Primary CTA clicked')}
      />
      <TrustProof
        socialProof={trustProofData.socialProof}
        testimonial={trustProofData.testimonial}
        trustBadges={trustProofData.trustBadges}
        differentiation={trustProofData.differentiation}
        faqs={trustProofData.faqs}
        onMicroCta={() => console.log('Micro CTA clicked')}
        onFaqToggle={(faqId, isOpen) => console.log(`FAQ ${faqId} toggled:`, isOpen)}
      />
      <ConversionFooter
        finalCta={conversionFooterData.finalCta}
        footer={conversionFooterData.footer}
        onCtaClick={() => console.log('Final CTA clicked')}
        onLinkClick={(href) => console.log('Footer link clicked:', href)}
      />
    </AppShell>
  )
}
```

---

## Testing

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### Verification Checklist

**Foundation:**
- [ ] Fixed header displays with MOZE logo and CTA button
- [ ] Header has backdrop blur effect
- [ ] Fonts load correctly (Space Grotesk, Manrope)
- [ ] Dark mode works

**Hero & Introduction:**
- [ ] Headline animates character-by-character with GSAP
- [ ] Subhead, CTAs, and trust badges fade in with stagger
- [ ] Primary CTA has intense glow effect
- [ ] Gradient blobs and grain texture visible
- [ ] Floating shapes animate
- [ ] Scroll indicator bounces

**Problem & Solution:**
- [ ] Problem headline and 3 pain points display
- [ ] Pain points fade in with stagger
- [ ] 4 benefit cards display in 2x2 grid
- [ ] Benefit cards have hover glow effects
- [ ] Both CTAs are interactive

**Trust & Proof:**
- [ ] Testimonial card displays with glassmorphism
- [ ] Trust badges render as pills
- [ ] Differentiation cards fade in with stagger
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Only one FAQ open at a time

**Conversion & Footer:**
- [ ] Final CTA has dramatic gradient background
- [ ] CTA button has intense glow on hover
- [ ] Footer has dark background
- [ ] Footer links are interactive
- [ ] Copyright year is dynamic

**Responsive:**
- [ ] Mobile (375px): All sections stack properly
- [ ] Tablet (768px): Grid layouts work
- [ ] Desktop (1024px+): Full layouts display

**Performance:**
- [ ] No console errors
- [ ] Animations run at 60fps
- [ ] Page loads in < 3s on 3G

---

## Production Checklist

Before deploying:

1. **Replace Console Logs**: Connect CTA callbacks to actual booking flow
2. **Add Analytics**: Track CTA clicks and FAQ interactions
3. **SEO**: Add meta tags, Open Graph, structured data
4. **Images**: Optimize any images (if added)
5. **Performance**: Run Lighthouse audit
6. **Accessibility**: Test with screen readers, keyboard navigation
7. **Testing**: Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Deployment

```bash
npm run build
npm run start
```

Deploy to Vercel, Netlify, or your preferred hosting platform.

---

## Support

For questions or issues, refer to:
- Individual section test instructions in `sections/*/tests.md`
- Incremental milestone instructions in `instructions/incremental/`
- Component source code in `sections/*/components/`
