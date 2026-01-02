'use client'

import { Layers, Clock, TrendingDown } from 'lucide-react'
import type { ProblemSolutionProps } from '@/../product/sections/problem-solution/types'
import { BenefitCard } from './BenefitCard'

const painIconMap = {
  layers: Layers,
  clock: Clock,
  'trending-down': TrendingDown
}

export function ProblemSolution({
  problem,
  solution,
  benefits,
  onSecondaryCta,
  onPrimaryCta
}: ProblemSolutionProps) {
  return (
    <div className="relative">
      {/* Problem Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Dramatic headline - split into three parts */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-16 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {problem.headline}
          </h2>

          {/* Pain points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problem.painPoints.map((painPoint, index) => {
              const PainIcon = painIconMap[painPoint.icon as keyof typeof painIconMap] || Layers

              return (
                <div
                  key={painPoint.id}
                  className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <PainIcon className="w-6 h-6 text-rose-500 mb-3" strokeWidth={2.5} />
                  <p
                    className="text-slate-700 dark:text-slate-200 leading-relaxed"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {painPoint.text}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Secondary CTA */}
          <div className="flex justify-center">
            <button
              onClick={onSecondaryCta}
              className="group px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border-3 border-slate-900 dark:border-white transition-all duration-300 hover:scale-105 hover:border-rose-500 dark:hover:border-rose-400"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="flex items-center justify-center gap-3">
                {problem.cta.label}
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-white dark:bg-slate-950">
        {/* Gradient background */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="relative max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {solution.intro}
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <BenefitCard benefit={benefit} />
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center">
            <button
              onClick={onPrimaryCta}
              className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3 text-lg">
                {solution.cta.label}
                <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:scale-110">→</span>
              </span>
            </button>
          </div>
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
