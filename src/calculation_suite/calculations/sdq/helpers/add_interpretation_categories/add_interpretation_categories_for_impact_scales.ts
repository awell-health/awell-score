import R from 'ramda'

import type {
  SubscaleType,
  WIPCalculationResultType,
} from '../../../../../types/calculations.types'
import {
  scoreLens,
  subscaleIdLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../shared_functions'
import {
  NEWER_FOUR_BAND_CATEGORISATION,
  ORIGINAL_THREE_BAND_CATEGORISATION,
} from '../../sdq_standards'
import { categorisation_fn } from './shared'

const SCALE_ID_TO_CATEGORISATION_TABLE_ID = {
  IMPACT_PARENT_REPORTED: 'PARENT_COMPLETED_SDQ',
  IMPACT_TEACHER_REPORTED: 'TEACHER_COMPLETED_SDQ',
  IMPACT_SELF_REPORTED: 'SELF_COMPLETED_SDQ',
}

const categorise_subscale_based_on_three_band_categorisation = (
  subscale: SubscaleType
): WIPCalculationResultType => {
  const subscale_id = R.view(subscaleIdLens, subscale)
  const score = R.view(scoreLens, subscale)

  if (!is_numeric(score))
    return [
      {
        id: `${subscale_id}_THREE_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
    ]

  const categorisation_score = categorisation_fn({
    subscale_id: 'IMPACT',
    //@ts-expect-error to do
    type: SCALE_ID_TO_CATEGORISATION_TABLE_ID[subscale_id],
    categorisation_table: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  return [
    {
      id: `${subscale_id}_THREE_BAND_CATEGORISING`,
      score: categorisation_score,
    },
  ]
}

const categorise_subscale_based_on_four_band_categorisation = (
  subscale: SubscaleType
): WIPCalculationResultType => {
  const subscale_id = R.view(subscaleIdLens, subscale)
  const score = R.view(scoreLens, subscale)

  if (!is_numeric(score))
    return [
      {
        id: `${subscale_id}_FOUR_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
    ]

  const categorisation_score = categorisation_fn({
    subscale_id: 'IMPACT',
    //@ts-expect-error to do
    type: SCALE_ID_TO_CATEGORISATION_TABLE_ID[subscale_id],
    categorisation_table: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  return [
    {
      id: `${subscale_id}_FOUR_BAND_CATEGORISING`,
      score: categorisation_score,
    },
  ]
}

export const add_interpretation_categories_for_impact_scales = (
  wip_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const PROBLEM_SCALES_TO_ADD_INTERPRETATION_FOR = [
    'IMPACT_PARENT_REPORTED',
    'IMPACT_TEACHER_REPORTED',
    'IMPACT_SELF_REPORTED',
  ]

  const subscales_that_need_interpretation = R.filter(
    subscale =>
      PROBLEM_SCALES_TO_ADD_INTERPRETATION_FOR.includes(
        R.view(subscaleIdLens, subscale)
      ),
    wip_scores
  )

  const three_band_interpretation_scores = R.compose(
    R.flatten,
    R.map(categorise_subscale_based_on_three_band_categorisation)
  )(subscales_that_need_interpretation)

  const four_band_interpretation_scores = R.compose(
    R.flatten,
    R.map(categorise_subscale_based_on_four_band_categorisation)
  )(subscales_that_need_interpretation)

  return [
    ...wip_scores,
    ...three_band_interpretation_scores,
    ...four_band_interpretation_scores,
  ]
}
