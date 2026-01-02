# MOZE Finance Landing Page - Export Package

Complete design system and component library for building the MOZE Finance landing page.

## Quick Start

### For Coding Agents (Claude, ChatGPT, etc.)

**Option 1: One-Shot Implementation**
Copy the contents of `prompts/one-shot-prompt.md` and paste it into your coding agent. The agent will ask clarifying questions and then implement the entire landing page.

**Option 2: Incremental Implementation**
Use `prompts/section-prompt.md` as a template to implement one section at a time, starting with the foundation.

### For Human Developers

1. **Read the overview**: Start with `product-overview.md` to understand the product
2. **Choose your approach**:
   - **One-shot**: Follow `instructions/one-shot-instructions.md` to build everything at once
   - **Incremental**: Follow instructions in `instructions/incremental/` directory (01-foundation.md → 05-conversion-footer.md)
3. **Copy components**: All component code is in `sections/*/components/` and `shell/components/`
4. **Copy data & types**: Sample data in `data-model/*/data.json`, types in `data-model/*/types.ts`
5. **Test your implementation**: Follow test scenarios in `sections/*/tests.md`

## What's Included

```
product-plan/
├── README.md (this file)
├── product-overview.md           # Product description, problems/solutions, features
│
├── prompts/                       # Ready-to-use prompts for coding agents
│   ├── one-shot-prompt.md         # Full implementation in one session
│   └── section-prompt.md          # Template for section-by-section
│
├── instructions/                  # Step-by-step implementation guides
│   ├── one-shot-instructions.md   # Complete guide (all milestones combined)
│   └── incremental/               # Milestone-by-milestone guides
│       ├── 01-foundation.md       # Next.js, Tailwind CSS v4, fonts, shell
│       ├── 02-hero-introduction.md
│       ├── 03-problem-solution.md
│       ├── 04-trust-proof.md
│       └── 05-conversion-footer.md
│
├── design-system/                 # Design tokens and documentation
│   ├── tokens.css                 # CSS custom properties
│   ├── tailwind-colors.md         # Color palette reference
│   └── fonts.md                   # Typography system
│
├── shell/                         # Application shell (fixed header)
│   └── components/
│       ├── AppShell.tsx
│       ├── MainNav.tsx
│       └── index.ts
│
├── sections/                      # Section components and documentation
│   ├── hero-introduction/
│   │   ├── README.md              # Component overview
│   │   ├── tests.md               # Test scenarios
│   │   └── components/            # React components
│   ├── problem-solution/
│   │   ├── README.md
│   │   ├── tests.md
│   │   └── components/
│   ├── trust-proof/
│   │   ├── README.md
│   │   ├── tests.md
│   │   └── components/
│   └── conversion-footer/
│       ├── README.md
│       ├── tests.md
│       └── components/
│
└── data-model/                    # Sample data and TypeScript types
    ├── hero-introduction/
    │   ├── data.json
    │   └── types.ts
    ├── problem-solution/
    │   ├── data.json
    │   └── types.ts
    ├── trust-proof/
    │   ├── data.json
    │   └── types.ts
    └── conversion-footer/
        ├── data.json
        └── types.ts
```

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (no config file needed)
- **Fonts**: Google Fonts (Space Grotesk, Manrope, IBM Plex Mono)
- **Animations**: GSAP + SplitType (hero kinetic typography)
- **Icons**: Radix UI Icons + Lucide React

## Design System

### Colors
- **Primary**: Sky (Tailwind sky palette) - For CTAs and links
- **Secondary**: Rose (Tailwind rose palette) - For accents and emotional highlights
- **Neutral**: Slate (Tailwind slate palette) - For text, backgrounds, borders

### Typography
- **Heading**: Space Grotesk (700, 800, 900) - For headlines and display text
- **Body**: Manrope (400, 500, 600, 700, 800) - For body copy and UI elements
- **Mono**: IBM Plex Mono (400, 500, 600) - For code and technical data

### Key Design Principles
- **Bold, distinctive aesthetics**: Avoid generic AI patterns
- **Kinetic typography**: GSAP character-level animations
- **Dramatic gradients**: Multiple animated gradient blob layers
- **Grain textures**: SVG noise filters for premium tactile feel
- **Asymmetric layouts**: Off-center elements for visual impact
- **Staggered animations**: Orchestrated entrance sequences
- **Intense hover states**: Glow effects and scale transforms
- **Dutch language**: All content in Dutch

## Implementation Approaches

### Option 1: One-Shot Implementation (Recommended for Agents)

Use this approach when working with AI coding agents like Claude Code or ChatGPT:

