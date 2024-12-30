import R from 'ramda'

import type { SubscaleType } from '../../../../src/types/calculations.types'
import { rawInputValueLens } from '../../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../../src/calculation_suite/calculations/shared_functions'

export const calculate_stength_subscale_score = (
  subscale: SubscaleType,
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)
  const MAX_SCALE_SCORE = 25
  const CONVERT_KG_TO_LBS = 2.2

  //@ts-expect-error to do
  const stength_attempts = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_in_subscale)

  //@ts-expect-error to do
  if (stength_attempts.length === 0) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  //@ts-expect-error to do
  const max_strength_attempt = Math.max(...stength_attempts)
  const score = Math.round(max_strength_attempt * CONVERT_KG_TO_LBS)

  return R.set(scoreLens, R.min(score, MAX_SCALE_SCORE), subscale)
}
