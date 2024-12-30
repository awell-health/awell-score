import R from 'ramda'

import type { WIPCalculationResultType } from '../../../src/types/calculations.types'
import {
  scoreLens,
  subscaleIdLens,
} from '../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const add_total_score = (
  wip_scores: WIPCalculationResultType,
): WIPCalculationResultType => {
  const EXPECTED_VALID_SUBSCALE_SCORES = 4
  const SCALE_IDS_NEEDED_FOR_TOTAL_SCORE = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
  ]

  //@ts-expect-error to do
  const valid_subscale_scores = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.map(input => R.view(scoreLens, input)),
    /**
     * Prosocial scale is not included in the total score
     */
    R.filter(subscale =>
      SCALE_IDS_NEEDED_FOR_TOTAL_SCORE.includes(
        R.view(subscaleIdLens, subscale),
      ),
    ),
  )(wip_scores)

  /**
   * Four valid subscale scores are needed to calculate a total score
   */
  //@ts-expect-error to do
  if (valid_subscale_scores.length !== EXPECTED_VALID_SUBSCALE_SCORES)
    return [
      ...wip_scores,
      {
        id: 'TOTAL',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    ...wip_scores,
    {
      id: 'TOTAL',
      //@ts-expect-error to do
      score: R.sum(valid_subscale_scores),
    },
  ]
}
