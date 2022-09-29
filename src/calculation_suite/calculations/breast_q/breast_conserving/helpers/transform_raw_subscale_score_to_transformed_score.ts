import R from 'ramda'

import type { BreastQScaleType } from '../../../../../types/calculations/subscales/custom/breastq.types'
import {
  scoreLens,
  subscaleIdLens,
} from '../../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'

export const transform_raw_subscale_score_to_transformed_score = (
  subscale: BreastQScaleType
): BreastQScaleType => {
  const { conversion_table = {} } = subscale
  const id = R.view(subscaleIdLens, subscale)

  if (R.isEmpty(conversion_table))
    throw new Error(
      `Breast-Q cannot be calculated because for scale ${id} a conversion table is missing.`
    )

  const raw_subscale_score = R.view(scoreLens, subscale)

  if (raw_subscale_score === MISSING_MESSAGE) return subscale

  const transformed_score = conversion_table[raw_subscale_score]

  if (R.isNil(transformed_score))
    throw new Error(
      `Breast-Q cannot be calculated because for scale ${id} a raw score of ${raw_subscale_score} could not be transformed to a rasch score.`
    )

  return R.set(scoreLens, transformed_score, subscale)
}
