import { ScoreType } from '../../../../types'
import {
  BODY_Q_INNER_THIGHS_INPUTS,
  BODY_Q_INNER_THIGHS_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  4: 0, 5: 9, 6: 16, 7: 23, 8: 33, 9: 43, 10: 49, 11: 56, 12: 66, 13: 77,
  14: 84, 15: 92, 16: 100,
}

export const body_q_inner_thighs: ScoreType<
  typeof BODY_Q_INNER_THIGHS_INPUTS,
  typeof BODY_Q_INNER_THIGHS_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Inner Thighs',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_INNER_THIGHS_INPUTS,
  outputSchema: BODY_Q_INNER_THIGHS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_INNER_THIGHS_SCORE: score }
  },
}
