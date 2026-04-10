import { ScoreType } from '../../../../types'
import {
  BODY_Q_PHYSICAL_FUNCTION_INPUTS,
  BODY_Q_PHYSICAL_FUNCTION_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  7: 0,
  8: 15,
  9: 22,
  10: 26,
  11: 30,
  12: 33,
  13: 36,
  14: 39,
  15: 42,
  16: 44,
  17: 47,
  18: 50,
  19: 52,
  20: 55,
  21: 59,
  22: 62,
  23: 66,
  24: 71,
  25: 76,
  26: 82,
  27: 90,
  28: 100,
}

export const body_q_physical_function: ScoreType<
  typeof BODY_Q_PHYSICAL_FUNCTION_INPUTS,
  typeof BODY_Q_PHYSICAL_FUNCTION_OUTPUT
> = {
  name: 'BODY-Q Physical Function',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_PHYSICAL_FUNCTION_INPUTS,
  outputSchema: BODY_Q_PHYSICAL_FUNCTION_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_PHYSICAL_FUNCTION_SCORE: score }
  },
}
