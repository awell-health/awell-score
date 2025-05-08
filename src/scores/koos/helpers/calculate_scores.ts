import { KOOS_SUBSCALES, type SubscaleType } from '../definition/koos_subscales'
import { z } from 'zod'
import { sum } from 'lodash'
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

  const valid_answers_in_subscale = INPUT_IDS_NEEDED_FOR_SCORING.map(
    id => inputs_with_answers[id as keyof typeof KOOS_INPUTS],
  ).filter(answer => answer !== undefined)

  if (
    valid_answers_in_subscale.length !== INPUT_IDS_NEEDED_FOR_SCORING.length
  ) {
    return null
  }

  const subscaleTotal = sum(valid_answers_in_subscale)

  const highestScore = {
    PAIN: 36,
    SYMPTOMS: 28,
    ADL_FUNCTION: 68,
    SPORT_AND_RECREATION_FUNCTION: 20,
    QUALITY_OF_LIFE: 16,
  }

  const hundred = 100

  // we can't divide by 0, so if the subscaleTotal is 0 we return 100 (best possible score)
  if (subscaleTotal === 0) {
    return 100
  }

  // if the subscaleTotal is the highest possible score, we return 0 (worst possible score)
  if (subscaleTotal === highestScore[subscale]) {
    return 0
  }

  /**
   * Original Calculcation:
   * (100 / highestScore[subscale]) * subscaleTotal
   */
  const subscaleScore = (hundred / highestScore[subscale]) * subscaleTotal

  // we want to round the results to one decimal place
  return Math.round(subscaleScore * 1e1) / 1e1
}
