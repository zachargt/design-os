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
