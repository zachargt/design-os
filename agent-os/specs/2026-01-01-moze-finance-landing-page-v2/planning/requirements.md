# Spec Requirements: MOZE Finance Landing Page v2

## Initial Description

Add Payload CMS for content management so the accountant can edit text and images. Enhance the landing page with animated shadcn components from Aceternity, MagicUI, Motion Primitives, Animate-UI, and SmoothUI registries. Create in src-v2/ directory to keep v1 intact.

### Key Points
- **CMS Integration**: Payload CMS for content management
- **Target User**: Accountant (non-technical user who needs to edit text and images)
- **Animation Libraries**: Aceternity, MagicUI, Motion Primitives, Animate-UI, SmoothUI
- **Directory**: src-v2/ (preserves existing v1 implementation)

### Context
This is a v2 iteration of the MOZE Finance landing page. The original implementation exists in the src/ directory and should remain untouched. The new version will be built in src-v2/ with enhanced animations and content management capabilities for non-technical users.

## Requirements Discussion

### First Round Questions

**Q1: Payload CMS Setup - I assume Payload CMS should run as a separate backend service (Node.js/Express) alongside your React frontend. Should it run on a different port during development (e.g., Payload on port 3001, React on 5173)?**

**Answer:** Yes, Payload CMS should run as a separate backend service (Node.js/Express) on port 3001 during development. The React frontend will fetch content via REST API.

**Q2: CMS Content Scope - I'm thinking the accountant should be able to edit all text content (headings, paragraphs, CTAs) and swap images, but the section structure and ordering should remain fixed in code. Is that correct, or should they also be able to reorder sections or add/remove entire sections?**

**Answer:** The accountant should edit all text content and images. The section structure is FIXED - only content is editable, not structure/ordering.

**Q3: Animation Implementation - For the animated components from Aceternity/MagicUI/etc., should the animations be hardcoded into each component with sensible defaults, or should the CMS also allow the accountant to toggle animations on/off or adjust animation parameters?**

**Answer:** Animations should be hardcoded into components with optimal defaults. No user controls needed - keeps the CMS simple.

**Q4: V2 Landing Page Sections - Should v2 maintain the same section structure as v1 (hero-introduction, problem-solution, trust-proof, conversion-footer), or are there new sections to add or existing ones to remove?**

**Answer:** Maintain the same structure from v1:
- Hero/Introduction
- Problem/Solution
- Trust/Proof (testimonials)
- Conversion/Footer

**Q5: Image Management - For image uploads through Payload CMS, should images be stored in a /public/uploads directory with automatic optimization/resizing, or do you have a preferred cloud storage solution (Cloudinary, S3, etc.)?**

**Answer:** Store in /public/uploads with automatic optimization. Generate multiple sizes for different viewports automatically.

**Q6: Development vs Production - In production, should the Payload admin panel be accessible at a specific route (e.g., /admin) on the same domain, or will it be deployed separately?**

**Answer:**
- Dev: Payload on localhost:3001, Vite on localhost:5173
- Prod: Same domain, Payload admin at /admin

**Q7: Authentication - For Payload CMS access, should we set up a simple username/password authentication for a single user (the accountant), or do you need multiple user roles (admin, editor, viewer)?**

**Answer:** Simple username/password for single user (the accountant).

**Q8: Content Structure - Should each landing page section have its own Payload collection (e.g., HeroSection, ProblemSolutionSection, etc.) with specific fields, or should there be a single "LandingPageContent" collection with nested fields for all sections?**

**Answer:** Separate collections for each section (HeroSection, ProblemSolutionSection, TrustProofSection, ConversionFooterSection).

**Q9: Initial Content - Should the v1 content be migrated as the initial seed data for Payload CMS, or will the accountant enter fresh content after setup?**

**Answer:** Migrate v1 content as seed data.

**Q10: Exclusions - What should definitely NOT be included in v2? For example: A/B testing, analytics integration, form submission database, multi-language support, blog section?**

**Answer:** Out of scope: No A/B testing, no complex analytics, no form database, no multi-language, no blog.

### Existing Code to Reference

**Similar Features Identified:**
- Hero Section: `src/sections/hero-introduction/`
- Problem/Solution Section: `src/sections/problem-solution/`
- Trust/Proof Section: `src/sections/trust-proof/`
- Conversion/Footer Section: `src/sections/conversion-footer/`

**Components to potentially reuse:**
- Existing v1 sections serve as the content and structure template
- Animation components will be replaced with enhanced versions from specified registries
- Layout patterns and content hierarchy should be maintained

