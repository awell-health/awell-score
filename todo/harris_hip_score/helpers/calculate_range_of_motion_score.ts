import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

/* eslint-disable no-magic-numbers */
const TOTAL_RANGE_OF_MOTION_CONVERSION_TABLE = [
  {
    summed_range_of_motion_range: [211, Infinity],
    corresponding_score: 5,
  },
  {
    summed_range_of_motion_range: [161, 210],
    corresponding_score: 4,
  },
  {
    summed_range_of_motion_range: [101, 160],
    corresponding_score: 3,
  },
  {
    summed_range_of_motion_range: [61, 100],
    corresponding_score: 2,
  },
  {
    summed_range_of_motion_range: [31, 60],
    corresponding_score: 1,
  },
  {
    summed_range_of_motion_range: [0, 30],
    corresponding_score: 0,
  },
]

export const calculate_range_of_motion_score = (
  inputs: InputType[],
): number | undefined => {
  const INPUTS_NEEDED_TO_CALCULATE_ROM_SCORE = [
    'RANGE_OF_MOTION_FLEXION',
    'RANGE_OF_MOTION_ABDUCTION',
    'RANGE_OF_MOTION_ADDUCTION',
    'RANGE_OF_MOTION_EXTERNAL_ROTATION',
    'RANGE_OF_MOTION_INTERNAL_ROTATION',
  ]

  const rom_values = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input =>
      INPUTS_NEEDED_TO_CALCULATE_ROM_SCORE.includes(R.view(inputIdLens, input)),
    ),
  )(inputs)

  if (rom_values.length === 0) return undefined

  return R.compose(
    //@ts-expect-error to do
    conversion => conversion?.corresponding_score,
    summed_range_of_motion =>
      R.find(conversion => {
        const [min, max] = conversion.summed_range_of_motion_range

        return summed_range_of_motion >= min && summed_range_of_motion <= max
      }, TOTAL_RANGE_OF_MOTION_CONVERSION_TABLE),
    R.sum,
  )(rom_values)
}
