import { sum, round } from 'lodash'
import { ScoreType } from '../../types'
import { BASDAI_OUTPUT, BASDAI_INPUTS } from './definition'

export const basdai: ScoreType<typeof BASDAI_INPUTS, typeof BASDAI_OUTPUT> = {
  name: 'Bath Ankylosing Spondylitis Disease Activity Index (BASDAI)',
  readmeLocation: __dirname,
  inputSchema: BASDAI_INPUTS,
  outputSchema: BASDAI_OUTPUT,
  calculate: ({ data }) => {
    const PART_A = [data.Q1, data.Q2, data.Q3, data.Q4]

    const PART_A_SCORE = sum(PART_A)

    const PART_B = [data.Q5, data.Q6]

    const PART_B_SCORE = sum(PART_B) / 2

    const ROUND_TO = 2
    const TOTAL_SCORE = round((PART_A_SCORE + PART_B_SCORE) / 5, ROUND_TO)

    return {
      BASDAI_TOTAL_SCORE: TOTAL_SCORE,
    }
  },
}
