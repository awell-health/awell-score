import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { PHQ8_INPUTS, PHQ8_INTERPRATION_TABLE, PHQ8_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== PHQ8_INPUTS.length)
    return [
      {
        id: 'PHQ8_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'PHQ8_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'PHQ8_SCORE',
      score: total_score,
    },
    {
      id: 'PHQ8_INTERPRETATION',
      score: PHQ8_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_phq_8_calc = [
  calculate_score,
  add_raw_values_to_inputs(PHQ8_INPUTS),
]

export const phq_8: CalculationType = create_calculation({
  calculation_name: 'Patient Health Questionnaire‐8 (PHQ‐8)',
  readme_location: __dirname,
  calculation_steps: specific_steps_phq_8_calc,
  calculation_definition: {
    input_definition: PHQ8_INPUTS,
    output_definition: PHQ8_OUTPUT,
  },
})
