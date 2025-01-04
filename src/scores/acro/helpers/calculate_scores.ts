import { ACRO_SUBSCALES, type SubscaleType } from '../definition/acro_subscales'
import { z } from 'zod'
import { sum, compact, filter } from 'lodash'
import { ACRO_INPUTS } from '../definition'

export const calculate_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ACRO_INPUTS]: (typeof ACRO_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ACRO_SUBSCALES[subscale]

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
    PHYSICAL_SUBSCALE: 40,
    PSYCHOLOGICAL_APPEARANCE_SUBSCALE: 35,
    PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: 35,
    TOTAL_SCORE: 110,
  }

  const hundred = 100
  /**
   * Original Calculcation:
   * 22 in this case is number of questions in the subscale
   * ( (x) - 22 / (110 - 22) ) * 100
   */
  const subscaleScore =
    ((subscaleTotal - INPUT_IDS_NEEDED_FOR_SCORING.length) /
      (bestScores[subscale] - INPUT_IDS_NEEDED_FOR_SCORING.length)) *
    hundred

  // we want to round the results to two decimal places
  return Math.round(subscaleScore * 1e2) / 1e2
}
