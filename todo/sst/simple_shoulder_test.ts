import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { SST_INPUTS, SST_OUTPUT } from './definition'

const calculate_sccai_score = (
  calculation_input: Array<InputType>,
): WIPCalculationResultType => {
  const valid_answered_inputs = get_valid_values(calculation_input)

  if (valid_answered_inputs.length === 0)
    return [
      {
        id: 'SST',
        score: MISSING_MESSAGE,
      },
    ]

  const TOTAL_AMOUNT_OF_INPUTS = 12
  const CONVERT_TO_PERCENTAGE = 100
  const ROUND_TO = 2

  return [
    {
      id: 'SST',
      score: round(
        (R.sum(valid_answered_inputs) / TOTAL_AMOUNT_OF_INPUTS) *
          CONVERT_TO_PERCENTAGE,
        ROUND_TO,
      ),
    },
  ]
}

export const specific_steps_sst_calc = [
  calculate_sccai_score,
  add_raw_values_to_inputs(SST_INPUTS),
]

export const simple_shoulder_test: CalculationType = create_calculation({
  calculation_name: 'Simple Shoulder Test (SST)',
  readme_location: __dirname,
  calculation_steps: specific_steps_sst_calc,
  calculation_definition: {
    input_definition: SST_INPUTS,
    output_definition: SST_OUTPUT,
  },
})
