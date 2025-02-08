import { ScoreType } from '../../types'
import {
  IIEF5_OUTPUT,
  IIEF5_INPUTS,
  IIEF5_INTERPRATION_TABLE,
} from './definition'
import { sum } from 'lodash'

export const iief5: ScoreType<typeof IIEF5_INPUTS, typeof IIEF5_OUTPUT> = {
  name: 'The International Index of Erectile Function (IIEF-5)',
  readmeLocation: __dirname,
  inputSchema: IIEF5_INPUTS,
  outputSchema: IIEF5_OUTPUT,
  calculate: ({ data }) => {
    const valid_data = Object.values(data).filter(v => v !== undefined)

    if (valid_data.length === 0) {
      return {
        IIEF5_TOTAL_SCORE: null,
        IIEF5_INTERPRETATION: null,
      }
    }

    const score = sum(valid_data)

    return {
      IIEF5_TOTAL_SCORE: score,
      IIEF5_INTERPRETATION: IIEF5_INTERPRATION_TABLE[score.toString()],
    }
  },
}
