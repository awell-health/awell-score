import R from 'ramda'

import type { CalculationOutputType } from '../../../types/calculations.types'

type FunctionType = (
  score_id?: string
) => (scores: CalculationOutputType[]) => string

export const view_status: FunctionType =
  (score_id = '') =>
  scores => {
    /** If calculation only has one result/outcome
     * => Return that one result
     */
    if (scores.length === 1) return scores[0].status

    return R.compose(
      (subresult: CalculationOutputType | undefined) => subresult?.status || '',
      R.find((score: CalculationOutputType) => score.subresult_id === score_id)
    )(scores)
  }
