import { PHQ9_INPUTS, PHQ9_OUTPUT, PHQ9_INTERPRATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const phq_9: ScoreType<typeof PHQ9_INPUTS, typeof PHQ9_OUTPUT> = {
  name: 'Patient Health Questionnaire-9 (PHQ-9)',
  readmeLocation: __dirname,
  inputSchema: PHQ9_INPUTS,
  outputSchema: PHQ9_OUTPUT,
  calculate: ({ data }) => {
    const total_score = _.sum(Object.values(data))

    return {
      PHQ9_SCORE: total_score,
      PHQ9_INTERPRETATION: PHQ9_INTERPRATION_TABLE[total_score.toString()],
    }
  },
}
