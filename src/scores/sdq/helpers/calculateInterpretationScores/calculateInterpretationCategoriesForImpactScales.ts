import { mapValues, pick } from 'lodash'
import {
  NEWER_FOUR_BAND_CATEGORISATION,
  ORIGINAL_THREE_BAND_CATEGORISATION,
  type SubscaleType,
} from '../../definition'
import { categorisation_fn } from './shared'

const SCALE_ID_TO_CATEGORISATION_TABLE_ID = {
  IMPACT_PARENT_REPORTED: 'PARENT_COMPLETED_SDQ',
  IMPACT_TEACHER_REPORTED: 'TEACHER_COMPLETED_SDQ',
  IMPACT_SELF_REPORTED: 'SELF_COMPLETED_SDQ',
}

const categoriseSubscaleBasedOnThreeBandCategorization = (
  score: number | null | undefined,
  subscaleId: SubscaleType,
): Record<string, string | null> => {
  if (score === null || score === undefined) {
    return {
      [`${subscaleId}_THREE_BAND_CATEGORISING`]: null,
    }
  }

  const categorisationScore = categorisation_fn({
    subscaleId: 'IMPACT',
    //@ts-expect-error to do
    type: SCALE_ID_TO_CATEGORISATION_TABLE_ID[subscaleId],
    categorisationTable: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  return {
    [`${subscaleId}_THREE_BAND_CATEGORISING`]: categorisationScore,
  }
}

const categoriseSubscaleBasedOnFourBandCategorization = (
  score: number | null | undefined,
  subscaleId: SubscaleType,
): Record<string, string | null> => {
  if (score === null || score === undefined) {
    return {
      [`${subscaleId}_FOUR_BAND_CATEGORISING`]: null,
    }
  }

  const categorisationScore = categorisation_fn({
    subscaleId: 'IMPACT',
    //@ts-expect-error to do
    type: SCALE_ID_TO_CATEGORISATION_TABLE_ID[subscaleId],
    categorisationTable: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  return {
    [`${subscaleId}_FOUR_BAND_CATEGORISING`]: categorisationScore,
  }
}

export const calculateInterpretationCategoriesForImpactScales = (
  subscaleScores: Record<SubscaleType, number | null>,
): Record<string, string | null>[] => {
  const IMPACT_SCALES_TO_ADD_INTERPRETATION_FOR = [
    'IMPACT_PARENT_REPORTED',
    'IMPACT_TEACHER_REPORTED',
    'IMPACT_SELF_REPORTED',
  ]

  const subscaleScoresToIncludeInInterpretation = pick(
    subscaleScores,
    IMPACT_SCALES_TO_ADD_INTERPRETATION_FOR,
  )

  const threeBandInterpretationScores = mapValues(
    subscaleScoresToIncludeInInterpretation,
    (score, subscaleId) => {
      return categoriseSubscaleBasedOnThreeBandCategorization(
        score,
        subscaleId as SubscaleType,
      )
    },
  )

  const fourBandInterpretationScores = mapValues(
    subscaleScoresToIncludeInInterpretation,
    (score, subscaleId) => {
      return categoriseSubscaleBasedOnFourBandCategorization(
        score,
        subscaleId as SubscaleType,
      )
    },
  )

  return [
    ...Object.values(threeBandInterpretationScores),
    ...Object.values(fourBandInterpretationScores),
  ]
}
