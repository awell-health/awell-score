import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { FND_INPUTS, FND_INTERPRATION_TABLE, FND_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'FAGERSTROM_TOTAL_SCORE',
      score: total_score,
    },
    {
      id: 'FAGERSTROM_DEPENDENCE_LEVEL',
      score: FND_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_fnd_calc = [
  calculate_score,
  add_raw_values_to_inputs(FND_INPUTS),
]

export const fnd: CalculationType = create_calculation({
  calculation_name: 'Fagerstrom Test for Nicotine Dependence (FND)',
  readme_location: __dirname,
  calculation_steps: specific_steps_fnd_calc,
  calculation_definition: {
    input_definition: FND_INPUTS,
    output_definition: FND_OUTPUT,
  },
})
