import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { CPDI_INPUTS, CPDI_OUTPUT } from './definition'

export const CPDICalculationName = 'CPDI'

const calculate_cpdi_score = (
  CPDI_INPUTS_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(CPDI_INPUTS_with_answers)) {
    const raw_score = R.sum(get_valid_values(CPDI_INPUTS_with_answers))
    const MAX_SCORE_PER_QUESTION = 4

    const MAX_SCORE = CPDI_INPUTS.length * MAX_SCORE_PER_QUESTION

    //@ts-expect-error to do
    const total_score = R.compose(
      score => Math.round(score),
      R.multiply(100),
      sum_of_answers => R.divide(sum_of_answers, MAX_SCORE)
    )(raw_score)

    return [
      {
        id: CPDICalculationName,
        score: total_score,
      },
    ]
  }

  return [
    {
      id: CPDICalculationName,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_cpdi_calc = [
  calculate_cpdi_score,
  add_raw_values_to_inputs(CPDI_INPUTS),
]

export const cpdi: CalculationType = create_calculation({
  calculation_name: `COVID-19 Peritraumatic Distress Index (CPDI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_cpdi_calc,
  calculation_definition: {
    input_definition: CPDI_INPUTS,
    output_definition: CPDI_OUTPUT,
  },
})
