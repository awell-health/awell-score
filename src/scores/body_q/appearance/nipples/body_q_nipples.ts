import { ScoreType } from '../../../../types'
import { BODY_Q_NIPPLES_INPUTS, BODY_Q_NIPPLES_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  5: 0, 6: 14, 7: 21, 8: 27, 9: 32, 10: 36, 11: 41, 12: 45, 13: 50,
  14: 56, 15: 62, 16: 68, 17: 75, 18: 82, 19: 90, 20: 100,
}

export const body_q_nipples: ScoreType<
  typeof BODY_Q_NIPPLES_INPUTS,
  typeof BODY_Q_NIPPLES_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Nipples',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_NIPPLES_INPUTS,
  outputSchema: BODY_Q_NIPPLES_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_NIPPLES_SCORE: score }
  },
}
