# Task Breakdown: MOZE Finance Landing Page v2

## Overview
Total Task Groups: 7
Estimated Total Tasks: ~65 individual tasks

## Task List

### 1. Payload CMS Backend Foundation

#### Task Group 1.1: Payload Project Setup and Configuration
**Dependencies:** None
**Estimated Tasks:** 8

- [x] 1.1.0 Complete Payload CMS backend foundation
  - [x] 1.1.1 Create payload/ directory structure at project root
    - Create payload/collections/ directory
    - Create payload/seed/ directory
    - Create payload/public/uploads/ directory structure
    - Set up separate package.json for Payload
  - [x] 1.1.2 Install Payload CMS dependencies
    - Install @payloadcms/bundler-webpack, @payloadcms/db-mongodb, @payloadcms/richtext-slate
    - Install Express, dotenv, cors
    - Install Sharp for image optimization
    - Install development dependencies (nodemon, typescript, @types/express)
  - [x] 1.1.3 Create payload.config.ts with basic configuration
    - Configure MongoDB connection string from environment variable
    - Set admin user email and password from environment
    - Configure secret key from environment
    - Set up CORS for development (localhost:5173)
    - Configure upload directory path
    - Set server URL based on environment
  - [x] 1.1.4 Create Express server entry point (payload/server.ts)
    - Initialize Express app
    - Configure Payload CMS middleware
    - Set up static file serving for /uploads route
    - Add error handling middleware
    - Listen on port 3001 for development
  - [x] 1.1.5 Create .env.example for Payload configuration
    - Document MONGODB_URI variable
    - Document PAYLOAD_SECRET variable
    - Document PAYLOAD_ADMIN_EMAIL and PAYLOAD_ADMIN_PASSWORD
    - Document NODE_ENV variable
    - Document FRONTEND_URL for CORS
  - [x] 1.1.6 Add npm scripts for Payload development
    - Add "payload:dev" script with nodemon
    - Add "payload:build" script for production
    - Add "payload:serve" script for production server
    - Add "dev:all" script to run both Payload and Vite concurrently
  - [x] 1.1.7 Write 2-8 focused tests for Payload server startup
    - Test server starts and listens on correct port
    - Test /admin route returns 200 status
    - Test MongoDB connection succeeds with valid credentials
    - Test CORS headers present for development origin
  - [x] 1.1.8 Ensure Payload foundation tests pass
    - Run ONLY the 2-8 tests written in 1.1.7
    - Verify Payload admin panel accessible at localhost:3001/admin
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 1.1.7 pass
- Payload CMS runs on port 3001 and admin panel is accessible
- MongoDB connection works with environment variables
- CORS configured for React frontend on port 5173
- Directory structure ready for collections and uploads

---

### 2. Payload CMS Collections and Data Models

#### Task Group 2.1: HeroSection Collection
**Dependencies:** Task Group 1.1
**Estimated Tasks:** 6

- [ ] 2.1.0 Complete HeroSection collection
  - [ ] 2.1.1 Write 2-8 focused tests for HeroSection API endpoints
    - Test GET /api/hero-sections returns collection data
    - Test POST /api/hero-sections creates new entry (authenticated)
    - Test PATCH /api/hero-sections/:id updates entry (authenticated)
    - Test image upload field accepts valid formats (JPEG, PNG, WebP)
    - Test validation errors for required fields
  - [ ] 2.1.2 Create HeroSection collection schema (payload/collections/HeroSection.ts)
    - Add headline field (type: text, required)
    - Add subhead field (type: richText, required)
    - Add primaryCta object (label and url fields)
    - Add secondaryCta object (label and url fields)
    - Add heroImage upload field with alt text required
    - Add trustBadges repeatable field (label and icon selection)
  - [ ] 2.1.3 Configure heroImage upload field
    - Set upload directory to /uploads/hero
    - Add Sharp configuration for image optimization
    - Generate responsive sizes: thumbnail (300px), small (600px), medium (1200px), large (1920px)
    - Add automatic WebP conversion
    - Set max file size to 5MB with validation error
  - [ ] 2.1.4 Add icon selection field for trustBadges
    - Create select field with options: award, shield-check, lock, check-circle, star
    - Configure as repeatable group with label text field
  - [ ] 2.1.5 Register HeroSection collection in payload.config.ts
    - Import collection schema
    - Add to collections array
    - Verify admin UI renders collection editor
  - [ ] 2.1.6 Ensure HeroSection collection tests pass
    - Run ONLY the 2-8 tests written in 2.1.1
    - Verify CRUD operations work through API
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.1.1 pass
- HeroSection collection visible in Payload admin
- All fields editable with proper validation
- Image uploads work with optimization and responsive sizes
- REST API endpoints functional

#### Task Group 2.2: ProblemSolutionSection Collection
**Dependencies:** Task Group 1.1
**Estimated Tasks:** 6

