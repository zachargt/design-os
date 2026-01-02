import { CheckCircle, BarChart, PhoneCall, MessageSquare } from 'lucide-react'
import type { Benefit } from '@/../product/sections/problem-solution/types'

interface BenefitCardProps {
  benefit: Benefit
}

const iconMap = {
  'check-circle': CheckCircle,
  'bar-chart': BarChart,
  'phone-call': PhoneCall,
  'message-square': MessageSquare
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon as keyof typeof iconMap] || CheckCircle

  return (
    <div className="group relative p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-sky-600 dark:text-sky-400" strokeWidth={2.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="text-2xl font-bold text-slate-900 dark:text-white mb-3"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {benefit.title}
        </h3>
        <p
          className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {benefit.description}
        </p>
        <p
          className="text-sky-600 dark:text-sky-400 font-semibold italic"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {benefit.result}
        </p>
      </div>
    </div>
  )
}
