import { ScoreType } from '../../../../types'
import { BODY_Q_OFFICE_STAFF_INPUTS, BODY_Q_OFFICE_STAFF_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 13, 12: 18, 13: 22, 14: 25, 15: 27, 16: 30, 17: 32, 18: 33,
  19: 35, 20: 37, 21: 39, 22: 41, 23: 43, 24: 45, 25: 47, 26: 49, 27: 52,
  28: 54, 29: 57, 30: 60, 31: 63, 32: 66, 33: 69, 34: 72, 35: 75, 36: 79,
  37: 82, 38: 87, 39: 92, 40: 100,
}

export const body_q_office_staff: ScoreType<typeof BODY_Q_OFFICE_STAFF_INPUTS, typeof BODY_Q_OFFICE_STAFF_OUTPUT> = {
  name: 'BODY-Q Satisfaction with Office Staff',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_OFFICE_STAFF_INPUTS,
  outputSchema: BODY_Q_OFFICE_STAFF_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_OFFICE_STAFF_SCORE: score }
  },
}
