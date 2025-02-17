import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { OKS_INPUTS, OKS_OUTPUT } from './definition'

const calculate_oxford_knee_score = (
  calculation_input: Array<InputType>,
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: 'OXFORD_KNEE_SCORE',
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: 'OXFORD_KNEE_SCORE',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_oxford_knee_score_calc = [
  calculate_oxford_knee_score,
  add_raw_values_to_inputs(OKS_INPUTS),
]

export const oxford_knee_score: CalculationType = create_calculation({
  calculation_name: `Oxford Knee Score (OKS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_oxford_knee_score_calc,
  calculation_definition: {
    input_definition: OKS_INPUTS,
    output_definition: OKS_OUTPUT,
  },
})
