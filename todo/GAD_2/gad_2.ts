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
  GAD2_INPUTS,
  GAD2_INTERPRETATION_TABLE,
  GAD2_OUTPUT,
} from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  if (valid_inputs.length !== GAD2_INPUTS.length)
    return [
      {
        id: 'GAD2_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'GAD2_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'GAD2_SCORE',
      score: total_score,
    },
    {
      id: 'GAD2_INTERPRETATION',
      score: GAD2_INTERPRETATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_gad_2_calc = [
  calculate_score,
  add_raw_values_to_inputs(GAD2_INPUTS),
]

export const gad_2: CalculationType = create_calculation({
  calculation_name: 'Generalised Anxiety Disorder Assessment (GAD-2)',
  readme_location: __dirname,
  calculation_steps: specific_steps_gad_2_calc,
  calculation_definition: {
    input_definition: GAD2_INPUTS,
    output_definition: GAD2_OUTPUT,
  },
})
