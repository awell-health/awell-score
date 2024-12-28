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

const categorise_subscale_based_on_three_band_categorisation = (
  subscale: SubscaleType
): WIPCalculationResultType => {
  const subscale_id = R.view(subscaleIdLens, subscale)
  const score = R.view(scoreLens, subscale)

  if (!is_numeric(score))
    return [
      {
        id: `${subscale_id}_PARENT_REPORTED_THREE_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
      {
        id: `${subscale_id}_TEACHER_REPORTED_THREE_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
      {
        id: `${subscale_id}_SELF_REPORTED_THREE_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
    ]

  const categorisation_parent_reported = categorisation_fn({
    subscale_id,
    type: 'PARENT_COMPLETED_SDQ',
    categorisation_table: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  const categorisation_teacher_reported = categorisation_fn({
    subscale_id,
    type: 'TEACHER_COMPLETED_SDQ',
    categorisation_table: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })
  const categorisation_self_reported = categorisation_fn({
    subscale_id,
    type: 'SELF_COMPLETED_SDQ',
    categorisation_table: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  return [
    {
      id: `${subscale_id}_PARENT_REPORTED_THREE_BAND_CATEGORISING`,
      score: categorisation_parent_reported,
    },
    {
      id: `${subscale_id}_TEACHER_REPORTED_THREE_BAND_CATEGORISING`,
      score: categorisation_teacher_reported,
    },
    {
      id: `${subscale_id}_SELF_REPORTED_THREE_BAND_CATEGORISING`,
      score: categorisation_self_reported,
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
        id: `${subscale_id}_PARENT_REPORTED_FOUR_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
      {
        id: `${subscale_id}_TEACHER_REPORTED_FOUR_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
      {
        id: `${subscale_id}_SELF_REPORTED_FOUR_BAND_CATEGORISING`,
        score: MISSING_MESSAGE,
      },
    ]

  const categorisation_parent_reported = categorisation_fn({
    subscale_id,
    type: 'PARENT_COMPLETED_SDQ',
    categorisation_table: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  const categorisation_teacher_reported = categorisation_fn({
    subscale_id,
    type: 'TEACHER_COMPLETED_SDQ',
    categorisation_table: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })
  const categorisation_self_reported = categorisation_fn({
    subscale_id,
    type: 'SELF_COMPLETED_SDQ',
    categorisation_table: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  return [
    {
      id: `${subscale_id}_PARENT_REPORTED_FOUR_BAND_CATEGORISING`,
      score: categorisation_parent_reported,
    },
    {
      id: `${subscale_id}_TEACHER_REPORTED_FOUR_BAND_CATEGORISING`,
      score: categorisation_teacher_reported,
    },
    {
      id: `${subscale_id}_SELF_REPORTED_FOUR_BAND_CATEGORISING`,
      score: categorisation_self_reported,
    },
  ]
}

export const add_interpretation_categories_for_problem_scales = (
  wip_scores: WIPCalculationResultType
): WIPCalculationResultType => {
  const PROBLEM_SCALES_TO_ADD_INTERPRETATION_FOR = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
    'PROSOCIAL',
    'TOTAL',
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
    //@ts-expect-error to do
  )(subscales_that_need_interpretation)

  const four_band_interpretation_scores = R.compose(
    R.flatten,
    R.map(categorise_subscale_based_on_four_band_categorisation)
    //@ts-expect-error to do
  )(subscales_that_need_interpretation)

  return [
    ...wip_scores,
    ...three_band_interpretation_scores,
    ...four_band_interpretation_scores,
  ]
}
