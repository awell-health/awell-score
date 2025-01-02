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
import { PHQ2_INPUTS, PHQ2_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  if (valid_inputs.length !== PHQ2_INPUTS.length)
    return [
      {
        id: 'PHQ2_SCORE',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    {
      id: 'PHQ2_SCORE',
      score: R.sum(valid_inputs),
    },
  ]
}

export const specific_steps_phq_2_calc = [
  calculate_score,
  add_raw_values_to_inputs(PHQ2_INPUTS),
]

export const phq_2: CalculationType = create_calculation({
  calculation_name: 'Patient Health Questionnaire‐2 (PHQ‐2)',
  readme_location: __dirname,
  calculation_steps: specific_steps_phq_2_calc,
  calculation_definition: {
    input_definition: PHQ2_INPUTS,
    output_definition: PHQ2_OUTPUT,
  },
})
