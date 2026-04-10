import { ScoreType } from '../../../../types'
import {
  BODY_Q_SEXUAL_FUNCTION_INPUTS,
  BODY_Q_SEXUAL_FUNCTION_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  5: 0,
  6: 18,
  7: 26,
  8: 31,
  9: 35,
  10: 39,
  11: 43,
  12: 47,
  13: 51,
  14: 54,
  15: 58,
  16: 63,
  17: 68,
  18: 75,
  19: 86,
  20: 100,
}

export const body_q_sexual_function: ScoreType<
  typeof BODY_Q_SEXUAL_FUNCTION_INPUTS,
  typeof BODY_Q_SEXUAL_FUNCTION_OUTPUT
> = {
  name: 'BODY-Q Sexual Function',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_SEXUAL_FUNCTION_INPUTS,
  outputSchema: BODY_Q_SEXUAL_FUNCTION_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_SEXUAL_FUNCTION_SCORE: score }
  },
}
