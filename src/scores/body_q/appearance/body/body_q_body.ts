import { ScoreType } from '../../../../types'
import { BODY_Q_BODY_INPUTS, BODY_Q_BODY_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 11, 12: 16, 13: 20, 14: 23, 15: 26, 16: 29, 17: 31, 18: 33,
  19: 36, 20: 38, 21: 40, 22: 42, 23: 44, 24: 46, 25: 49, 26: 51, 27: 53,
  28: 56, 29: 58, 30: 61, 31: 64, 32: 66, 33: 69, 34: 72, 35: 75, 36: 78,
  37: 82, 38: 87, 39: 92, 40: 100,
}

export const body_q_body: ScoreType<
  typeof BODY_Q_BODY_INPUTS,
  typeof BODY_Q_BODY_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Body',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_BODY_INPUTS,
  outputSchema: BODY_Q_BODY_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_BODY_SCORE: score }
  },
}
