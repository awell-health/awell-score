import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  inputTypeLens,
  stdInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { scoreLens } from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import {
  add_response_values_to_subscale_inputs,
  add_standardized_values_to_subscale_inputs,
} from '../../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { SF12_OUTPUT, SF12_SUBSCALES } from './definition'
import { SF12_CONVERSION_TABLE } from './sf12_conversion_table'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const allowed_answers = R.compose(
    R.prop('allowed_answers'),
    R.view(inputTypeLens),
    R.head
  )(input_ids_in_subscale)

  const non_missing_raw_subscale_values = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(stdInputValueLens, input))
  )(input_ids_in_subscale)

  if (non_missing_raw_subscale_values.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const raw_subscale_score = R.sum(non_missing_raw_subscale_values)

  //@ts-expect-error to do
  const calculate_transformed_scale_score = raw_score => {
    const lowest_possible_raw_score =
      //@ts-expect-error to do
      Math.min(...allowed_answers.map(a => a.value)) *
      input_ids_in_subscale.length

    const highest_possible_raw_score =
      //@ts-expect-error to do
      Math.max(...allowed_answers.map(a => a.value)) *
      input_ids_in_subscale.length

    const possible_raw_score_range =
      highest_possible_raw_score - lowest_possible_raw_score

    const ROUND_TO = 2

    return round(
      ((raw_score - lowest_possible_raw_score) / possible_raw_score_range) *
        // eslint-disable-next-line no-magic-numbers
        100,
      ROUND_TO
    )
  }

  return R.set(
    scoreLens,
    calculate_transformed_scale_score(raw_subscale_score),
    subscale
  )
}

export const calculate_sf12_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const readable_calculation_name = 'SF12'

  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_standardized_values_to_subscale_inputs({
      standardization_table: SF12_CONVERSION_TABLE,
      readable_calculation_name,
    }),
    add_response_values_to_subscale_inputs(calculation_input)
  )(SF12_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const specific_steps_sf12_calc = [calculate_sf12_scores]

export const sf12: CalculationType = create_calculation({
  calculation_name: '12-Item Short Form Survey (SF12)',
  readme_location: __dirname,
  calculation_steps: specific_steps_sf12_calc,
  calculation_definition: {
    input_definition: SF12_SUBSCALES,
    output_definition: SF12_OUTPUT,
  },
})
