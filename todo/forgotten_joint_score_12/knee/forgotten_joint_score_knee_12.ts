import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../src/types/calculations.types'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { FJS_KNEE_INPUTS, FJS_KNEE_OUTPUT } from './definition'

const calculate_fjs_12_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_answer_values = get_valid_values(inputs_with_answers)
  const MAX_INVALID_ANSWERS = 4
  const TOTAL_AMOUNT_OF_QUESTIONS = 12

  const nbr_of_valid_answered_questions = valid_answer_values.length
  const nbr_of_invalid_answered_questions =
    TOTAL_AMOUNT_OF_QUESTIONS - nbr_of_valid_answered_questions

  /**
   * If more than four of the answers are missing then the
   * total score should be treated as missing.
   */
  if (nbr_of_invalid_answered_questions > MAX_INVALID_ANSWERS)
    return [
      {
        id: 'FORGOTTEN_JOINT_SCORE_KNEE',
        score: MISSING_MESSAGE,
      },
    ]

  /**
   * In case of missing answers (<= 4), the mean of the answered items is used
   * instead of the sum of all items and multiplied by 12 (i.e. the missing values are
   * replaced with the mean of the completed items).
   */
  let wip_score

  if (nbr_of_valid_answered_questions === TOTAL_AMOUNT_OF_QUESTIONS) {
    wip_score = R.sum(valid_answer_values)
  } else {
    wip_score = R.mean(valid_answer_values) * 12
  }

  const fjs_score = ((wip_score - 12) / 48) * 100

  /**
   * 0 = worst outcome
   * 100 = best ourcome
   */
  const reversed_fjs_score = 100 - fjs_score

  return [
    {
      id: 'FORGOTTEN_JOINT_SCORE_KNEE',
      score: Math.round(reversed_fjs_score),
    },
  ]
}

export const specific_steps_fjs_12_knee_calc = [
  calculate_fjs_12_score,
  add_raw_values_to_inputs(FJS_KNEE_INPUTS),
]

export const forgotten_joint_score_knee: CalculationType = create_calculation({
  calculation_name: 'Forgotten Joint Score – 12 (FJS-12) - Knee',
  readme_location: __dirname,
  calculation_steps: specific_steps_fjs_12_knee_calc,
  calculation_definition: {
    input_definition: FJS_KNEE_INPUTS,
    output_definition: FJS_KNEE_OUTPUT,
  },
})
