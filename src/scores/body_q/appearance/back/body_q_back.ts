import { ScoreType } from '../../../../types'
import { BODY_Q_BACK_INPUTS, BODY_Q_BACK_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  4: 0, 
  5: 8, 
  6: 15, 
  7: 22, 
  8: 33, 
  9: 42, 
  10: 48, 
  11: 54, 
  12: 66, 
  13: 81,
  14: 87, 
  15: 94, 
  16: 100,
}

export const body_q_back: ScoreType<
  typeof BODY_Q_BACK_INPUTS,
  typeof BODY_Q_BACK_OUTPUT
> = {
  name: 'BODY-Q Satisfaction with Back',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_BACK_INPUTS,
  outputSchema: BODY_Q_BACK_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_BACK_SCORE: score }
  },
}
