import { pick, sum } from 'lodash'
import { type SubscaleType } from '../definition'

export const calculateExternalisingAndInternalisingScores = (
  subscaleScores: Record<SubscaleType, number | null>,
): {
  internalising: number | null
  externalising: number | null
} => {
  const INTERNALISING_SCALES = ['EMOTIONAL_PROBLEMS', 'PEER_PROBLEMS']
  const EXTERNALISING_SCALES = ['CONDUCT_PROBLEMS', 'HYPERACTIVITY']

  const calculateScore = (
    subscaleScores: Partial<Record<SubscaleType, number | null>>,
  ): number | null => {
    const EXPECTED_VALID_SCALE_SCORES = 2
    const validSubscaleScores = Object.values(subscaleScores).filter(
      score => score !== null,
    )

    if (validSubscaleScores.length !== EXPECTED_VALID_SCALE_SCORES) {
      return null
    }

    return sum(validSubscaleScores)
  }

  const internalizingScaleScores = pick(subscaleScores, INTERNALISING_SCALES)
  const externalisingScaleScores = pick(subscaleScores, EXTERNALISING_SCALES)

  const internalisingScore = calculateScore(internalizingScaleScores)
  const externalisingScore = calculateScore(externalisingScaleScores)

  return {
    internalising: internalisingScore,
    externalising: externalisingScore,
  }
}
