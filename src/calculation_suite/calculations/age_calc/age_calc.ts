/* eslint-disable no-magic-numbers */
import moment from 'moment'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { AGE_CALC_INPUTS, AGE_CALC_OUTPUT } from './definition'

const CALCULATION_ID = 'AGE'

const calculate_age = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const dob = R.compose(
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === 'date_of_birth')
  )(inputs_with_answers)

  if (R.isNil(dob) || R.isEmpty(dob))
    return [
      {
        id: CALCULATION_ID,
        score: MISSING_MESSAGE,
      },
    ]

  const dobMoment = moment(dob, moment.ISO_8601)

  const age = moment().diff(dobMoment, 'years')

  return [
    {
      id: CALCULATION_ID,
      score: age,
    },
  ]
}

export const specific_steps_age_calc = [
  calculate_age,
  add_raw_values_to_inputs(AGE_CALC_INPUTS),
]

export const age_calc: CalculationType = create_calculation({
  calculation_name: 'Age Calculator',
  readme_location: __dirname,
  calculation_steps: specific_steps_age_calc,
  calculation_definition: {
    input_definition: AGE_CALC_INPUTS,
    output_definition: AGE_CALC_OUTPUT,
  },
})
