import { ScoreType } from '../../../../types'
import { BODY_Q_MEDICAL_TEAM_INPUTS, BODY_Q_MEDICAL_TEAM_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 12, 12: 17, 13: 21, 14: 24, 15: 27, 16: 29, 17: 31, 18: 34,
  19: 36, 20: 38, 21: 40, 22: 42, 23: 44, 24: 46, 25: 48, 26: 50, 27: 53,
  28: 55, 29: 58, 30: 61, 31: 64, 32: 66, 33: 69, 34: 72, 35: 75, 36: 78,
  37: 82, 38: 86, 39: 92, 40: 100,
}

export const body_q_medical_team: ScoreType<typeof BODY_Q_MEDICAL_TEAM_INPUTS, typeof BODY_Q_MEDICAL_TEAM_OUTPUT> = {
  name: 'BODY-Q Satisfaction with Medical Team',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_MEDICAL_TEAM_INPUTS,
  outputSchema: BODY_Q_MEDICAL_TEAM_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_MEDICAL_TEAM_SCORE: score }
  },
}
