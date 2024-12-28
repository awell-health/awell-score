import _ from 'lodash'
import { CalculationType } from '../../../api/shared/classes/Calculation'
import { is_numeric } from '../shared_functions'
import { InputSchema, BLCS_OUTPUT } from './definition'

export const blcs: CalculationType<typeof InputSchema, typeof BLCS_OUTPUT> = {
  name: 'Bladder Control Scale (BLCS)',
  readme_location: __dirname,
  inputSchema: InputSchema,
  outputSchema: BLCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(is_numeric)

    if (valid_answers.length === 0) return { BLCS_TOTAL_SCORE: null }

    return {
      BLCS_TOTAL_SCORE: _.sum(valid_answers),
    }
  },
}
