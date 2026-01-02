# Problem & Solution Specification

## Overview
De probleem-oplossing sectie combineert emotional agitation (met pijnpunten als "Bonnetjes in een schoenendoos") en de vier benefit-blokken die MOZE's waardepropositie communiceren. Elk benefit heeft een titel, beschrijving, en resultaat.

## User Flows
- Bezoeker leest de pijnpunten headline en herkent hun eigen frustraties
- Bezoeker ziet drie pijnpunt bullets die de chaos beschrijven
- Bezoeker klikt op secundaire CTA ("Krijg een snelle scan")
- Bezoeker scrollt naar oplossing intro ("Van gedoe naar grip")
- Bezoeker bekijkt de vier benefit cards (Alles geregeld, Inzicht, Advies, Contact)
- Bezoeker klikt op primaire CTA ("Plan je gesprek – klaar in 20 minuten")

## UI Requirements
- Probleem sectie met dramatische headline (3 zinsdelen, impact layout)
- Drie pijnpunt bullets met icons
- Secundaire CTA button (ghost style)
- Visuele transition naar oplossing (gradient of spacing)
- Intro tekst voor oplossing ("Van gedoe naar grip")
- Vier benefit cards in 2x2 grid (desktop), stacked (mobile)
- Elke card: icon, titel, beschrijving, resultaat (accent/italic)
- Primaire CTA aan einde van benefits
- Scroll-triggered stagger animaties voor benefit cards
- Bold visual elements (shapes, gradients) consistent met Hero

## Configuration
- shell: true
