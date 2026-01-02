# Trust & Proof - Test Instructions

## Key Test Scenarios

### 1. Testimonial Card Display
- [ ] Quote displays with proper formatting and quotation marks
- [ ] Quote icon visible in top-left corner
- [ ] Author name, role, company display below quote
- [ ] Glassmorphism effect (gradient background, border, shadow)
- [ ] Card responsive on mobile

### 2. Trust Badges Rendering
- [ ] All badges render as pills with icons
- [ ] Icons: award, shield-check, lock
- [ ] Backdrop blur effect visible
- [ ] Hover scales icon by 1.1x
- [ ] Badges wrap properly on mobile

### 3. Micro CTA Interaction
- [ ] "Zie hoe zij het doen" button displays
- [ ] Ghost/outline button style
- [ ] Hover: border changes to sky-500, scale(1.05)
- [ ] Arrow icon translates right on hover
- [ ] Click fires onMicroCta callback

### 4. Differentiation Cards
- [ ] "Waarom MOZE?" headline displays
- [ ] 4 differentiation cards render in 2x2 grid
- [ ] Cards fade in with stagger (100ms delays)
- [ ] Hover: border → sky-500, scale(1.05)
- [ ] Cards stack on mobile

### 5. FAQ Accordion Functionality
- [ ] "Veelgestelde vragen" headline displays
- [ ] All 5 FAQ items render
- [ ] Click expands FAQ with smooth animation
- [ ] Plus icon changes to minus when open
- [ ] Only one FAQ open at a time (previous closes)
- [ ] Answer content displays in expanded state
- [ ] Collapse animation smooth

### 6. FAQ Accordion States
- [ ] Initial state: all FAQs closed
- [ ] Open state: max-height increases, content visible
- [ ] Hover: border changes to sky-500
- [ ] Click fires onFaqToggle with faqId and isOpen
- [ ] Console logs FAQ toggle events

### 7. Gradient Blobs
- [ ] Sky blob visible in social proof section
- [ ] Rose blob visible in differentiation section
- [ ] Blobs pulse continuously
- [ ] Different animation durations (14s, 16s)

### 8. Section Backgrounds
- [ ] Social proof: white bg
- [ ] Differentiation: slate-50 bg
- [ ] FAQ: white bg
- [ ] Clear visual separation

### 9. Mobile Responsive
- [ ] Testimonial card full-width on mobile
- [ ] Trust badges wrap to multiple rows
- [ ] Differentiation cards stack vertically
- [ ] FAQ items full-width
- [ ] All text readable at 375px

### 10. Dark Mode
- [ ] Social proof: dark:bg-slate-950
- [ ] Testimonial card: dark:from-slate-900 dark:to-slate-800
- [ ] Differentiation: dark:bg-slate-900
- [ ] All text readable
- [ ] Icons maintain proper contrast

### 11. Animation Performance
- [ ] Differentiation cards animate at 60fps
- [ ] FAQ expand/collapse smooth (no jank)
- [ ] Hover transitions smooth
- [ ] No layout shift during animations

### 12. Accessibility
- [ ] Headlines have proper hierarchy (h2, h3)
- [ ] Micro CTA focusable via keyboard
- [ ] FAQ buttons focusable and activatable via keyboard
- [ ] FAQ state announced to screen readers
- [ ] Focus indicators visible

### 13. Edge Cases
- [ ] Missing testimonial → Section renders headline only
- [ ] Missing FAQ answer → Item still expandable (shows empty)
- [ ] Very long quote (> 500 chars) → Wraps to multiple lines
- [ ] Very long FAQ answer → Expands properly with scrolling if needed

## Test Coverage Goals
- Unit tests: 80%+ coverage
- Integration tests: All user flows
- Accessibility tests: axe-core violations = 0
