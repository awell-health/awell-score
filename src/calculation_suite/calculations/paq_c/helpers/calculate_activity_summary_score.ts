import { round } from 'mathjs'
import R from 'ramda'

import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_activity_summary_score = (
  item_scores: Array<number | string>
): number | string => {
  const valid_item_scores = R.compose(
    R.filter(is_numeric),
    R.map(item_score => Number(item_score))
  )(item_scores)

  if (valid_item_scores.length === 0) return MISSING_MESSAGE

  return round(R.mean(valid_item_scores), 2)
}
