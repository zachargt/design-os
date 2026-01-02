# Milestone 1: Foundation

## Overview
Set up the Next.js project foundation with Tailwind CSS v4, design tokens, Google Fonts, and the fixed header shell. This milestone creates the base infrastructure for all sections.

## Prerequisites
- Node.js 18+ installed
- Familiarity with Next.js 14+ App Router
- Understanding of Tailwind CSS v4 (no tailwind.config.js)

## Implementation Steps

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest moze-finance-landing --typescript --tailwind --app --no-src-dir
cd moze-finance-landing
```

### 2. Install Dependencies
```bash
npm install @radix-ui/react-icons
npm install -D @tailwindcss/typography
```

**Note**: GSAP and Framer Motion will be added in section-specific milestones.

### 3. Configure Tailwind CSS v4

**CRITICAL**: This project uses Tailwind CSS v4. Do NOT create a `tailwind.config.js` file.

Update `app/globals.css`:
```css
@import "tailwindcss";

/* Design Tokens */
:root {
  --color-primary: theme('colors.sky.500');
  --color-primary-hover: theme('colors.sky.600');
  --color-secondary: theme('colors.rose.500');
  --color-secondary-hover: theme('colors.rose.600');
  --color-neutral-50: theme('colors.slate.50');
  --color-neutral-100: theme('colors.slate.100');
  --color-neutral-900: theme('colors.slate.900');
  --color-neutral-950: theme('colors.slate.950');

  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Manrope', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

### 4. Add Google Fonts

Update `app/layout.tsx` to import fonts in the correct order:
```tsx
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'MOZE Finance - Financiën met een creatief directeur',
  description: 'Administratie, advies, en inzicht zonder gedoe. Operationeel binnen 14 dagen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  )
}
```

### 5. Create Application Shell

Create `components/shell/MainNav.tsx`:
```tsx
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
```

Create `components/shell/AppShell.tsx`:
```tsx
import { MainNav } from './MainNav'

export interface AppShellProps {
  children: React.ReactNode
  onCtaClick?: () => void
}

export function AppShell({ children, onCtaClick }: AppShellProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <MainNav onCtaClick={onCtaClick} />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}
```

Create `components/shell/index.ts`:
```tsx
export { AppShell } from './AppShell'
export { MainNav } from './MainNav'
export type { AppShellProps } from './AppShell'
export type { MainNavProps } from './MainNav'
```

### 6. Update Homepage

Update `app/page.tsx`:
```tsx
import { AppShell } from '@/components/shell'

export default function Home() {
  return (
    <AppShell onCtaClick={() => console.log('Book conversation')}>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
          MOZE Finance Landing Page
        </h1>
      </div>
    </AppShell>
  )
}
```

### 7. Test the Foundation

```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Fixed header appears with MOZE logo (left) and CTA button (right)
- ✅ Header has backdrop blur effect
- ✅ Fonts load correctly (Space Grotesk for logo, Manrope for body)
- ✅ CTA button has sky-500 background with hover effects
- ✅ Dark mode works (toggle system preference)

## Acceptance Criteria

- [ ] Next.js project runs without errors
- [ ] Tailwind CSS v4 configured (NO tailwind.config.js file)
- [ ] Google Fonts load in correct order
- [ ] Fixed header stays at top during scroll
- [ ] CTA button is interactive with hover/active states
- [ ] Dark mode supported throughout
- [ ] Mobile responsive (test at 375px width)

## Next Steps

Proceed to **Milestone 2: Hero & Introduction** to build the kinetic typography hero section.
