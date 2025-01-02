import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { add_response_values_to_subscale_inputs } from '../../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../lib/create_calculation'
import {
  add_raw_subscale_score_if_applicable,
  add_scaled_subscale_score_based_on_raw_score,
  check_for_missing_data,
  inverse_raw_input_values_if_needed,
  round_score,
} from '../common/helpers'
import { EORTC_QLQ_C30_OUTPUT, EORTC_QLQ_C30_SCALES } from './definition'

const calculate_eortc_c30_scale_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const scale_scores = R.compose(
    round_score,
    check_for_missing_data,
    add_scaled_subscale_score_based_on_raw_score,
    add_raw_subscale_score_if_applicable({}),
    inverse_raw_input_values_if_needed,
    add_response_values_to_subscale_inputs(calculation_input)
  )(EORTC_QLQ_C30_SCALES)

  return [
    ...scale_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_eortc_qlq_c30_calc = [
  calculate_eortc_c30_scale_scores,
]

export const eortc_qlq_c30: CalculationType = create_calculation({
  calculation_name: 'EORTC-QLQ-C30',
  readme_location: __dirname,
  calculation_steps: specific_steps_eortc_qlq_c30_calc,
  calculation_definition: {
    input_definition: EORTC_QLQ_C30_SCALES,
    output_definition: EORTC_QLQ_C30_OUTPUT,
  },
})
