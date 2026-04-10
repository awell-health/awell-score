import { ScoreType } from '../../../../types'
import { BODY_Q_BUTTOCKS_INPUTS, BODY_Q_BUTTOCKS_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  5: 0, 6: 13, 7: 19, 8: 24, 9: 29, 10: 33, 11: 38, 12: 43, 13: 48,
  14: 54, 15: 63, 16: 73, 17: 80, 18: 86, 19: 93, 20: 100,
}

export const body_q_buttocks: ScoreType<
  typeof BODY_Q_BUTTOCKS_INPUTS,
  typeof BODY_Q_BUTTOCKS_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Buttocks',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_BUTTOCKS_INPUTS,
  outputSchema: BODY_Q_BUTTOCKS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_BUTTOCKS_SCORE: score }
  },
}
