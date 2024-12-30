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
  CHA2DS2_VASC_SCORE_INPUTS,
  CHA2DS2_VASC_SCORE_OUTPUT,
} from './definition'

const calculate_points = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_with_answers)

  if (valid_inputs.length === 0)
    return [
      {
        id: 'CHA2DS2_VASC_SCORE',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    {
      id: 'CHA2DS2_VASC_SCORE',
      score: R.sum(valid_inputs),
    },
  ]
}

export const specific_steps_cha2ds2_vasc_score_calc = [
  calculate_points,
  add_raw_values_to_inputs(CHA2DS2_VASC_SCORE_INPUTS),
]

export const CHA2DS2_VASc_Score: CalculationType = create_calculation({
  calculation_name: 'CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk',
  readme_location: __dirname,
  calculation_steps: specific_steps_cha2ds2_vasc_score_calc,
  calculation_definition: {
    input_definition: CHA2DS2_VASC_SCORE_INPUTS,
    output_definition: CHA2DS2_VASC_SCORE_OUTPUT,
  },
})
