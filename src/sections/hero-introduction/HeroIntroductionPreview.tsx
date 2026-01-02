import data from '@/../product/sections/hero-introduction/data.json'
import { HeroIntroduction } from './components/HeroIntroduction'

export default function HeroIntroductionPreview() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      <HeroIntroduction
        hero={data.hero}
        trustBadges={data.trustBadges}
        onPrimaryCtaClick={() => console.log('Primary CTA clicked: Plan een gesprek met MoMo')}
        onSecondaryCtaClick={() => console.log('Secondary CTA clicked: Bekijk de flow')}
      />
    </>
  )
}
