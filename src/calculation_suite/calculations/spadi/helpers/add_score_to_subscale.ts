import { round } from 'mathjs'
import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const add_score_to_subscale = (subscale: SubscaleType): SubscaleType => {
  const input_ids_in_subscale = R.view(inputsInSubscaleLens, subscale)

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(input => Number(R.view(rawInputValueLens, input)))
  )(input_ids_in_subscale)

  const ROUNDING_DECIMALS = 2
  const SCORE_ON_100_CONST = 10

  if (valid_answers_in_subscale.length) {
    const subscale_score = R.compose(
      //@ts-expect-error to do
      percentage => round(percentage, ROUNDING_DECIMALS),
      mean => mean * SCORE_ON_100_CONST, // Score should be expressed on a scale from 0 to 100 and current result is scaled from 0 to 10 so multiple by 10
      R.mean
    )(valid_answers_in_subscale)

    return R.set(scoreLens, subscale_score, subscale)
  }

  return R.set(scoreLens, MISSING_MESSAGE, subscale)
}
