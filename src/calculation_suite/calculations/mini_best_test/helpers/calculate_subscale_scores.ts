import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { scoreLens } from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_subscale_scores = (
  subscales: Array<SubscaleType>
): Array<SubscaleType> =>
  R.map((subscale: SubscaleType) => {
    const { input_ids_in_subscale } = subscale

    const valid_answers_in_subscale = R.compose(
      R.filter(is_numeric),
      R.map(raw_value => Number(raw_value)),
      R.map(input => R.view(rawInputValueLens, input))
    )(input_ids_in_subscale)

    if (valid_answers_in_subscale.length !== input_ids_in_subscale.length)
      return R.set(scoreLens, MISSING_MESSAGE, subscale)

    return R.set(scoreLens, R.sum(valid_answers_in_subscale), subscale)
  }, subscales)
