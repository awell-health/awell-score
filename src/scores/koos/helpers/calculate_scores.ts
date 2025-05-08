import { KOOS_SUBSCALES, type SubscaleType } from '../definition/koos_subscales'
import { z } from 'zod'
import { sum, compact, filter } from 'lodash'
import { KOOS_INPUTS } from '../definition'

export const calculate_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof KOOS_INPUTS]: (typeof KOOS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = KOOS_SUBSCALES[subscale]

  const valid_answers_in_subscale = compact(
    filter(inputs_with_answers, (_i, key) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(key),
    ),
  )

  if (
    valid_answers_in_subscale.length !== INPUT_IDS_NEEDED_FOR_SCORING.length
  ) {
    return null
  }

  const subscaleTotal = sum(valid_answers_in_subscale)

  const bestScores = {
    PAIN: 36,
    SYMPTOMS: 28,
    ADL_FUNCTION: 68,
    SPORT_AND_RECREATION_FUNCTION: 20,
    QUALITY_OF_LIFE: 16,
  }

  const hundred = 100
  /**
   * Original Calculcation:
   * (100 / bestScores[subscale]) * subscaleTotal
   */
  const subscaleScore = (hundred / bestScores[subscale]) * subscaleTotal

  // we want to round the results to one decimal place
  return Math.round(subscaleScore * 1e1) / 1e1
}
