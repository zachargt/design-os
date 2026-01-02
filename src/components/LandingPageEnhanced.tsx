import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HeroIntroduction } from '@/sections/hero-introduction/components/HeroIntroduction'
import { ProblemSolution } from '@/sections/problem-solution/components/ProblemSolution'
import { TrustProof } from '@/sections/trust-proof/components/TrustProof'
import { ConversionFooter } from '@/sections/conversion-footer/components/ConversionFooter'
import { CursorFollower } from './animations/CursorFollower'

// API base URL
const API_URL = 'http://localhost:3001/api'

export function LandingPageEnhanced() {
  const [heroData, setHeroData] = useState<any>(null)
  const [problemSolutionData, setProblemSolutionData] = useState<any>(null)
  const [trustProofData, setTrustProofData] = useState<any>(null)
  const [footerData, setFooterData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Smooth scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Fetch all section data
    Promise.all([
      fetch(`${API_URL}/hero`).then(r => r.json()),
      fetch(`${API_URL}/problem-solution`).then(r => r.json()),
      fetch(`${API_URL}/trust-proof`).then(r => r.json()),
      fetch(`${API_URL}/conversion-footer`).then(r => r.json()),
    ])
      .then(([hero, problemSolution, trustProof, footer]) => {
        setHeroData(hero)
        setProblemSolutionData(problemSolution)
        setTrustProofData(trustProof)
        setFooterData(footer)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load landing page data:', err)
        setError('Failed to load page data')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <motion.div
            className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-sky-500 border-r-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="mt-6 text-xl text-slate-600 dark:text-slate-300 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading...
          </motion.p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <p className="text-2xl text-red-600 dark:text-red-400 font-bold mb-4">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Load Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-rose-500 to-sky-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Interactive cursor follower */}
      <CursorFollower />

      {/* Hero Section with enhanced animations */}
      {heroData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroIntroduction
            hero={{
              headline: heroData.headline,
              subhead: heroData.subhead,
              primaryCta: heroData.primaryCta,
              secondaryCta: heroData.secondaryCta,
            }}
            trustBadges={heroData.trustBadges}
            onPrimaryCtaClick={() => {
              console.log('Primary CTA clicked')
              window.location.href = heroData.primaryCta.url
            }}
            onSecondaryCtaClick={() => {
              console.log('Secondary CTA clicked')
              window.location.href = heroData.secondaryCta.url
            }}
          />
        </motion.div>
      )}

      {/* Problem/Solution Section with scroll reveal */}
      {problemSolutionData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProblemSolution
            problem={problemSolutionData.problem}
            solution={problemSolutionData.solution}
            benefits={problemSolutionData.benefits}
            onSecondaryCta={() => console.log('Problem CTA clicked')}
            onPrimaryCta={() => console.log('Solution CTA clicked')}
          />
        </motion.div>
      )}

      {/* Trust Proof Section with stagger effect */}
      {trustProofData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <TrustProof
            socialProof={trustProofData.socialProof}
            testimonial={trustProofData.testimonial}
            trustBadges={trustProofData.trustBadges}
            differentiation={trustProofData.differentiation}
            faqs={trustProofData.faqs}
            onMicroCta={() => console.log('Micro CTA clicked')}
            onFaqToggle={(faqId: string) => console.log('FAQ toggled:', faqId)}
          />
        </motion.div>
      )}

      {/* Conversion Footer */}
      {footerData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ConversionFooter
            finalCta={footerData.finalCta}
            footer={footerData.footer}
            onCtaClick={() => {
              console.log('Final CTA clicked')
              window.location.href = footerData.finalCta.cta.url
            }}
            onLinkClick={(href: string) => {
              console.log('Footer link clicked:', href)
              window.location.href = href
            }}
          />
        </motion.div>
      )}
    </div>
  )
}
