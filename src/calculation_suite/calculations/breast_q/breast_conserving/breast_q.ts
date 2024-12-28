import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { add_response_values_to_subscale_inputs } from '../../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../lib/create_calculation'
import { BREAST_Q_OUTPUT, BREAST_Q_SUBSCALES } from './definition'
import {
  add_raw_subscale_score,
  recode_raw_answers,
  transform_raw_subscale_score_to_transformed_score,
} from './helpers'

const calculate_breast_q_scale_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const subscales_with_scores = R.compose(
    R.map(transform_raw_subscale_score_to_transformed_score),
    R.map(add_raw_subscale_score),
    R.map(recode_raw_answers),
    add_response_values_to_subscale_inputs(calculation_input)
  )(BREAST_Q_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_breast_q_calc = [calculate_breast_q_scale_scores]

export const breast_q: CalculationType = create_calculation({
  calculation_name:
    'BREAST-Q Version 2.0 Breast Conserving Therapy Module Pre- and Postoperative Scales',
  readme_location: __dirname,
  calculation_steps: specific_steps_breast_q_calc,
  calculation_definition: {
    input_definition: BREAST_Q_SUBSCALES,
    output_definition: BREAST_Q_OUTPUT,
  },
})
