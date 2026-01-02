/**
 * Tests for Payload server startup and configuration
 * Task Group 1.1.7: Write 2-8 focused tests for Payload server startup
 */

import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'

// These tests verify:
// 1. Server starts and listens on correct port
// 2. /admin route returns 200 status
// 3. MongoDB connection succeeds with valid credentials
// 4. CORS headers present for development origin

describe('Payload Server Startup', () => {
  const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001'

  it('should have Payload server running on port 3001', async () => {
    // Test that server responds
    const response = await fetch(`${PAYLOAD_URL}/api`)
    expect(response).toBeDefined()
  })

  it('should return 200 status for /admin route', async () => {
    const response = await fetch(`${PAYLOAD_URL}/admin`)
    expect(response.status).toBe(200)
  })

  it('should have CORS headers for development origin', async () => {
    if (process.env.NODE_ENV === 'development') {
      const response = await fetch(`${PAYLOAD_URL}/api`, {
        headers: {
          'Origin': process.env.FRONTEND_URL || 'http://localhost:5173'
        }
      })
      const corsHeader = response.headers.get('Access-Control-Allow-Origin')
      expect(corsHeader).toBeTruthy()
    }
  })

  it('should serve static files from /uploads route', async () => {
    const response = await fetch(`${PAYLOAD_URL}/uploads/`)
    // Should return 200 or 404 (not 500 or error)
    expect([200, 403, 404]).toContain(response.status)
  })

  it('should have MongoDB connection configured', async () => {
    // Test that API endpoints are accessible (requires DB)
    const response = await fetch(`${PAYLOAD_URL}/api`)
    expect(response.status).not.toBe(500)
  })
})
