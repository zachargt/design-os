import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const handleCtaClick = () => {
    console.log('CTA clicked: Plan een gesprek met MoMo')
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <AppShell onCtaClick={handleCtaClick}>
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl">
            <h1
              className="text-5xl font-bold text-slate-900 dark:text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              MOZE Finance Shell
            </h1>
            <p
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              This is the application shell with a minimal header. The fixed header stays visible as you scroll, providing persistent access to the primary CTA button.
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Section Content Area</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your section screens (Hero, Problem & Solution, Trust & Proof, Conversion & Footer) will render in this content area below the header.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-sky-100 to-rose-100 dark:from-sky-950 dark:to-rose-950 rounded-lg flex items-center justify-center">
                <p className="text-slate-600 dark:text-slate-400 text-center px-4">
                  Scroll down to see the fixed header behavior →
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-rose-100 to-sky-100 dark:from-rose-950 dark:to-sky-950 rounded-lg flex items-center justify-center">
                <p className="text-slate-600 dark:text-slate-400 text-center px-4">
                  The header remains accessible throughout the scroll experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppShell>
    </>
  )
}
