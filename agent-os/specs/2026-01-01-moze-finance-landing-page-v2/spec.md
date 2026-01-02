# Specification: MOZE Finance Landing Page v2

## Goal
Create a content-manageable version of the MOZE Finance landing page with Payload CMS backend integration and enhanced animations from Aceternity, MagicUI, and Motion Primitives registries, enabling non-technical users to edit all text and images while maintaining a fixed, professional finance industry design.

## User Stories
- As an accountant, I want to edit all landing page text content and swap images through an intuitive CMS admin panel so that I can keep the website content current without technical help
- As a site visitor, I want to experience smooth, professional animations and responsive design across all devices so that I trust the brand and can easily consume information

## Specific Requirements

**Payload CMS Backend Architecture**
- Separate Node.js/Express service running on port 3001 (development)
- REST API endpoints for content retrieval accessible from React frontend
- Single user authentication with username/password for accountant access
- Admin panel accessible at /admin route in production, localhost:3001 in development
- Four separate collections: HeroSection, ProblemSolutionSection, TrustProofSection, ConversionFooterSection
- Each collection configured with fields matching the content structure from v1 sections
- Seed data migration from existing v1 content into Payload collections on initial setup
- Image upload handling with automatic optimization and multiple responsive sizes

**Hero Section Content Management**
- HeroSection collection with fields: headline (text), subhead (richText), primaryCta (object with label and url), secondaryCta (object with label and url), heroImage (upload)
- Trust badges as repeatable field with label and icon selection
- CMS allows editing all text, swapping hero image, and modifying CTA labels/links
- Frontend fetches data from Payload API and renders with enhanced Aceternity animations
- Hardcoded staggered entrance animations for headline, subhead, and CTAs using optimal timing defaults

**Problem/Solution Section Content Management**
- ProblemSolutionSection collection with nested structure: problem (object with headline, painPoints array, cta), solution (object with intro, benefits array, cta)
- Pain points as repeatable fields with text and icon selection (layers, clock, trending-down)
- Benefits as repeatable fields with title, description, and icon selection
- All text editable through CMS while section structure remains fixed in code
- Enhanced fade-in and slide-up animations from Motion Primitives for card reveals

**Trust/Proof Section Content Management**
- TrustProofSection collection with fields: socialProofHeadline (text), testimonial (object with quote, author, role, company, avatar upload), trustBadges (repeatable), differentiation (object with headline and items array), faqs (repeatable with question and answer)
- Testimonial card with editable quote, attribution, and avatar image upload
- Trust badges with icon selection (award, shield-check, lock) and labels
- Differentiation items as repeatable text fields
- FAQ accordion items with question/answer pairs
- MagicUI testimonial card component with enhanced quote styling and smooth transitions

**Conversion/Footer Section Content Management**
- ConversionFooterSection collection with finalCta (object with headline, copy, cta label/url, proofPoints array), footer (object with address, links array, tagline)
- Editable gradient CTA section with headline, supporting copy, button label, and proof points
- Footer links as repeatable fields with label and href
- All footer text fields editable (address, tagline, copyright text auto-generated with current year)
- Animate-UI button hover effects with glow and scale transformations

**Image Upload and Optimization System**
- Store uploads in /public/uploads directory with organized subdirectories per collection
- Automatic image optimization on upload using Sharp or similar library
- Generate multiple responsive sizes: thumbnail (300px), small (600px), medium (1200px), large (1920px)
- Return image URLs with size variants in API responses for responsive srcset usage
- Support common formats: JPEG, PNG, WebP with automatic WebP conversion for modern browsers
- Maximum file size validation (5MB) with user-friendly error messages

**Animation Integration Strategy**
- Import enhanced components from Aceternity (animated-testimonials, spotlight, text-generate-effect), MagicUI (infinite-moving-cards), Motion Primitives (card-hover-effect, flip-words), and SmoothUI registries
- Hardcode animation parameters with professional defaults suitable for finance industry (smooth, subtle, trustworthy)
- Respect prefers-reduced-motion media query to skip animations for accessibility
- Target 60fps performance with GPU-accelerated transforms and minimal repaints
- Use framer-motion for orchestrated entrance animations with stagger children patterns

**Frontend API Integration Patterns**
- Create dedicated API client service in src-v2/services/api.ts using fetch with proper error handling
- Implement type-safe response interfaces matching Payload collection schemas
- Add loading states, error boundaries, and retry logic for failed requests
- Cache API responses in React state with optional React Query integration for future enhancement
- Environment variable for API base URL (localhost:3001 dev, same domain production)
- Handle CORS configuration in Payload for development cross-origin requests

**Development Directory Structure**
- All v2 code lives in src-v2/ directory to preserve v1 implementation in src/
- Mirror v1 section structure: src-v2/sections/hero-introduction/, problem-solution/, trust-proof/, conversion-footer/
- Shared components in src-v2/components/ (AnimatedCard, ImageWithFallback, etc.)
- Services in src-v2/services/ (api.ts for Payload client, imageOptimization.ts utilities)
- Types in src-v2/types/ (payload.d.ts for collection schemas, sections.d.ts for component props)
- Main landing page component in src-v2/pages/LandingPageV2.tsx that composes all sections

