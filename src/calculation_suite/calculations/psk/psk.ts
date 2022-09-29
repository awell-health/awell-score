import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PSK_INPUTS, PSK_OUTPUT } from './definition'

export const PSK_SUM_CALCULATION_ID = 'PSK_SUM_OF_ACTIVITY_SCORES'
export const PSK_NBR_OF_ACTIVITIES_CALCULATION_ID = 'PSK_NBR_OF_ACTIVITIES'
export const PSK_SORE_CALCULATION_ID = 'PSK_SCORE'

const calculate_psk_score = (
  PSK_INPUTS_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_answers = get_valid_values(PSK_INPUTS_with_answers)

  if (valid_answers.length === 0)
    return [
      {
        id: PSK_SUM_CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
      {
        id: PSK_NBR_OF_ACTIVITIES_CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
      {
        id: PSK_SORE_CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
    ]

  const sum = R.sum(valid_answers)
  const nbr_of_activities = valid_answers.length
  const psk_score = sum / nbr_of_activities

  return [
    {
      id: PSK_SUM_CALCULATION_ID,
      score: sum,
    },
    {
      id: PSK_NBR_OF_ACTIVITIES_CALCULATION_ID,
      score: nbr_of_activities,
    },
    {
      id: PSK_SORE_CALCULATION_ID,
      score: psk_score,
    },
  ]
}

export const specific_steps_psk_official_calc = [
  calculate_psk_score,
  add_raw_values_to_inputs(PSK_INPUTS),
]

export const psk: CalculationType = create_calculation({
  calculation_name: 'Patiënt Specifieke Klachten (PSK)',
  readme_location: __dirname,
  calculation_steps: specific_steps_psk_official_calc,
  calculation_definition: {
    input_definition: PSK_INPUTS,
    output_definition: PSK_OUTPUT,
  },
})
