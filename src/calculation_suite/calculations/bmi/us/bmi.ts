/* eslint-disable no-magic-numbers */
import { round } from 'mathjs'
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
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { BMI_INPUTS, BMI_OUTPUT } from './definition'

const CALCULATION_ID = 'BMI'
const FEET_TO_INCHES_FACTOR = 12
const US_BMI_FACTOR = 703

const calculate_BMI = (
  bmi_inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const weight_in_pounds = R.compose(
    R.defaultTo(0),
    weight => Number(weight),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'weight_pounds')
  )(bmi_inputs_with_answers)

  const height_in_feet = R.compose(
    R.defaultTo(0),
    height => Number(height),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'height_feet')
  )(bmi_inputs_with_answers)

  const height_in_inches = R.compose(
    R.defaultTo(0),
    height => Number(height),
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'height_inches')
  )(bmi_inputs_with_answers)

  const total_height_in_inches =
    height_in_feet * FEET_TO_INCHES_FACTOR + height_in_inches

  if (total_height_in_inches === 0 || weight_in_pounds === 0) {
    return [
      {
        id: CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
    ]
  }

  const BMI = (weight_in_pounds / total_height_in_inches ** 2) * US_BMI_FACTOR
  const ROUND_TO = 2
  const ROUNDED_BMI = round(BMI, ROUND_TO)

  return [
    {
      id: CALCULATION_ID,
      score: ROUNDED_BMI,
    },
  ]
}

export const specific_steps_BMI_calc = [
  calculate_BMI,
  add_raw_values_to_inputs(BMI_INPUTS),
]

export const bmi: CalculationType = create_calculation({
  calculation_name: 'BMI (imperial)',
  readme_location: __dirname,
  calculation_steps: specific_steps_BMI_calc,
  calculation_definition: {
    input_definition: BMI_INPUTS,
    output_definition: BMI_OUTPUT,
  },
})
