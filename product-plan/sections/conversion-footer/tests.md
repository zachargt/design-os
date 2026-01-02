# Conversion & Footer - Test Instructions

## Key Test Scenarios

### 1. Final CTA Background
- [ ] Gradient background visible (sky-500 → sky-600 → rose-500)
- [ ] Gradient flows diagonally (from top-left to bottom-right)
- [ ] Full-width section with proper padding
- [ ] Section has overflow-hidden (no horizontal scroll)

### 2. Animated Gradient Blobs
- [ ] White/10 blob at top-left (8s pulse)
- [ ] Rose-600/20 blob at bottom-right (10s pulse, 2s delay)
- [ ] Blobs animate continuously
- [ ] Blur-3xl effect visible

### 3. Grain Texture Overlay
- [ ] SVG noise filter visible
- [ ] Opacity 0.03, mix-blend-overlay
- [ ] Adds premium tactile feel
- [ ] Covers entire CTA section

### 4. CTA Headline & Copy
- [ ] Headline: "Tijd om je administratie écht over te dragen."
- [ ] Font: Space Grotesk, font-black
- [ ] Size: text-5xl sm:text-6xl lg:text-7xl
- [ ] Color: white
- [ ] Copy displays below headline
- [ ] Copy: text-xl sm:text-2xl, white/90

### 5. CTA Button Interaction
- [ ] Button displays: "Plan mijn gesprek"
- [ ] White background, sky-600 text (reversed colors)
- [ ] Hover: bg → slate-50, scale(1.1), glow effect
- [ ] Active: scale(0.95)
- [ ] Arrow icon translates right and scales on hover
- [ ] Click fires onCtaClick callback
- [ ] Console logs "Final CTA clicked"

### 6. CTA Button Glow Effect
- [ ] Glow appears on hover (absolute positioned div)
- [ ] Blur-2xl effect
- [ ] Opacity 0 → 60 on hover
- [ ] White color with transition

### 7. Proof Points Display
- [ ] 2 proof points render below CTA
- [ ] "Gemiddeld 6 uur per week terug" • "Bekroond accountant"
- [ ] Bullet separator between points
- [ ] Text: white/90, text-sm, font-semibold
- [ ] Wraps properly on mobile

### 8. Footer Background
- [ ] Dark background (bg-slate-950)
- [ ] Sufficient contrast with CTA section
- [ ] Proper padding (py-16)

### 9. Footer 3-Column Layout
- [ ] Address displays on left
- [ ] Links display in center with bullet separators
- [ ] Tagline displays on right (italic, font-semibold)
- [ ] Grid: md:grid-cols-3
- [ ] Stacks vertically on mobile

### 10. Footer Links Interaction
- [ ] "Privacy" and "Voorwaarden" links render
- [ ] Links are interactive buttons
- [ ] Hover: text color changes to white
- [ ] Click fires onLinkClick with href
- [ ] Console logs "Footer link clicked: /privacy" or "/voorwaarden"

### 11. Footer Tagline
- [ ] "Perfecte cijfers. Zonder de grijze pakken." displays
- [ ] Right-aligned on desktop
- [ ] Slate-500 color, italic, font-semibold

### 12. Copyright Line
- [ ] Displays below footer content
- [ ] Border-top (border-slate-800)
- [ ] Text: "© [YEAR] MOZE Finance. Alle rechten voorbehouden."
- [ ] Year is dynamic (new Date().getFullYear())
- [ ] Center-aligned
- [ ] Slate-600 color, text-sm

### 13. Mobile Responsive
- [ ] CTA headline scales down (text-5xl)
- [ ] CTA button remains readable and tappable
- [ ] Proof points wrap to multiple lines if needed
- [ ] Footer grid stacks vertically (grid-cols-1)
- [ ] Address, links, tagline all readable
- [ ] Copyright remains centered

### 14. Dark Mode
- [ ] CTA section gradient still visible (inherently light)
- [ ] Footer: already dark (bg-slate-950)
- [ ] All footer text readable
- [ ] Links have proper contrast

### 15. Animation Performance
- [ ] Gradient blobs animate at 60fps
- [ ] Hover transitions smooth
- [ ] No layout shift

### 16. Accessibility
- [ ] CTA headline announced as h2
- [ ] CTA button focusable via keyboard
- [ ] CTA button activatable via Enter/Space
- [ ] Footer links focusable via keyboard
- [ ] Focus indicators visible

### 17. Edge Cases
- [ ] Missing proof points → Section renders without proof points
- [ ] Missing footer links → Footer renders with address and tagline only
- [ ] Very long tagline (> 50 chars) → Wraps to multiple lines
- [ ] Very long CTA headline → Wraps naturally

## Test Coverage Goals
- Unit tests: 80%+ coverage
- Integration tests: All user flows
- Accessibility tests: axe-core violations = 0
