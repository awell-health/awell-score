import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import { stdInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_score_for_each_scale = (
  subscale: SubscaleType
): SubscaleType => {
  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(stdInputValueLens, input)),
    R.view(inputsInSubscaleLens)
  )(subscale)

  if (valid_answers_in_subscale.length === 0)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  return R.set(scoreLens, R.sum(valid_answers_in_subscale), subscale)
}
