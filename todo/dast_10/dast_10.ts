import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import {
  DAST10_INPUTS,
  DAST10_INTERPRATION_TABLE,
  DAST10_OUTPUT,
} from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  if (valid_inputs.length === 0)
    return [
      {
        id: 'DAST10_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'DAST10_DEGREE_OF_PROBLEMS',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'DAST10_SCORE',
      score: total_score,
    },
    {
      id: 'DAST10_DEGREE_OF_PROBLEMS',
      score: DAST10_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_dast_10_calc = [
  calculate_score,
  add_raw_values_to_inputs(DAST10_INPUTS),
]

export const dast_10: CalculationType = create_calculation({
  calculation_name: 'Drug Abuse Screening Test (DAST-10)',
  readme_location: __dirname,
  calculation_steps: specific_steps_dast_10_calc,
  calculation_definition: {
    input_definition: DAST10_INPUTS,
    output_definition: DAST10_OUTPUT,
  },
})
