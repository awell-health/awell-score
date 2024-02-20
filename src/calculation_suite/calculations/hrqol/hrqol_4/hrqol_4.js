// @flow
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType
} from '../../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { HRQOL_4_INPUTS, HRQOL_4_OUTPUT } from './definition'

const get_answer =
  (input_id: string) => (calculation_input: Array<InputType>) =>
    R.compose(
      (answer) => (is_numeric(answer) ? answer : MISSING_MESSAGE),
      (answer) => Number(answer),
      (input) => input?.raw_input_value,
      R.find((input) => input.input_id === input_id)
    )(calculation_input)

const calculate_hrqol_scores = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => {
  const general_health_answer = get_answer('HRQOL_4_Q01')(calculation_input)
  const unhealthy_physical_days = get_answer('HRQOL_4_Q02')(calculation_input)
  const unhealthy_mental_days = get_answer('HRQOL_4_Q03')(calculation_input)
  const activity_limitation_days = get_answer('HRQOL_4_Q04')(calculation_input)

  let sum_unhealthy_days = MISSING_MESSAGE

  if (
    is_numeric(unhealthy_physical_days) ||
    is_numeric(unhealthy_mental_days)
  ) {
    sum_unhealthy_days = 0

    if (is_numeric(unhealthy_physical_days)) {
      sum_unhealthy_days += unhealthy_physical_days
    }

    if (is_numeric(unhealthy_mental_days)) {
      sum_unhealthy_days += unhealthy_mental_days
    }

    const MAX_NUMBER_OF_UNHEALTHY_DAYS = 30
    sum_unhealthy_days =
      Number(sum_unhealthy_days) > MAX_NUMBER_OF_UNHEALTHY_DAYS
        ? MAX_NUMBER_OF_UNHEALTHY_DAYS
        : sum_unhealthy_days
  }

  let sum_healthy_days = MISSING_MESSAGE

  if (typeof sum_unhealthy_days === 'number') {
    const DAYS_IN_MONTH = 30
    sum_healthy_days = DAYS_IN_MONTH - sum_unhealthy_days
  }

  return [
    {
      id: 'HRQOL_4_GENERAL_HEALTH_STATUS',
      score: general_health_answer
    },
    {
      id: 'HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS',
      score: unhealthy_physical_days
    },
    {
      id: 'HRQOL_4_MENTALLY_UNHEALTHY_DAYS',
      score: unhealthy_mental_days
    },
    {
      id: 'HRQOL_4_ACTIVITY_LIMITATION_DAYS',
      score: activity_limitation_days
    },
    {
      id: 'HRQOL_4_UNHEALTHY_DAYS_INDEX',
      score: sum_unhealthy_days
    },
    {
      id: 'HRQOL_4_HEALTHY_DAYS_INDEX',
      score: sum_healthy_days
    }
  ]
}

export const specific_steps_hrqol_4_calc = [
  calculate_hrqol_scores,
  add_raw_values_to_inputs(HRQOL_4_INPUTS)
]

export const hrqol_4: CalculationType = create_calculation({
  calculation_name: 'Health-Related Quality of Life (HRQOL–4)',
  readme_location: __dirname,
  calculation_steps: specific_steps_hrqol_4_calc,
  calculation_definition: {
    input_definition: HRQOL_4_INPUTS,
    output_definition: HRQOL_4_OUTPUT
  }
})
