import { mapValues, pick } from 'lodash'
import {
  NEWER_FOUR_BAND_CATEGORISATION,
  ORIGINAL_THREE_BAND_CATEGORISATION,
  type SubscaleIdType,
  type SubscaleType,
} from '../../definition'
import { categorisation_fn } from './shared'

const categoriseSubscaleBasedOnThreeBandCategorization = (
  score: number | null | undefined,
  subscaleId: SubscaleIdType,
): Record<string, string | null> => {
  if (score === null || score === undefined) {
    return {
      [`${subscaleId}_PARENT_REPORTED_THREE_BAND_CATEGORISING`]: null,
      [`${subscaleId}_TEACHER_REPORTED_THREE_BAND_CATEGORISING`]: null,
      [`${subscaleId}_SELF_REPORTED_THREE_BAND_CATEGORISING`]: null,
    }
  }

  const categorisationParentReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'PARENT_COMPLETED_SDQ',
    categorisationTable: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  const categorisationTeacherReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'TEACHER_COMPLETED_SDQ',
    categorisationTable: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  const categorisationSelfReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'SELF_COMPLETED_SDQ',
    categorisationTable: ORIGINAL_THREE_BAND_CATEGORISATION,
    score,
  })

  return {
    [`${subscaleId}_PARENT_REPORTED_THREE_BAND_CATEGORISING`]:
      categorisationParentReported,
    [`${subscaleId}_TEACHER_REPORTED_THREE_BAND_CATEGORISING`]:
      categorisationTeacherReported,
    [`${subscaleId}_SELF_REPORTED_THREE_BAND_CATEGORISING`]:
      categorisationSelfReported,
  }
}

const categoriseSubscaleBasedOnFourBandCategorization = (
  score: number | null | undefined,
  subscaleId: SubscaleIdType,
): Record<string, string | null> => {
  if (score === null || score === undefined) {
    return {
      [`${subscaleId}_PARENT_REPORTED_FOUR_BAND_CATEGORISING`]: null,
      [`${subscaleId}_TEACHER_REPORTED_FOUR_BAND_CATEGORISING`]: null,
      [`${subscaleId}_SELF_REPORTED_FOUR_BAND_CATEGORISING`]: null,
    }
  }

  const categorisationParentReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'PARENT_COMPLETED_SDQ',
    categorisationTable: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  const categorisationTeacherReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'TEACHER_COMPLETED_SDQ',
    categorisationTable: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  const categorisationSelfReported = categorisation_fn({
    subscaleId: subscaleId,
    type: 'SELF_COMPLETED_SDQ',
    categorisationTable: NEWER_FOUR_BAND_CATEGORISATION,
    score,
  })

  return {
    [`${subscaleId}_PARENT_REPORTED_FOUR_BAND_CATEGORISING`]:
      categorisationParentReported,
    [`${subscaleId}_TEACHER_REPORTED_FOUR_BAND_CATEGORISING`]:
      categorisationTeacherReported,
    [`${subscaleId}_SELF_REPORTED_FOUR_BAND_CATEGORISING`]:
      categorisationSelfReported,
  }
}

export const calculateInterpretationCategoriesForProblemScales = (
  subscaleScores: Record<SubscaleType, number | null>,
  totalScore: number | null,
): Record<string, string | null>[] => {
  const PROBLEM_SCALES_TO_ADD_INTERPRETATION_FOR = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
    'PROSOCIAL',
    'TOTAL',
  ]

  const subscaleScoresToIncludeInInterpretation = pick(
    { ...subscaleScores, TOTAL: totalScore },
    PROBLEM_SCALES_TO_ADD_INTERPRETATION_FOR,
  )

  const threeBandInterpretationScores = mapValues(
    subscaleScoresToIncludeInInterpretation,
    (score, subscaleId) => {
      return categoriseSubscaleBasedOnThreeBandCategorization(
        score,
        subscaleId as SubscaleIdType,
      )
    },
  )

  const fourBandInterpretationScores = mapValues(
    subscaleScoresToIncludeInInterpretation,
    (score, subscaleId) => {
      return categoriseSubscaleBasedOnFourBandCategorization(
        score,
        subscaleId as SubscaleIdType,
      )
    },
  )

  return [
    ...Object.values(threeBandInterpretationScores),
    ...Object.values(fourBandInterpretationScores),
  ]
}
