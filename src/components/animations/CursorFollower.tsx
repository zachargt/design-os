import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="w-full h-full rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-500/40" />
      </motion.div>

      {/* Trail cursor (delayed) */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-40 hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
          opacity: isVisible ? 0.5 : 0
        }}
        transition={{ delay: 0.05 }}
      >
        <div className="w-full h-full rounded-full bg-rose-500/10 backdrop-blur-sm" />
      </motion.div>
    </>
  )
}
