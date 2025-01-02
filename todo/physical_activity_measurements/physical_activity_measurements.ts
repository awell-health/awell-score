import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../lib/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PA_INPUTS, PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT } from './definition'
import { are_sufficient_answers_provided } from './validation/are_sufficient_answers_provided'

const add_interpretation = (
  wip_calculation_result: WIPCalculationResultType,
): WIPCalculationResultType => {
  const LOWER_LIMIT_PA_IN_MINUTES_PER_WEEK = 150
  const LOWER_LIMIT_PA_IN_MET_MINUTES_PER_WEEK = 600

  const is_criteria_met = (
    calculation_id: string,
    comparison: 'gt' | 'geq',
    lower_limit: number,
  ) =>
    R.compose(
      score => {
        switch (comparison) {
          case 'gt': {
            //@ts-expect-error to do
            return score > lower_limit
          }

          case 'geq': {
            //@ts-expect-error to do
            return score >= lower_limit
          }

          default: {
            return false
          }
        }
      },
      //@ts-expect-error to do
      R.view(R.lensProp('score')),
      R.find(R.propEq('id', calculation_id)),
    )

  const add_interpretation_score_to_wip_results =
    //@ts-expect-error to do
    (score: number) => wip_results => [
      ...wip_results,
      {
        id: 'ENOUGH_PA',
        score,
      },
    ]

  const SCORE_CRITERIA_MET = 1
  const SCORE_CRITERIA_NOT_MET = 0

  const has_sufficient_pa_minutes = is_criteria_met(
    'PA_MINUTES_PER_WEEK',
    'gt',
    LOWER_LIMIT_PA_IN_MINUTES_PER_WEEK,
  )
  const has_sufficient_pa_met_minutes = is_criteria_met(
    'PA_MET_MINUTES_PER_WEEK',
    'geq',
    LOWER_LIMIT_PA_IN_MET_MINUTES_PER_WEEK,
  )

  const if_result_meets_any_criteria = R.either(
    has_sufficient_pa_minutes,
    has_sufficient_pa_met_minutes,
  )

  return if_result_meets_any_criteria(wip_calculation_result)
    ? add_interpretation_score_to_wip_results(SCORE_CRITERIA_MET)(
        wip_calculation_result,
      )
    : add_interpretation_score_to_wip_results(SCORE_CRITERIA_NOT_MET)(
        wip_calculation_result,
      )
}

const calculate_physical_activity_measurement_score = (
  PA_INPUTS_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  if (!are_sufficient_answers_provided(PA_INPUTS_with_answers)) {
    return [
      {
        id: 'PA_MINUTES_PER_WEEK',
        score: MISSING_MESSAGE,
      },
      {
        id: 'PA_MET_MINUTES_PER_WEEK',
        score: MISSING_MESSAGE,
      },
      {
        id: 'ENOUGH_PA',
        score: MISSING_MESSAGE,
      },
    ]
  }

  const MET_LIGHT_PA = 3.3
  const MET_MODERATE_PA = 4
  const MET_VIGOROUS_PA = 8

  //@ts-expect-error to do
  const get_answer = input_id =>
    R.compose(
      R.defaultTo(0),
      answer => Number(answer),
      R.view(rawInputValueLens),
      R.find(q => R.view(inputIdLens, q) === input_id),
    )(PA_INPUTS_with_answers)

  const multiply = (answers: Array<number>) => R.product(answers)

  const calculate_total_amount_of_physical_activity_in_minutes_per_week =
    () => {
      const MODERATE_PA_WEIGHT = 2

      const MODERATE_PA = multiply([
        get_answer('MODERATE_PA_DAYS_PER_WEEK'),
        get_answer('MODERATE_PA_MINUTES_PER_DAY'),
        MODERATE_PA_WEIGHT,
      ])

      const VIGOROUS_PA = multiply([
        get_answer('VIGOROUS_PA_DAYS_PER_WEEK'),
        get_answer('VIGOROUS_PA_MINUTES_PER_DAY'),
      ])

      return R.sum([MODERATE_PA, VIGOROUS_PA])
    }

  const calculate_total_amount_of_physical_activity_in_MET_minutes_per_week =
    () => {
      const MET_MINUTES_PER_WEEK_OF_LIGHT_PA = multiply([
        MET_LIGHT_PA,
        get_answer('LIGHT_PA_DAYS_PER_WEEK'),
        get_answer('LIGHT_PA_MINUTES_PER_DAY'),
      ])

      const MET_MINUTES_PER_WEEK_OF_MODERATE_PA = multiply([
        MET_MODERATE_PA,
        get_answer('MODERATE_PA_DAYS_PER_WEEK'),
        get_answer('MODERATE_PA_MINUTES_PER_DAY'),
      ])

      const MET_MINUTES_PER_WEEK_OF_VIGOROUS_PA = multiply([
        MET_VIGOROUS_PA,
        get_answer('VIGOROUS_PA_DAYS_PER_WEEK'),
        get_answer('VIGOROUS_PA_MINUTES_PER_DAY'),
      ])

      return R.sum([
        MET_MINUTES_PER_WEEK_OF_LIGHT_PA,
        MET_MINUTES_PER_WEEK_OF_MODERATE_PA,
        MET_MINUTES_PER_WEEK_OF_VIGOROUS_PA,
      ])
    }

  return add_interpretation([
    {
      id: 'PA_MINUTES_PER_WEEK',
      score: calculate_total_amount_of_physical_activity_in_minutes_per_week(),
    },
    {
      id: 'PA_MET_MINUTES_PER_WEEK',
      score:
        calculate_total_amount_of_physical_activity_in_MET_minutes_per_week(),
    },
  ])
}

export const specific_steps_physical_activity_measurement_calc = [
  calculate_physical_activity_measurement_score,
  add_raw_values_to_inputs(PA_INPUTS),
]

export const physical_activity_measurement: CalculationType =
  create_calculation({
    calculation_name: 'Physical Activity Measurement',
    readme_location: __dirname,
    calculation_steps: specific_steps_physical_activity_measurement_calc,
    calculation_definition: {
      input_definition: PA_INPUTS,
      output_definition: PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT,
    },
  })