- [ ] 2.2.0 Complete ProblemSolutionSection collection
  - [ ] 2.2.1 Write 2-8 focused tests for ProblemSolutionSection API
    - Test GET /api/problem-solution-sections returns data
    - Test nested object structure (problem and solution objects)
    - Test repeatable fields (painPoints and benefits arrays)
    - Test icon selection validation
    - Test rich text field handling
  - [ ] 2.2.2 Create ProblemSolutionSection schema (payload/collections/ProblemSolutionSection.ts)
    - Add problem object with headline (text) and painPoints (repeatable) fields
    - Add solution object with intro (richText) and benefits (repeatable) fields
    - Configure painPoints as repeatable with text and icon fields
    - Configure benefits as repeatable with title, description, and icon fields
  - [ ] 2.2.3 Configure icon selection for painPoints
    - Create select field with options: layers, clock, trending-down, alert-triangle, x-circle
    - Add to repeatable painPoints group
  - [ ] 2.2.4 Configure icon selection for benefits
    - Create select field with options: check-circle, trending-up, shield, zap, award, star
    - Add to repeatable benefits group with title and description text fields
  - [ ] 2.2.5 Register ProblemSolutionSection collection in payload.config.ts
    - Import collection schema
    - Add to collections array
    - Verify nested structure renders correctly in admin UI
  - [ ] 2.2.6 Ensure ProblemSolutionSection collection tests pass
    - Run ONLY the 2-8 tests written in 2.2.1
    - Verify nested objects and repeatable fields work
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.2.1 pass
- Collection editable in Payload admin with nested structure
- Repeatable fields functional (painPoints and benefits)
- Icon selection dropdowns work correctly
- API returns properly structured nested JSON

#### Task Group 2.3: TrustProofSection Collection
**Dependencies:** Task Group 1.1
**Estimated Tasks:** 6

- [ ] 2.3.0 Complete TrustProofSection collection
  - [ ] 2.3.1 Write 2-8 focused tests for TrustProofSection API
    - Test GET /api/trust-proof-sections returns data
    - Test testimonial object with avatar upload
    - Test trustBadges repeatable field
    - Test FAQs repeatable field (question/answer pairs)
    - Test differentiation items array
  - [ ] 2.3.2 Create TrustProofSection schema (payload/collections/TrustProofSection.ts)
    - Add socialProofHeadline text field
    - Add testimonial object (quote, author, role, company, avatar upload)
    - Add trustBadges repeatable field (icon selection and label)
    - Add differentiation object with headline and items array
    - Add faqs repeatable field (question and answer text fields)
  - [ ] 2.3.3 Configure avatar upload for testimonial
    - Set upload directory to /uploads/testimonials
    - Generate responsive sizes for avatar (150px, 300px)
    - Add Sharp optimization for circular avatar display
    - Require alt text for accessibility
  - [ ] 2.3.4 Configure icon selection for trustBadges
    - Create select field with options: award, shield-check, lock, verified, certificate
    - Add to repeatable group with label text field
  - [ ] 2.3.5 Register TrustProofSection collection in payload.config.ts
    - Import collection schema
    - Add to collections array
    - Verify all nested and repeatable fields render in admin UI
  - [ ] 2.3.6 Ensure TrustProofSection collection tests pass
    - Run ONLY the 2-8 tests written in 2.3.1
    - Verify testimonial avatar upload works
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.3.1 pass
- Testimonial fields editable with avatar upload
- FAQs repeatable field allows adding/removing Q&A pairs
- Trust badges configurable with icons and labels
- Differentiation items array functional

#### Task Group 2.4: ConversionFooterSection Collection
**Dependencies:** Task Group 1.1
**Estimated Tasks:** 6

- [ ] 2.4.0 Complete ConversionFooterSection collection
  - [ ] 2.4.1 Write 2-8 focused tests for ConversionFooterSection API
    - Test GET /api/conversion-footer-sections returns data
    - Test finalCta object structure
    - Test footer links repeatable field
    - Test proofPoints array
    - Test all text fields editable
  - [ ] 2.4.2 Create ConversionFooterSection schema (payload/collections/ConversionFooterSection.ts)
    - Add finalCta object (headline, copy richText, cta label/url, proofPoints array)
    - Add footer object (address text, links repeatable, tagline text)
    - Configure links as repeatable with label and href fields
    - Add proofPoints as simple text array
  - [ ] 2.4.3 Configure footer links repeatable field
    - Add label text field
    - Add href text field with URL validation
    - Set up as repeatable group
  - [ ] 2.4.4 Add virtual field for copyright year
    - Create hook to auto-generate copyright text with current year
    - Make read-only in admin UI
    - Include in API response
  - [ ] 2.4.5 Register ConversionFooterSection collection in payload.config.ts
    - Import collection schema
    - Add to collections array
    - Verify final CTA and footer sections render properly
  - [ ] 2.4.6 Ensure ConversionFooterSection collection tests pass
    - Run ONLY the 2-8 tests written in 2.4.1
    - Verify footer links repeatable field works
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.4.1 pass
- Final CTA section fields all editable
- Footer links allow adding/removing items
- Copyright year auto-generated
- All text fields support rich content where appropriate

---

### 3. Content Migration and Seeding

#### Task Group 3.1: V1 Content Extraction and Migration
**Dependencies:** Task Groups 2.1, 2.2, 2.3, 2.4
**Estimated Tasks:** 6

