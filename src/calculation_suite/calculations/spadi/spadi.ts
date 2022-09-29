import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_response_values_to_subscale_inputs } from '../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { SPADI_OUTPUT, SPADI_SUBSCALES } from './definition'
import { add_score_to_subscale } from './helpers/add_score_to_subscale'

export const calculate_spadi_subscales = (
  calculation_input: IncomingCalculationInputType
): Array<SubscaleType> =>
  R.compose(
    R.map(add_score_to_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(SPADI_SUBSCALES)

export const calculate_spadi_total_score = (
  spadi_subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const total_score = R.compose(
    R.defaultTo(MISSING_MESSAGE),
    R.mean,
    //@ts-expect-error to do
    R.map(subscale => subscale.score)
  )(spadi_subscales_with_scores)

  return [
    ...spadi_subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: total_score,
    },
  ]
}

export const specific_steps_spadi_calc = [
  calculate_spadi_total_score,
  calculate_spadi_subscales,
]

export const spadi: CalculationType = create_calculation({
  calculation_name: 'Shoulder Pain and Disability Index (SPADI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_spadi_calc,
  calculation_definition: {
    input_definition: SPADI_SUBSCALES,
    output_definition: SPADI_OUTPUT,
  },
})
