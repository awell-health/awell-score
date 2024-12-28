import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import { stdInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import {
  add_response_values_to_subscale_inputs,
  add_standardized_values_to_subscale_inputs,
} from '../../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { SF36_OUTPUT, SF36_SUBSCALES } from './definition'
import { SF36_CONVERSION_TABLE } from './sf36_conversion_table'

const calculate_score_for_each_subscale = (
  subscales: Array<SubscaleType>
): Array<SubscaleType> =>
  R.map((subscale: SubscaleType) => {
    const { input_ids_in_subscale } = subscale

    const subscale_score = R.compose(
      R.defaultTo(MISSING_MESSAGE),
      R.mean,
      R.filter(is_numeric),
      R.map(raw_value => Number(raw_value)),
      R.map(input => R.view(stdInputValueLens, input))
    )(input_ids_in_subscale)

    const ROUND_TO = 2

    return R.set(
      scoreLens,
      typeof subscale_score === 'number'
        ? round(subscale_score, ROUND_TO)
        : subscale_score,
      subscale
    )
  })(subscales)

export const calculate_sf36_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const readable_calculation_name = 'SF36'

  const subscales_with_scores = R.compose(
    calculate_score_for_each_subscale,
    add_standardized_values_to_subscale_inputs({
      standardization_table: SF36_CONVERSION_TABLE,
      readable_calculation_name,
    }),
    add_response_values_to_subscale_inputs(calculation_input)
  )(SF36_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_sf36_calc = [calculate_sf36_scores]

export const sf36: CalculationType = create_calculation({
  calculation_name: '36-Item Short Form Survey (SF36)',
  readme_location: __dirname,
  calculation_steps: specific_steps_sf36_calc,
  calculation_definition: {
    input_definition: SF36_SUBSCALES,
    output_definition: SF36_OUTPUT,
  },
})
