import { ScoreType } from '../../../../types'
import {
  BODY_Q_UPPER_ARMS_INPUTS,
  BODY_Q_UPPER_ARMS_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  7: 0, 8: 10, 9: 15, 10: 20, 11: 24, 12: 28, 13: 32, 14: 35, 15: 39,
  16: 42, 17: 46, 18: 50, 19: 54, 20: 59, 21: 64, 22: 69, 23: 74, 24: 78,
  25: 82, 26: 87, 27: 93, 28: 100,
}

export const body_q_upper_arms: ScoreType<
  typeof BODY_Q_UPPER_ARMS_INPUTS,
  typeof BODY_Q_UPPER_ARMS_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Upper Arms',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_UPPER_ARMS_INPUTS,
  outputSchema: BODY_Q_UPPER_ARMS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_UPPER_ARMS_SCORE: score }
  },
}
