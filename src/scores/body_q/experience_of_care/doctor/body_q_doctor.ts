import { ScoreType } from '../../../../types'
import { BODY_Q_DOCTOR_INPUTS, BODY_Q_DOCTOR_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 15, 12: 20, 13: 24, 14: 27, 15: 29, 16: 31, 17: 33, 18: 35,
  19: 37, 20: 39, 21: 41, 22: 42, 23: 44, 24: 46, 25: 48, 26: 50, 27: 52,
  28: 54, 29: 56, 30: 58, 31: 61, 32: 63, 33: 66, 34: 69, 35: 73, 36: 77,
  37: 81, 38: 86, 39: 92, 40: 100,
}

export const body_q_doctor: ScoreType<typeof BODY_Q_DOCTOR_INPUTS, typeof BODY_Q_DOCTOR_OUTPUT> = {
  name: 'BODY-Q Satisfaction with Doctor/Surgeon',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_DOCTOR_INPUTS,
  outputSchema: BODY_Q_DOCTOR_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_DOCTOR_SCORE: score }
  },
}