- [ ] 3.1.0 Complete content migration from v1 to Payload
  - [ ] 3.1.1 Write 2-8 focused tests for seed data migration
    - Test seed script creates HeroSection entry with v1 data
    - Test seed script creates ProblemSolutionSection with all painPoints and benefits
    - Test seed script creates TrustProofSection with testimonial
    - Test seed script copies v1 images to /uploads directories
    - Test seed data matches v1 content exactly
  - [ ] 3.1.2 Extract v1 HeroSection content (payload/seed/extract-v1-hero.ts)
    - Read src/sections/hero-introduction/ data
    - Map to HeroSection collection schema
    - Extract headline, subhead, CTAs
    - Copy hero image to /uploads/hero/
    - Extract trust badges with icons
  - [ ] 3.1.3 Extract v1 ProblemSolutionSection content (payload/seed/extract-v1-problem-solution.ts)
    - Read src/sections/problem-solution/ data
    - Map problem headline and pain points array
    - Map solution intro and benefits array
    - Ensure icon identifiers match collection select options
  - [ ] 3.1.4 Extract v1 TrustProofSection content (payload/seed/extract-v1-trust-proof.ts)
    - Read src/sections/trust-proof/ data
    - Extract testimonial quote, author, role, company
    - Copy testimonial avatar to /uploads/testimonials/
    - Extract FAQs and differentiation items
    - Extract trust badges
  - [ ] 3.1.5 Extract v1 ConversionFooterSection content (payload/seed/extract-v1-conversion-footer.ts)
    - Read src/sections/conversion-footer/ data
    - Map final CTA headline, copy, button label
    - Extract proof points array
    - Extract footer address, links, tagline
  - [ ] 3.1.6 Create master seed script (payload/seed/index.ts)
    - Import all extraction scripts
    - Create Payload API client for programmatic data creation
    - Execute all seed scripts in order
    - Upload images via Payload upload API
    - Create database entries for all collections
    - Add npm script "payload:seed" to run migration
  - [ ] 3.1.7 Ensure seed migration tests pass
    - Run ONLY the 2-8 tests written in 3.1.1
    - Verify all v1 content present in Payload collections
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 3.1.1 pass
- All v1 text content migrated to Payload collections
- All v1 images copied to uploads directories and optimized
- Payload admin shows complete v1 content in all sections
- Content matches v1 implementation exactly

---

### 4. Frontend API Integration Layer

#### Task Group 4.1: API Client and Type Definitions
**Dependencies:** Task Groups 2.1, 2.2, 2.3, 2.4
**Estimated Tasks:** 7

