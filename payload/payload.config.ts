import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',

  admin: {
    disable: false,
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

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
  ],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/moze-finance',
  }),

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
})
