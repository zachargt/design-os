# MOZE Finance Landing Page - Implementation Prompt

I need you to build a complete Next.js landing page for MOZE Finance based on the design specifications provided.

## Context

You have access to a complete design system with:
- Product overview and specifications
- Complete component implementations with TypeScript
- Sample data in JSON format
- Type definitions
- Test instructions for each section
- Implementation instructions (one-shot and incremental)

All files are in the `product-plan/` directory.

## What I Need

Please implement the entire MOZE Finance landing page following these instructions:

1. **Review the specifications**:
   - Read `product-overview.md` for product context
   - Review `instructions/one-shot-instructions.md` for complete setup guide
   - Check `design-system/` for colors, fonts, and tokens

2. **Ask clarifying questions** about:
   - **Authentication & User System**: Will this landing page connect to an authentication system? Do I need to implement actual booking flow, or are console.log callbacks sufficient for this phase?
   - **Tech Stack Preferences**: The specifications assume Next.js 14+ with App Router and Tailwind CSS v4. Do you have any preferences for:
     - Package manager? (npm, pnpm, yarn, bun)
     - Deployment target? (Vercel, Netlify, custom)
     - Form handling? (if booking form needed)
     - Analytics? (Google Analytics, Plausible, etc.)
   - **Data Source**: Should I use the provided JSON files directly, or would you prefer a different data management approach (CMS, API, etc.)?
   - **Additional Features**: Are there any features beyond the specifications you'd like included? (e.g., actual form submission, email integration, CMS, etc.)

3. **Implementation approach**:
   - Initialize Next.js project with TypeScript and Tailwind CSS v4
   - Set up Google Fonts (Space Grotesk, Manrope, IBM Plex Mono)
   - Copy provided components from `sections/*/components/` to project
   - Copy data files from `data-model/` to project
   - Implement the complete page with all 4 sections plus shell
   - Follow the test instructions in each `sections/*/tests.md`

4. **Deliverables**:
   - Working Next.js application
   - All sections implemented and functional
   - Responsive design (mobile, tablet, desktop)
   - Dark mode support
   - 60fps animations
   - No console errors
   - README with setup and run instructions

## Design Requirements

- **Bold, distinctive aesthetics**: Avoid generic AI patterns
- **Kinetic typography**: GSAP character-level animations in hero
- **Dramatic gradients**: Multiple gradient blob layers with different timings
- **Grain textures**: SVG noise filters for premium feel
- **Asymmetric layouts**: Off-center elements for visual impact
- **Staggered animations**: Orchestrated entrance sequences
- **Intense hover states**: Glow effects and scale transforms
- **Dutch language**: All user-facing content in Dutch

## Technical Constraints

- **Tailwind CSS v4**: No `tailwind.config.js` file (uses new @import syntax)
- **Google Fonts**: Specific order of imports matters
- **Props-based components**: All components accept data via props (never import data.json directly in components)
- **Mobile-first**: Responsive design with Tailwind breakpoints (sm:, md:, lg:, xl:)
- **Dark mode**: Support throughout using dark: variants
- **Performance**: Target 60fps animations, < 3s load time on 3G

## Files Available

All implementation files are provided in `product-plan/`:
- `product-overview.md` - Product description
- `instructions/` - Setup guides (one-shot and incremental)
- `design-system/` - Color palettes, fonts, tokens
- `shell/components/` - Fixed header components
- `sections/*/components/` - Section components (hero, problem-solution, trust-proof, conversion-footer)
- `sections/*/README.md` - Component documentation
- `sections/*/tests.md` - Test specifications
- `data-model/*/data.json` - Sample data
- `data-model/*/types.ts` - TypeScript types

Please start by asking your clarifying questions, then proceed with implementation.
