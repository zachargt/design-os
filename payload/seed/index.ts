import { getPayload } from 'payload'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { MongoMemoryServer } from 'mongodb-memory-server'

dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Mock data from api-server.ts
const seedData = {
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
        { icon: 'layers', text: 'Too many apps, zero clarity' },
        { icon: 'clock', text: 'Hours wasted on manual tracking' },
        { icon: 'trending-down', text: 'Money slipping through the cracks' },
      ],
      cta: { label: 'See the Problem', url: '#problem' },
    },
    solution: {
      intro: 'One App. Complete Control.',
      cta: { label: 'Start Free Trial', url: '#signup' },
    },
    benefits: [
      { icon: 'zap', headline: 'Intelligent Automation', description: 'Automatic categorization and insights powered by AI' },
      { icon: 'trending-up', headline: 'Real-time Analytics', description: 'See where your money goes in beautiful, actionable dashboards' },
      { icon: 'target', headline: 'Smart Goals', description: 'Set and achieve financial goals that actually work' },
      { icon: 'shield-check', headline: 'Bank-level Security', description: 'Your data is encrypted and protected at every step' },
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
      { icon: 'shield-check', label: 'SOC 2 Certified' },
      { icon: 'lock', label: '256-bit Encryption' },
      { icon: 'award', label: 'GDPR Compliant' },
    ],
    differentiation: {
      headline: 'Why Choose MOZE?',
      items: [
        { text: 'Smart AI learns your habits and automates the boring stuff' },
        { text: 'Finance tools that you actually want to open every day' },
        { text: 'Your data stays yours. Always encrypted, never sold.' },
      ],
    },
    faqs: [
      { question: 'How secure is my data?', answer: 'Bank-level 256-bit encryption with zero-knowledge architecture' },
      { question: 'Can I connect multiple bank accounts?', answer: 'Yes! Connect unlimited accounts from 10,000+ institutions' },
      { question: 'Is there a free trial?', answer: 'Absolutely. 14 days free, no credit card required' },
    ],
  },

  conversionFooter: {
    finalCta: {
      headline: 'Start Managing Money Better Today',
      copy: 'Join thousands who have taken control of their financial future',
      cta: { label: 'Get Started Free', url: '#signup' },
      proofPoints: [
        { text: 'No credit card required' },
        { text: '14-day free trial' },
        { text: 'Cancel anytime' },
      ],
    },
    footer: {
      tagline: 'Built for people who want to do more with their money',
      address: 'Made with ❤️ in San Francisco',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' },
      ],
    },
  },
}

// Initialize MongoDB Memory Server if needed
let mongod: MongoMemoryServer | null = null

async function getMongoURL(): Promise<string> {
  if (process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('localhost:27017')) {
    return process.env.MONGODB_URI
  }

  if (!mongod) {
    console.log('🔄 Starting MongoDB Memory Server...')
    mongod = await MongoMemoryServer.create()
  }
  const uri = mongod.getUri()
  console.log(`✅ MongoDB Memory Server started: ${uri}`)
  return uri
}

async function seed() {
  try {
    console.log('🌱 Starting seed process...')

    const mongoURL = await getMongoURL()

    const config = buildConfig({
      serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
      admin: {
        disable: true, // Disable admin for seed script
      },
      collections: [
        {
          slug: 'users',
          auth: true,
          fields: [{ name: 'name', type: 'text' }],
        },
        {
          slug: 'hero-sections',
          fields: [
            { name: 'headline', type: 'text', required: true },
            { name: 'subhead', type: 'text', required: true },
            {
              name: 'primaryCta',
              type: 'group',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
            {
              name: 'secondaryCta',
              type: 'group',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
            {
              name: 'trustBadges',
              type: 'array',
              fields: [
                { name: 'icon', type: 'text', required: true },
                { name: 'text', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          slug: 'problem-solution',
          fields: [
            {
              name: 'problem',
              type: 'group',
              fields: [
                { name: 'headline', type: 'text', required: true },
                {
                  name: 'painPoints',
                  type: 'array',
                  fields: [
                    { name: 'icon', type: 'text', required: true },
                    { name: 'text', type: 'text', required: true },
                  ],
                },
                {
                  name: 'cta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: true },
                  ],
                },
              ],
            },
            {
              name: 'solution',
              type: 'group',
              fields: [
                { name: 'intro', type: 'text', required: true },
                {
                  name: 'cta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: true },
                  ],
                },
              ],
            },
            {
              name: 'benefits',
              type: 'array',
              fields: [
                { name: 'icon', type: 'text', required: true },
                { name: 'headline', type: 'text', required: true },
                { name: 'description', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          slug: 'trust-proof',
          fields: [
            {
              name: 'socialProof',
              type: 'group',
              fields: [
                { name: 'headline', type: 'text', required: true },
                {
                  name: 'microCta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: true },
                  ],
                },
              ],
            },
            {
              name: 'testimonial',
              type: 'group',
              fields: [
                { name: 'quote', type: 'textarea', required: true },
                { name: 'author', type: 'text', required: true },
                { name: 'role', type: 'text', required: true },
                { name: 'company', type: 'text', required: true },
              ],
            },
            {
              name: 'trustBadges',
              type: 'array',
              fields: [
                { name: 'icon', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
            {
              name: 'differentiation',
              type: 'group',
              fields: [
                { name: 'headline', type: 'text', required: true },
                {
                  name: 'items',
                  type: 'array',
                  fields: [{ name: 'text', type: 'text', required: true }],
                },
              ],
            },
            {
              name: 'faqs',
              type: 'array',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          slug: 'conversion-footer',
          fields: [
            {
              name: 'finalCta',
              type: 'group',
              fields: [
                { name: 'headline', type: 'text', required: true },
                { name: 'copy', type: 'text', required: true },
                {
                  name: 'cta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: true },
                  ],
                },
                {
                  name: 'proofPoints',
                  type: 'array',
                  fields: [{ name: 'text', type: 'text', required: true }],
                },
              ],
            },
            {
              name: 'footer',
              type: 'group',
              fields: [
                { name: 'tagline', type: 'text', required: true },
                { name: 'address', type: 'text', required: true },
                {
                  name: 'links',
                  type: 'array',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'href', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
      ],
      editor: lexicalEditor(),
      db: mongooseAdapter({ url: mongoURL }),
      secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
    })

    const payload = await getPayload({ config })

    console.log('✅ Payload initialized')

    // Seed hero section
    console.log('📝 Seeding hero section...')
    await payload.create({
      collection: 'hero-sections',
      data: seedData.hero,
    })
    console.log('✅ Hero section seeded')

    // Seed problem-solution section
    console.log('📝 Seeding problem-solution section...')
    await payload.create({
      collection: 'problem-solution',
      data: seedData.problemSolution,
    })
    console.log('✅ Problem-solution section seeded')

    // Seed trust-proof section
    console.log('📝 Seeding trust-proof section...')
    await payload.create({
      collection: 'trust-proof',
      data: seedData.trustProof,
    })
    console.log('✅ Trust-proof section seeded')

    // Seed conversion-footer section
    console.log('📝 Seeding conversion-footer section...')
    await payload.create({
      collection: 'conversion-footer',
      data: seedData.conversionFooter,
    })
    console.log('✅ Conversion-footer section seeded')

    console.log('🎉 Seed completed successfully!')

    // Cleanup MongoDB Memory Server
    if (mongod) {
      await mongod.stop()
    }

    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    if (mongod) {
      await mongod.stop()
    }
    process.exit(1)
  }
}

seed()
