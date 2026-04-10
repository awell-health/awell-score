import { ScoreType } from '../../../../types'
import {
  BODY_Q_EXCESS_SKIN_INPUTS,
  BODY_Q_EXCESS_SKIN_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  7: 0, 8: 12, 9: 19, 10: 24, 11: 28, 12: 32, 13: 35, 14: 38, 15: 41,
  16: 44, 17: 47, 18: 50, 19: 53, 20: 57, 21: 60, 22: 64, 23: 68, 24: 73,
  25: 77, 26: 83, 27: 90, 28: 100,
}

export const body_q_excess_skin: ScoreType<
  typeof BODY_Q_EXCESS_SKIN_INPUTS,
  typeof BODY_Q_EXCESS_SKIN_OUTPUT
> = {
  name: 'BODY-Q Appraisal of Excess Skin',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_EXCESS_SKIN_INPUTS,
  outputSchema: BODY_Q_EXCESS_SKIN_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_EXCESS_SKIN_SCORE: score }
  },
}
