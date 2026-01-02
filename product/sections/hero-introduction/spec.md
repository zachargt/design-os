# Hero & Introduction Specification

## Overview
De openingssectie van de MOZE Finance landingspagina met een krachtige kinetic typography hero. Combineert een bold headline met GSAP text-splitting animaties, primary en secondary CTAs, en trust signals om direct vertrouwen en actie te genereren.

## User Flows
- Bezoeker arriveert op pagina en ziet geanimeerde headline ("Financiën met een creatief directeur.")
- Bezoeker leest subhead die de waardepropositie verduidelijkt
- Bezoeker klikt op primary CTA ("Plan een gesprek met MoMo") om gesprek te boeken
- Bezoeker klikt op secondary CTA ("Bekijk de flow") om meer te ontdekken
- Bezoeker ziet trust signals voor instant credibility

## UI Requirements
- Full-viewport hero section met voldoende padding voor de fixed header
- Kinetic typography headline met GSAP SplitType letter-level animaties
- Subhead met fade-in animatie na headline compleet is
- Primary CTA button (sky-500) met hover glow effect en scale animatie
- Secondary CTA als ghost/outline button
- Trust badges inline met iconen of bullet separators
- Abstract visual element (gradient blob of 3D shape) als achtergrond accent
- Scroll indicator (chevron/arrow) onderaan met pulse animatie
- Responsive: headline schaalt naar 48-64px op mobile, stacked CTAs
- Reduced-motion fallback: instant display zonder animaties

## Configuration
- shell: true
