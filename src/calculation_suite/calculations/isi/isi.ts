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
import { ISI_INPUTS, ISI_INTERPRATION_TABLE, ISI_OUTPUT } from './definition'

const calculate_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_inputs.length !== ISI_INPUTS.length)
    return [
      {
        id: 'ISI_TOTAL_SCORE',
        score: MISSING_MESSAGE,
      },
      {
        id: 'ISI_INTERPRETATION',
        score: MISSING_MESSAGE,
      },
    ]

  const total_score = R.sum(valid_inputs)

  return [
    {
      id: 'ISI_TOTAL_SCORE',
      score: total_score,
    },
    {
      id: 'ISI_INTERPRETATION',
      score: ISI_INTERPRATION_TABLE[total_score.toString()],
    },
  ]
}

export const specific_steps_isi_calc = [
  calculate_scores,
  add_raw_values_to_inputs(ISI_INPUTS),
]

export const isi: CalculationType = create_calculation({
  calculation_name: 'Insomnia Severity Index (ISI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_isi_calc,
  calculation_definition: {
    input_definition: ISI_INPUTS,
    output_definition: ISI_OUTPUT,
  },
})
