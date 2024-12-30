import R from 'ramda'

import { ASRS_SUBSCALES, type SubscaleType } from '../definition/asrs_subscales'
import { ASRS_INPUTS, POSITIVE_SCORES } from '../definition'
import { z } from 'zod'
import _ from 'lodash'

export const calculate_subscale_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ASRS_INPUTS]: (typeof ASRS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_SUBSCALES[subscale]

  const inputs_in_subscale = _.pick(
    inputs_with_answers,
    INPUT_IDS_NEEDED_FOR_SCORING,
  )

  const standardized_input_scores = _.map(inputs_in_subscale, (_i, key) => {
    const positive_scores = POSITIVE_SCORES[key as keyof typeof POSITIVE_SCORES]

    if (positive_scores === undefined || _i === undefined) return null

    if (positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return R.sum(standardized_input_scores as number[])
}
