import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { PSQI_INPUT, PSQI_OUTPUT } from './definition'
import {
  calculate_daytime_dysfunction,
  calculate_habitual_sleep_efficiency,
  calculate_sleep_disturbance,
  calculate_sleep_duration,
  calculate_sleep_latency,
  calculate_subscale_scores,
} from './helpers'

/**
 * Function to find object by ID
 */
function findObjectById(
  idToFind: string,
  dataArray: InputType[],
): InputType | null {
  return R.find(R.propEq('input_id', String(idToFind)), dataArray) ?? null
}

const calculate_scores = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const SLEEP_LATENCY = calculate_sleep_latency(inputs_with_answers)
  const SLEEP_DISTURBANCES = calculate_sleep_disturbance(inputs_with_answers)
  const SLEEP_DURATION = calculate_sleep_duration(inputs_with_answers)
  const DAYTIME_DYSFUNCTION = calculate_daytime_dysfunction(inputs_with_answers)
  const HABITUAL_SLEEP_EFFICIENCY =
    calculate_habitual_sleep_efficiency(inputs_with_answers)

  const SUBJECTIVE_SLEEP_QUALITY = findObjectById(
    'Q09',
    inputs_with_answers,
  )?.raw_input_value

  const USE_OF_SLEEPING_MEDICATION = calculate_subscale_scores(
    inputs_with_answers,
    'USE_OF_SLEEPING_MEDICATION',
  )

  const valid_subscale_scores = R.compose(
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.filter(score => score !== MISSING_MESSAGE),
  )([
    SUBJECTIVE_SLEEP_QUALITY,
    SLEEP_LATENCY,
    SLEEP_DURATION,
    HABITUAL_SLEEP_EFFICIENCY,
    SLEEP_DISTURBANCES,
    USE_OF_SLEEPING_MEDICATION,
    DAYTIME_DYSFUNCTION,
  ])

  const TOTAL_SCORE =
    valid_subscale_scores.length === 0
      ? MISSING_MESSAGE
      : R.sum(valid_subscale_scores)

  return [
    {
      id: 'PSQI_TOTAL_SCORE',
      score: TOTAL_SCORE,
    },
    {
      id: 'SUBJECTIVE_SLEEP_QUALITY',
      score: SUBJECTIVE_SLEEP_QUALITY,
    },
    {
      id: 'SLEEP_DURATION',
      score: SLEEP_DURATION,
    },
    {
      id: 'SLEEP_LATENCY',
      score: SLEEP_LATENCY,
    },
    {
      id: 'HABITUAL_SLEEP_EFFICIENCY',
      score: HABITUAL_SLEEP_EFFICIENCY,
    },
    {
      id: 'SLEEP_DISTURBANCES',
      score: SLEEP_DISTURBANCES,
    },
    {
      id: 'USE_OF_SLEEPING_MEDICATION',
      score: USE_OF_SLEEPING_MEDICATION,
    },
    {
      id: 'DAYTIME_DYSFUNCTION',
      score: DAYTIME_DYSFUNCTION,
    },
  ]
}

const specific_steps_psqi_calc = [
  calculate_scores,
  add_raw_values_to_inputs(PSQI_INPUT),
]

export const psqi: CalculationType = create_calculation({
  calculation_name: 'Pittsburg Sleep Quality Index (PSQI)',
  readme_location: __dirname,
  calculation_steps: specific_steps_psqi_calc,
  calculation_definition: {
    input_definition: PSQI_INPUT,
    output_definition: PSQI_OUTPUT,
  },
})
