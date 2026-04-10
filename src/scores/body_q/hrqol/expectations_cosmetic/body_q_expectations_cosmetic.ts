import { ScoreType } from '../../../../types'
import {
  BODY_Q_EXPECTATIONS_COSMETIC_INPUTS,
  BODY_Q_EXPECTATIONS_COSMETIC_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  8: 0,
  9: 11,
  10: 18,
  11: 23,
  12: 28,
  13: 32,
  14: 35,
  15: 38,
  16: 40,
  17: 43,
  18: 45,
  19: 47,
  20: 50,
  21: 52,
  22: 54,
  23: 57,
  24: 59,
  25: 62,
  26: 65,
  27: 69,
  28: 73,
  29: 77,
  30: 83,
  31: 90,
  32: 100,
}

export const body_q_expectations_cosmetic: ScoreType<
  typeof BODY_Q_EXPECTATIONS_COSMETIC_INPUTS,
  typeof BODY_Q_EXPECTATIONS_COSMETIC_OUTPUT
> = {
  name: 'BODY-Q Expectations (Cosmetic)',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_EXPECTATIONS_COSMETIC_INPUTS,
  outputSchema: BODY_Q_EXPECTATIONS_COSMETIC_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_EXPECTATIONS_COSMETIC_SCORE: score }
  },
}
