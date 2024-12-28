import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { PHQ9_INPUTS, PHQ9_INTERPRATION_TABLE, PHQ9_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== PHQ9_INPUTS.length)
    return [
      {
        id: 'PHQ9_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'PHQ9_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'PHQ9_SCORE',
      score: total_score,
    },
    {
      id: 'PHQ9_INTERPRETATION',
      score: PHQ9_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_phq_9_calc = [
  calculate_score,
  add_raw_values_to_inputs(PHQ9_INPUTS),
]

export const phq_9: CalculationType = create_calculation({
  calculation_name: 'Patient Health Questionnaire‐9 (PHQ‐9)',
  readme_location: __dirname,
  calculation_steps: specific_steps_phq_9_calc,
  calculation_definition: {
    input_definition: PHQ9_INPUTS,
    output_definition: PHQ9_OUTPUT,
  },
})