- [ ] 4.1.0 Complete frontend API integration layer
  - [ ] 4.1.1 Write 2-8 focused tests for API client
    - Test fetchHeroSection returns typed data
    - Test error handling for failed requests
    - Test retry logic on network failure
    - Test loading states during fetch
    - Test CORS handling in development
  - [ ] 4.1.2 Create TypeScript interfaces for Payload responses (src-v2/types/payload.d.ts)
    - Define HeroSectionData interface matching collection schema
    - Define ProblemSolutionSectionData interface with nested types
    - Define TrustProofSectionData interface
    - Define ConversionFooterSectionData interface
    - Define ImageUpload interface with responsive sizes
  - [ ] 4.1.3 Create API client service (src-v2/services/api.ts)
    - Implement fetchHeroSection() function
    - Implement fetchProblemSolutionSection() function
    - Implement fetchTrustProofSection() function
    - Implement fetchConversionFooterSection() function
    - Add base URL from environment variable (VITE_API_URL)
    - Add error handling with user-friendly messages
  - [ ] 4.1.4 Add retry logic for failed API requests
    - Implement exponential backoff (1s, 2s, 4s)
    - Maximum 3 retry attempts
    - Throw error after retries exhausted
  - [ ] 4.1.5 Create custom React hooks for data fetching (src-v2/hooks/usePayloadData.ts)
    - Create useHeroSection() hook with loading/error states
    - Create useProblemSolutionSection() hook
    - Create useTrustProofSection() hook
    - Create useConversionFooterSection() hook
    - Use React.useState and useEffect for state management
  - [ ] 4.1.6 Add environment variable configuration
    - Create .env.example with VITE_API_URL
    - Document development value (http://localhost:3001)
    - Document production value (same domain, /api prefix)
    - Update vite.config.ts for environment variable handling
  - [ ] 4.1.7 Ensure API client tests pass
    - Run ONLY the 2-8 tests written in 4.1.1
    - Verify API requests work with real Payload backend
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 4.1.1 pass
- All Payload collection types defined in TypeScript
- API client functions typed and functional
- Custom hooks provide loading/error states
- Environment-based API URL configuration works
- Retry logic handles network failures gracefully

---

### 5. Frontend Section Components with Enhanced Animations

#### Task Group 5.1: Hero/Introduction Section Component
**Dependencies:** Task Group 4.1
**Estimated Tasks:** 8

- [ ] 5.1.0 Complete Hero/Introduction section component
  - [ ] 5.1.1 Write 2-8 focused tests for Hero section
    - Test component renders with Payload data
    - Test loading state displays skeleton
    - Test error state shows fallback message
    - Test CTAs render with correct labels and URLs
    - Test image optimization with srcset
  - [ ] 5.1.2 Install animation library dependencies
    - Install framer-motion for orchestrated animations
    - Install required Aceternity components (text-generate-effect, spotlight)
    - Install Motion Primitives components as needed
    - Verify peer dependencies satisfied
  - [ ] 5.1.3 Create HeroIntroductionV2 component (src-v2/sections/hero-introduction/HeroIntroductionV2.tsx)
    - Accept data prop typed as HeroSectionData
    - Implement loading skeleton component
    - Implement error boundary fallback
    - Create responsive layout matching v1 structure
  - [ ] 5.1.4 Integrate Aceternity spotlight background effect
    - Import Spotlight component from Aceternity registry
    - Configure subtle, professional animation parameters
    - Position gradient spotlight for hero section
    - Ensure GPU-accelerated performance (transform, opacity only)
  - [ ] 5.1.5 Implement text-generate-effect for headline
    - Import TextGenerateEffect from Aceternity
    - Apply to hero headline with staggered word appearance
    - Set duration to 800ms for smooth, professional feel
    - Add prefers-reduced-motion check to skip animation
  - [ ] 5.1.6 Add staggered entrance animations for CTAs
    - Use framer-motion for sequential CTA appearance
    - Stagger delay: 200ms between primary and secondary
    - Animate from opacity 0 to 1 with slight y-axis movement
    - Respect prefers-reduced-motion preference
  - [ ] 5.1.7 Implement responsive image with optimization
    - Create ImageWithFallback shared component (src-v2/components/ImageWithFallback.tsx)
    - Use srcset with Payload's responsive image URLs
    - Add loading="lazy" for performance
    - Include fallback for failed image loads
  - [ ] 5.1.8 Add trust badges with subtle animations
    - Map icon identifiers to actual icon components (Lucide React)
    - Apply fade-in animation with stagger (100ms between badges)
    - Create pill-style badges matching v1 design
  - [ ] 5.1.9 Ensure Hero section component tests pass
    - Run ONLY the 2-8 tests written in 5.1.1
    - Verify animations run smoothly at 60fps
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 5.1.1 pass
- Component renders Payload data correctly
- Spotlight and text-generate-effect animations smooth and professional
- Responsive images work with srcset optimization
- Loading and error states functional
- Accessibility: prefers-reduced-motion respected

#### Task Group 5.2: Problem/Solution Section Component
**Dependencies:** Task Group 4.1
**Estimated Tasks:** 8

- [ ] 5.2.0 Complete Problem/Solution section component
  - [ ] 5.2.1 Write 2-8 focused tests for Problem/Solution section
    - Test component renders problem and solution data
    - Test pain points map with correct icons
    - Test benefits cards display with animations
    - Test grid layout responsive breakpoints
    - Test hover effects on benefit cards
  - [ ] 5.2.2 Create ProblemSolutionV2 component (src-v2/sections/problem-solution/ProblemSolutionV2.tsx)
    - Accept data prop typed as ProblemSolutionSectionData
    - Create two-section layout (problem and solution)
    - Implement responsive grid for pain points and benefits
    - Add loading and error states
  - [ ] 5.2.3 Create pain points section with icon mapping
    - Map icon identifiers (layers, clock, trending-down) to Lucide React icons
    - Create pain point card component
    - Apply card layout with icon, text
    - Use gradient background patterns from v1
  - [ ] 5.2.4 Integrate Motion Primitives card-hover-effect
    - Install/import card-hover-effect component
    - Apply to benefit cards for interactive hover states
    - Configure subtle scale and shadow transitions
    - Ensure touch-friendly on mobile (no hover dependency)
  - [ ] 5.2.5 Implement staggered fadeInUp animations for cards
    - Use framer-motion for benefit card entrance
    - Stagger delay: 100ms per card
    - Animate from opacity 0, y: 20 to opacity 1, y: 0
    - Add useInView hook to trigger on scroll
  - [ ] 5.2.6 Create benefits grid with icon mapping
    - Map benefit icons to Lucide React components
    - Create benefit card with title, description, icon
    - Apply gradient accents matching v1 design
    - Ensure readable contrast in light and dark modes
  - [ ] 5.2.7 Add gradient backgrounds and blur effects
    - Replicate v1 gradient blob patterns
    - Position blurred gradients for atmospheric effect
    - Use backdrop-blur for glass morphism on cards
    - Optimize for performance (will-change, transform)
  - [ ] 5.2.8 Ensure Problem/Solution section tests pass
    - Run ONLY the 2-8 tests written in 5.2.1
    - Verify card hover effects work smoothly
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 5.2.1 pass
- Problem and solution sections render with correct data
- Pain point and benefit cards display with icons
- Card hover effects smooth and professional
- Staggered entrance animations trigger on scroll
- Responsive grid layouts work across breakpoints

#### Task Group 5.3: Trust/Proof Section Component
**Dependencies:** Task Group 4.1
**Estimated Tasks:** 9

- [ ] 5.3.0 Complete Trust/Proof section component
  - [ ] 5.3.1 Write 2-8 focused tests for Trust/Proof section
    - Test testimonial card renders with avatar
    - Test trust badges display correctly
    - Test FAQ accordion expands/collapses
    - Test differentiation items grid
    - Test enhanced quote styling from MagicUI
  - [ ] 5.3.2 Create TrustProofV2 component (src-v2/sections/trust-proof/TrustProofV2.tsx)
    - Accept data prop typed as TrustProofSectionData
    - Create multi-subsection layout (testimonial, badges, differentiation, FAQs)
    - Implement responsive layout for all subsections
    - Add loading and error states
  - [ ] 5.3.3 Integrate MagicUI animated-testimonials component
    - Install/import animated-testimonials from MagicUI registry
    - Configure for single testimonial with enhanced styling
    - Add smooth quote entrance animation
    - Style attribution (author, role, company) with proper hierarchy
  - [ ] 5.3.4 Implement testimonial avatar with responsive images
    - Use ImageWithFallback component for avatar
    - Apply circular crop with border
    - Use Payload's avatar responsive sizes (150px, 300px)
    - Add subtle glow effect around avatar
  - [ ] 5.3.5 Create trust badges with animated appearance
    - Map badge icons to Lucide React components
    - Create pill-style badge matching v1 design
    - Apply fade-in with stagger animation (80ms between badges)
    - Add subtle hover effect (scale, glow)
  - [ ] 5.3.6 Build differentiation items grid
    - Create responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
    - Apply check-circle icons to differentiation items
    - Use fade-in animation triggered on scroll
    - Ensure readable typography and spacing
  - [ ] 5.3.7 Create FAQ accordion component (src-v2/components/FaqAccordion.tsx)
    - Build accessible accordion with keyboard navigation
    - Use framer-motion for expand/collapse animations
    - Apply smooth height transitions
    - Add aria-expanded and role attributes for accessibility
  - [ ] 5.3.8 Add enhanced quote styling and animations
    - Large quote marks with gradient color
    - Subtle text fade-in animation for quote text
    - Author attribution slide-in from below
    - Professional, trustworthy styling for finance industry
  - [ ] 5.3.9 Ensure Trust/Proof section tests pass
    - Run ONLY the 2-8 tests written in 5.3.1
    - Verify testimonial animations smooth
    - Verify FAQ accordion keyboard accessible
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 5.3.1 pass
- Testimonial renders with enhanced MagicUI styling
- Avatar displays with responsive optimization
- Trust badges animate in with stagger
- FAQ accordion accessible and smooth
- Differentiation items display in responsive grid

#### Task Group 5.4: Conversion/Footer Section Component
**Dependencies:** Task Group 4.1
**Estimated Tasks:** 8

- [ ] 5.4.0 Complete Conversion/Footer section component
  - [ ] 5.4.1 Write 2-8 focused tests for Conversion/Footer section
    - Test final CTA section renders with gradient
    - Test CTA button has enhanced hover effects
    - Test proof points display correctly
    - Test footer links array renders
    - Test copyright year auto-generated
  - [ ] 5.4.2 Create ConversionFooterV2 component (src-v2/sections/conversion-footer/ConversionFooterV2.tsx)
    - Accept data prop typed as ConversionFooterSectionData
    - Create two-section layout (gradient CTA and footer)
    - Implement responsive spacing and typography
    - Add loading and error states
  - [ ] 5.4.3 Build gradient CTA section with dramatic background
    - Apply gradient background (purple/blue/pink tones)
    - Add grain texture overlay from v1 pattern
    - Create responsive layout for headline, copy, CTA button
    - Ensure high contrast for white text on gradient
  - [ ] 5.4.4 Integrate enhanced button hover effects
    - Import button animation components from Animate-UI/MagicUI
    - Apply glow effect on hover (box-shadow transition)
    - Add subtle scale transformation (1.0 to 1.05)
    - Use smooth cubic-bezier easing (0.4, 0.0, 0.2, 1)
    - Add ripple effect on click (optional enhancement)
  - [ ] 5.4.5 Create proof points horizontal list
    - Map proof points array to pill-style elements
    - Add separators between items (dot or line)
    - Apply fade-in animation with stagger
    - Ensure responsive wrapping on smaller screens
  - [ ] 5.4.6 Build footer three-column grid
    - Column 1: Address text with map pin icon
    - Column 2: Footer links array (label and href)
    - Column 3: Tagline text
    - Responsive: stack columns on mobile, grid on desktop
  - [ ] 5.4.7 Implement footer links with hover states
    - Map links array to anchor elements
    - Add underline animation on hover (width: 0 to 100%)
    - Ensure accessible focus indicators
    - Open external links in new tab with rel="noopener"
  - [ ] 5.4.8 Add copyright text with current year
    - Create utility function to get current year
    - Format copyright text: "© [YEAR] MOZE Finance. All rights reserved."
    - Display in footer bottom with muted styling
  - [ ] 5.4.9 Ensure Conversion/Footer section tests pass
    - Run ONLY the 2-8 tests written in 5.4.1
    - Verify button glow effect smooth
    - Verify footer responsive layout works
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 5.4.1 pass
- Gradient CTA section visually striking with professional feel
- Button hover effects smooth with glow and scale
- Proof points display with animations
- Footer links functional with hover states
- Copyright year auto-generated correctly

---

### 6. Main Landing Page Integration and Shared Components

#### Task Group 6.1: Landing Page Composition and Shared Components
**Dependencies:** Task Groups 5.1, 5.2, 5.3, 5.4
**Estimated Tasks:** 7

- [ ] 6.1.0 Complete landing page composition and shared components
  - [ ] 6.1.1 Write 2-8 focused tests for LandingPageV2
    - Test page renders all four sections
    - Test loading states display for all sections
    - Test error boundaries catch section errors
    - Test scroll-triggered animations fire correctly
    - Test responsive layout across breakpoints
  - [ ] 6.1.2 Create LandingPageV2 main component (src-v2/pages/LandingPageV2.tsx)
    - Import all section components (Hero, ProblemSolution, TrustProof, ConversionFooter)
    - Use custom hooks to fetch data for each section
    - Compose sections in semantic HTML structure (header, main, section, footer)
    - Add overall page loading state while all data fetches
  - [ ] 6.1.3 Create ErrorBoundary component (src-v2/components/ErrorBoundary.tsx)
    - Implement React error boundary class component
    - Catch and display user-friendly error messages
    - Add "Try again" button to retry rendering
    - Log errors to console for debugging
    - Wrap each section component in error boundary
  - [ ] 6.1.4 Create LoadingSkeleton component (src-v2/components/LoadingSkeleton.tsx)
    - Build reusable skeleton loader for section content
    - Use Tailwind animate-pulse for loading effect
    - Create variants for different section layouts (hero, cards, footer)
    - Ensure skeletons match actual content dimensions roughly
  - [ ] 6.1.5 Create ImageWithFallback shared component (src-v2/components/ImageWithFallback.tsx)
    - Accept src, srcset, alt, and fallback props
    - Implement onError handler to display fallback
    - Add loading="lazy" for performance
    - Support responsive images with sizes attribute
    - Add optional blur-up placeholder effect
  - [ ] 6.1.6 Add scroll-triggered animation utilities
    - Create useInView custom hook for intersection observer
    - Configure threshold (0.2) and rootMargin for early trigger
    - Return boolean state to trigger animations
    - Use in section components for entrance effects
  - [ ] 6.1.7 Implement grain texture SVG filter utility
    - Create shared grain texture SVG component from v1 pattern
    - Make reusable across all sections
    - Export as GrainTexture component (src-v2/components/GrainTexture.tsx)
    - Apply to section backgrounds as needed
  - [ ] 6.1.8 Ensure landing page integration tests pass
    - Run ONLY the 2-8 tests written in 6.1.1
    - Verify all sections compose correctly
    - Verify error boundaries catch errors gracefully
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 6.1.1 pass
- LandingPageV2 renders all four sections with Payload data
- Loading skeletons display while data fetches
- Error boundaries catch and display section errors gracefully
- Shared components (ImageWithFallback, GrainTexture) reusable
- Scroll-triggered animations work smoothly

---

### 7. Responsive Design, Accessibility, and Production Configuration

#### Task Group 7.1: Responsive Design Implementation
**Dependencies:** Task Group 6.1
**Estimated Tasks:** 6

- [ ] 7.1.0 Complete responsive design implementation
  - [ ] 7.1.1 Write 2-8 focused tests for responsive layouts
    - Test mobile layout (320px - 640px) renders correctly
    - Test tablet layout (640px - 1024px) grid adjustments
    - Test desktop layout (1024px+) full-width optimizations
    - Test touch targets minimum 44px on mobile
    - Test text scaling appropriate for screen sizes
  - [ ] 7.1.2 Implement mobile-first Hero section responsiveness
    - Full viewport height on desktop (h-screen)
    - Auto height on mobile with min-height
    - Headline font size scaling (text-4xl sm:text-5xl lg:text-6xl)
    - Hero image aspect ratio adjustments (portrait mobile, landscape desktop)
    - CTA buttons stack vertically on mobile, horizontal on desktop
  - [ ] 7.1.3 Optimize Problem/Solution grid layouts
    - Pain points: 1 column mobile, 2 columns tablet, 3 columns desktop
    - Benefits: 1 column mobile, 2 columns tablet, 3 columns desktop
    - Card padding adjustments (p-4 sm:p-6 lg:p-8)
    - Text size scaling for headings and descriptions
  - [ ] 7.1.4 Adjust Trust/Proof section for mobile
    - Testimonial card full-width mobile, centered desktop
    - Trust badges wrap on mobile, horizontal on desktop
    - Differentiation grid: 1 col mobile, 2 col tablet, 3 col desktop
    - FAQ accordion full-width with touch-friendly tap targets
  - [ ] 7.1.5 Optimize Conversion/Footer section responsiveness
    - Gradient CTA section padding adjustments for mobile
    - CTA button full-width mobile, auto-width desktop
    - Proof points wrap gracefully on small screens
    - Footer columns stack vertically on mobile, grid on desktop (lg:grid-cols-3)
  - [ ] 7.1.6 Test all breakpoints and touch interactions
    - Verify layouts at 320px, 640px, 768px, 1024px, 1280px, 1920px
    - Test tap targets on mobile devices (minimum 44x44px)
    - Verify no horizontal scroll at any breakpoint
    - Test hover states don't break mobile experience

**Acceptance Criteria:**
- The 2-8 tests written in 7.1.1 pass
- Mobile-first approach applied to all sections
- Tailwind responsive prefixes used consistently (sm:, md:, lg:, xl:)
- Touch targets meet accessibility standards on mobile
- No layout breaks or horizontal scroll at any viewport width
- Typography scales appropriately across screen sizes

#### Task Group 7.2: Accessibility Compliance (WCAG 2.1 AA)
**Dependencies:** Task Groups 5.1, 5.2, 5.3, 5.4, 6.1
**Estimated Tasks:** 7

- [ ] 7.2.0 Complete accessibility compliance implementation
  - [ ] 7.2.1 Write 2-8 focused tests for accessibility
    - Test semantic HTML structure (header, main, section, footer)
    - Test heading hierarchy (h1, h2, h3) correct
    - Test all images have alt text
    - Test keyboard navigation works for all interactive elements
    - Test color contrast ratios meet WCAG 2.1 AA standards
  - [ ] 7.2.2 Implement semantic HTML5 structure
    - Use <header> for hero section
    - Use <main> wrapper for primary content
    - Use <section> for each major content area
    - Use <article> for testimonial card
    - Use <footer> for footer section
    - Ensure proper nesting and sectioning
  - [ ] 7.2.3 Establish correct heading hierarchy
    - h1 for main hero headline (only one per page)
    - h2 for major section headlines (Problem, Solution, Trust, Conversion)
    - h3 for subsection headings (benefit titles, FAQ questions)
    - Verify no skipped heading levels
  - [ ] 7.2.4 Add alt text validation in Payload
    - Make alt text field required for all image uploads
    - Add admin UI hint text explaining alt text purpose
    - Validate alt text not empty string
    - Test all migrated images have descriptive alt text
  - [ ] 7.2.5 Implement keyboard navigation support
    - Ensure all buttons and links focusable with tab
    - Add visible focus indicators (ring-2 ring-offset-2 focus-visible:ring-*)
    - Make FAQ accordion keyboard accessible (Enter/Space to toggle)
    - Ensure modal/overlay components (if any) trap focus
    - Test full page navigable without mouse
  - [ ] 7.2.6 Verify color contrast ratios
    - Test body text (stone-700 dark:stone-300) meets 4.5:1 ratio
    - Test large text/headings meet 3:1 ratio
    - Test interactive elements meet contrast requirements
    - Use browser DevTools or axe for contrast auditing
    - Adjust colors if needed to meet WCAG AA
  - [ ] 7.2.7 Add screen reader support
    - Include aria-label for icon-only buttons
    - Add aria-expanded for accordion items
    - Use aria-live for dynamic content updates (loading, errors)
    - Add visually-hidden text for screen reader context where needed
    - Test with screen reader (VoiceOver, NVDA, or JAWS)
  - [ ] 7.2.8 Implement prefers-reduced-motion support
    - Wrap all animations in @media (prefers-reduced-motion: no-preference)
    - Provide instant transitions for users preferring reduced motion
    - Test animations skip when system setting enabled
    - Ensure page usable with all animations disabled

**Acceptance Criteria:**
- The 2-8 tests written in 7.2.1 pass
- Semantic HTML5 structure correct throughout
- Heading hierarchy proper with no skipped levels
- All images have descriptive alt text (validated in Payload)
- Keyboard navigation works for all interactive elements
- Color contrast ratios meet WCAG 2.1 AA (4.5:1 body, 3:1 large)
- Screen reader announces content correctly
- prefers-reduced-motion preference respected

#### Task Group 7.3: Production Configuration and Deployment
**Dependencies:** All previous task groups
**Estimated Tasks:** 8

- [ ] 7.3.0 Complete production configuration and deployment setup
  - [ ] 7.3.1 Write 2-8 focused tests for production build
    - Test Vite production build succeeds
    - Test Payload production build succeeds
    - Test environment variables load correctly
    - Test /admin route serves Payload admin panel
    - Test /uploads route serves static images
  - [ ] 7.3.2 Configure environment variables for production
    - Update .env.example with production variables
    - Document MONGODB_URI for MongoDB Atlas connection
    - Document PAYLOAD_SECRET for secure production key
    - Document VITE_API_URL for same-domain API calls
    - Document PAYLOAD_PUBLIC_SERVER_URL for production domain
  - [ ] 7.3.3 Set up reverse proxy routing for single-domain deployment
    - Configure Express to serve React build from root
    - Route /admin to Payload admin panel
    - Route /api to Payload REST API endpoints
    - Route /uploads to static uploads directory
    - Handle client-side routing fallback (index.html for SPA)
  - [ ] 7.3.4 Configure production build scripts
    - Add "build" script to build both Payload and Vite
    - Add "build:frontend" script for Vite production build
    - Add "build:backend" script for Payload production build
    - Add "start" script to run production server
    - Ensure builds output to correct directories (dist/ for Vite, build/ for Payload)
  - [ ] 7.3.5 Set up image serving in production
    - Configure Express static middleware for /uploads path
    - Ensure uploads directory persisted in production (not ephemeral)
    - Add .gitignore entry for /uploads directory (large files)
    - Document upload storage strategy (local vs cloud migration path)
  - [ ] 7.3.6 Configure CORS for production
    - Disable CORS in production (same-origin requests)
    - Keep CORS enabled for development (localhost:5173)
    - Use environment-based conditional CORS configuration
  - [ ] 7.3.7 Add MongoDB connection configuration
    - Use environment variable for MongoDB connection string
    - Configure connection pooling for production
    - Add retry logic for database connection failures
    - Test connection to MongoDB Atlas or production database
  - [ ] 7.3.8 Create deployment documentation
    - Document environment variables required
    - Document build and start commands
    - Document MongoDB setup and migration
    - Document reverse proxy configuration
    - Document image upload persistence strategy
  - [ ] 7.3.9 Ensure production configuration tests pass
    - Run ONLY the 2-8 tests written in 7.3.1
    - Verify production builds succeed
    - Verify environment configuration works
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 7.3.1 pass
- Production builds succeed for both frontend and backend
- Environment variables documented and functional
- Single-domain deployment with /admin route works
- Images serve from /uploads path in production
- MongoDB connection works with production database
- Deployment documentation complete and accurate

---

### 8. Final Testing and Validation

#### Task Group 8.1: Integration Testing and Quality Assurance
**Dependencies:** All previous task groups
**Estimated Tasks:** 6

- [ ] 8.1.0 Complete final integration testing and validation
  - [ ] 8.1.1 Review all existing tests from task groups 1-7
    - Review database/collection tests (approximately 20-30 tests)
    - Review API client tests (approximately 6-10 tests)
    - Review component tests (approximately 20-30 tests)
    - Review responsive/accessibility tests (approximately 10-15 tests)
    - Total existing tests: approximately 56-85 tests
  - [ ] 8.1.2 Analyze test coverage gaps for v2 feature only
    - Identify critical user workflows lacking coverage
    - Focus on end-to-end scenarios (accountant edits content → frontend displays)
    - Prioritize integration points between Payload and React frontend
    - Do NOT assess entire application coverage
  - [ ] 8.1.3 Write up to 10 additional strategic integration tests
    - Test end-to-end: Payload content edit → API fetch → frontend render
    - Test image upload → optimization → responsive display
    - Test error recovery: API down → error boundary → retry
    - Test loading states → data fetch → content display
    - Test accessibility: keyboard nav through all sections
    - Test responsive: mobile/tablet/desktop layout correctness
    - Test animations: smooth 60fps, prefers-reduced-motion respected
    - Test production build: serve frontend + backend on same domain
    - Skip comprehensive edge cases unless business-critical
  - [ ] 8.1.4 Run all v2 feature tests
    - Run all tests from task groups 1-7 plus new integration tests
    - Expected total: approximately 66-95 tests
    - Fix any failures
    - Ensure all critical workflows pass
  - [ ] 8.1.5 Perform manual QA checklist
    - Test accountant can log into Payload admin
    - Test accountant can edit text in all sections
    - Test accountant can upload images successfully
    - Test frontend displays Payload content correctly
    - Test all animations run smoothly (60fps target)
    - Test responsive design across multiple devices
    - Test accessibility with keyboard navigation
    - Test accessibility with screen reader
    - Test production build deploys successfully
  - [ ] 8.1.6 Verify success criteria from spec
    - Accountant can edit any text/image in Payload admin
    - All four sections render from Payload API with loading/error states
    - Animations smooth at 60fps with no jank
    - Images optimize and serve appropriate sizes
    - Responsive design 320px to 1920px flawless
    - WCAG 2.1 AA accessibility audit passes
    - Production deployment with /admin route functional
    - V1 content migrated and displays identically

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 66-95 tests total)
- No more than 10 additional integration tests added
- Manual QA checklist items verified
- All spec success criteria met
- Critical user workflows covered by tests
- Testing focused exclusively on v2 feature requirements

