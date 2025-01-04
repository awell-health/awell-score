import { sum } from 'lodash'
import { BWCS_INPUTS, BWCS_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const bwcs: ScoreType<typeof BWCS_INPUTS, typeof BWCS_OUTPUT> = {
  name: 'Bowel Control Scale (BWCS)',
  readmeLocation: __dirname,
  inputSchema: BWCS_INPUTS,
  outputSchema: BWCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(d => d !== undefined)

    if (valid_answers.length === 0) return { BWCS_TOTAL_SCORE: null }

    return {
      BWCS_TOTAL_SCORE: sum(valid_answers),
    }
  },
}
