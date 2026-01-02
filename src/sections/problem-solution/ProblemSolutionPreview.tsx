import data from '@/../product/sections/problem-solution/data.json'
import { ProblemSolution } from './components/ProblemSolution'

export default function ProblemSolutionPreview() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      <ProblemSolution
        problem={data.problem}
        solution={data.solution}
        benefits={data.benefits}
        onSecondaryCta={() => console.log('Secondary CTA clicked: Krijg een snelle scan')}
        onPrimaryCta={() => console.log('Primary CTA clicked: Plan je gesprek')}
      />
    </>
  )
}
