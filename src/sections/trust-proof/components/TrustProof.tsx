'use client'

import { Award, ShieldCheck, Lock, Quote } from 'lucide-react'
import type { TrustProofProps } from '@/../product/sections/trust-proof/types'
import { FaqAccordion } from './FaqAccordion'

const badgeIconMap = {
  award: Award,
  'shield-check': ShieldCheck,
  lock: Lock
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
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              "{testimonial.quote}"
            </p>

            {/* Attribution */}
            <div className="space-y-1">
              <p
                className="text-lg font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {testimonial.author}
              </p>
              <p
                className="text-slate-600 dark:text-slate-400"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {trustBadges.map((badge, index) => {
              const Icon = badgeIconMap[badge.icon as keyof typeof badgeIconMap] || Award

              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3 bg-slate-50/80 dark:bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {badge.label || badge.text}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Micro CTA */}
          <button
            onClick={onMicroCta}
            className="group px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border-3 border-slate-900 dark:border-white transition-all duration-300 hover:scale-105 hover:border-sky-500 dark:hover:border-sky-400"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {differentiation.headline}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiation.items.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:scale-105"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <p
                  className="text-slate-700 dark:text-slate-200 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
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
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Veelgestelde vragen
          </h3>

          <FaqAccordion faqs={faqs} onFaqToggle={onFaqToggle} />
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
