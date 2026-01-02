import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod: MongoMemoryServer | null = null

export async function getMongoURL(): Promise<string> {
  const configuredURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/moze-finance'

  // Use in-memory MongoDB for development/testing if configured
  if (configuredURL === 'memory') {
    if (!mongod) {
      mongod = await MongoMemoryServer.create()
    }
    return mongod.getUri()
  }

  return configuredURL
}

export async function closeMongoMemoryServer(): Promise<void> {
  if (mongod) {
    await mongod.stop()
    mongod = null
  }
}
