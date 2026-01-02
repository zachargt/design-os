# Problem & Solution - Test Instructions

## Test Scenarios

### 1. Problem Headline Display

**User Flow:**
- User scrolls from hero to problem section
- Dramatic headline appears

**Expected Behavior:**
- Headline: "Bonnetjes in een schoenendoos. Deadlines in je achterhoofd. Boetes op de mat."
- Font: Space Grotesk, font-black
- Size: text-4xl sm:text-5xl lg:text-6xl
- Color: slate-900 dark:white
- Max-width: 4xl (centered)

**Test Cases:**
- [ ] Headline displays with proper typography
- [ ] Text wraps naturally on multiple lines
- [ ] Readable on mobile (min 375px width)
- [ ] Centered alignment maintained

### 2. Pain Point Cards Rendering

**User Flow:**
- User views 3 pain point cards below headline
- Cards display in grid with icons

**Expected Behavior:**
- 3 cards in md:grid-cols-3 (desktop) or stacked (mobile)
- Each card: icon (rose-500), text, white background
- Icons: layers, clock, trending-down
- Stagger animation: 0ms, 150ms, 300ms delays
- Hover: scale(1.05), shadow-xl

**Test Cases:**
- [ ] 3 pain point cards render
- [ ] Icons display correctly
- [ ] Text is readable
- [ ] Cards fade in with stagger
- [ ] Hover effects work smoothly
- [ ] Grid adapts to mobile (stacked)

### 3. Secondary CTA (Problem Section)

**User Flow:**
- User sees "Krijg een snelle scan" button
- User hovers and clicks

**Expected Behavior:**
- Ghost/outline button style
- Border: slate-300 → rose-500 on hover
- Text: slate-700 → rose-600 on hover
- Scale: 1 → 1.05 on hover, 0.95 on active
- Click: onSecondaryCta callback fires

**Test Cases:**
- [ ] Button displays below pain points
- [ ] Hover changes border and text to rose
- [ ] Click fires callback
- [ ] Console logs "Secondary CTA clicked"

### 4. Solution Intro Text

**User Flow:**
- User scrolls to solution section
- Intro text appears: "Van gedoe naar grip. Eén partij die alles regelt – en er ook nog goed uitziet."

**Expected Behavior:**
- Font: Space Grotesk, font-bold
- Size: text-3xl sm:text-4xl
- Color: slate-900 dark:white
- Max-width: 3xl (centered)

**Test Cases:**
- [ ] Intro text displays
- [ ] Typography is bold and impactful
- [ ] Centered alignment
- [ ] Readable on mobile

### 5. Benefit Cards Grid

**User Flow:**
- User views 4 benefit cards below intro
- Cards display in 2x2 grid

**Expected Behavior:**
- 4 cards in md:grid-cols-2 (2x2 on desktop)
- Each card: icon circle (sky-100 bg), title, description, result (italic, sky-600)
- Stagger animation: 0ms, 150ms, 300ms, 450ms delays
- Hover: border becomes sky-500, scale(1.05), glow effect

**Test Cases:**
- [ ] 4 benefit cards render
- [ ] Icons display in sky-colored circles
- [ ] Titles use Space Grotesk font
- [ ] Descriptions use Manrope font
- [ ] Results are italic and sky-colored
- [ ] Cards fade in with stagger
- [ ] Grid displays 2x2 on desktop
- [ ] Cards stack on mobile

### 6. Benefit Card Hover Effects

**User Flow:**
- User hovers over benefit card
- Card shows glow and scale effect

**Expected Behavior:**
- Border: slate-200 → sky-500
- Scale: 1 → 1.05
- Shadow: hover:shadow-2xl hover:shadow-sky-500/20
- Gradient glow: opacity 0 → 100 (from-sky-500/10 to-rose-500/10, blur-xl)

**Test Cases:**
- [ ] Border changes to sky-500
- [ ] Card scales up
- [ ] Shadow intensifies
- [ ] Gradient glow appears behind card
- [ ] Transition is smooth (no jank)

### 7. Primary CTA (Solution Section)

**User Flow:**
- User sees "Plan je gesprek – klaar in 20 minuten" button
- User hovers and clicks

**Expected Behavior:**
- Primary button style (sky-500 bg)
- Hover: bg becomes sky-600, scale(1.1), glow effect
- Active: scale(0.95)
- Arrow icon: translates right and scales on hover
- Click: onPrimaryCta callback fires

**Test Cases:**
- [ ] Button displays below benefits
- [ ] Hover triggers glow and scale
- [ ] Arrow icon animates on hover
- [ ] Click fires callback
- [ ] Console logs "Primary CTA clicked"

