'use client'

import type { ConversionFooterProps } from '@/../product/sections/conversion-footer/types'

export function ConversionFooter({
  finalCta,
  footer,
  onCtaClick,
  onLinkClick
}: ConversionFooterProps) {
  return (
    <div className="relative">
      {/* Final CTA Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-rose-500">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise-cta">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-cta)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {finalCta.headline}
          </h2>

          {/* Copy */}
          <p
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {finalCta.copy}
          </p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className="group relative px-12 py-6 bg-white hover:bg-slate-50 text-sky-600 font-black rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-white/40 mb-10"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-4 text-2xl">
              {finalCta.cta.label}
              <span className="inline-block transition-transform group-hover:translate-x-3 group-hover:scale-125">→</span>
            </span>
          </button>

          {/* Proof Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            {finalCta.proofPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {point.text}
                </span>
                {index < finalCta.proofPoints.length - 1 && (
                  <span className="text-white/50">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-16 px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Address */}
            <div>
              <p
                className="text-slate-400"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {footer.address}
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-4">
              {footer.links.map((link, index) => (
                <div key={index} className="flex items-center gap-4">
                  <button
                    onClick={() => onLinkClick?.(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {link.label}
                  </button>
                  {index < footer.links.length - 1 && (
                    <span className="text-slate-700">•</span>
                  )}
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div className="text-right">
              <p
                className="text-slate-500 font-semibold italic"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {footer.tagline}
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="pt-8 border-t border-slate-800 text-center">
            <p
              className="text-slate-600 text-sm"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              © {new Date().getFullYear()} MOZE Finance. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
