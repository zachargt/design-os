import React from 'react'
import { MainNav } from './MainNav'

interface AppShellProps {
  children: React.ReactNode
  onCtaClick?: () => void
  ctaLabel?: string
}

export function AppShell({
  children,
  onCtaClick,
  ctaLabel = "Plan een gesprek met MoMo"
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <MainNav onCtaClick={onCtaClick} ctaLabel={ctaLabel} />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}
