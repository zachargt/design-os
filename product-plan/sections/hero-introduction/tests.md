# Hero & Introduction - Test Instructions

## Test Scenarios

### 1. Kinetic Typography Animation

**User Flow:**
- User loads page
- Headline animates character-by-character from left to right
- Each character has opacity, Y-position, and rotateX transformation

**Expected Behavior:**
- Animation duration: ~800ms total (with 0.02s stagger per character)
- Characters start at opacity 0, Y=50px, rotateX=-90deg
- Characters end at opacity 1, Y=0, rotateX=0deg
- Animation uses back.out(1.7) easing for bounce effect

**Test Cases:**
- [ ] Headline text splits into individual characters
- [ ] Characters animate in sequence left to right
- [ ] Animation completes smoothly without jank
- [ ] No console errors during animation
- [ ] Text is readable after animation completes

### 2. Staggered Content Reveal

**User Flow:**
- After headline animation completes
- Subhead fades in from bottom
- CTAs fade in after subhead
- Trust badges fade in after CTAs

**Expected Behavior:**
- Headline: 0ms delay
- Subhead: 600ms delay, fadeInUp animation
- CTAs: 1000ms delay, fadeInUp animation
- Trust badges: 1400ms+ delay (staggered by 100ms each)

**Test Cases:**
- [ ] Subhead appears after 600ms
- [ ] CTAs appear after 1000ms
- [ ] Trust badges appear after 1400ms with stagger
- [ ] All elements have smooth fadeInUp animation
- [ ] Final state shows all content visible

### 3. Primary CTA Interaction

**User Flow:**
- User hovers over primary CTA button ("Plan een gesprek met MoMo")
- Button scales up and shows glow effect
- User clicks button

**Expected Behavior:**
- Hover: scale(1.1), gradient glow appears, shadow intensifies
- Active: scale(0.95)
- Click: onPrimaryCta callback fires

**Test Cases:**
- [ ] Hover effect triggers smoothly
- [ ] Glow effect (blur-2xl gradient) appears on hover
- [ ] Arrow icon translates right and scales on hover
- [ ] Click fires callback
- [ ] Console logs "Primary CTA clicked"

### 4. Secondary CTA Interaction

**User Flow:**
- User hovers over secondary CTA button ("Bekijk de flow")
- Border and text color change to sky-500/sky-600
- User clicks button

**Expected Behavior:**
- Hover: border becomes sky-500, text becomes sky-600, scale(1.05)
- Active: scale(0.95)
- Click: onSecondaryCta callback fires

**Test Cases:**
- [ ] Hover changes border and text color
- [ ] Button scales on hover
- [ ] Click fires callback
- [ ] Console logs "Secondary CTA clicked"

### 5. Trust Badges Display

**User Flow:**
- User views trust badges below CTAs
- Each badge is a pill with icon and label

**Expected Behavior:**
- 3 badges render: "Bekroond accountant", "Operationeel binnen 14 dagen", "AVG-compliant"
- Each has appropriate icon (award, clock, shield-check)
- Badges have glassmorphism effect (backdrop-blur)
- Hover effect scales icon

**Test Cases:**
- [ ] All 3 badges render
- [ ] Icons display correctly
- [ ] Labels are readable
- [ ] Hover scales icon by 1.25x
- [ ] Backdrop blur effect visible

### 6. Gradient Blobs Animation

**User Flow:**
- User observes background gradient blobs
- Blobs pulse with different timings

**Expected Behavior:**
- 3 gradient blobs: sky-500/20 (top-left, 8s), rose-500/20 (bottom-right, 10s + 2s delay), sky-300/10 (center, 12s + 4s delay)
- Blobs use animate-pulse with blur-3xl
- Blobs animate continuously

**Test Cases:**
- [ ] 3 gradient blobs visible
- [ ] Blobs have different animation timings
- [ ] Animations run smoothly
- [ ] Blur effect is pronounced

### 7. Grain Texture Overlay

**User Flow:**
- User views hero section
- Subtle grain texture visible over entire section

**Expected Behavior:**
- SVG filter with fractalNoise
- Opacity 0.015 (light mode) or 0.025 (dark mode)
- Mix-blend-overlay mode
- Covers entire section

**Test Cases:**
- [ ] Grain texture visible
- [ ] Not too overpowering
- [ ] Adds premium tactile feel
- [ ] Works in both light and dark mode

