import R from 'ramda'

import type {
  MaxFunctionSignature,
  MeanFunctionSignature,
  RawScoreFunctionSignature,
} from '../../../../types/calculations/subscales/custom/comi.types'

//@ts-expect-error to do
const item_scores_available = item_scores =>
  R.isNil(item_scores) || R.isEmpty(item_scores)

export const mean_of_items_in_domain: MeanFunctionSignature = item_scores =>
  item_scores_available(item_scores) ? undefined : R.mean(item_scores)
export const max_of_items_in_domain: MaxFunctionSignature = item_scores =>
  item_scores_available(item_scores) ? undefined : Math.max(...item_scores)
export const raw_score_of_item: RawScoreFunctionSignature = item_scores =>
  item_scores_available(item_scores) ? undefined : item_scores[0] // All domains where we need a raw item score only have on item
