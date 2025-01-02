import _ from 'lodash'
import { BLCS_INPUTS, BLCS_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const blcs: ScoreType<typeof BLCS_INPUTS, typeof BLCS_OUTPUT> = {
  name: 'Bladder Control Scale (BLCS)',
  readmeLocation: __dirname,
  inputSchema: BLCS_INPUTS,
  outputSchema: BLCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(d => d !== undefined)

    if (valid_answers.length === 0) return { BLCS_TOTAL_SCORE: null }

    return {
      BLCS_TOTAL_SCORE: _.sum(valid_answers),
    }
  },
}
