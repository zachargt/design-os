import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3001

// CORS for development
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true,
}))

app.use(express.json())

// Mock data for landing page sections
const mockData = {
  hero: {
    headline: 'Master Your Money',
    subhead: 'Transform your financial future with intelligent money management',
    primaryCta: { label: 'Start Free Trial', url: '#signup' },
    secondaryCta: { label: 'See How It Works', url: '#demo' },
    trustBadges: [
      { icon: 'shield', text: 'Bank-level Security' },
      { icon: 'users', text: '100,000+ Users' },
      { icon: 'star', text: '4.9/5 Rating' },
    ],
  },

  problemSolution: {
    problem: {
      headline: 'Money Management is Broken',
      painPoints: [
        { id: '1', icon: 'layers', text: 'Too many apps, zero clarity' },
        { id: '2', icon: 'clock', text: 'Hours wasted on manual tracking' },
        { id: '3', icon: 'trending-down', text: 'Money slipping through the cracks' },
      ],
      cta: { label: 'See the Problem', url: '#problem' },
    },
    solution: {
      intro: 'One App. Complete Control.',
      cta: { label: 'Start Free Trial', url: '#signup' },
    },
    benefits: [
      { id: '1', icon: 'zap', headline: 'Intelligent Automation', description: 'Automatic categorization and insights powered by AI' },
      { id: '2', icon: 'trending-up', headline: 'Real-time Analytics', description: 'See where your money goes in beautiful, actionable dashboards' },
      { id: '3', icon: 'target', headline: 'Smart Goals', description: 'Set and achieve financial goals that actually work' },
      { id: '4', icon: 'shield-check', headline: 'Bank-level Security', description: 'Your data is encrypted and protected at every step' },
    ],
  },

  trustProof: {
    socialProof: {
      headline: 'Trusted by thousands to manage their money better',
      microCta: { label: 'Read More Reviews', url: '#reviews' },
    },
    testimonial: {
      quote: 'MOZE completely transformed how I think about money. I finally feel in control of my finances.',
      author: 'Sarah Chen',
      role: 'Product Designer',
      company: 'Tech Startup',
    },
    trustBadges: [
      { id: '1', icon: 'shield-check', label: 'SOC 2 Certified' },
      { id: '2', icon: 'lock', label: '256-bit Encryption' },
      { id: '3', icon: 'award', label: 'GDPR Compliant' },
    ],
    differentiation: {
      headline: 'Why Choose MOZE?',
      items: [
        { id: '1', text: 'Smart AI learns your habits and automates the boring stuff' },
        { id: '2', text: 'Finance tools that you actually want to open every day' },
        { id: '3', text: 'Your data stays yours. Always encrypted, never sold.' },
      ],
    },
    faqs: [
      { id: '1', question: 'How secure is my data?', answer: 'Bank-level 256-bit encryption with zero-knowledge architecture' },
      { id: '2', question: 'Can I connect multiple bank accounts?', answer: 'Yes! Connect unlimited accounts from 10,000+ institutions' },
      { id: '3', question: 'Is there a free trial?', answer: 'Absolutely. 14 days free, no credit card required' },
    ],
  },

  conversionFooter: {
    finalCta: {
      headline: 'Start Managing Money Better Today',
      copy: 'Join thousands who have taken control of their financial future',
      cta: { label: 'Get Started Free', url: '#signup' },
      proofPoints: [
        'No credit card required',
        '14-day free trial',
        'Cancel anytime',
      ],
    },
    footer: {
      tagline: 'Built for people who want to do more with their money',
      address: 'Made with ❤️ in San Francisco',
      links: [
        { id: '1', label: 'Privacy', href: '/privacy' },
        { id: '2', label: 'Terms', href: '/terms' },
        { id: '3', label: 'Security', href: '/security' },
      ],
    },
  },
}

// API endpoints
app.get('/api/hero', (req, res) => {
  res.json(mockData.hero)
})

app.get('/api/problem-solution', (req, res) => {
  res.json(mockData.problemSolution)
})

app.get('/api/trust-proof', (req, res) => {
  res.json(mockData.trustProof)
})

app.get('/api/conversion-footer', (req, res) => {
  res.json(mockData.conversionFooter)
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`)
  console.log(`📊 Endpoints:`)
  console.log(`   GET /api/hero`)
  console.log(`   GET /api/problem-solution`)
  console.log(`   GET /api/trust-proof`)
  console.log(`   GET /api/conversion-footer`)
})
