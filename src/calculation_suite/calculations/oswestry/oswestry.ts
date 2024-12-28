import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { OSWESTRY_INPUTS, OSWESTRY_OUTPUT } from './definition'

export const OSWESTRY_CALCULATION_ID = 'OSWESTRY'

const calculate_oswestry_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const MIN_AMOUNT_OF_ANSWERS_NEEDED = 9

  const valid_answers = get_valid_values(calculation_input)

  if (valid_answers.length < MIN_AMOUNT_OF_ANSWERS_NEEDED)
    return [
      {
        id: OSWESTRY_CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
    ]

  //@ts-expect-error to do
  const calculate_percentage_score = sum => {
    const MAX_ANSWER = 5
    const MAX_SCORE = valid_answers.length * MAX_ANSWER
    return (sum / MAX_SCORE) * 100
  }

  return [
    {
      id: OSWESTRY_CALCULATION_ID,
      score: R.compose(
        percentage => Math.round(percentage),
        calculate_percentage_score,
        R.sum
      )(valid_answers),
    },
  ]
}

export const specific_steps_oswestry_calc = [
  calculate_oswestry_score,
  add_raw_values_to_inputs(OSWESTRY_INPUTS),
]

export const oswestry: CalculationType = create_calculation({
  calculation_name: `Oswestry`,
  readme_location: __dirname,
  calculation_steps: specific_steps_oswestry_calc,
  calculation_definition: {
    input_definition: OSWESTRY_INPUTS,
    output_definition: OSWESTRY_OUTPUT,
  },
})
