import { isNil, pick, sum } from 'lodash'
import { type DomainType, MSQ_DOMAINS, MSQ_INPUTS } from '../definition'
import { z } from 'zod'

export const calculateDomainScore = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof MSQ_INPUTS]: (typeof MSQ_INPUTS)[K]['type']
    }>
  >,
  domain: DomainType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = MSQ_DOMAINS[domain]
  const domainInputs = pick(data, INPUT_IDS_NEEDED_FOR_SCORING)
  const validDomainInputs = Object.values(domainInputs).filter(
    value => !isNil(value),
  )

  if (validDomainInputs.length === 0) {
    return null
  }

  return sum(validDomainInputs)
}
