import { Award, Clock, ShieldCheck } from 'lucide-react'
import type { TrustBadge } from '@/../product/sections/hero-introduction/types'

interface TrustBadgeListProps {
  badges: TrustBadge[]
}

const iconMap = {
  award: Award,
  clock: Clock,
  'shield-check': ShieldCheck
}

export function TrustBadgeList({ badges }: TrustBadgeListProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 animate-fadeIn">
      {badges.map((badge, index) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap] || Award

        return (
          <div
            key={badge.id}
            className="group flex items-center gap-3 px-4 py-2 bg-slate-50/80 dark:bg-slate-900/50 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon className="relative w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {badge.label}
            </span>
          </div>
        )
      })}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn > div {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
