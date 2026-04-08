import { ScoreType } from '../../types'
import { WOOS_INPUTS, WOOS_OUTPUT } from './definition'
import { sum } from 'lodash'
import { calculateSubscaleScore } from './helpers'

export const woos: ScoreType<typeof WOOS_INPUTS, typeof WOOS_OUTPUT> = {
  name: 'Western Ontario Osteoarthritis of the Shoulder Index (WOOS)',
  readmeLocation: __dirname,
  inputSchema: WOOS_INPUTS,
  outputSchema: WOOS_OUTPUT,
  calculate: ({ data }) => {
    const physicalSymptoms = calculateSubscaleScore(data, 'PHYSICAL_SYMPTOMS')
    const sportsLeisureWork = calculateSubscaleScore(
      data,
      'SPORTS_LEISURE_WORK',
    )
    const lifestyle = calculateSubscaleScore(data, 'LIFESTYLE')
    const emotions = calculateSubscaleScore(data, 'EMOTIONS')

    const validInputs = Object.values(data).filter(v => v !== undefined)
    const totalScore = validInputs.length === 0 ? null : sum(validInputs)

    // Percentage: (1900 - total) / 19, rounded to 2 decimal places
    const percentage =
      totalScore === null
        ? null
        : Math.round(((1900 - totalScore) / 19) * 100) / 100

    return {
      WOOS_PHYSICAL_SYMPTOMS: physicalSymptoms,
      WOOS_SPORTS_LEISURE_WORK: sportsLeisureWork,
      WOOS_LIFESTYLE: lifestyle,
      WOOS_EMOTIONS: emotions,
      WOOS_TOTAL_SCORE: totalScore,
      WOOS_PERCENTAGE: percentage,
    }
  },
}
