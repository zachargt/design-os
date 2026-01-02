# Tailwind Color System

MOZE Finance uses Tailwind CSS v4 built-in color palettes.

## Primary: Sky
Use for primary CTAs, links, and positive actions.

```
sky-50   #f0f9ff
sky-100  #e0f2fe
sky-200  #bae6fd
sky-300  #7dd3fc
sky-400  #38bdf8
sky-500  #0ea5e9  ← Primary
sky-600  #0284c7  ← Primary Hover
sky-700  #0369a1
sky-800  #075985
sky-900  #0c4a6e
sky-950  #082f49
```

## Secondary: Rose
Use for secondary accents, hover states, and emotional highlights.

```
rose-50   #fff1f2
rose-100  #ffe4e6
rose-200  #fecdd3
rose-300  #fda4af
rose-400  #fb7185
rose-500  #f43f5e  ← Secondary
rose-600  #e11d48  ← Secondary Hover
rose-700  #be123c
rose-800  #9f1239
rose-900  #881337
rose-950  #4c0519
```

## Neutral: Slate
Use for text, backgrounds, borders, and UI elements.

```
slate-50   #f8fafc  ← Light background
slate-100  #f1f5f9
slate-200  #e2e8f0  ← Borders
slate-300  #cbd5e1  ← Secondary text
slate-400  #94a3b8
slate-500  #64748b
slate-600  #475569
slate-700  #334155  ← Body text
slate-800  #1e293b
slate-900  #0f172a  ← Dark bg
slate-950  #020617  ← Footer bg
```

## Usage in Components

```tsx
// Primary CTA
className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700"

// Secondary CTA
className="border-2 border-slate-300 hover:border-rose-500"

// Background
className="bg-white dark:bg-slate-950"

// Text
className="text-slate-900 dark:text-white"
```
