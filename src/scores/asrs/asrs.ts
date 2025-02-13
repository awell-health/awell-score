import { ASRS_INPUTS, ASRS_OUTPUT } from './definition'
import { calculate_part_scores, calculate_subscale_scores } from './helpers'
import { ScoreType } from '../../types'

export const asrs: ScoreType<typeof ASRS_INPUTS, typeof ASRS_OUTPUT> = {
  name: 'Adult ADHD Self-Report Scale (ASRS-v1.1)',
  readmeLocation: __dirname,
  inputSchema: ASRS_INPUTS,
  outputSchema: ASRS_OUTPUT,
  calculate: ({ data }) => {
    const PART_A_SCORE = calculate_part_scores(data, 'PART_A')
    const PART_B_SCORE = calculate_part_scores(data, 'PART_B')
    const TOTAL_SCORE =
      PART_A_SCORE === null || PART_B_SCORE === null
        ? null
        : PART_A_SCORE + PART_B_SCORE

    const ASRS_INATTENTIVE_SUBSCALE_SCORE = calculate_subscale_scores(
      data,
      'INATTENTIVE_SUBSCALE',
    )
    const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE =
      calculate_subscale_scores(data, 'HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR')
    const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE =
      calculate_subscale_scores(data, 'HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL')

    return {
      ASRS_TOTAL_SCORE: TOTAL_SCORE,
      ASRS_PART_A_SCORE: PART_A_SCORE,
      ASRS_PART_B_SCORE: PART_B_SCORE,
      ASRS_INATTENTIVE_SUBSCALE_SCORE: ASRS_INATTENTIVE_SUBSCALE_SCORE,
      ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE:
        ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE,
      ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE:
        ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE,
    }
  },
}
