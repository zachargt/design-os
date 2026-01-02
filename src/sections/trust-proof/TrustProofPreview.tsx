import data from '@/../product/sections/trust-proof/data.json'
import { TrustProof } from './components/TrustProof'

export default function TrustProofPreview() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      <TrustProof
        socialProof={data.socialProof}
        testimonial={data.testimonial}
        trustBadges={data.trustBadges}
        differentiation={data.differentiation}
        faqs={data.faqs}
        onMicroCta={() => console.log('Micro CTA clicked: Zie hoe zij het doen')}
        onFaqToggle={(faqId) => console.log('FAQ toggled:', faqId)}
      />
    </>
  )
}
