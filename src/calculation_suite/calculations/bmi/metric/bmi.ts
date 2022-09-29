/* eslint-disable no-magic-numbers */
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
} from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { BMI_INPUTS, BMI_OUTPUT } from './definition'

const CALCULATION_ID = 'BMI'

const calculate_BMI = (
  bmi_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(bmi_inputs_with_answers)) {
    const numeric_weight_in_kg = R.compose(
      weight => Number(weight),
      R.view(rawInputValueLens),
      R.find(input => R.view(inputIdLens, input) === 'weight')
    )(bmi_inputs_with_answers)

    const numeric_height_in_cm = R.compose(
      height => Number(height),
      R.view(rawInputValueLens),
      R.find(input => R.view(inputIdLens, input) === 'height')
    )(bmi_inputs_with_answers)

    const numeric_height_in_m = numeric_height_in_cm / 100
    const BMI = numeric_weight_in_kg / numeric_height_in_m ** 2

    return [
      {
        id: CALCULATION_ID,
        score: BMI,
      },
    ]
  }

  return [
    {
      id: CALCULATION_ID,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_BMI_calc = [
  calculate_BMI,
  add_raw_values_to_inputs(BMI_INPUTS),
]

export const bmi: CalculationType = create_calculation({
  calculation_name: 'BMI (metric)',
  readme_location: __dirname,
  calculation_steps: specific_steps_BMI_calc,
  calculation_definition: {
    input_definition: BMI_INPUTS,
    output_definition: BMI_OUTPUT,
  },
})
