# Typography System

MOZE Finance uses Google Fonts for a distinctive, modern feel.

## Heading: Space Grotesk
Bold, geometric sans-serif for headlines and display text.

**Weights:** 700 (bold), 800 (extrabold), 900 (black)

**Usage:**
- Page headlines (h1, h2)
- Section titles
- CTA button labels
- Logo text

**Import:**
```tsx
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})
```

**CSS:**
```css
font-family: var(--font-heading);
/* or */
font-family: 'Space Grotesk', sans-serif;
```

## Body: Manrope
Warm, readable sans-serif for body text and UI elements.

**Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

**Usage:**
- Body copy
- Button labels
- Form inputs
- Navigation items

**Import:**
```tsx
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

**CSS:**
```css
font-family: var(--font-body);
/* or */
font-family: 'Manrope', sans-serif;
```

## Mono: IBM Plex Mono
Technical, monospaced font for code and data.

**Weights:** 400 (regular), 500 (medium), 600 (semibold)

**Usage:**
- Code snippets (if any)
- Technical data display
- Pricing tables (if added)

**Import:**
```tsx
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

**CSS:**
```css
font-family: var(--font-mono);
/* or */
font-family: 'IBM Plex Mono', monospace;
```

## Font Size Scale (Tailwind)

```
text-xs    0.75rem   (12px)
text-sm    0.875rem  (14px)
text-base  1rem      (16px)
text-lg    1.125rem  (18px)
text-xl    1.25rem   (20px)
text-2xl   1.5rem    (24px)
text-3xl   1.875rem  (30px)
text-4xl   2.25rem   (36px)
text-5xl   3rem      (48px)
text-6xl   3.75rem   (60px)
text-7xl   4.5rem    (72px)
text-8xl   6rem      (96px)
text-9xl   8rem      (128px)
```

## Responsive Typography Examples

```tsx
// Hero headline
className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black"
style={{ fontFamily: 'var(--font-heading)' }}

// Section title
className="text-4xl sm:text-5xl lg:text-6xl font-black"
style={{ fontFamily: 'var(--font-heading)' }}

// Body text
className="text-lg sm:text-xl leading-relaxed"
style={{ fontFamily: 'var(--font-body)' }}

// Button label
className="text-xl font-black"
style={{ fontFamily: 'var(--font-heading)' }}
```
