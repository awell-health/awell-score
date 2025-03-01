import { z } from 'zod'
import {
  NOT_AT_ALL,
  SDQ_SUBSCALES,
  SDQ_INPUTS,
  type SubscaleType,
} from '../definition'
import { mapValues, pick, sum } from 'lodash'

type Data = z.infer<
  z.ZodObject<{
    [K in keyof typeof SDQ_INPUTS]: (typeof SDQ_INPUTS)[K]['type']
  }>
>

const calculateProblemScaleScore = (
  data: Data,
  subscale: SubscaleType,
): number | null => {
  const subscaleInputes = pick(data, SDQ_SUBSCALES[subscale])

  /**
   * A score for a subscale can only be calculated when
   * at least 3 questions are answered on that subscale.
   */
  const MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE = 3
  const MAX_SCORE_PER_QUESTION = 2

  const validSubscaleInputs = Object.values(subscaleInputes).filter(
    input => input !== undefined,
  )

  if (validSubscaleInputs.length < MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE)
    return null

  /**
   * Score is always expressed on a scale of 10
   */
  const MULTIPLIER = 10
  const score =
    (sum(validSubscaleInputs) /
      (validSubscaleInputs.length * MAX_SCORE_PER_QUESTION)) *
    MULTIPLIER

  /**
   * Always round to the nearest integer
   */
  return Math.round(score)
}

const calculateImpactScaleScore = (
  data: Data,
  subscale: SubscaleType,
): number | null => {
  const subscaleInputs = pick(data, SDQ_SUBSCALES[subscale])
  const validSubscaleInputs = Object.values(subscaleInputs).filter(
    input => input !== undefined,
  )

  if (validSubscaleInputs.length === 0) return null

  /**
   * Transform "Not at all score (999)" to 0
   */
  const transformNotAtAllScore = (score: number) =>
    score === NOT_AT_ALL ? 0 : score

  const validSubscaleInputsTransformed = validSubscaleInputs.map(
    transformNotAtAllScore,
  )

  return sum(validSubscaleInputsTransformed)
}

export const calculateSubscaleScores = (
  data: Data,
): Record<SubscaleType, number | null> => {
  const PROBLEM_SCALES_IDS = [
    'EMOTIONAL_PROBLEMS',
    'CONDUCT_PROBLEMS',
    'HYPERACTIVITY',
    'PEER_PROBLEMS',
    'PROSOCIAL',
  ]

  const IMPACT_SCALES_IDS = [
    'IMPACT_PARENT_REPORTED',
    'IMPACT_TEACHER_REPORTED',
    'IMPACT_SELF_REPORTED',
  ]

  const subscaleScores = mapValues(SDQ_SUBSCALES, (_, subscaleId) => {
    if (PROBLEM_SCALES_IDS.includes(subscaleId)) {
      return calculateProblemScaleScore(data, subscaleId as SubscaleType)
    }

    if (IMPACT_SCALES_IDS.includes(subscaleId)) {
      return calculateImpactScaleScore(data, subscaleId as SubscaleType)
    }

    throw new Error(`Subscale ${subscaleId} not found`)
  })

  return subscaleScores
}