**Backend logic to reference:**
- No existing backend logic (v1 is static)
- v2 will introduce Payload CMS as new backend

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
No visuals to analyze. Design should follow professional finance industry standards with:
- Professional, trustworthy aesthetic
- Modern, clean design
- Appropriate use of animations (smooth, not distracting)
- High-quality imagery suitable for finance/accounting audience

## Requirements Summary

### Functional Requirements

**CMS Content Management:**
- Accountant can edit all text content (headings, paragraphs, CTAs, body copy)
- Accountant can upload and swap images
- Content editable through Payload CMS admin panel
- Section structure and ordering remain fixed in code

**Landing Page Structure:**
- Hero/Introduction section with editable headline, subheadline, CTA, hero image
- Problem/Solution section with editable problem statements and solution descriptions
- Trust/Proof section with editable testimonials (text, author, role, avatar)
- Conversion/Footer section with editable footer CTA, links, contact information

**Technical Architecture:**
- Payload CMS backend (Node.js/Express) on port 3001 (dev)
- React frontend (Vite) on port 5173 (dev)
- Frontend fetches content via Payload REST API
- Production: Single domain with Payload admin at /admin

**Image Handling:**
- Store in /public/uploads directory
- Automatic image optimization on upload
- Generate multiple sizes for responsive viewports
- No external cloud storage

**Animation Integration:**
- Enhanced shadcn components from Aceternity, MagicUI, Motion Primitives, Animate-UI, SmoothUI
- Animations hardcoded with optimal defaults
- No user controls for animation parameters
- Smooth, professional animations suitable for finance industry

**Authentication:**
- Simple username/password for single user
- Single accountant user role
- No multi-user or role-based access control

**Data Structure:**
- Separate Payload collections per section:
  - HeroSection collection
  - ProblemSolutionSection collection
  - TrustProofSection collection
  - ConversionFooterSection collection
- Each collection has fields specific to that section's content needs

**Initial Data:**
- Migrate existing v1 content as seed data for Payload CMS
- Accountant can modify from there

### Reusability Opportunities

**V1 Section Components:**
- Reference v1 sections for content structure and layout patterns
- Use v1 as template for field definitions in Payload collections
- Maintain similar visual hierarchy and information architecture

**Component Patterns:**
- Adapt v1 section structure to props-based components that receive CMS data
- Maintain responsive design patterns from v1
- Preserve accessibility patterns from v1 (WCAG 2.1 AA compliance)

**Content Migration:**
- Extract v1 text content for seed data
- Extract v1 image references for initial uploads
- Map v1 structure to Payload collection schemas

### Scope Boundaries

**In Scope:**
- Payload CMS backend setup and configuration
- Four landing page sections (hero, problem-solution, trust-proof, conversion-footer)
- CMS collections for each section with appropriate fields
- Text and image content editing
- Image upload and automatic optimization
- V1 content migration as seed data
- Enhanced animations from specified registries
- Single-user authentication
- Development and production deployment configuration
- Responsive design (mobile, tablet, desktop)
- Light and dark mode support
- WCAG 2.1 AA accessibility compliance

**Out of Scope:**
- A/B testing functionality
- Complex analytics integration
- Form submission database (contact forms send to email or external service)
- Multi-language support
- Blog or content marketing features
- Section reordering by user
- Adding/removing sections through CMS
- Animation parameter controls in CMS
- Multi-user roles or permissions
- Cloud image storage (Cloudinary, S3, etc.)
- SEO metadata management beyond basic fields
- Version control or content history in CMS

**Future Enhancements Mentioned:**
None specified.

### Technical Considerations

**Target Audience:**
- Finance and accounting clients
- Professional, sophisticated users
- Value trust, credibility, and clarity

**Brand Requirements:**
- Professional aesthetic
- Trustworthy presentation
- Modern, clean design
- Not overly playful or casual

**Performance Requirements:**
- Fast page load times
- Smooth animations (60fps)
- Optimized images for all viewports
- Minimal bundle size impact from animation libraries

**Accessibility Requirements:**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Semantic HTML

**Technology Stack:**
- Backend: Payload CMS (Node.js/Express)
- Frontend: React (Vite)
- Styling: Tailwind CSS v4
- Animations: Aceternity, MagicUI, Motion Primitives, Animate-UI, SmoothUI
- Component Library: shadcn

**Development Setup:**
- v2 code in src-v2/ directory
- v1 code remains untouched in src/
- Payload backend separate from frontend
- Development ports: 3001 (Payload), 5173 (Vite)

**Production Setup:**
- Single domain deployment
- Payload admin accessible at /admin route
- Image uploads served from same domain
- API endpoints proxied to avoid CORS issues

**Similar Code Patterns to Follow:**
- Reference v1 section components for layout patterns
- Maintain props-based component architecture
- Follow existing responsive design patterns
- Preserve accessibility patterns from v1 implementation
