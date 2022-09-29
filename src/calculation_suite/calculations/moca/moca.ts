import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { scoreLens } from '../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { MOCA_OUTPUT, MOCA_SCALES } from './definition'
import {
  add_std_answer_to_inputs_in_subscale,
  calculate_score_for_each_scale,
} from './helpers'

const calculate_moca_scale_scores = (
  calculation_input: IncomingCalculationInputType
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_scale),
    R.map(add_std_answer_to_inputs_in_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(MOCA_SCALES)

const add_total_score = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const valid_scale_scores = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(scale => R.view(scoreLens, scale))
  )(subscales_with_scores)

  if (valid_scale_scores.length === 0) {
    return [
      ...subscales_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'TOTAL',
        score: MISSING_MESSAGE,
      },
    ]
  }

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: R.sum(valid_scale_scores),
    },
  ]
}

export const specific_steps_moca_calc = [
  add_total_score,
  calculate_moca_scale_scores,
]

export const moca: CalculationType = create_calculation({
  calculation_name: 'Montreal Cognitive Assessment (MOCA)',
  readme_location: __dirname,
  calculation_steps: specific_steps_moca_calc,
  calculation_definition: {
    input_definition: MOCA_SCALES,
    output_definition: MOCA_OUTPUT,
  },
})