1. Copy `prompts/one-shot-prompt.md` into your agent
2. Agent will ask clarifying questions about:
   - Authentication & user system requirements
   - Tech stack preferences (package manager, deployment, analytics)
   - Data source approach (JSON files, CMS, API)
   - Additional features beyond specifications
3. Agent implements entire landing page based on `instructions/one-shot-instructions.md`
4. Test using scenarios from `sections/*/tests.md`

**Estimated time**: 2-4 hours for agent to complete

### Option 2: Incremental Implementation (Recommended for Humans)

Build the landing page step-by-step, one milestone at a time:

1. **Milestone 1: Foundation** (~30 min)
   - Initialize Next.js project
   - Set up Tailwind CSS v4
   - Configure Google Fonts
   - Build application shell (fixed header)

2. **Milestone 2: Hero & Introduction** (~45 min)
   - Install GSAP + SplitType
   - Implement kinetic typography hero
   - Add trust badges and CTAs

3. **Milestone 3: Problem & Solution** (~45 min)
   - Build problem section with 3 pain points
   - Build solution section with 4 benefit cards
   - Wire up CTAs

4. **Milestone 4: Trust & Proof** (~45 min)
   - Add testimonial card with glassmorphism
   - Implement trust badges
   - Build differentiation section
   - Create FAQ accordion

5. **Milestone 5: Conversion & Footer** (~30 min)
   - Build final CTA with dramatic gradient
   - Add dark footer with links and copyright

**Total estimated time**: 3-4 hours for experienced developer

## Testing Your Implementation

Each section includes comprehensive test instructions in `sections/*/tests.md`. Key test areas:

- **Functionality**: All CTAs interactive, FAQ accordion works, etc.
- **Animations**: GSAP kinetic typography, stagger animations, hover effects
- **Responsive**: Test at 375px, 768px, 1024px, 1440px
- **Dark Mode**: Toggle system preference and verify all sections
- **Performance**: 60fps animations, < 3s load time on 3G
- **Accessibility**: Keyboard navigation, screen readers, proper heading hierarchy

## Key Technical Requirements

### Tailwind CSS v4 (CRITICAL)

This project uses Tailwind CSS v4, which has a **completely different** configuration approach:

- ❌ **NO** `tailwind.config.js` file
- ✅ **YES** `@import "tailwindcss"` in CSS file
- ✅ **YES** CSS custom properties for design tokens

See `instructions/incremental/01-foundation.md` for setup details.

### Google Fonts Import Order

Fonts MUST be imported in this specific order to avoid style conflicts:

```tsx
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from 'next/font/google'
```

See `design-system/fonts.md` for complete setup.

### Props-Based Components

All components accept data via props. **NEVER** import `data.json` directly in exportable components:

```tsx
// ✅ Correct - Component accepts props
export function HeroIntroduction({ hero, trustBadges }: HeroIntroductionProps) {
  return <div>...</div>
}

// ❌ Wrong - Component imports data directly
import data from './data.json'
export function HeroIntroduction() {
  return <div>{data.hero.headline}</div>
}
```

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution**: Ensure fonts are imported in correct order in `app/layout.tsx`. See `design-system/fonts.md`.

### Issue: Tailwind classes not working
**Solution**: Confirm you're using Tailwind CSS v4 syntax (no config file). Check `app/globals.css` has `@import "tailwindcss"`.

### Issue: GSAP animation not running
**Solution**: Ensure SplitType is installed and GSAP useGSAP hook is properly imported. Check `sections/hero-introduction/components/HeroIntroduction.tsx`.

### Issue: Dark mode not working
**Solution**: Verify `<html>` tag doesn't have hardcoded `className`. Dark mode uses system preference by default.

### Issue: Components have TypeScript errors
**Solution**: Ensure all types from `data-model/*/types.ts` are copied to your project.

## Next Steps After Implementation

1. **Replace console.log callbacks**: Connect CTAs to actual booking flow
2. **Add analytics**: Track CTA clicks, FAQ interactions, section views
3. **Implement forms**: If booking form is needed, integrate with backend
4. **SEO optimization**: Add meta tags, Open Graph, structured data
5. **Performance tuning**: Optimize images, implement code splitting
6. **Accessibility audit**: Run axe-core, test with screen readers
7. **Deploy**: Push to Vercel, Netlify, or your hosting platform

## Support & Questions

- **Component documentation**: See `sections/*/README.md`
- **Test specifications**: See `sections/*/tests.md`
- **Implementation guides**: See `instructions/incremental/*.md`
- **Design system**: See `design-system/*.md`

## License

This design system and component library is provided as-is for building the MOZE Finance landing page.

---

**Ready to build?** Start with `prompts/one-shot-prompt.md` (for agents) or `instructions/incremental/01-foundation.md` (for humans).
