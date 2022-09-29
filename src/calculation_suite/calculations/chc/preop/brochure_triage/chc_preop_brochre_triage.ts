import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../../helper_functions/create_calculation'
import { INPUTS, INTERVENTION_CODES, OUTPUT } from './definition'

const BROCHURE = 1
const NO_BROCHURE = 0

const calculate = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const intervention_code = R.compose(
    R.defaultTo(undefined),
    weight => Number(weight),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'INTERVENTION_CODE')
  )(inputs_with_answers)

  if (!intervention_code)
    return [
      {
        id: 'CHC_PREOP_TRIAGE_OUTCOME',
        score: NO_BROCHURE,
      },
    ]

  const findCode = INTERVENTION_CODES.find(code => code === intervention_code)

  if (findCode)
    return [
      {
        id: 'CHC_PREOP_TRIAGE_OUTCOME',
        score: BROCHURE,
        interpretation: { en: 'Intervention code with brochure' },
      },
    ]

  return [
    {
      id: 'CHC_PREOP_TRIAGE_OUTCOME',
      score: NO_BROCHURE,
      interpretation: { en: 'Intervention code without brochure' },
    },
  ]
}

export const specific_steps_calc = [calculate, add_raw_values_to_inputs(INPUTS)]

export const chc_preop_brochure_triage: CalculationType = create_calculation({
  calculation_name: 'CHC - Preop - Intervention Code Brochure Triage',
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: INPUTS,
    output_definition: OUTPUT,
  },
})
