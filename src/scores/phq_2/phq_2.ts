import { PHQ2_INPUTS, PHQ2_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const phq_2: ScoreType<typeof PHQ2_INPUTS, typeof PHQ2_OUTPUT> = {
  name: 'Patient Health Questionnaire-2 (PHQ-2)',
  readmeLocation: __dirname,
  inputSchema: PHQ2_INPUTS,
  outputSchema: PHQ2_OUTPUT,
  calculate: ({ data }) => {
    return {
      PHQ2_SCORE: data.PHQ2_Q01 + data.PHQ2_Q02,
    }
  },
}
