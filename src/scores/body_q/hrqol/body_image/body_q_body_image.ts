import { ScoreType } from '../../../../types'
import { BODY_Q_BODY_IMAGE_INPUTS, BODY_Q_BODY_IMAGE_OUTPUT } from './definition'
import { calculateRaschScore } from '../../shared/helpers'

const CONVERSION_TABLE: Record<number, number> = {
  7: 0,
  8: 10,
  9: 17,
  10: 22,
  11: 27,
  12: 31,
  13: 35,
  14: 38,
  15: 41,
  16: 44,
  17: 47,
  18: 50,
  19: 54,
  20: 57,
  21: 61,
  22: 65,
  23: 69,
  24: 74,
  25: 79,
  26: 85,
  27: 92,
  28: 100,
}

export const body_q_body_image: ScoreType<
  typeof BODY_Q_BODY_IMAGE_INPUTS,
  typeof BODY_Q_BODY_IMAGE_OUTPUT
> = {
  name: 'BODY-Q Body Image',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_BODY_IMAGE_INPUTS,
  outputSchema: BODY_Q_BODY_IMAGE_OUTPUT,
  calculate: ({ data }) => {
    const score = calculateRaschScore(Object.values(data), CONVERSION_TABLE)
    return { BODY_Q_BODY_IMAGE_SCORE: score }
  },
}
