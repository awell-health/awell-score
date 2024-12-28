import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { SCCAI_OUTPUT } from './definition'
import { SCCAI_INPUTS } from './definition/sccai_inputs'

const CALCULATION_NAME = 'SCCAI'

const calculate_sccai_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(calculation_input))
    return [
      {
        id: CALCULATION_NAME,
        score: R.sum(get_valid_values(calculation_input)),
      },
    ]

  return [
    {
      id: CALCULATION_NAME,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_sccai_calc = [
  calculate_sccai_score,
  add_raw_values_to_inputs(SCCAI_INPUTS),
]

export const sccai: CalculationType = create_calculation({
  calculation_name: 'Simple Clinical Colitis Activity Index (SCCAI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_sccai_calc,
  calculation_definition: {
    input_definition: SCCAI_INPUTS,
    output_definition: SCCAI_OUTPUT,
  },
})
