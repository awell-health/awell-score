import R from 'ramda'

import { ASRS_PARTS, type PartType } from '../definition/asrs_parts'
import { ASRS_INPUTS } from '../definition'
import _ from 'lodash'
import { z } from 'zod'

export const calculate_part_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ASRS_INPUTS]: typeof ASRS_INPUTS[K]['type']
    }>
  >,
  part: PartType
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_PARTS[part]

  const inputs_in_part = _.pick(
    inputs_with_answers,
    INPUT_IDS_NEEDED_FOR_SCORING
  )
  const standardized_input_scores = _.map(inputs_in_part, (_i, key: string) => {
    const input_definition = _.find(ASRS_INPUTS, (_i, k) => k === key)

    if (input_definition === undefined || _i === undefined) return null

    if (input_definition.positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return R.sum(standardized_input_scores as number[])
}
