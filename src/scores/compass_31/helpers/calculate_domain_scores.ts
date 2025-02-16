import { map, pick, round, sum } from 'lodash'
import {
  COMPASS_31_DOMAINS,
  COMPASS_31_INPUTS,
  COMPASS_31_SCORING_ALGORITHM_TABLE,
  type DomainType,
} from '../definition'
import { z } from 'zod'

export const calculate_domain_scores = (
  inputs: z.infer<
    z.ZodObject<{
      [K in keyof typeof COMPASS_31_INPUTS]: (typeof COMPASS_31_INPUTS)[K]['type']
    }>
  >,
  domain: DomainType,
): { raw: number; weighted: number } => {
  const domainItems = COMPASS_31_DOMAINS[domain].items
  const domainItemInputs = pick(inputs, domainItems)

  const recodedInputs = map(domainItemInputs, (value, key) => {
    if (Array.isArray(value)) {
      const stdScore = value.length || 0
      return stdScore
    }

    if (value === undefined) {
      return 0
    }

    const stdScore =
      COMPASS_31_SCORING_ALGORITHM_TABLE[key][value.toString()] ?? 0

    return stdScore
  })

  const rawScore = sum(recodedInputs)

  const result = {
    raw: rawScore,
    weighted: round(rawScore * COMPASS_31_DOMAINS[domain].weight),
  }

  return result
}
