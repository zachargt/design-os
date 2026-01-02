# Milestone 3: Problem & Solution

## Overview
Build the problem agitation section (dramatic headline + pain points) and solution section (4 benefit cards in 2x2 grid). This section moves visitors from pain recognition to solution understanding.

## Prerequisites
- Milestone 2 (Hero & Introduction) completed
- Hero tests passing

## Sample Data Location
Reference: `data-model/problem-solution/data.json`

## Implementation Steps

### 1. Create TypeScript Types

Create `types/problem-solution.ts`:
```typescript
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

export interface ProblemSolutionProps {
  problem: Problem
  solution: Solution
  benefits: Benefit[]
  onSecondaryCta?: () => void
  onPrimaryCta?: () => void
}
```

### 2. Extend Icon Map

Update `components/problem-solution/icon-map.tsx`:
```tsx
import {
  LayersIcon,
  ClockIcon,
  ArrowDownIcon,
  CheckCircledIcon,
  BarChartIcon,
  ChatBubbleIcon,
  MobileIcon,
} from '@radix-ui/react-icons'

export const iconMap = {
  'layers': LayersIcon,
  'clock': ClockIcon,
  'trending-down': ArrowDownIcon,
  'check-circle': CheckCircledIcon,
  'bar-chart': BarChartIcon,
  'phone-call': MobileIcon,
  'message-square': ChatBubbleIcon,
}
```

### 3. Create ProblemSection Component

Create `components/problem-solution/ProblemSection.tsx`:
```tsx
'use client'

import type { Problem } from '@/types/problem-solution'
import { iconMap } from './icon-map'

export interface ProblemSectionProps {
  problem: Problem
  onSecondaryCta?: () => void
}

export function ProblemSection({ problem, onSecondaryCta }: ProblemSectionProps) {
  return (
    <section className="relative py-32 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      {/* Rose gradient blob */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise-problem">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-problem)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-16">
        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {problem.headline}
        </h2>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problem.painPoints.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] || iconMap['layers']
            return (
              <div
                key={point.id}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <Icon className="w-12 h-12 text-rose-500 dark:text-rose-400 mx-auto mb-4" />
                <p
                  className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {point.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Secondary CTA */}
        <button
          onClick={onSecondaryCta}
          className="px-10 py-5 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-rose-500 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 font-semibold text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {problem.cta.label}
        </button>
      </div>
    </section>
  )
}
```

### 4. Create BenefitCard Component

Create `components/problem-solution/BenefitCard.tsx`:
```tsx
'use client'

import type { Benefit } from '@/types/problem-solution'
import { iconMap } from './icon-map'

export interface BenefitCardProps {
  benefit: Benefit
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon as keyof typeof iconMap] || iconMap['check-circle']

  return (
    <div
      className="group relative p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 dark:hover:shadow-sky-600/30 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

      {/* Icon */}
      <div className="relative w-14 h-14 mb-6 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-sky-600 dark:text-sky-400" />
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <h3
          className="text-2xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {benefit.title}
        </h3>
        <p
          className="text-slate-600 dark:text-slate-400 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {benefit.description}
        </p>
        <p
          className="text-sky-600 dark:text-sky-400 font-semibold italic pt-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {benefit.result}
        </p>
      </div>
    </div>
  )
}
```

### 5. Create SolutionSection Component

Create `components/problem-solution/SolutionSection.tsx`:
```tsx
'use client'

import type { Solution, Benefit } from '@/types/problem-solution'
import { BenefitCard } from './BenefitCard'

export interface SolutionSectionProps {
  solution: Solution
  benefits: Benefit[]
  onPrimaryCta?: () => void
}

export function SolutionSection({ solution, benefits, onPrimaryCta }: SolutionSectionProps) {
  return (
    <section className="relative py-32 px-6 lg:px-8 bg-white dark:bg-slate-950">
      {/* Sky gradient blob */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise-solution">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-solution)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <p
          className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {solution.intro}
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <button
            onClick={onPrimaryCta}
            className="group relative px-12 py-6 bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-sky-500/50 dark:hover:shadow-sky-600/50 hover:scale-110 active:scale-95 transition-all duration-300"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              {solution.cta.label}
              <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:scale-125">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
```

### 6. Create Combined ProblemSolution Component

Create `components/problem-solution/ProblemSolution.tsx`:
```tsx
'use client'

import type { ProblemSolutionProps } from '@/types/problem-solution'
import { ProblemSection } from './ProblemSection'
import { SolutionSection } from './SolutionSection'

export function ProblemSolution({
  problem,
  solution,
  benefits,
  onSecondaryCta,
  onPrimaryCta
}: ProblemSolutionProps) {
  return (
    <>
      <ProblemSection problem={problem} onSecondaryCta={onSecondaryCta} />
      <SolutionSection solution={solution} benefits={benefits} onPrimaryCta={onPrimaryCta} />
    </>
  )
}
```

### 7. Create Component Index

Create `components/problem-solution/index.ts`:
```tsx
export { ProblemSolution } from './ProblemSolution'
export { ProblemSection } from './ProblemSection'
export { SolutionSection } from './SolutionSection'
export { BenefitCard } from './BenefitCard'
export type { ProblemSolutionProps } from '@/types/problem-solution'
```

### 8. Update Homepage

Update `app/page.tsx`:
```tsx
import { AppShell } from '@/components/shell'
import { HeroIntroduction } from '@/components/hero-introduction'
import { ProblemSolution } from '@/components/problem-solution'
import heroData from '@/data/hero-introduction/data.json'
import problemSolutionData from '@/data/problem-solution/data.json'

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
    </AppShell>
  )
}
```

### 9. Test the Problem & Solution Section

```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Problem headline displays dramatically
- ✅ 3 pain point cards render with icons
- ✅ Pain point cards fade in with stagger
- ✅ Secondary CTA is interactive
- ✅ Solution intro text displays
- ✅ 4 benefit cards render in 2x2 grid
- ✅ Benefit cards fade in with stagger
- ✅ Benefit cards have hover glow effects
- ✅ Primary CTA has intense glow on hover
- ✅ Gradient blobs animate in both sections
- ✅ Mobile responsive (cards stack on mobile)
- ✅ Dark mode works properly

## Testing Instructions

Refer to `sections/problem-solution/tests.md` for complete test scenarios including:
- Pain point rendering and animations
- Benefit card interactions
- CTA callbacks
- Responsive layouts
- Dark mode verification
- Animation performance

## Acceptance Criteria

- [ ] Problem section displays all pain points
- [ ] Pain points animate with stagger
- [ ] Benefit cards display in 2x2 grid (desktop)
- [ ] Benefit cards stack on mobile
- [ ] Hover effects work smoothly
- [ ] Both CTAs are interactive
- [ ] Gradient blobs animate
- [ ] Grain textures visible
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Dark mode fully functional
- [ ] No console errors

## Next Steps

Proceed to **Milestone 4: Trust & Proof** to build the testimonial, trust badges, differentiation, and FAQ sections.
