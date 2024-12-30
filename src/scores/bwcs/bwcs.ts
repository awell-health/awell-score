import _ from 'lodash'
import { is_numeric } from '../../lib/shared'
import { BWCS_INPUTS, BWCS_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const bwcs: ScoreType<typeof BWCS_INPUTS, typeof BWCS_OUTPUT> = {
  name: 'Bowel Control Scale (BWCS)',
  readme_location: __dirname,
  inputSchema: BWCS_INPUTS,
  outputSchema: BWCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(is_numeric)

    if (valid_answers.length === 0) return { BWCS_TOTAL_SCORE: null }

    return {
      BWCS_TOTAL_SCORE: _.sum(valid_answers),
    }
  },
}
