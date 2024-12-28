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
import { SCL90R_OUTPUT, SCL90R_SUBSCALES } from './definition'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  if (valid_subscale_answers.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  return R.set(scoreLens, R.sum(valid_subscale_answers), subscale)
}

export const calculate_scl90r_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType => {
  const subscales_with_scores = R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(SCL90R_SUBSCALES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
  ]
}

export const add_total_score = (
  wip_calculation_result: WIPCalculationResultType
): WIPCalculationResultType => {
  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    //@ts-expect-error to do
    R.map(result => result.score),
    R.defaultTo([])
  )(wip_calculation_result)

  if (valid_subscale_scores.length > 0)
    return [
      ...wip_calculation_result,
      {
        id: 'TOTAL',

        score: R.sum(valid_subscale_scores),
      },
    ]

  return [
    ...wip_calculation_result,
    {
      id: 'TOTAL',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_scl90r_calc = [
  add_total_score,
  calculate_scl90r_scores,
]

export const scl90r: CalculationType = create_calculation({
  calculation_name: 'Symptom Checklist-90-Revised (SCL-90-R)',
  readme_location: __dirname,
  calculation_steps: specific_steps_scl90r_calc,
  calculation_definition: {
    input_definition: SCL90R_SUBSCALES,
    output_definition: SCL90R_OUTPUT,
  },
})
