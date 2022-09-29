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
import { GHQ_12_INPUTS, GHQ_12_OUTPUT } from './definition'

const calculate_ghq_12_score = (
  ghq_12_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(ghq_12_inputs_with_answers)

  if (valid_inputs.length === 0)
    return [
      {
        id: 'GHQ_12_SCORING',
        score: MISSING_MESSAGE,
      },
    ]

  /**
   * GHQ score is the sum of the amount of items that were scored 2 or 3
   */
  const DYSFUNCTIONAL_SCORES = [2, 3]

  const score = R.compose(
    R.length,
    //@ts-expect-error to do
    R.filter(i => DYSFUNCTIONAL_SCORES.includes(i))
  )(valid_inputs)

  return [
    {
      id: 'GHQ_12_SCORING',
      score,
    },
  ]
}

export const specific_steps_ghq_12_calc = [
  calculate_ghq_12_score,
  add_raw_values_to_inputs(GHQ_12_INPUTS),
]

export const ghq_12: CalculationType = create_calculation({
  calculation_name: `The 12-Item General Health Questionnaire (GHQ-12)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ghq_12_calc,
  calculation_definition: {
    input_definition: GHQ_12_INPUTS,
    output_definition: GHQ_12_OUTPUT,
  },
})
