import data from '@/../product/sections/conversion-footer/data.json'
import { ConversionFooter } from './components/ConversionFooter'

export default function ConversionFooterPreview() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      <ConversionFooter
        finalCta={data.finalCta}
        footer={data.footer}
        onCtaClick={() => console.log('Final CTA clicked: Plan mijn gesprek')}
        onLinkClick={(href) => console.log('Footer link clicked:', href)}
      />
    </>
  )
}
