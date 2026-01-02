'use client'

export interface MainNavProps {
  ctaLabel?: string
  onCtaClick?: () => void
}

export function MainNav({
  ctaLabel = 'Plan een gesprek met MoMo',
  onCtaClick = () => console.log('CTA clicked')
}: MainNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="text-2xl font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          MOZE
        </a>

        {/* Primary CTA */}
        <button
          onClick={onCtaClick}
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {ctaLabel}
        </button>
      </nav>
    </header>
  )
}
