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
 * The answer values of question 16 and 18 have to be standardized
 */
const RAW_ANSWER_TO_VALUE_DICT: Record<string, number> = {
  '0': 0,
  '1': 1, // 1a
  '2': 1, // 1b
  '3': 2, // 2a
  '4': 2, // 2b
  '5': 3, // 3a
  '6': 3, // 3b
}

const preprocess_beck_response = (
  beck_inputs_with_answers: Array<InputType>
): Array<InputType> => {
  const QUESTIONS_TO_PREPROCESS = ['Q16', 'Q18']

  return R.map((input: InputType) => {
    if (QUESTIONS_TO_PREPROCESS.includes(input.input_id)) {
      const value_in_dict =
        RAW_ANSWER_TO_VALUE_DICT[String(input.raw_input_value)]

      return {
        ...input,
        raw_input_value: value_in_dict,
      }
    }

    return input
  })(beck_inputs_with_answers)
}

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
