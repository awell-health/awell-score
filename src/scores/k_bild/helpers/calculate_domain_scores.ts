import { type DomainType, KBILD_DOMAINS } from '../definition/k_bild_domains'
import { KBILD_INPUTS } from '../definition'
import { z } from 'zod'
import { pick, sum, round } from 'lodash'

export const calculate_domain_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof KBILD_INPUTS]: (typeof KBILD_INPUTS)[K]['type']
    }>
  >,
  domain: DomainType,
): { raw: number | null; transformed: number | null } => {
  const domain_items = pick(inputs_with_answers, KBILD_DOMAINS[domain])

  if (Object.keys(domain_items).length === 0)
    return { raw: null, transformed: null }

  const raw_score = sum(Object.values(domain_items))
  const lowest_possible_score = Object.keys(domain_items).length
  const HIGEST_ITEM_SCORE = 7
  const higest_possible_score =
    Object.keys(domain_items).length * HIGEST_ITEM_SCORE
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
