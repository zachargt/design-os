# MOZE Finance - Section Implementation Prompt Template

Use this template when implementing sections incrementally (one section at a time).

---

I need you to implement the **[SECTION_NAME]** section for the MOZE Finance landing page.

## Context

You have access to:
- Complete component implementation in `sections/[section-id]/components/`
- Sample data in `data-model/[section-id]/data.json`
- Type definitions in `data-model/[section-id]/types.ts`
- Component documentation in `sections/[section-id]/README.md`
- Test specifications in `sections/[section-id]/tests.md`
- Incremental instructions in `instructions/incremental/[NN]-[section-id].md`

## Current Project State

**Before starting, please confirm**:
1. What sections are already implemented?
2. Is the foundation (Next.js, Tailwind CSS v4, Google Fonts, shell) set up?
3. Are there any existing issues or console errors?

## What I Need

Please implement the **[SECTION_NAME]** section:

1. **Review the specifications**:
   - Read `sections/[section-id]/README.md` for component overview
   - Check `instructions/incremental/[NN]-[section-id].md` for step-by-step guide
   - Review `sections/[section-id]/tests.md` for acceptance criteria

2. **Copy the provided files**:
   - Components from `sections/[section-id]/components/` to your project
   - Data file from `data-model/[section-id]/data.json`
   - Types from `data-model/[section-id]/types.ts`

3. **Integrate into the page**:
   - Import the section component in `app/page.tsx`
   - Pass the data from JSON file to component props
   - Wire up callback functions (console.log for now)

4. **Test the implementation**:
   - Follow test scenarios in `sections/[section-id]/tests.md`
   - Verify all user flows work
   - Test responsive behavior (375px, 768px, 1024px)
   - Test dark mode
   - Check for console errors

5. **Report results**:
   - Confirm all tests pass
   - Share any issues encountered
   - Show screenshots if helpful

## Design Requirements

- Follow the design patterns from completed sections
- Maintain consistency with existing components
- Ensure smooth animations (60fps)
- Support dark mode throughout
- Mobile-first responsive design

## Technical Constraints

- **Tailwind CSS v4**: No `tailwind.config.js` file
- **Props-based**: Accept data via props (no direct data.json imports in components)
- **TypeScript**: Use provided types
- **Accessibility**: Proper heading hierarchy, keyboard navigation, screen reader support

## Section-Specific Notes

[Add section-specific guidance here based on which section is being implemented]

### Hero & Introduction
- Requires GSAP and SplitType dependencies
- Character-level animations for headline
- Staggered reveals for all content
- Full viewport height

### Problem & Solution
- Two subsections: Problem (slate-50 bg) and Solution (white bg)
- 3 pain point cards + 4 benefit cards
- Different gradient blobs for each subsection

### Trust & Proof
- Three subsections: Social Proof, Differentiation, FAQ
- Testimonial card with glassmorphism
- FAQ accordion (only one open at a time)
- Requires Lucide React icons

### Conversion & Footer
- Dramatic gradient CTA section
- Dark footer (slate-950)
- Dynamic copyright year
- Footer links as buttons (not <a> tags)

---

Please confirm you've reviewed the specifications and are ready to implement, then proceed with the section.