### 8. Floating Geometric Shapes

**User Flow:**
- User observes floating shapes in background
- Shapes float up and down with rotation

**Expected Behavior:**
- Square shape (border-4 rose-500/30, rotate-45) at top-right quadrant
- Circle shape (bg-sky-500/20) at bottom-left quadrant
- Both use animate-float with different delays and durations

**Test Cases:**
- [ ] Square shape visible and animated
- [ ] Circle shape visible and animated
- [ ] Shapes float smoothly
- [ ] Rotation on square visible during animation

### 9. Scroll Indicator

**User Flow:**
- User sees bouncing chevron at bottom of hero
- Indicator suggests scrolling down

**Expected Behavior:**
- ChevronDownIcon from Radix UI
- Positioned absolute at bottom center
- Opacity 60% (text-slate-400 dark:text-slate-600)
- Uses animate-bounce

**Test Cases:**
- [ ] Chevron displays at bottom center
- [ ] Bounce animation runs continuously
- [ ] Opacity is subtle (not distracting)
- [ ] Visible in both light and dark mode

### 10. Mobile Responsive

**User Flow:**
- User views hero on mobile device (375px width)
- Layout adapts for smaller screen

**Expected Behavior:**
- Headline font size reduces (text-6xl sm:text-7xl lg:text-8xl xl:text-9xl)
- CTAs stack vertically (flex-col sm:flex-row)
- Asymmetric offsets removed on mobile
- All text remains readable

**Test Cases:**
- [ ] Headline readable at 375px width
- [ ] CTAs stack vertically on mobile
- [ ] Trust badges wrap properly
- [ ] No horizontal overflow
- [ ] All interactive elements remain tappable (min 44px touch target)

### 11. Dark Mode

**User Flow:**
- User toggles system dark mode preference
- Hero section adapts colors

**Expected Behavior:**
- Background: dark:bg-slate-950
- Headline: dark:text-white
- Subhead: dark:text-slate-300
- Primary CTA: dark:bg-sky-600 dark:hover:bg-sky-700
- Secondary CTA: dark:border-slate-600 dark:text-slate-300 dark:hover:border-sky-500
- Trust badges: dark:bg-slate-900/60 dark:border-slate-700
- Grain opacity increases to 0.025

**Test Cases:**
- [ ] All text readable in dark mode
- [ ] Gradient blobs visible against dark background
- [ ] CTAs maintain sufficient contrast
- [ ] Trust badges have backdrop blur effect
- [ ] Scroll indicator visible (dark:text-slate-600)

### 12. Performance

**User Flow:**
- User loads page and interacts with hero
- Animations run smoothly

**Expected Behavior:**
- GSAP animation runs at 60fps
- No layout shifts during animation
- Smooth hover transitions
- Page load time < 2s on 3G

**Test Cases:**
- [ ] Chrome DevTools Performance shows 60fps during animations
- [ ] No long tasks (> 50ms) during initial render
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No cumulative layout shift

### 13. Accessibility

**User Flow:**
- Screen reader user navigates hero
- Keyboard user interacts with CTAs

**Expected Behavior:**
- Headline announced as h1
- Subhead announced as paragraph
- CTAs focusable and announced as buttons
- Trust badges announced with icon labels
- Reduced motion respected (prefers-reduced-motion: reduce)

**Test Cases:**
- [ ] Headline has proper heading hierarchy
- [ ] CTAs focusable via keyboard (Tab)
- [ ] CTAs activatable via keyboard (Enter/Space)
- [ ] Focus indicators visible
- [ ] Reduced motion disables GSAP animation (show instant fallback)

### 14. Edge Cases

**Empty States:**
- Missing trust badges → Component renders without trust badge section
- Missing CTA labels → Fallback to default labels
- Missing headline → Component should not render (required prop)

**Long Content:**
- Very long headline (> 100 chars) → Wraps to multiple lines, maintains readability
- Very long trust badge label (> 30 chars) → Badge wraps or truncates with ellipsis

**Test Cases:**
- [ ] Component handles missing optional props gracefully
- [ ] Long headlines wrap without breaking layout
- [ ] Long badge labels don't break pill shape

## Test Coverage Goals

- Unit tests: 80%+ coverage
- Integration tests: All user flows covered
- Visual regression tests: Screenshot comparisons for key states
- Accessibility tests: axe-core violations = 0
