import { z } from 'zod'
import { KBILD_INPUTS } from '../definition'
import { sum, round } from 'lodash'

export const calculate_kbild_total_score = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof KBILD_INPUTS]: (typeof KBILD_INPUTS)[K]['type']
    }>
  >,
): { raw: number | null; transformed: number | null } => {
  const item_values = Object.values(inputs_with_answers)

  if (item_values.length === 0) return { raw: null, transformed: null }

  const raw_score = sum(item_values)
  const lowest_possible_score = item_values.length
  const HIGEST_ITEM_SCORE = 7
  const higest_possible_score = item_values.length * HIGEST_ITEM_SCORE
  const range = higest_possible_score - lowest_possible_score
  const ROUND_TO = 2

  return {
    raw: raw_score,
    transformed: round(
      ((raw_score - lowest_possible_score) / range) * 100,
      ROUND_TO,
    ),
  }
}
