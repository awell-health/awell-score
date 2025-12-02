import { pick, sum, round } from 'lodash'
import {
  FSFI_DOMAINS,
  FSFI_INPUTS,
  type DomainType,
} from '../definition'
import { z } from 'zod'

export const calculateDomainScore = (
  inputs: z.infer<
    z.ZodObject<{
      [K in keyof typeof FSFI_INPUTS]: (typeof FSFI_INPUTS)[K]['type']
    }>
  >,
  domain: DomainType,
): number | null => {
  const domainConfig = FSFI_DOMAINS[domain]
  const domainItems = domainConfig.items
  const domainInputs = pick(inputs, domainItems)
  
  // Check if all domain inputs have values
  const values = Object.values(domainInputs)
  
  // If we don't have all expected items, return null
  if (values.length !== domainItems.length) {
    return null
  }
  
  const hasAllValues = values.every(value => value !== undefined && value !== null)
  
  if (!hasAllValues) {
    return null // If any input is missing, return null for the domain
  }
  
  // Check if all values are 0 (no sexual activity)
  if (values.every(value => value === 0)) {
    return 0 // If all responses are "no sexual activity", domain score is 0
  }
  
  // Calculate raw sum
  const rawSum = sum(values)
  
  // Apply domain factor
  const domainScore = rawSum * domainConfig.factor
  
  // Round to 1 decimal place for precision
  return round(domainScore, 1)
}
