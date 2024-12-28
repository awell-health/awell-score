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
import { NDI_INPUTS, NDI_OUTPUT } from './definition'

export const NDI_CALCULATION_ID = 'NDI'

const calculate_ndi_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const MIN_AMOUNT_OF_ANSWERS_NEEDED = 9

  const valid_answers = get_valid_values(calculation_input)

  if (valid_answers.length < MIN_AMOUNT_OF_ANSWERS_NEEDED)
    return [
      {
        id: NDI_CALCULATION_ID,
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
      id: NDI_CALCULATION_ID,
      score: R.compose(
        percentage => Math.round(percentage),
        calculate_percentage_score,
        R.sum
      )(valid_answers),
    },
  ]
}

export const specific_steps_ndi_calc = [
  calculate_ndi_score,
  add_raw_values_to_inputs(NDI_INPUTS),
]

export const ndi: CalculationType = create_calculation({
  calculation_name: `Neck Disability Index (NDI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ndi_calc,
  calculation_definition: {
    input_definition: NDI_INPUTS,
    output_definition: NDI_OUTPUT,
  },
})
