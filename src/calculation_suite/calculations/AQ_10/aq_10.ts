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
import { AQ10_INPUTS, AQ10_OUTPUT } from './definition'

const calculate_score = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== AQ10_INPUTS.length)
    return [
      {
        id: 'AQ10_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'AQ10_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'AQ10_SCORE',
      score: total_score,
    },
    {
      id: 'AQ10_INTERPRETATION',
      score:
        'If the individual scores 6 or above, consider referring them for a specialist diagnostic assessment.',
    },
  ]
}

export const specific_steps_aq_10_calc = [
  calculate_score,
  add_raw_values_to_inputs(AQ10_INPUTS),
]

export const aq_10: CalculationType = create_calculation({
  calculation_name:
    'Autism Spectrum Quotient (AQ) - Adolescent Version - (AQ-10)',
  readme_location: __dirname,
  calculation_steps: specific_steps_aq_10_calc,
  calculation_definition: {
    input_definition: AQ10_INPUTS,
    output_definition: AQ10_OUTPUT,
  },
})
