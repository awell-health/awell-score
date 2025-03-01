import { pick, sum } from 'lodash'
import { type SubscaleType } from '../definition'

export const calculateTotalScore = (
  subscaleScores: Record<SubscaleType, number | null>,
): number | null => {
  const SCALE_IDS_NEEDED_FOR_TOTAL_SCORE = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
  ]

  const subscaleScoresToIncludeInTotalScore = pick(
    subscaleScores,
    SCALE_IDS_NEEDED_FOR_TOTAL_SCORE,
  )

  const validSubscaleScores = Object.values(
    subscaleScoresToIncludeInTotalScore,
  ).filter(score => score !== null)

  /**
   * Four valid subscale scores are needed to calculate a total score
   */
  if (validSubscaleScores.length !== SCALE_IDS_NEEDED_FOR_TOTAL_SCORE.length)
    return null

  return sum(validSubscaleScores)
}
