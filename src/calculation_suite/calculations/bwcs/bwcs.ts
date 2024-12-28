import _ from 'lodash'
import { CalculationType } from '../../../api/shared/classes/Calculation'
import { is_numeric } from '../shared_functions'
import { InputSchema, BWCS_OUTPUT } from './definition'

export const bwcs: CalculationType<typeof InputSchema, typeof BWCS_OUTPUT> = {
  name: 'Bowel Control Scale (BWCS)',
  readme_location: __dirname,
  inputSchema: InputSchema,
  outputSchema: BWCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(is_numeric)

    if (valid_answers.length === 0) return { BWCS_TOTAL_SCORE: null }

    return {
      BWCS_TOTAL_SCORE: _.sum(valid_answers),
    }
  },
}
