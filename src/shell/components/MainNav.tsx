import React from 'react'

interface MainNavProps {
  onCtaClick?: () => void
  ctaLabel: string
}

export function MainNav({ onCtaClick, ctaLabel }: MainNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="text-2xl font-bold text-slate-900 dark:text-white transition-colors hover:text-sky-600 dark:hover:text-sky-400"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          MOZE
        </a>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/50 hover:scale-105 active:scale-95"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {ctaLabel}
        </button>
      </nav>
    </header>
  )
}
