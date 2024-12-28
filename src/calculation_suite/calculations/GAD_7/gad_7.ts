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
import { GAD7_INPUTS, GAD7_INTERPRATION_TABLE, GAD7_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== GAD7_INPUTS.length)
    return [
      {
        id: 'GAD7_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'GAD7_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'GAD7_SCORE',
      score: total_score,
    },
    {
      id: 'GAD7_INTERPRETATION',
      score: GAD7_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_gad_7_calc = [
  calculate_score,
  add_raw_values_to_inputs(GAD7_INPUTS),
]

export const gad_7: CalculationType = create_calculation({
  calculation_name: 'Generalised Anxiety Disorder Assessment (GAD-7)',
  readme_location: __dirname,
  calculation_steps: specific_steps_gad_7_calc,
  calculation_definition: {
    input_definition: GAD7_INPUTS,
    output_definition: GAD7_OUTPUT,
  },
})
