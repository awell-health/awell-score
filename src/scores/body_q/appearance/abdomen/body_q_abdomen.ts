import { ScoreType } from '../../../../types'
import { BODY_Q_ABDOMEN_INPUTS, BODY_Q_ABDOMEN_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  7: 0, 8: 7, 9: 14, 10: 19, 11: 23, 12: 28, 13: 32, 14: 35, 15: 39,
  16: 43, 17: 46, 18: 50, 19: 55, 20: 60, 21: 65, 22: 70, 23: 74, 24: 78,
  25: 82, 26: 87, 27: 93, 28: 100,
}

export const body_q_abdomen: ScoreType<
  typeof BODY_Q_ABDOMEN_INPUTS,
  typeof BODY_Q_ABDOMEN_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Abdomen',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_ABDOMEN_INPUTS,
  outputSchema: BODY_Q_ABDOMEN_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_ABDOMEN_SCORE: score }
  },
}
