import { ScoreType } from '../../../../types'
import {
  BODY_Q_STRETCH_MARKS_INPUTS,
  BODY_Q_STRETCH_MARKS_OUTPUT,
} from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 9, 12: 15, 13: 19, 14: 23, 15: 26, 16: 29, 17: 31, 18: 34,
  19: 36, 20: 39, 21: 41, 22: 43, 23: 45, 24: 47, 25: 49, 26: 51, 27: 53,
  28: 56, 29: 58, 30: 61, 31: 63, 32: 66, 33: 69, 34: 72, 35: 75, 36: 78,
  37: 82, 38: 86, 39: 92, 40: 100,
}

export const body_q_stretch_marks: ScoreType<
  typeof BODY_Q_STRETCH_MARKS_INPUTS,
  typeof BODY_Q_STRETCH_MARKS_OUTPUT
> = {
  name: 'BODY-Q Appraisal of Stretch Marks',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_STRETCH_MARKS_INPUTS,
  outputSchema: BODY_Q_STRETCH_MARKS_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_STRETCH_MARKS_SCORE: score }
  },
}
