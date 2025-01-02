import { PHQ8_INPUTS, PHQ8_OUTPUT, PHQ8_INTERPRATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const phq_8: ScoreType<typeof PHQ8_INPUTS, typeof PHQ8_OUTPUT> = {
  name: 'Patient Health Questionnaire-8 (PHQ-8)',
  readmeLocation: __dirname,
  inputSchema: PHQ8_INPUTS,
  outputSchema: PHQ8_OUTPUT,
  calculate: ({ data }) => {
    const total_score = _.sum(Object.values(data))

    return {
      PHQ8_SCORE: total_score,
      PHQ8_INTERPRETATION: PHQ8_INTERPRATION_TABLE[total_score.toString()],
    }
  },
}
