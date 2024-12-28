import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { OMPQ_10_INPUTS, OMPQ_10_OUTPUT } from './definition'

const calculate_ompq_10_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input)) {
    const POSITIVE_RESULT_CUT_OFF = 49
    const total_score = R.sum(get_valid_values(calculation_input))
    const result_is_positive = total_score > POSITIVE_RESULT_CUT_OFF
    const readable_result = result_is_positive
      ? `Positive score (Score > ${POSITIVE_RESULT_CUT_OFF})`
      : `Negative score (Score <= ${POSITIVE_RESULT_CUT_OFF})`

    return [
      {
        id: 'OREBRO',
        score: R.sum(get_valid_values(calculation_input)),
        interpretation: { en: `${readable_result}` },
      },
    ]
  }

  return [
    {
      id: 'OREBRO',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_ompq_10_calc = [
  calculate_ompq_10_score,
  add_raw_values_to_inputs(OMPQ_10_INPUTS),
]

export const ompq_10: CalculationType = create_calculation({
  calculation_name: `Orebro Musculoskeletal Pain Questionnaire - Short form (OMPQ-10)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ompq_10_calc,
  calculation_definition: {
    input_definition: OMPQ_10_INPUTS,
    output_definition: OMPQ_10_OUTPUT,
  },
})
