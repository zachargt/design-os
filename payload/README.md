# Payload CMS Backend for MOZE Finance Landing Page v2

This is a Payload CMS 2.x backend server for the MOZE Finance landing page content management system.

## Features

- Standalone Express server running on port 3001
- MongoDB database (with in-memory option for development)
- CORS configured for React frontend (localhost:5173)
- Image uploads with Sharp optimization
- User authentication for admin panel

## Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (optional - can use in-memory MongoDB via mongodb-memory-server)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and configure your settings:

- `MONGODB_URI` - Set to `memory` for in-memory DB, or provide a MongoDB connection string
- `PAYLOAD_SECRET` - Change to a secure random string in production
- `NODE_ENV` - `development` or `production`
- `FRONTEND_URL` - URL of the React frontend (default: http://localhost:5173)
- `PORT` - Server port (default: 3001)

### 3. Start the development server

```bash
npm run dev
```

The server will start on http://localhost:3001

### 4. Access the admin panel

Navigate to http://localhost:3001/admin

On first run, you'll need to create an admin user account.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run serve` - Run production build
- `npm test` - Run tests
- `npm run seed` - Seed database with initial data (to be implemented)

## Testing

Run the test suite:

```bash
npm test
```

**Note:** Tests require the server to be running. Start the server in one terminal (`npm run dev`), then run tests in another terminal.

## Project Structure

```
payload/
├── collections/        # Payload collection schemas
│   └── Users.ts       # User authentication collection
├── seed/              # Data seeding scripts (to be implemented)
├── tests/             # Test files
│   └── server.test.ts # Server startup tests
├── public/
│   └── uploads/       # Uploaded files directory
├── payload.config.ts  # Payload configuration
├── server.ts          # Express server entry point
├── db.ts              # MongoDB connection helper
├── package.json       # Dependencies and scripts
└── .env.example       # Environment variables template
```

## API Endpoints

- `/admin` - Payload admin panel
- `/api` - REST API for collections
- `/uploads` - Static file serving for uploads

## MongoDB Configuration

### Development (In-Memory)

Set `MONGODB_URI=memory` in your `.env` file to use mongodb-memory-server. This starts an in-memory MongoDB instance that doesn't require MongoDB to be installed locally.

### Production

Use a MongoDB Atlas connection string or your own MongoDB server:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moze-finance
```

## CORS

CORS is automatically configured based on the `NODE_ENV` environment variable:

- **Development**: Allows requests from `FRONTEND_URL` (default: http://localhost:5173)
- **Production**: CORS disabled (same-origin only)

## Next Steps

After completing Task Group 1.1, the next steps are:

1. **Task Group 2.1-2.4**: Create collection schemas for the four landing page sections
2. **Task Group 3.1**: Migrate v1 content to Payload collections
3. **Task Group 4.1**: Build frontend API integration layer

## Troubleshooting

### Port 3001 already in use

Change the `PORT` in your `.env` file to a different port.

### MongoDB connection errors

If using a local MongoDB, ensure MongoDB is running. Otherwise, set `MONGODB_URI=memory` to use in-memory MongoDB.

### TypeScript errors

Run `npx tsc --noEmit` to check for TypeScript errors without building.
