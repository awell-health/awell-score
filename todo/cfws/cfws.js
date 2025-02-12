/* eslint-disable no-magic-numbers */
// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { CFWS_INPUTS, CFWS_OUTPUT, CFWS_SCORE_CATEGORY } from './definition'

const calculate_cfws = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const valid_inputs = R.compose(
    R.filter(is_numeric),
    R.map((input) => R.view(rawInputValueLens, input))
  )(calculation_input)

  if (valid_inputs.length === 0) {
    return [
      {
        id: 'CFWS_SCORE',
        score: MISSING_MESSAGE
      },
      {
        id: 'CFWS_INTERPRETATION',
        score: MISSING_MESSAGE
      }
    ]
  }

  const sum = R.sum(valid_inputs)
  const getInterpretation = (score: number) => {
    if (score >= 52) {
      return CFWS_SCORE_CATEGORY.AVERAGE
    }

    if (score >= 43) {
      return CFWS_SCORE_CATEGORY.LITTLE_LOWER
    }

    return CFWS_SCORE_CATEGORY.LOT_LOWER
  }

  return [
    {
      id: 'CFWS_SCORE',
      score: R.sum(valid_inputs)
    },
    {
      id: 'CFWS_INTERPRETATION',
      score: getInterpretation(sum)
    }
  ]
}

export const specific_steps_cfws_calc = [
  calculate_cfws,
  add_raw_values_to_inputs(CFWS_INPUTS)
]

export const cfws: CalculationType = create_calculation({
  calculation_name: `Catalight Family Wellbeing Scale (CFWS)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_cfws_calc,
  calculation_definition: {
    input_definition: CFWS_INPUTS,
    output_definition: CFWS_OUTPUT
  }
})
