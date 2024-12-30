import R from 'ramda'

import type { BreastQScaleType } from '../../../../src/types/calculations/subscales/custom/breastq.types'
import { stdInputValueLens } from '../../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../../src/calculation_suite/calculations/shared_functions'

export const add_raw_subscale_score = (
  subscale: BreastQScaleType,
): BreastQScaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  //@ts-expect-error to do
  const valid_answers = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(n => Number(n)),
    R.map(input => R.view(stdInputValueLens, input)),
  )(inputs_in_subscale)

  const MISSING_DATA_PERCENTAGE =
    //@ts-expect-error to do
    100 - (valid_answers.length / inputs_in_subscale.length) * 100
  const MISSING_DATA_CUT_OFF = 50

  if (MISSING_DATA_PERCENTAGE > MISSING_DATA_CUT_OFF) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  if (MISSING_DATA_PERCENTAGE === 0) {
    //@ts-expect-error to do
    const raw_subscale_score = R.sum(valid_answers)

    return R.set(scoreLens, raw_subscale_score, subscale)
  }

  const number_of_missing_items =
    //@ts-expect-error to do
    inputs_in_subscale.length - valid_answers.length
  //@ts-expect-error to do
  const mean_of_completed_items = R.mean(valid_answers)
  const adjust_for_missing_items = Math.round(
    mean_of_completed_items * number_of_missing_items,
  )

  const valid_answers_with_adjustment_for_missing_items = R.append(
    adjust_for_missing_items,
    //@ts-expect-error to do
    valid_answers,
  )

  const raw_subscale_score = R.sum(
    valid_answers_with_adjustment_for_missing_items,
  )

  return R.set(scoreLens, raw_subscale_score, subscale)
}
