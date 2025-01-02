import { PDQ_8_INPUTS, PDQ_8_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const pdq_8: ScoreType<typeof PDQ_8_INPUTS, typeof PDQ_8_OUTPUT> = {
  name: "Parkinson's Disease Questionnaire-8 (PDQ-8)",
  readmeLocation: __dirname,
  inputSchema: PDQ_8_INPUTS,
  outputSchema: PDQ_8_OUTPUT,
  calculate: ({ data }) => {
    const MAX_SCORE = 32
    const score = _.sum(Object.values(data))
    const percentage = (score / MAX_SCORE) * 100

    return {
      PDQ_8: Math.round(percentage),
    }
  },
}
