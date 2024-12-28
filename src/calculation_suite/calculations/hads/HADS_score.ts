import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { HADS_OUTPUT, HADS_subscales } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  /**
   * All inputs in the subscale should be answered in order
   * to calculate a score.
   */
  if (valid_subscale_answers.length < input_ids_in_subscale.length)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  return R.set(scoreLens, R.sum(valid_subscale_answers), subscale)
}

const calculate_hads_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(HADS_subscales)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_hads_calc = [calculate_hads_scores]

export const hads: CalculationType = create_calculation({
  calculation_name: `Hospital Anxiety and Depression Scale (HADS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_hads_calc,
  calculation_definition: {
    input_definition: HADS_subscales,
    output_definition: HADS_OUTPUT,
  },
})
