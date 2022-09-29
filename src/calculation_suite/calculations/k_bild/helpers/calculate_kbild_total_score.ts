import { round } from 'mathjs'
import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_kbild_total_score = (
  inputs_with_answers: Array<InputType>
): { raw: number | string; transformed: number | string } => {
  const valid_item_scores = R.compose(
    R.filter(is_numeric),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_with_answers)

  if (valid_item_scores.length === 0)
    return { raw: MISSING_MESSAGE, transformed: MISSING_MESSAGE }

  const raw_score = R.sum(valid_item_scores)
  const lowest_possible_score = valid_item_scores.length
  const HIGEST_ITEM_SCORE = 7
  const higest_possible_score = valid_item_scores.length * HIGEST_ITEM_SCORE
  const range = higest_possible_score - lowest_possible_score
  const ROUND_TO = 2

  return {
    raw: raw_score,
    transformed: round(
      ((raw_score - lowest_possible_score) / range) *
        // eslint-disable-next-line no-magic-numbers
        100,
      ROUND_TO
    ),
  }
}
