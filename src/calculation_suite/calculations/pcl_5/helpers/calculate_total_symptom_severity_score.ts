import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_total_symptom_severity_score = (
  item_scores: Array<InputType>
): string | number => {
  const valid_item_scores = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(item_scores)

  if (valid_item_scores.length === 0) return MISSING_MESSAGE

  return R.sum(valid_item_scores)
}
