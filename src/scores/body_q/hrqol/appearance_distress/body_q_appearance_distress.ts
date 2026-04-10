import { ScoreType } from '../../../../types'
import {
  BODY_Q_APPEARANCE_DISTRESS_INPUTS,
  BODY_Q_APPEARANCE_DISTRESS_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  8: 0,
  9: 3,
  10: 13,
  11: 20,
  12: 26,
  13: 31,
  14: 35,
  15: 39,
  16: 42,
  17: 45,
  18: 47,
  19: 50,
  20: 52,
  21: 54,
  22: 57,
  23: 59,
  24: 61,
  25: 64,
  26: 67,
  27: 70,
  28: 73,
  29: 77,
  30: 82,
  31: 90,
  32: 100,
}

export const body_q_appearance_distress: ScoreType<
  typeof BODY_Q_APPEARANCE_DISTRESS_INPUTS,
  typeof BODY_Q_APPEARANCE_DISTRESS_OUTPUT
> = {
  name: 'BODY-Q Appearance-Related Psychosocial Distress',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_APPEARANCE_DISTRESS_INPUTS,
  outputSchema: BODY_Q_APPEARANCE_DISTRESS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_APPEARANCE_DISTRESS_SCORE: score }
  },
}