**Payload Backend Directory Structure**
- payload/ directory at project root with separate package.json
- payload/collections/ for HeroSection.ts, ProblemSolutionSection.ts, TrustProofSection.ts, ConversionFooterSection.ts collection configs
- payload/seed/ for initial data migration scripts from v1 content
- payload/server.ts as Express entry point
- payload.config.ts for Payload initialization with MongoDB connection and collection registration

**Production Deployment Configuration**
- Single domain hosting with reverse proxy routing /admin to Payload backend
- Serve frontend static build from root with client-side routing for React Router
- Environment-based API URL configuration (VITE_API_URL for frontend, process.env for backend)
- Image uploads served from /uploads path mapped to /public/uploads directory
- Database connection to MongoDB Atlas or similar managed service
- Environment variables for Payload secret key, database connection string, and admin credentials

**Responsive Design Requirements**
- Mobile-first approach with Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero section full viewport height on desktop, auto height on mobile with readable text scaling
- Problem/solution grid layouts: 1 column mobile, 2-3 columns tablet, 3 columns desktop
- Trust/proof testimonial card padding and text size adjustments for small screens
- Conversion CTA section maintains readability and button sizes across all viewports
- Touch-friendly interactive elements (minimum 44px tap targets) for mobile users

**Accessibility Compliance**
- WCAG 2.1 AA standards with semantic HTML5 elements (header, main, section, footer, article)
- Proper heading hierarchy (h1 for main headline, h2 for section headlines, h3 for subsections)
- Alt text fields in Payload for all uploaded images with required validation
- Keyboard navigation support for all interactive elements (buttons, links, accordions, CTAs)
- Sufficient color contrast ratios (4.5:1 for body text, 3:1 for large text) maintained in both light and dark modes
- Screen reader announcements for loading states, error messages, and dynamic content updates
- Focus indicators visible on all interactive elements with clear ring styles

**Success Criteria**
- Accountant can log into Payload admin at /admin and successfully edit any text field or upload new images
- All four landing page sections render content from Payload API with proper loading and error states
- Page animations run smoothly at 60fps on modern browsers with no jank or layout shifts
- Images automatically optimize and serve appropriate sizes for different viewport widths
- Full responsive design works flawlessly from 320px mobile to 1920px+ desktop screens
- WCAG 2.1 AA accessibility audit passes with no critical violations
- Production deployment serves frontend and backend on same domain with /admin route functional
- Initial v1 content successfully migrated to Payload collections and displays identically to v1 design

## Existing Code to Leverage

**Hero Section Component (src/sections/hero-introduction/components/HeroIntroduction.tsx)**
- Props-based architecture accepting hero, trustBadges, and callback props provides template for v2 structure
- Staggered entrance animation pattern with useEffect and sequential timeouts demonstrates animation orchestration approach
- Gradient blob backgrounds, grain texture overlay, and floating geometric shapes establish visual language to maintain
- Responsive typography scaling and layout patterns for headline/subhead/CTA arrangement
- prefers-reduced-motion accessibility check pattern to replicate in enhanced animations

**Problem/Solution Component (src/sections/problem-solution/components/ProblemSolution.tsx)**
- Two-section structure (problem with pain points, solution with benefits) maps directly to Payload collection schema design
- Icon mapping pattern (painIconMap) for dynamic icon rendering based on string identifiers in CMS
- Grid layout with staggered fadeInUp animations for cards provides baseline for enhanced Motion Primitives integration
- Gradient background positioning and blur effects establish consistent visual treatment across sections

**Trust/Proof Component (src/sections/trust-proof/components/TrustProof.tsx)**
- Testimonial card structure with quote styling, attribution, and avatar placement serves as content template
- Trust badge pill components with icon and label pattern reusable in v2 with enhanced animations
- FAQ accordion integration (separate FaqAccordion component) demonstrates content organization for CMS repeatable fields
- Differentiation items grid with hover effects provides interaction pattern to enhance with card-hover-effect from Motion Primitives

**Conversion/Footer Component (src/sections/conversion-footer/components/ConversionFooter.tsx)**
- Dramatic gradient CTA section with white button on colored background establishes brand pattern
- Proof points display as horizontal pill list with separators provides content structure for CMS array fields
- Footer three-column grid (address, links, tagline) maps to Payload collection structure
- Glow effect pattern on primary CTA button demonstrates hover enhancement technique to amplify with Animate-UI

**Existing Animation Patterns**
- Grain texture SVG filter for subtle visual texture overlay reusable across all v2 sections
- Gradient blob positioning with animate-pulse creates atmospheric backgrounds without distraction
- Custom float keyframe animation for geometric shapes adds dynamism while maintaining professionalism
- Transition timing functions (cubic-bezier easing) and durations optimized for smooth, trustworthy feel appropriate for finance industry

## Out of Scope
- A/B testing functionality or analytics integration beyond basic page view tracking
- Form submission database or CRM integration (contact forms handled externally or via email)
- Multi-language support or internationalization features
- Blog section, content marketing features, or dynamic page creation
- User-controlled section reordering or adding/removing sections through CMS
- Animation parameter controls exposed in CMS admin (animations remain hardcoded with optimal defaults)
- Multi-user roles, permissions, or approval workflows (single accountant user only)
- Cloud image storage integration (Cloudinary, S3) beyond local /public/uploads directory
- Advanced SEO metadata management beyond basic title/description fields
- Content version control, revision history, or rollback capabilities in CMS
