import { motion } from 'framer-motion'

interface ShimmerTextProps {
  children: string
  className?: string
}

export function ShimmerText({ children, className = '' }: ShimmerTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: '200% center' }}
        animate={{ backgroundPosition: '-200% center' }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}
