import { ASRS_PARTS, type PartType } from '../definition/asrs_parts'
import { ASRS_INPUTS, POSITIVE_SCORES } from '../definition'
import { sum, map, pick } from 'lodash'
import { z } from 'zod'

export const calculate_part_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ASRS_INPUTS]: (typeof ASRS_INPUTS)[K]['type']
    }>
  >,
  part: PartType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_PARTS[part]

  const inputs_in_part = pick(inputs_with_answers, INPUT_IDS_NEEDED_FOR_SCORING)
  const standardized_input_scores = map(inputs_in_part, (_i, key: string) => {
    const positive_scores = POSITIVE_SCORES[key as keyof typeof POSITIVE_SCORES]

    if (positive_scores === undefined || _i === undefined) return null

    if (positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return sum(standardized_input_scores as number[])
}
