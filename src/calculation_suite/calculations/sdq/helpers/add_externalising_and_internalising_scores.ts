import R from 'ramda'

import type { WIPCalculationResultType } from '../../../../types/calculations.types'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const add_externalising_and_internalising_scores = (
  wip_scores: WIPCalculationResultType
): WIPCalculationResultType => {
  const INTERNALISING_SCALES = ['EMOTIONAL_PROBLEMS', 'PEER_PROBLEMS']
  const EXTERNALISING_SCALES = ['CONDUCT_PROBLEMS', 'HYPERACTIVITY']

  const calculate_score = (wip_scale_scores: WIPCalculationResultType) => {
    const EXPECTED_VALID_SCALE_SCORES = 2

    //@ts-expect-error to do
    const valid_subscale_scores = R.compose(
      R.defaultTo([]),
      R.filter(is_numeric),
      //@ts-expect-error to do
      R.map(wip_score => Number(wip_score.score))
    )(wip_scale_scores)

    //@ts-expect-error to do
    if (valid_subscale_scores.length !== EXPECTED_VALID_SCALE_SCORES) {
      return MISSING_MESSAGE
    }

    //@ts-expect-error to do
    return R.sum(valid_subscale_scores)
  }

  const scales_needed_internalising_scale = R.filter(
    score => INTERNALISING_SCALES.includes(score.id),
    wip_scores
  )

  const scales_needed_externalising_scale = R.filter(
    score => EXTERNALISING_SCALES.includes(score.id),
    wip_scores
  )

  return [
    ...wip_scores,
    {
      id: 'INTERNALISING',
      score: calculate_score(scales_needed_internalising_scale),
    },
    {
      id: 'EXTERNALISING',
      score: calculate_score(scales_needed_externalising_scale),
    },
  ]
}
