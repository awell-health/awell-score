import { ScoreType } from '../../../../types'
import {
  BODY_Q_HIPS_OUTER_THIGHS_INPUTS,
  BODY_Q_HIPS_OUTER_THIGHS_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  5: 0, 6: 12, 7: 17, 8: 22, 9: 27, 10: 33, 11: 39, 12: 44, 13: 49,
  14: 55, 15: 65, 16: 75, 17: 81, 18: 86, 19: 93, 20: 100,
}

export const body_q_hips_outer_thighs: ScoreType<
  typeof BODY_Q_HIPS_OUTER_THIGHS_INPUTS,
  typeof BODY_Q_HIPS_OUTER_THIGHS_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Hips & Outer Thighs',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_HIPS_OUTER_THIGHS_INPUTS,
  outputSchema: BODY_Q_HIPS_OUTER_THIGHS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_HIPS_OUTER_THIGHS_SCORE: score }
  },
}
