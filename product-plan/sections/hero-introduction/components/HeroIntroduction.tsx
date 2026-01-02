'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import type { HeroIntroductionProps } from '@/../product/sections/hero-introduction/types'
import { TrustBadgeList } from './TrustBadgeList'

// Design tokens: Space Grotesk (heading), Manrope (body), sky (primary), rose (secondary), slate (neutral)

export function HeroIntroduction({
  hero,
  trustBadges,
  onPrimaryCtaClick,
  onSecondaryCtaClick
}: HeroIntroductionProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion.current) {
      // Skip animations for reduced motion
      return
    }

    // Staggered entrance animations
    // GSAP text splitting animation would go here for letter-by-letter effect
    // For now, using orchestrated CSS animations

    const headline = headlineRef.current
    const subhead = subheadRef.current
    const cta = ctaRef.current

    if (headline) {
      headline.style.opacity = '0'
      headline.style.transform = 'translateY(20px)'
      setTimeout(() => {
        headline.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
        headline.style.opacity = '1'
        headline.style.transform = 'translateY(0)'
      }, 200)
    }

    if (subhead) {
      subhead.style.opacity = '0'
      subhead.style.transform = 'translateY(20px)'
      setTimeout(() => {
        subhead.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        subhead.style.opacity = '1'
        subhead.style.transform = 'translateY(0)'
      }, 600)
    }

    if (cta) {
      cta.style.opacity = '0'
      cta.style.transform = 'translateY(20px)'
      setTimeout(() => {
        cta.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
        cta.style.opacity = '1'
        cta.style.transform = 'translateY(0)'
      }, 1000)
    }
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Dramatic gradient blobs with multiple layers */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-400/30 via-sky-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-rose-400/25 via-rose-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-sky-500/10 via-rose-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-sky-500/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-32 left-16 w-16 h-16 border-2 border-rose-500/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      <div className="absolute top-1/3 left-1/3 w-20 h-20 border-2 border-sky-400/15 rounded-lg -rotate-6 animate-float" style={{ animationDelay: '4s', animationDuration: '8s' }} />

      {/* Content - asymmetric layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20">
        {/* Headline with kinetic typography - slightly off-center */}
        <div className="max-w-5xl lg:ml-8">
          <h1
            ref={headlineRef}
            className="text-6xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-black text-slate-900 dark:text-white mb-8 leading-[0.95] tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {hero.headline}
          </h1>
        </div>

        {/* Subhead - offset to the right */}
        <div className="max-w-2xl lg:ml-auto lg:mr-8">
          <p
            ref={subheadRef}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-14 leading-relaxed font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {hero.subhead}
          </p>
        </div>

        {/* CTAs - centered but with dramatic styling */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          {/* Primary CTA with intense glow */}
          <button
            onClick={onPrimaryCtaClick}
            className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 w-full sm:w-auto shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-3 text-lg">
              {hero.primaryCta.label}
              <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:scale-110">→</span>
            </span>
          </button>

          {/* Secondary CTA with rose accent on hover */}
          <button
            onClick={onSecondaryCtaClick}
            className="group relative px-10 py-5 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-xl border-3 border-slate-900 dark:border-white transition-all duration-300 hover:scale-105 hover:border-rose-500 dark:hover:border-rose-400 w-full sm:w-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="flex items-center justify-center gap-3 text-lg">
              {hero.secondaryCta.label}
              <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </span>
          </button>
        </div>

        {/* Trust badges - centered */}
        <div className="flex justify-center">
          <TrustBadgeList badges={trustBadges} />
        </div>
      </div>

      {/* Scroll indicator with custom animation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-xl animate-pulse" />
          <ChevronDown className="relative w-10 h-10 text-sky-500 dark:text-sky-400" strokeWidth={2.5} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
