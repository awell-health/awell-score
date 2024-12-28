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
import { PCS_OUTPUT, PCS_SCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  if (valid_answers_in_subscale.length !== input_ids_in_subscale.length)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  return R.set(scoreLens, R.sum(valid_answers_in_subscale), subscale)
}

const calculate_pcs_scale_scores = (
  calculation_input: IncomingCalculationInputType
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(PCS_SCALES)

const add_total_score_or_missing_when_missing_data = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const EXPECTED_AMOUNT_OF_ANSWERS = 13

  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    //@ts-expect-error to do
    R.map(scale => scale.input_ids_in_subscale)
  )(subscales_with_scores)

  if (valid_answers.length !== EXPECTED_AMOUNT_OF_ANSWERS)
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

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'TOTAL',
      score: R.sum(valid_answers),
    },
  ]
}

export const specific_steps_pcs_calc = [
  add_total_score_or_missing_when_missing_data,
  calculate_pcs_scale_scores,
]

export const pcs: CalculationType = create_calculation({
  calculation_name: `Pain Catastrophizing Scale (PCS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_pcs_calc,
  calculation_definition: {
    input_definition: PCS_SCALES,
    output_definition: PCS_OUTPUT,
  },
})
