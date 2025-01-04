import { PHQ4_INPUTS, PHQ4_OUTPUT, PHQ4_INTERPRATION_TABLE } from './definition'
import { ScoreType } from '../../types'

export const phq_4: ScoreType<typeof PHQ4_INPUTS, typeof PHQ4_OUTPUT> = {
  name: 'Patient Health Questionnaire-4 (PHQ-4)',
  readmeLocation: __dirname,
  inputSchema: PHQ4_INPUTS,
  outputSchema: PHQ4_OUTPUT,
  calculate: ({ data }) => {
    const anxiety_score = data.PHQ4_Q01 + data.PHQ4_Q02
    const depression_score = data.PHQ4_Q03 + data.PHQ4_Q04
    const total_score = anxiety_score + depression_score

    return {
      PHQ4_ANXIETY_SCORE: anxiety_score,
      PHQ4_ANXIETY_POSITIVE_SCREENING: anxiety_score >= 3,
      PHQ4_DEPRESSION_SCORE: depression_score,
      PHQ4_DEPRESSION_POSITIVE_SCREENING: depression_score >= 3,
      PHQ4_TOTAL_SCORE: total_score,
      PHQ4_TOTAL_SCORE_INTERPRETATION:
        PHQ4_INTERPRATION_TABLE[total_score.toString()],
    }
  },
}
