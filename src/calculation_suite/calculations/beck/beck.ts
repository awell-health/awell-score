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
import { BECK_INPUTS, BECK_OUTPUT } from './definition'

export const BeckCalculationID = 'beck'

/**
 * Input 16 and 18 have different answer options.
 * These answer options need to be converted to the corresponding value.
 */
const RAW_ANSWER_TO_VALUE_DICT = {
  '1a': 1,
  '1b': 1,
  '2a': 2,
  '2b': 2,
  '3a': 3,
  '3b': 3,
}

const preprocess_beck_response = (
  beck_inputs_with_answers: Array<InputType>
): Array<InputType> =>
  //@ts-expect-error to do
  R.map((input: InputType) => {
    const raw_answer_value = R.prop('raw_input_value', input)

    //@ts-expect-error to do
    const value_in_dict = R.prop(raw_answer_value, RAW_ANSWER_TO_VALUE_DICT)

    if (value_in_dict)
      return {
        ...input,
        raw_input_value: value_in_dict,
      }

    return input
  })(beck_inputs_with_answers)

const calculate_beck_score = (
  beck_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(beck_inputs_with_answers)) {
    const total_score = R.sum(get_valid_values(beck_inputs_with_answers))

    return [
      {
        id: BeckCalculationID,
        score: total_score,
      },
    ]
  }

  return [
    {
      id: BeckCalculationID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_beck_calc = [
  calculate_beck_score,
  preprocess_beck_response,
  add_raw_values_to_inputs(BECK_INPUTS),
]

export const beck: CalculationType = create_calculation({
  calculation_name: 'Beck Depression Inventory (BDI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_beck_calc,
  calculation_definition: {
    input_definition: BECK_INPUTS,
    output_definition: BECK_OUTPUT,
  },
})
