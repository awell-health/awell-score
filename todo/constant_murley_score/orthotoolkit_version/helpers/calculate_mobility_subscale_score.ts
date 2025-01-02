import R from 'ramda'

import type { SubscaleType } from '../../../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../../src/calculation_suite/calculations/shared_functions'

export const calculate_mobility_subscale_score = (
  subscale: SubscaleType,
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)
  const EXOROTATION_INPUT_ID = 'Q09_EXOROTATION_ROM'

  //@ts-expect-error to do
  const inputs_without_exorotation = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input => R.view(inputIdLens, input) !== EXOROTATION_INPUT_ID),
  )(inputs_in_subscale)

  const exorotation_input = R.compose(
    R.flatten,
    R.map(input => {
      const value = R.view(rawInputValueLens, input)

      if (R.isNil(value) || value === MISSING_MESSAGE) return []

      return value
    }),
    R.filter(input => R.view(inputIdLens, input) === EXOROTATION_INPUT_ID),
  )(inputs_in_subscale)

  //@ts-expect-error to do
  const inputs_without_exorotation_score = R.sum(inputs_without_exorotation)

  const POINTS_PER_CRITERIUM = 2
  const exorotation_score = exorotation_input.length * POINTS_PER_CRITERIUM

  const score = inputs_without_exorotation_score + exorotation_score

  return R.set(scoreLens, score, subscale)
}