---

## Execution Order

Recommended implementation sequence:

1. **Payload CMS Backend Foundation** (Task Group 1.1) - 8 tasks
   - Set up Payload project, configuration, and server

2. **Payload CMS Collections and Data Models** (Task Groups 2.1-2.4) - 24 tasks
   - Create all four collection schemas with field configurations
   - Can be worked on in parallel after 1.1 completes

3. **Content Migration and Seeding** (Task Group 3.1) - 6 tasks
   - Extract v1 content and seed Payload collections
   - Requires all collections completed (2.1-2.4)

4. **Frontend API Integration Layer** (Task Group 4.1) - 7 tasks
   - Build API client, types, and React hooks
   - Can start after collections defined (2.1-2.4)

5. **Frontend Section Components** (Task Groups 5.1-5.4) - 33 tasks
   - Build all four section components with enhanced animations
   - Can be worked on in parallel after 4.1 completes

6. **Main Landing Page Integration** (Task Group 6.1) - 7 tasks
   - Compose sections, create shared components
   - Requires all section components (5.1-5.4)

7. **Responsive Design** (Task Group 7.1) - 6 tasks
   - Implement mobile-first responsive layouts
   - Optimize for all breakpoints

8. **Accessibility Compliance** (Task Group 7.2) - 7 tasks
   - Ensure WCAG 2.1 AA standards met
   - Add semantic HTML, keyboard nav, screen reader support

