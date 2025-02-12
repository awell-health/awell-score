// @flow

import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens
} from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { PAID20_INPUTS, PAID20_INTERPRATION, PAID20_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map((input) => R.view(rawInputValueLens, input))
  )(inputs_with_answers)
  if (valid_inputs.length !== PAID20_INPUTS.length)
    return [
      {
        id: 'PAID20_SCORE',
        score: MISSING_MESSAGE
      },
      {
        id: 'PAID20_QUESTIONS_WITH_SCORE_3_OR_4',
        score: MISSING_MESSAGE
      },
      {
        id: 'PAID20_INTERPRETATION',
        score: MISSING_MESSAGE
      }
    ]

  // The scores for each item are summed, then multiplied by 1.25 to generate a total score out of 100.
  const total_score = R.sum(valid_inputs) * 1.25

  // The score has two ways of calculating the interpretation and we want to support both.
  // check readme for more details
  const questions_with_score_3_or_4 = inputs_with_answers
    .filter((input) => {
      const rawValue = R.view(rawInputValueLens, input)
      return is_numeric(rawValue) && (rawValue === 3 || rawValue === 4)
    })
    .map(
      (input) =>
        `${R.view(inputIdLens, input)}:${R.view(rawInputValueLens, input)}`
    )
    .join(',')

  return [
    {
      id: 'PAID20_SCORE',
      score: total_score
    },
    {
      id: 'PAID20_QUESTIONS_WITH_SCORE_3_OR_4',
      score: questions_with_score_3_or_4
    },
    {
      id: 'PAID20_INTERPRETATION',
      score:
        Number(total_score) >= 40
          ? PAID20_INTERPRATION.SEVERE
          : PAID20_INTERPRATION.NOT_SEVERE
    }
  ]
}

export const specific_steps_paid_20_calc = [
  calculate_score,
  add_raw_values_to_inputs(PAID20_INPUTS)
]

export const paid_20: CalculationType = create_calculation({
  calculation_name: 'Problem Areas In Diabetes (PAID) Scale',
  readme_location: __dirname,
  calculation_steps: specific_steps_paid_20_calc,
  calculation_definition: {
    input_definition: PAID20_INPUTS,
    output_definition: PAID20_OUTPUT
  }
})
