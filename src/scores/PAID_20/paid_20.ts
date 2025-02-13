import { ScoreType } from '../../types'
import { PAID20_OUTPUT, PAID20_INPUTS, PAID20_INTERPRATION } from './definition'
import { sum } from 'lodash'

import { is_numeric } from '../../lib/shared'
export const paid_20: ScoreType<typeof PAID20_INPUTS, typeof PAID20_OUTPUT> = {
  name: 'Problem Areas In Diabetes (PAID) Scale',
  readmeLocation: __dirname,
  inputSchema: PAID20_INPUTS,
  outputSchema: PAID20_OUTPUT,
  calculate: ({ data }) => {
    //The scores for each item are summed, then multiplied by 1.25 to generate a total score out of 100.
    const totalScore = sum(Object.values(data)) * 1.25

    // The score has two ways of calculating the interpretation and we want to support both.
    // check readme for more details
    const questions_with_score_3_or_4 = Object.entries(data)
      .filter(([_, value]) => {
        return is_numeric(value) && (value === 3 || value === 4)
      })
      .map(([key, value]) => `${key}:${value}`)
      .join(',')

    return {
      PAID20_SCORE: totalScore,
      PAID20_QUESTIONS_WITH_SCORE_3_OR_4: questions_with_score_3_or_4,
      PAID20_INTERPRETATION:
        totalScore >= 40
          ? PAID20_INTERPRATION.SEVERE
          : PAID20_INTERPRATION.NOT_SEVERE,
    }
  },
}
