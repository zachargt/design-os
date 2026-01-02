# Problem & Solution Section

## Overview
Combines emotional agitation (pain points like "Bonnetjes in een schoenendoos") with four benefit blocks that communicate MOZE's value proposition. Each benefit has a title, description, and result.

## Components

### ProblemSolution
Main combined component that renders both Problem and Solution sections.

**Props:**
- `problem`: Problem - Headline, pain points, secondary CTA
- `solution`: Solution - Intro text, primary CTA
- `benefits`: Benefit[] - Array of 4 benefit cards
- `onSecondaryCta`: () => void - Secondary CTA callback (problem section)
- `onPrimaryCta`: () => void - Primary CTA callback (solution section)

### ProblemSection
Displays the problem headline and 3 pain point cards.

**Props:**
- `problem`: Problem
- `onSecondaryCta`: () => void

### SolutionSection
Displays the solution intro, 4 benefit cards in 2x2 grid, and primary CTA.

**Props:**
- `solution`: Solution
- `benefits`: Benefit[]
- `onPrimaryCta`: () => void

### BenefitCard
Individual benefit card with icon, title, description, and result.

**Props:**
- `benefit`: Benefit
- `index`: number - For stagger animation delay

## Data Structure

See `data.json` for sample data structure.

Key entities:
- `problem`: headline, painPoints (array of {id, text, icon}), cta
- `solution`: intro, cta
- `benefits`: Array of {id, icon, title, description, result}

## Design Features

- **Dramatic Problem Headline**: Large, impactful headline split into 3 phrases
- **Pain Point Cards**: 3 cards with icons in responsive grid
- **Stagger Animations**: Pain points and benefits fade in with 150ms stagger
- **Gradient Blobs**: Rose blob in problem section, sky blob in solution section
- **Benefit Cards**: 2x2 grid (desktop) with hover glow effects
- **Result Text**: Italic, colored result statement for each benefit
- **Grain Textures**: SVG noise filters in both sections

## Testing

See `tests.md` for complete test scenarios.

## Implementation Notes

- Uses Radix UI icons for pain points and benefits
- Problem section: slate-50 background, rose gradient
- Solution section: white background, sky gradient
- Benefits display in 2x2 grid on desktop, stack on mobile
- Space Grotesk for headlines/titles, Manrope for body text
