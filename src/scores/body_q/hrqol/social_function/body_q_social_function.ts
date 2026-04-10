import { ScoreType } from '../../../../types'
import {
  BODY_Q_SOCIAL_FUNCTION_INPUTS,
  BODY_Q_SOCIAL_FUNCTION_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0,
  11: 13,
  12: 19,
  13: 22,
  14: 25,
  15: 28,
  16: 30,
  17: 32,
  18: 34,
  19: 36,
  20: 38,
  21: 40,
  22: 42,
  23: 44,
  24: 46,
  25: 48,
  26: 50,
  27: 52,
  28: 55,
  29: 57,
  30: 60,
  31: 62,
  32: 65,
  33: 68,
  34: 71,
  35: 74,
  36: 78,
  37: 81,
  38: 86,
  39: 92,
  40: 100,
}

export const body_q_social_function: ScoreType<
  typeof BODY_Q_SOCIAL_FUNCTION_INPUTS,
  typeof BODY_Q_SOCIAL_FUNCTION_OUTPUT
> = {
  name: 'BODY-Q Social Function',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_SOCIAL_FUNCTION_INPUTS,
  outputSchema: BODY_Q_SOCIAL_FUNCTION_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_SOCIAL_FUNCTION_SCORE: score }
  },
}
