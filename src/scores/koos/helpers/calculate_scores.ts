import { KOOS_SUBSCALES, type SubscaleType } from '../definition/koos_subscales'
import { z } from 'zod'
import { mean, round } from 'lodash'
import { KOOS_INPUTS } from '../definition'

export const calculate_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof KOOS_INPUTS]: (typeof KOOS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = KOOS_SUBSCALES[subscale].items

  const valid_answers_in_subscale = INPUT_IDS_NEEDED_FOR_SCORING.map(
    id => inputs_with_answers[id as keyof typeof KOOS_INPUTS],
  ).filter(answer => answer !== undefined)

  if (
    valid_answers_in_subscale.length <
    KOOS_SUBSCALES[subscale].minItemsToCalculateScore
  ) {
    return null
  }

  const meanScore = mean(valid_answers_in_subscale)
  const score = 100 - (meanScore / 4) * 100

  return round(score, 1)
}
