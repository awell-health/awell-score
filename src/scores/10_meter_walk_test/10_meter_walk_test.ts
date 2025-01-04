import { ScoreType } from '../../types'
import {
  TEN_METER_WALK_TEST_INPUTS,
  TEN_METER_WALK_TEST_OUTPUT,
} from './definition'
import { sum, round, mean } from 'lodash'

export const ten_meter_walk_test: ScoreType<
  typeof TEN_METER_WALK_TEST_INPUTS,
  typeof TEN_METER_WALK_TEST_OUTPUT
> = {
  name: '10 Metre Walk Test (TMWT)',
  readmeLocation: __dirname,
  inputSchema: TEN_METER_WALK_TEST_INPUTS,
  outputSchema: TEN_METER_WALK_TEST_OUTPUT,
  calculate: ({ data }) => {
    const DISTANCE_PER_TRIAL = 10 // 10 meters per trial
    const TOTAL_DISTANCE =
      Object.values(data).filter(v => v !== undefined).length *
      DISTANCE_PER_TRIAL
    const TOTAL_TIME = sum(Object.values(data))

    const ROUND_TO = 2

    const MEAN_IN_SECONDS_RESULT = round(mean(Object.values(data)), ROUND_TO)

    /**
     * Calculate average speed in meters per second
     */
    const WIP_MEAN_IN_METERS_PER_SECOND_RESULT = TOTAL_DISTANCE / TOTAL_TIME
    const MEAN_IN_METERS_PER_SECOND_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT,
      ROUND_TO,
    )

    /**
     * Calculate average speed in kilometers per hour
     */
    const CONVERSION_FACTOR = 3.6 // 1m per second = 3.6km per hour
    const MEAN_IN_KILOMETERS_PER_HOUR_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT * CONVERSION_FACTOR,
      ROUND_TO,
    )

    return {
      TMWT_MEAN_IN_SECONDS: MEAN_IN_SECONDS_RESULT,
      TMWT_MEAN_IN_METERS_PER_SECOND: MEAN_IN_METERS_PER_SECOND_RESULT,
      TMWT_MEAN_IN_KILOMETERS_PER_HOUR: MEAN_IN_KILOMETERS_PER_HOUR_RESULT,
    }
  },
}
