import express from 'express'
import { getPayload } from 'payload'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { MongoMemoryServer } from 'mongodb-memory-server'

dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const app = express()
const PORT = process.env.PORT || 3001

// Initialize MongoDB Memory Server if needed
let mongod: MongoMemoryServer | null = null

async function getMongoURL(): Promise<string> {
  // If MONGODB_URI is set to a real connection string, use it
  if (process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('localhost:27017')) {
    return process.env.MONGODB_URI
  }

  // Otherwise, use in-memory MongoDB for development
  if (!mongod) {
    console.log('🔄 Starting MongoDB Memory Server...')
    mongod = await MongoMemoryServer.create()
  }
  const uri = mongod.getUri()
  console.log(`✅ MongoDB Memory Server started: ${uri}`)
  return uri
}

// CORS configuration for development
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:3000',
      ],
      credentials: true,
    })
  )
}

app.use(express.json())

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(dirname, 'public/uploads')))

// Initialize Payload
const start = async () => {
  // Get MongoDB URL (will start in-memory server if needed)
  const mongoURL = await getMongoURL()

  // Create config with dynamic MongoDB URL and Express app
  const config = buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
    admin: {
      disable: false,
      user: 'users',
      importMap: {
        baseDir: path.resolve(dirname),
      },
    },
    express: app,
    collections: [
      {
        slug: 'users',
        auth: true,
        admin: {
          useAsTitle: 'email',
        },
        fields: [
          {
            name: 'name',
            type: 'text',
          },
        ],
      },
      {
        slug: 'hero-sections',
        admin: {
          useAsTitle: 'headline',
        },
        fields: [
          {
            name: 'headline',
            type: 'text',
            required: true,
          },
          {
            name: 'subhead',
            type: 'text',
            required: true,
          },
          {
            name: 'primaryCta',
            type: 'group',
            fields: [
              {
                name: 'label',
                type: 'text',
                required: true,
              },
              {
                name: 'url',
                type: 'text',
                required: true,
              },
            ],
          },
          {
            name: 'secondaryCta',
            type: 'group',
            fields: [
              {
                name: 'label',
                type: 'text',
                required: true,
              },
              {
                name: 'url',
                type: 'text',
                required: true,
              },
            ],
          },
          {
            name: 'trustBadges',
            type: 'array',
            fields: [
              {
                name: 'icon',
                type: 'text',
                required: true,
              },
              {
                name: 'text',
                type: 'text',
                required: true,
              },
            ],
          },
        ],
      },
      {
        slug: 'problem-solution',
        admin: {
          useAsTitle: 'problemHeadline',
        },
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
          {
            name: 'problemHeadline',
            type: 'text',
            admin: {
              hidden: true,
            },
            hooks: {
              beforeChange: [
                ({ siblingData }) => {
                  return siblingData?.problem?.headline || 'Problem Solution'
                },
              ],
            },
          },
        ],
      },
      {
        slug: 'trust-proof',
        admin: {
          useAsTitle: 'socialProofHeadline',
        },
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
          {
            name: 'socialProofHeadline',
            type: 'text',
            admin: {
              hidden: true,
            },
            hooks: {
              beforeChange: [
                ({ siblingData }) => {
                  return siblingData?.socialProof?.headline || 'Trust Proof'
                },
              ],
            },
          },
        ],
      },
      {
        slug: 'conversion-footer',
        admin: {
          useAsTitle: 'finalCtaHeadline',
        },
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
          {
            name: 'finalCtaHeadline',
            type: 'text',
            admin: {
              hidden: true,
            },
            hooks: {
              beforeChange: [
                ({ siblingData }) => {
                  return siblingData?.finalCta?.headline || 'Conversion Footer'
                },
              ],
            },
          },
        ],
      },
    ],
    editor: lexicalEditor(),
    db: mongooseAdapter({
      url: mongoURL,
    }),
    typescript: {
      outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  })

  const payload = await getPayload({ config })

  console.log('✅ Payload CMS 3.0 initialized successfully!')

  // Helper function to clean MongoDB IDs from nested arrays and objects
  const cleanMongoIds = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(item => cleanMongoIds(item))
    } else if (obj !== null && typeof obj === 'object') {
      const cleaned: any = {}
      for (const [key, value] of Object.entries(obj)) {
        if (key !== 'id' && key !== '_id') {
          cleaned[key] = cleanMongoIds(value)
        }
      }
      return cleaned
    }
    return obj
  }

  // Custom API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  // Seed endpoint
  app.post('/api/seed', async (req, res) => {
    try {
      console.log('🌱 Seeding database...')

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

      await payload.create({ collection: 'hero-sections', data: seedData.hero })
      await payload.create({ collection: 'problem-solution', data: seedData.problemSolution })
      await payload.create({ collection: 'trust-proof', data: seedData.trustProof })
      await payload.create({ collection: 'conversion-footer', data: seedData.conversionFooter })

      console.log('✅ Database seeded successfully')
      res.json({ success: true, message: 'Database seeded successfully' })
    } catch (error) {
      console.error('Error seeding database:', error)
      res.status(500).json({ error: 'Failed to seed database' })
    }
  })

  // Landing page section routes
  app.get('/api/hero', async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'hero-sections',
        limit: 1,
      })
      if (result.docs.length > 0) {
        res.json(cleanMongoIds(result.docs[0]))
      } else {
        res.status(404).json({ error: 'Hero section not found' })
      }
    } catch (error) {
      console.error('Error fetching hero section:', error)
      res.status(500).json({ error: 'Failed to fetch hero section' })
    }
  })

  app.get('/api/problem-solution', async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'problem-solution',
        limit: 1,
      })
      if (result.docs.length > 0) {
        res.json(cleanMongoIds(result.docs[0]))
      } else {
        res.status(404).json({ error: 'Problem-solution section not found' })
      }
    } catch (error) {
      console.error('Error fetching problem-solution section:', error)
      res.status(500).json({ error: 'Failed to fetch problem-solution section' })
    }
  })

  app.get('/api/trust-proof', async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'trust-proof',
        limit: 1,
      })
      if (result.docs.length > 0) {
        res.json(cleanMongoIds(result.docs[0]))
      } else {
        res.status(404).json({ error: 'Trust-proof section not found' })
      }
    } catch (error) {
      console.error('Error fetching trust-proof section:', error)
      res.status(500).json({ error: 'Failed to fetch trust-proof section' })
    }
  })

  app.get('/api/conversion-footer', async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'conversion-footer',
        limit: 1,
      })
      if (result.docs.length > 0) {
        res.json(cleanMongoIds(result.docs[0]))
      } else {
        res.status(404).json({ error: 'Conversion-footer section not found' })
      }
    } catch (error) {
      console.error('Error fetching conversion-footer section:', error)
      res.status(500).json({ error: 'Failed to fetch conversion-footer section' })
    }
  })

  // UPDATE endpoints
  app.put('/api/hero', express.json(), async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'hero-sections',
        limit: 1,
      })

      if (result.docs.length === 0) {
        return res.status(404).json({ error: 'Hero section not found' })
      }

      const docId = result.docs[0].id
      const updated = await payload.update({
        collection: 'hero-sections',
        id: docId,
        data: req.body,
      })

      res.json(cleanMongoIds(updated))
    } catch (error) {
      console.error('Error updating hero section:', error)
      res.status(500).json({ error: 'Failed to update hero section' })
    }
  })

  app.put('/api/problem-solution', express.json(), async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'problem-solution',
        limit: 1,
      })

      if (result.docs.length === 0) {
        return res.status(404).json({ error: 'Problem-solution section not found' })
      }

      const docId = result.docs[0].id
      const updated = await payload.update({
        collection: 'problem-solution',
        id: docId,
        data: req.body,
      })

      res.json(cleanMongoIds(updated))
    } catch (error) {
      console.error('Error updating problem-solution section:', error)
      res.status(500).json({ error: 'Failed to update problem-solution section' })
    }
  })

  app.put('/api/trust-proof', express.json(), async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'trust-proof',
        limit: 1,
      })

      if (result.docs.length === 0) {
        return res.status(404).json({ error: 'Trust-proof section not found' })
      }

      const docId = result.docs[0].id
      const updated = await payload.update({
        collection: 'trust-proof',
        id: docId,
        data: req.body,
      })

      res.json(cleanMongoIds(updated))
    } catch (error) {
      console.error('Error updating trust-proof section:', error)
      res.status(500).json({ error: 'Failed to update trust-proof section' })
    }
  })

  app.put('/api/conversion-footer', express.json(), async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'conversion-footer',
        limit: 1,
      })

      if (result.docs.length === 0) {
        return res.status(404).json({ error: 'Conversion-footer section not found' })
      }

      const docId = result.docs[0].id
      const updated = await payload.update({
        collection: 'conversion-footer',
        id: docId,
        data: req.body,
      })

      res.json(cleanMongoIds(updated))
    } catch (error) {
      console.error('Error updating conversion-footer section:', error)
      res.status(500).json({ error: 'Failed to update conversion-footer section' })
    }
  })

  // Error handling middleware
  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack)
    res.status(500).json({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    })
  })

  app.listen(PORT, () => {
    console.log(`🚀 Payload CMS Server running on http://localhost:${PORT}`)
    console.log(`📊 Admin Panel: http://localhost:${PORT}/admin`)
    console.log(`🔌 API: http://localhost:${PORT}/api`)
  })
}

start().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
