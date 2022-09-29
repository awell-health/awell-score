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
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import {
  IBD_CONTROL_INPUTS,
  IBD_CONTROL_OUTPUT,
  NO_TREATMENT,
} from './definition'

const IBD_CONTROL_8_CALCULATION_NAME = 'IBD_CONTROL_8'
const IBD_CONTROL_VAS_CALCULATION_NAME = 'IBD_CONTROL_VAS'

/**
 * Input ibd_control_1b: no treatment (999) must be replaced with value 1.
 * This can't be done in form itself since there's already an answer with that value.
 */
const recode_input_ibd_control_1b = (
  calculation_input: Array<InputType>
): Array<InputType> =>
  R.map(input => {
    const input_id = R.view(inputIdLens, input)
    const answer = R.view(rawInputValueLens, input)

    if (input_id === 'ibd_control_1b') {
      if (Number(answer) === NO_TREATMENT) {
        return R.set(rawInputValueLens, 1, input)
      }

      return input
    }

    return input
  }, calculation_input)

const calculate_ibd_control_8_and_vas_score = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const IBD_CONTROL_8_QUESTIONS = [
    'ibd_control_1a',
    'ibd_control_1b',
    'ibd_control_3a',
    'ibd_control_3b',
    'ibd_control_3c',
    'ibd_control_3d',
    'ibd_control_3e',
    'ibd_control_3f',
  ]

  const calclation_input_ibd_control_8_score = R.filter(
    input => IBD_CONTROL_8_QUESTIONS.includes(R.view(inputIdLens, input)),
    calculation_input
  )

  // We only need "ibd_control_5" (VAS)
  const calclation_input_ibd_control_vas_score = R.filter(
    input => R.view(inputIdLens, input) === 'ibd_control_5',
    calculation_input
  )

  let IBD_CONTROL_8_SCORE = MISSING_MESSAGE
  let IBD_CONTROL_VAS = MISSING_MESSAGE

  if (
    do_all_required_inputs_have_a_valid_value(
      calclation_input_ibd_control_8_score
    )
  ) {
    //@ts-expect-error to do
    IBD_CONTROL_8_SCORE = R.sum(
      get_valid_values(calclation_input_ibd_control_8_score)
    )
  }

  if (
    do_all_required_inputs_have_a_valid_value(
      calclation_input_ibd_control_vas_score
    )
  ) {
    //@ts-expect-error to do
    IBD_CONTROL_VAS = R.head(
      get_valid_values(calclation_input_ibd_control_vas_score)
    )
  }

  return [
    {
      id: IBD_CONTROL_VAS_CALCULATION_NAME,
      score: IBD_CONTROL_VAS,
    },
    {
      id: IBD_CONTROL_8_CALCULATION_NAME,
      score: IBD_CONTROL_8_SCORE,
    },
  ]
}

export const specific_steps_ibd_control_calc = [
  calculate_ibd_control_8_and_vas_score,
  recode_input_ibd_control_1b,
  add_raw_values_to_inputs(IBD_CONTROL_INPUTS),
]

export const IBD_control: CalculationType = create_calculation({
  calculation_name: 'IBD-Control',
  readme_location: __dirname,
  calculation_steps: specific_steps_ibd_control_calc,
  calculation_definition: {
    input_definition: IBD_CONTROL_INPUTS,
    output_definition: IBD_CONTROL_OUTPUT,
  },
})
