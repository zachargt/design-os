# Milestone 2: Hero & Introduction

## Overview
Build the kinetic typography hero section with GSAP text-splitting animations, primary/secondary CTAs, trust badges, and scroll indicator. This section creates the bold first impression.

## Prerequisites
- Milestone 1 (Foundation) completed
- Foundation tests passing

## Sample Data Location
Reference: `data-model/hero-introduction/data.json`

## Implementation Steps

### 1. Install GSAP Dependencies
```bash
npm install gsap @gsap/react split-type
```

### 2. Create TypeScript Types

Create `types/hero-introduction.ts`:
```typescript
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

export interface HeroIntroductionProps {
  hero: HeroContent
  trustBadges: TrustBadge[]
  onPrimaryCta?: () => void
  onSecondaryCta?: () => void
}
```

### 3. Create Utility for Icons

Create `components/hero-introduction/icon-map.tsx`:
```tsx
import { AwardIcon, ClockIcon, ShieldCheckIcon } from '@radix-ui/react-icons'

export const iconMap = {
  'award': AwardIcon,
  'clock': ClockIcon,
  'shield-check': ShieldCheckIcon,
}
```

### 4. Create TrustBadgeList Component

Create `components/hero-introduction/TrustBadgeList.tsx`:
```tsx
'use client'

import type { TrustBadge } from '@/types/hero-introduction'
import { iconMap } from './icon-map'

export interface TrustBadgeListProps {
  badges: TrustBadge[]
}

export function TrustBadgeList({ badges }: TrustBadgeListProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
      {badges.map((badge, index) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap] || iconMap['award']
        return (
          <div
            key={badge.id}
            className="group flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${1.4 + index * 0.1}s` }}
          >
            <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:scale-125 transition-transform" />
            <span
              className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {badge.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
```

### 5. Create HeroIntroduction Component

Create `components/hero-introduction/HeroIntroduction.tsx`:
```tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import type { HeroIntroductionProps } from '@/types/hero-introduction'
import { TrustBadgeList } from './TrustBadgeList'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export function HeroIntroduction({
  hero,
  trustBadges,
  onPrimaryCta,
  onSecondaryCta
}: HeroIntroductionProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const split = new SplitType(headlineRef.current, { types: 'chars' })
    const chars = split.chars

    if (chars) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      )
    }

    return () => split.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-sky-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-rose-500/30 rotate-45 animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-sky-500/20 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '6s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-slate-900 dark:text-white leading-tight lg:ml-8"
          style={{ fontFamily: 'var(--font-heading)', perspective: '1000px' }}
        >
          {hero.headline}
        </h1>

        {/* Subhead */}
        <p
          className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp lg:ml-auto lg:mr-8"
          style={{ fontFamily: 'var(--font-body)', animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          {hero.subhead}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <button
            onClick={onPrimaryCta}
            className="group relative px-12 py-6 bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-sky-500/50 dark:hover:shadow-sky-600/50 hover:scale-110 active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              {hero.primaryCta.label}
              <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:scale-125">→</span>
            </span>
          </button>

          <button
            onClick={onSecondaryCta}
            className="px-10 py-5 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-sky-500 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {hero.secondaryCta.label}
          </button>
        </div>

        {/* Trust Badges */}
        <TrustBadgeList badges={trustBadges} />

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-slate-400 dark:text-slate-600" />
        </div>
      </div>
    </section>
  )
}
```

### 6. Add fadeInUp Animation

Update `app/globals.css` to add the animation:
```css
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

### 7. Create Component Index

Create `components/hero-introduction/index.ts`:
```tsx
export { HeroIntroduction } from './HeroIntroduction'
export { TrustBadgeList } from './TrustBadgeList'
export type { HeroIntroductionProps } from '@/types/hero-introduction'
```

### 8. Update Homepage

Update `app/page.tsx`:
```tsx
import { AppShell } from '@/components/shell'
import { HeroIntroduction } from '@/components/hero-introduction'
import heroData from '@/data/hero-introduction/data.json'

export default function Home() {
  return (
    <AppShell onCtaClick={() => console.log('Book conversation')}>
      <HeroIntroduction
        hero={heroData.hero}
        trustBadges={heroData.trustBadges}
        onPrimaryCta={() => console.log('Primary CTA clicked')}
        onSecondaryCta={() => console.log('Secondary CTA clicked')}
      />
    </AppShell>
  )
}
```

### 9. Test the Hero Section

```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Headline animates character-by-character with GSAP
- ✅ Subhead fades in after headline (600ms delay)
- ✅ CTAs fade in after subhead (1000ms delay)
- ✅ Trust badges fade in staggered (1400ms+ delay)
- ✅ Primary CTA has intense glow effect on hover
- ✅ Gradient blobs animate in background
- ✅ Grain texture overlay visible
- ✅ Floating geometric shapes animate
- ✅ Scroll indicator bounces at bottom
- ✅ Mobile responsive (headline scales down, CTAs stack)
- ✅ Dark mode works properly

## Testing Instructions

Refer to `sections/hero-introduction/tests.md` for complete test scenarios including:
- Animation timing and sequencing
- CTA interactions and callbacks
- Trust badge rendering
- Responsive behavior
- Reduced-motion fallbacks
- Dark mode verification

## Acceptance Criteria

- [ ] GSAP kinetic typography works smoothly
- [ ] All animations fire in correct sequence
- [ ] CTAs are interactive with proper callbacks
- [ ] Trust badges render with icons
- [ ] Grain texture and gradient blobs visible
- [ ] Scroll indicator bounces
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Dark mode fully functional
- [ ] No console errors
- [ ] 60fps performance maintained

## Next Steps

Proceed to **Milestone 3: Problem & Solution** to build the problem agitation and benefit cards section.