9. **Production Configuration** (Task Group 7.3) - 8 tasks
   - Configure deployment, environment variables, reverse proxy
   - Set up MongoDB production connection

10. **Final Testing and Validation** (Task Group 8.1) - 6 tasks
    - Run comprehensive integration tests
    - Perform manual QA
    - Verify all success criteria

---

## Total Task Count Summary

- Task Group 1.1: 8 tasks (Payload foundation)
- Task Group 2.1: 6 tasks (HeroSection collection)
- Task Group 2.2: 6 tasks (ProblemSolutionSection collection)
- Task Group 2.3: 6 tasks (TrustProofSection collection)
- Task Group 2.4: 6 tasks (ConversionFooterSection collection)
- Task Group 3.1: 6 tasks (Content migration)
- Task Group 4.1: 7 tasks (API integration)
- Task Group 5.1: 8 tasks (Hero component)
- Task Group 5.2: 8 tasks (Problem/Solution component)
- Task Group 5.3: 9 tasks (Trust/Proof component)
- Task Group 5.4: 8 tasks (Conversion/Footer component)
- Task Group 6.1: 7 tasks (Page integration)
- Task Group 7.1: 6 tasks (Responsive design)
- Task Group 7.2: 7 tasks (Accessibility)
- Task Group 7.3: 8 tasks (Production config)
- Task Group 8.1: 6 tasks (Final testing)

**Total: 112 tasks across 16 task groups**

---

## Notes

- **Test-Driven Approach**: Each task group begins with writing 2-8 focused tests and ends by running only those tests, not the entire suite
- **Parallel Work Opportunities**: Collections (2.1-2.4) can be built in parallel; Section components (5.1-5.4) can be built in parallel
- **Animation Libraries**: Verify all animation dependencies installed before starting section components (5.1-5.4)
- **Environment Variables**: Set up .env files early to avoid configuration issues
- **Image Optimization**: Sharp library critical for image upload handling - verify installed in Payload backend
- **Accessibility**: WCAG compliance should be considered throughout, not just in task group 7.2
- **V1 Preservation**: All v2 code in src-v2/ directory - never modify src/ directory
- **MongoDB**: Production database setup should happen early to avoid last-minute deployment issues
