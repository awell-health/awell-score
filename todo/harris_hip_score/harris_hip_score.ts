import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { HARRIS_HIP_SCORE_INPUTS, HARRIS_HIP_SCORE_OUTPUT } from './definition'
import {
  calculate_deformity_score,
  calculate_pain_and_function_score,
  calculate_range_of_motion_score,
} from './helpers'

const calculate_ess_score = (
  inputs_with_answer_values: Array<InputType>,
): WIPCalculationResultType => {
  const { pain_score, function_score } = calculate_pain_and_function_score(
    inputs_with_answer_values,
  )
  const deformity_score = calculate_deformity_score(inputs_with_answer_values)

  const range_of_motion_score = calculate_range_of_motion_score(
    inputs_with_answer_values,
  )

  const harris_hip_score_summands = R.filter(
    score => !R.isNil(score),
    [pain_score, function_score, range_of_motion_score],
  )

  const harris_hip_score =
    harris_hip_score_summands.length === 0
      ? MISSING_MESSAGE
      : // Deformity score shouldn't be included in the length check, that's why we add it here

        //@ts-expect-error to do
        R.sum([...harris_hip_score_summands, deformity_score])

  return [
    {
      id: 'RANGE_OF_MOTION_SCORE',
      score: R.isNil(range_of_motion_score)
        ? MISSING_MESSAGE
        : range_of_motion_score,
    },
    {
      id: 'HARRIS_HIP_SCORE',
      score: harris_hip_score,
    },
  ]
}

export const specific_steps_harris_hip_score_calc = [
  calculate_ess_score,
  add_raw_values_to_inputs(HARRIS_HIP_SCORE_INPUTS),
]

export const harris_hip_score: CalculationType = create_calculation({
  calculation_name: `Harris Hip Score`,
  readme_location: __dirname,
  calculation_steps: specific_steps_harris_hip_score_calc,
  calculation_definition: {
    input_definition: HARRIS_HIP_SCORE_INPUTS,
    output_definition: HARRIS_HIP_SCORE_OUTPUT,
  },
})
