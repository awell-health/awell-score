import { ScoreType } from '../../../../types'
import { BODY_Q_CHEST_INPUTS, BODY_Q_CHEST_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 9, 12: 15, 13: 19, 14: 23, 15: 26, 16: 28, 17: 31, 18: 33,
  19: 35, 20: 38, 21: 40, 22: 42, 23: 44, 24: 46, 25: 49, 26: 51, 27: 54,
  28: 56, 29: 59, 30: 61, 31: 64, 32: 67, 33: 70, 34: 73, 35: 76, 36: 79,
  37: 83, 38: 87, 39: 93, 40: 100,
}

export const body_q_chest: ScoreType<
  typeof BODY_Q_CHEST_INPUTS,
  typeof BODY_Q_CHEST_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Chest',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_CHEST_INPUTS,
  outputSchema: BODY_Q_CHEST_OUTPUT,
  calculate: ({ data }) => {
    const scoredValues = [
      data.BODY_Q_CHEST_Q01, data.BODY_Q_CHEST_Q02, data.BODY_Q_CHEST_Q03,
      data.BODY_Q_CHEST_Q04, data.BODY_Q_CHEST_Q05, data.BODY_Q_CHEST_Q06,
      data.BODY_Q_CHEST_Q07, data.BODY_Q_CHEST_Q08, data.BODY_Q_CHEST_Q09,
      data.BODY_Q_CHEST_Q10,
    ]
    const score = calculateRaschScore(scoredValues, CONVERSION_TABLE)
    return {
      BODY_Q_CHEST_SCORE: score,
      BODY_Q_CHEST_SCAR_ITEM: data.BODY_Q_CHEST_Q11_SCAR ?? null,
    }
  },
}
