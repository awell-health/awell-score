import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  add_raw_values_to_inputs,
  get_valid_values,
} from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import {
  TEN_METER_WALK_TEST_INPUTS,
  TEN_METER_WALK_TEST_OUTPUT,
} from './definition'

const calculate_scores = (
  questions_with_answers: Array<InputType>
): WIPCalculationResultType => {
  let MEAN_IN_SECONDS_RESULT: string | number = MISSING_MESSAGE
  let MEAN_IN_METERS_PER_SECOND_RESULT: string | number = MISSING_MESSAGE
  let MEAN_IN_KILOMETERS_PER_HOUR_RESULT: string | number = MISSING_MESSAGE

  const VALID_TRIALS = get_valid_values(questions_with_answers)

  if (VALID_TRIALS.length > 0) {
    const DISTANCE_PER_TRIAL = 10 // 10 meters per trial
    const TOTAL_DISTANCE = VALID_TRIALS.length * DISTANCE_PER_TRIAL
    const TOTAL_TIME = R.sum(VALID_TRIALS)

    const ROUND_TO = 2

    MEAN_IN_SECONDS_RESULT = round(R.mean(VALID_TRIALS), ROUND_TO)

    /**
     * Calculate average speed in meters per second
     */
    const WIP_MEAN_IN_METERS_PER_SECOND_RESULT = TOTAL_DISTANCE / TOTAL_TIME
    MEAN_IN_METERS_PER_SECOND_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT,
      ROUND_TO
    )

    /**
     * Calculate average speed in kilometers per hour
     */
    const CONVERSION_FACTOR = 3.6 // 1m per second = 3.6km per hour
    MEAN_IN_KILOMETERS_PER_HOUR_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT * CONVERSION_FACTOR,
      ROUND_TO
    )
  }

  return [
    {
      id: 'TMWT_MEAN_IN_SECONDS',
      score: MEAN_IN_SECONDS_RESULT,
    },
    {
      id: 'TMWT_MEAN_IN_METERS_PER_SECOND',
      score: MEAN_IN_METERS_PER_SECOND_RESULT,
    },
    {
      id: 'TMWT_MEAN_IN_KILOMETERS_PER_HOUR',
      score: MEAN_IN_KILOMETERS_PER_HOUR_RESULT,
    },
  ]
}

export const specific_steps_ten_meter_walk_test_calc = [
  calculate_scores,
  add_raw_values_to_inputs(TEN_METER_WALK_TEST_INPUTS),
]

export const ten_meter_walk_test: CalculationType = create_calculation({
  calculation_name: '10 Metre Walk Test (TMWT)',
  readme_location: __dirname,
  calculation_steps: specific_steps_ten_meter_walk_test_calc,
  calculation_definition: {
    input_definition: TEN_METER_WALK_TEST_INPUTS,
    output_definition: TEN_METER_WALK_TEST_OUTPUT,
  },
})
