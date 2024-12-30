import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../src/types/calculations.types'
import { inputIdLens } from '../../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { get_domain_value } from '../common/get_domain_value'
import { calculate_be_utility_value } from './calculate_utility_values/Belgium/calculate_be_utility_value'
import { EQ5D_5L_INPUTS, EQ5D_5L_OUTPUT } from './definition'

const ALLOWED_DOMAIN_SCORES = [1, 2, 3, 4, 5]

const calculate_eq5d_5l_score = (
  calculation_input: Array<InputType>,
): WIPCalculationResultType => {
  const HEALTH_STATE_QUESTIONS = [
    'eq5d_5l_mobility',
    'eq5d_5l_selfcare',
    'eq5d_5l_usual',
    'eq5d_5l_pain',
    'eq5d_5l_anxiety',
  ]

  const calculation_input_eq5d_health_state = R.filter(
    input => HEALTH_STATE_QUESTIONS.includes(R.view(inputIdLens, input)),
    calculation_input,
  )

  const calculation_input_eq_5d_vas = R.filter(
    input => R.view(inputIdLens, input) === 'eq5d_5l_vas',
    calculation_input,
  )

  let EQ5D_HEALTH_STATE = MISSING_MESSAGE
  let EQ5D_VAS = MISSING_MESSAGE
  let UTILITY_VALUE_HEALTH_STATE_BELGIUM = MISSING_MESSAGE

  const healthStateValues = get_valid_values(
    calculation_input_eq5d_health_state,
  )

  if (
    healthStateValues.every(value => ALLOWED_DOMAIN_SCORES.includes(value)) &&
    healthStateValues.length === HEALTH_STATE_QUESTIONS.length
  ) {
    const mobilityHealthState = get_domain_value('eq5d_5l_mobility')(
      calculation_input_eq5d_health_state,
    )
    const selfCareHealthState = get_domain_value('eq5d_5l_selfcare')(
      calculation_input_eq5d_health_state,
    )
    const usualActivitiesHealthState = get_domain_value('eq5d_5l_usual')(
      calculation_input_eq5d_health_state,
    )
    const painHealthState = get_domain_value('eq5d_5l_pain')(
      calculation_input_eq5d_health_state,
    )
    const anxietyHealthState = get_domain_value('eq5d_5l_anxiety')(
      calculation_input_eq5d_health_state,
    )

    /**
     * EQ Health State:
     * The digits/answers of the five dimensions can be combined (joined) in a
     * 5-digit code that describes the respondent’s health state;
     */
    //@ts-expect-error to do
    EQ5D_HEALTH_STATE = Number(
      [
        mobilityHealthState,
        selfCareHealthState,
        usualActivitiesHealthState,
        painHealthState,
        anxietyHealthState,
      ].join(''),
    )

    UTILITY_VALUE_HEALTH_STATE_BELGIUM =
      //@ts-expect-error to do
      calculate_be_utility_value(EQ5D_HEALTH_STATE)
  }

  if (do_all_required_inputs_have_a_valid_value(calculation_input_eq_5d_vas)) {
    /**
     * R.head is used since calculation_input_eq_5d_vas is an array.
     * In this array, however, there's only one item (Question "eq5d_vas").
     */
    //@ts-expect-error to do
    EQ5D_VAS = R.head(get_valid_values(calculation_input_eq_5d_vas))
  }

  return [
    {
      id: 'EQ_HEALTH_STATE',
      score: EQ5D_HEALTH_STATE,
    },
    {
      id: 'EQ_VAS',
      score: EQ5D_VAS,
    },
    {
      id: 'UTILITY_VALUE_HEALTH_STATE_BELGIUM',
      score: UTILITY_VALUE_HEALTH_STATE_BELGIUM,
    },
  ]
}

export const specific_steps_eq5d_5l_calc = [
  calculate_eq5d_5l_score,
  add_raw_values_to_inputs(EQ5D_5L_INPUTS),
]

export const eq5d_5l: CalculationType = create_calculation({
  calculation_name: `EQ-5D-5L`,
  readme_location: __dirname,
  calculation_steps: specific_steps_eq5d_5l_calc,
  calculation_definition: {
    input_definition: EQ5D_5L_INPUTS,
    output_definition: EQ5D_5L_OUTPUT,
  },
})
