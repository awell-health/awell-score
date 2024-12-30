import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { add_response_values_to_subscale_inputs } from '../../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import {
  add_raw_subscale_score_if_applicable,
  add_scaled_subscale_score_based_on_raw_score,
  check_for_missing_data,
  inverse_raw_input_values_if_needed,
  round_score,
} from '../common/helpers'
import {
  ADDITIONAL_INPUTS,
  EORTC_QLQ_CR29_OUTPUT,
  EORTC_QLQ_CR29_SCALES,
} from './definition'

const calculate_eortc_cr29_scale_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const get_answer_for_additional_input = (additional_input: InputType) => {
    const input_id = R.view(inputIdLens, additional_input)
    const answer = R.compose(
      R.defaultTo(MISSING_MESSAGE),
      //@ts-expect-error to do
      R.prop(input_id)
    )(calculation_input)

    return R.set(rawInputValueLens, answer, additional_input)
  }

  const additional_input_with_answers = R.map(
    get_answer_for_additional_input,
    ADDITIONAL_INPUTS
  )

  //@ts-expect-error to do
  const scale_scores = R.compose(
    round_score,
    check_for_missing_data,
    add_scaled_subscale_score_based_on_raw_score,
    add_raw_subscale_score_if_applicable({
      additional_input: additional_input_with_answers,
    }),
    inverse_raw_input_values_if_needed,
    add_response_values_to_subscale_inputs(calculation_input)
  )(EORTC_QLQ_CR29_SCALES)

  return [
    ...scale_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_eortc_qlq_cr29_calc = [
  calculate_eortc_cr29_scale_scores,
]

export const eortc_qlq_cr29: CalculationType = create_calculation({
  calculation_name: 'EORTC-QLQ-CR29',
  readme_location: __dirname,
  calculation_steps: specific_steps_eortc_qlq_cr29_calc,
  calculation_definition: {
    input_definition: EORTC_QLQ_CR29_SCALES,
    output_definition: EORTC_QLQ_CR29_OUTPUT,
  },
  calculation_additional_inputs: ADDITIONAL_INPUTS,
})
