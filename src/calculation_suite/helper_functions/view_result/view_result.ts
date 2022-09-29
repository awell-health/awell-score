import R from 'ramda'

import type { CalculationOutputType } from '../../../types/calculations.types'

type FunctionType = (
  score_id?: string
) => (scores: CalculationOutputType[]) => unknown

export const view_result: FunctionType =
  (score_id = '') =>
  scores => {
    /** If calculation only has one result/outcome
     * => Return that one result
     */
    if (scores.length === 1) return scores[0].result

    return R.compose(
      (s: CalculationOutputType | undefined) => s?.result,
      R.find((score: CalculationOutputType) => score.subresult_id === score_id)
    )(scores)
  }
