import { CheckCircle, BarChart, PhoneCall, MessageSquare, Zap, TrendingUp, Target, ShieldCheck } from 'lucide-react'
import type { Benefit } from '@/../product/sections/problem-solution/types'
import { TiltCard } from '@/components/animations/TiltCard'
import { motion } from 'framer-motion'

interface BenefitCardProps {
  benefit: Benefit
}

const iconMap = {
  'check-circle': CheckCircle,
  'bar-chart': BarChart,
  'phone-call': PhoneCall,
  'message-square': MessageSquare,
  'zap': Zap,
  'trending-up': TrendingUp,
  'target': Target,
  'shield-check': ShieldCheck
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon as keyof typeof iconMap] || CheckCircle

  return (
    <TiltCard className="group relative h-full">
      <motion.div
        className="h-full p-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      {/* Icon with animated background */}
      <div className="relative mb-6">
        <motion.div
          className="w-14 h-14 rounded-xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Icon className="w-7 h-7 text-sky-600 dark:text-sky-400" strokeWidth={2.5} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="text-2xl font-bold text-slate-900 dark:text-white mb-3"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {benefit.headline || benefit.title}
        </h3>
        <p
          className="text-slate-600 dark:text-slate-300 leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {benefit.description}
        </p>
      </div>
      </motion.div>
    </TiltCard>
  )
}
