import { ScoreType } from '../../../../types'
import {
  BODY_Q_EATING_BEHAVIOR_INPUTS,
  BODY_Q_EATING_BEHAVIOR_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  9: 0,
  10: 5,
  11: 12,
  12: 18,
  13: 22,
  14: 26,
  15: 30,
  16: 33,
  17: 36,
  18: 39,
  19: 42,
  20: 45,
  21: 48,
  22: 50,
  23: 53,
  24: 55,
  25: 58,
  26: 60,
  27: 62,
  28: 65,
  29: 68,
  30: 70,
  31: 73,
  32: 77,
  33: 80,
  34: 85,
  35: 91,
  36: 100,
}

export const body_q_eating_behavior: ScoreType<
  typeof BODY_Q_EATING_BEHAVIOR_INPUTS,
  typeof BODY_Q_EATING_BEHAVIOR_OUTPUT
> = {
  name: 'BODY-Q Eating Behavior',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_EATING_BEHAVIOR_INPUTS,
  outputSchema: BODY_Q_EATING_BEHAVIOR_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_EATING_BEHAVIOR_SCORE: score }
  },
}