### 8. Gradient Blobs

**User Flow:**
- User observes background gradient blobs
- Problem section has rose blob, solution section has sky blob

**Expected Behavior:**
- Problem: rose-500/20 blob (top-right), 10s pulse
- Solution: sky-500/20 blob (top-left), 10s pulse
- Blobs use blur-3xl and animate-pulse

**Test Cases:**
- [ ] Rose blob visible in problem section
- [ ] Sky blob visible in solution section
- [ ] Blobs pulse continuously
- [ ] Blur effect is pronounced

### 9. Grain Texture Overlays

**User Flow:**
- User views both sections
- Subtle grain texture visible

**Expected Behavior:**
- Problem: SVG filter #noise-problem, opacity 0.02
- Solution: SVG filter #noise-solution, opacity 0.015 dark:0.025
- Both use mix-blend-overlay

**Test Cases:**
- [ ] Grain texture visible in problem section
- [ ] Grain texture visible in solution section
- [ ] Textures add premium tactile feel
- [ ] Not too overpowering

### 10. Section Backgrounds

**User Flow:**
- User scrolls through both sections
- Background colors differ to separate sections

**Expected Behavior:**
- Problem: bg-slate-50 dark:bg-slate-900
- Solution: bg-white dark:bg-slate-950
- Clear visual separation between sections

**Test Cases:**
- [ ] Problem section has light slate background
- [ ] Solution section has white background
- [ ] Dark mode variants work correctly
- [ ] Sections visually distinct

### 11. Mobile Responsive

**User Flow:**
- User views sections on mobile (375px width)
- Layouts adapt for smaller screen

**Expected Behavior:**
- Pain point cards stack vertically (grid-cols-1)
- Benefit cards stack vertically (grid-cols-1)
- Headlines scale down (text-4xl)
- CTAs remain full-width or centered
- All text remains readable

**Test Cases:**
- [ ] Pain points stack on mobile
- [ ] Benefits stack on mobile
- [ ] Headlines readable at 375px
- [ ] No horizontal overflow
- [ ] Touch targets ≥ 44px

### 12. Dark Mode

**User Flow:**
- User toggles dark mode
- Sections adapt colors

**Expected Behavior:**
- Problem: dark:bg-slate-900, dark:text-white
- Solution: dark:bg-slate-950, dark:text-white
- Pain point cards: dark:bg-slate-800, dark:border-slate-700
- Benefit cards: dark:bg-slate-900, dark:border-slate-700
- Icons maintain visibility
- CTAs adapt to dark variants

**Test Cases:**
- [ ] All text readable in dark mode
- [ ] Card backgrounds sufficiently dark
- [ ] Icons have proper contrast
- [ ] CTAs have dark variants
- [ ] Hover effects visible

### 13. Animation Performance

**User Flow:**
- User scrolls into sections
- Cards animate in

**Expected Behavior:**
- Stagger animations: opacity 0 → 1, translateY(30px) → 0
- Duration: 0.8s ease-out
- 60fps animation
- No layout shift

**Test Cases:**
- [ ] Cards animate smoothly
- [ ] No frame drops during animation
- [ ] Animation respects animation-fill-mode: forwards
- [ ] Final state is stable (no flicker)

### 14. Accessibility

**User Flow:**
- Screen reader user navigates sections
- Keyboard user interacts with CTAs

**Expected Behavior:**
- Problem headline announced as h2
- Solution intro announced as paragraph
- Benefit titles announced as h3
- CTAs focusable and activatable via keyboard
- Proper heading hierarchy (h1 → h2 → h3)

**Test Cases:**
- [ ] Headings have proper hierarchy
- [ ] CTAs focusable via Tab
- [ ] CTAs activatable via Enter/Space
- [ ] Focus indicators visible
- [ ] Screen reader announces all content

### 15. Edge Cases

**Empty States:**
- Missing pain points → Section renders headline only
- Missing benefits → Section renders intro and CTA only
- Missing CTAs → Sections render without CTA buttons

**Long Content:**
- Very long benefit description (> 200 chars) → Wraps to multiple lines
- Very long pain point text (> 100 chars) → Card height expands

**Test Cases:**
- [ ] Component handles missing optional data
- [ ] Long text wraps without breaking layout
- [ ] Cards expand to accommodate content

## Test Coverage Goals

- Unit tests: 80%+ coverage
- Integration tests: All user flows covered
- Visual regression tests: Screenshot comparisons
- Accessibility tests: axe-core violations = 0
