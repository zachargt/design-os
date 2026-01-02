# Milestone 4: Trust & Proof

## Overview
Build the trust & proof section with testimonial card, trust badges, differentiation bullets ("Waarom MOZE?"), and expandable FAQ accordion. This section builds credibility and handles objections.

## Prerequisites
- Milestone 3 (Problem & Solution) completed
- Problem & Solution tests passing

## Sample Data Location
Reference: `data-model/trust-proof/data.json`

## Implementation Steps

### 1. Install Additional Icons
```bash
npm install lucide-react
```

### 2. Create TypeScript Types

Create `types/trust-proof.ts`:
```typescript
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

export interface TrustProofProps {
  socialProof: SocialProof
  testimonial: Testimonial
  trustBadges: TrustBadge[]
  differentiation: Differentiation
  faqs: FAQ[]
  onMicroCta?: () => void
  onFaqToggle?: (faqId: string, isOpen: boolean) => void
}
```

### 3. Create FaqAccordion Component

Create `components/trust-proof/FaqAccordion.tsx`:
```tsx
'use client'

import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import type { FAQ } from '@/types/trust-proof'

export interface FaqAccordionProps {
  faqs: FAQ[]
  onFaqToggle?: (faqId: string, isOpen: boolean) => void
}

export function FaqAccordion({ faqs, onFaqToggle }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (faqId: string) => {
    const newOpenId = openId === faqId ? null : faqId
    setOpenId(newOpenId)
    onFaqToggle?.(faqId, newOpenId === faqId)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id

        return (
          <div
            key={faq.id}
            className="border-2 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-sky-500 dark:hover:border-sky-400"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span
                className="text-lg font-bold text-slate-900 dark:text-white pr-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {faq.question}
              </span>
              {isOpen ? (
                <MinusIcon className="w-6 h-6 text-sky-600 dark:text-sky-400 flex-shrink-0" />
              ) : (
                <PlusIcon className="w-6 h-6 text-slate-400 dark:text-slate-600 flex-shrink-0" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <p
                  className="text-slate-700 dark:text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

### 4. Create TrustProof Component

Create `components/trust-proof/TrustProof.tsx`:
```tsx
'use client'

import { Award, ShieldCheck, Lock, Quote } from 'lucide-react'
import type { TrustProofProps } from '@/types/trust-proof'
import { FaqAccordion } from './FaqAccordion'

const badgeIconMap = {
  'award': Award,
  'shield-check': ShieldCheck,
  'lock': Lock,
}

export function TrustProof({
  socialProof,
  testimonial,
  trustBadges,
  differentiation,
  faqs,
  onMicroCta,
  onFaqToggle
}: TrustProofProps) {
  return (
    <div className="relative bg-white dark:bg-slate-950">
      {/* Social Proof Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-16"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {socialProof.headline}
          </h2>

          {/* Testimonial Card */}
          <div className="relative p-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-2xl mb-12">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 flex items-center justify-center">
              <Quote className="w-6 h-6 text-sky-600 dark:text-sky-400" strokeWidth={2.5} />
            </div>

            {/* Quote */}
            <p
              className="text-2xl text-slate-800 dark:text-slate-200 leading-relaxed mb-8 italic"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              "{testimonial.quote}"
            </p>

            {/* Attribution */}
            <div className="space-y-1">
              <p
                className="text-lg font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {testimonial.author}
              </p>
              <p
                className="text-slate-600 dark:text-slate-400"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {trustBadges.map((badge) => {
              const Icon = badgeIconMap[badge.icon as keyof typeof badgeIconMap] || Award

              return (
                <div
                  key={badge.id}
                  className="group flex items-center gap-3 px-5 py-3 bg-slate-50/80 dark:bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300" style={{ fontFamily: 'var(--font-body)' }}>
                    {badge.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Micro CTA */}
          <button
            onClick={onMicroCta}
            className="group px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border-2 border-slate-900 dark:border-white transition-all duration-300 hover:scale-105 hover:border-sky-500 dark:hover:border-sky-400"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="flex items-center justify-center gap-3">
              {socialProof.microCta.label}
              <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </span>
          </button>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="relative py-20 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s' }} />

        <div className="relative max-w-4xl mx-auto">
          <h3
            className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-10 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {differentiation.headline}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiation.items.map((item, index) => (
              <div
                key={item.id}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:scale-105 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <p
                  className="text-slate-700 dark:text-slate-200 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto">
          <h3
            className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-10 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Veelgestelde vragen
          </h3>

          <FaqAccordion faqs={faqs} onFaqToggle={onFaqToggle} />
        </div>
      </section>
    </div>
  )
}
```

### 5. Create Component Index

Create `components/trust-proof/index.ts`:
```tsx
export { TrustProof } from './TrustProof'
export { FaqAccordion } from './FaqAccordion'
export type { TrustProofProps } from '@/types/trust-proof'
```

### 6. Update Homepage

Update `app/page.tsx`:
```tsx
import { AppShell } from '@/components/shell'
import { HeroIntroduction } from '@/components/hero-introduction'
import { ProblemSolution } from '@/components/problem-solution'
import { TrustProof } from '@/components/trust-proof'
import heroData from '@/data/hero-introduction/data.json'
import problemSolutionData from '@/data/problem-solution/data.json'
import trustProofData from '@/data/trust-proof/data.json'

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
    </AppShell>
  )
}
```

### 7. Test the Trust & Proof Section

```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Social proof headline displays
- ✅ Testimonial card renders with glassmorphism
- ✅ Quote icon displays in corner
- ✅ Trust badges render as pills with icons
- ✅ Trust badges have hover effects
- ✅ Micro CTA is interactive
- ✅ Differentiation headline displays
- ✅ 4 differentiation cards render in 2x2 grid
- ✅ Differentiation cards fade in with stagger
- ✅ FAQ section renders
- ✅ FAQ items expand/collapse smoothly
- ✅ Plus/minus icons toggle correctly
- ✅ Mobile responsive (cards stack, FAQ full-width)
- ✅ Dark mode works properly

## Testing Instructions

Refer to `sections/trust-proof/tests.md` for complete test scenarios including:
- Testimonial rendering
- Trust badge interactions
- FAQ accordion functionality
- Differentiation card animations
- Responsive layouts
- Dark mode verification

## Acceptance Criteria

- [ ] Testimonial displays with attribution
- [ ] Trust badges render with icons
- [ ] Micro CTA is interactive
- [ ] Differentiation cards display in 2x2 grid
- [ ] Differentiation cards animate with stagger
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Only one FAQ open at a time
- [ ] All hover effects work
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Dark mode fully functional
- [ ] No console errors

## Next Steps

Proceed to **Milestone 5: Conversion & Footer** to build the final CTA block and footer.
