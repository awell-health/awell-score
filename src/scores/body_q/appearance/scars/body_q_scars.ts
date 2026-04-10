import { ScoreType } from '../../../../types'
import { BODY_Q_SCARS_INPUTS, BODY_Q_SCARS_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 10, 12: 18, 13: 23, 14: 26, 15: 30, 16: 32, 17: 35, 18: 37,
  19: 39, 20: 41, 21: 43, 22: 45, 23: 46, 24: 48, 25: 50, 26: 51, 27: 53,
  28: 55, 29: 57, 30: 59, 31: 61, 32: 63, 33: 65, 34: 68, 35: 71, 36: 74,
  37: 78, 38: 83, 39: 90, 40: 100,
}

export const body_q_scars: ScoreType<
  typeof BODY_Q_SCARS_INPUTS,
  typeof BODY_Q_SCARS_OUTPUT
> = {
  name: 'BODY-Q Appraisal of Body Contouring Scars',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_SCARS_INPUTS,
  outputSchema: BODY_Q_SCARS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_SCARS_SCORE: score }
  },
}
