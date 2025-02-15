import { pick, max, mean } from 'lodash'
import { ScoreType } from '../../../../src/types'
import {
  COMI_NECK_OUTPUT,
  COMI_NECK_INPUTS,
  COMI_NECK_DOMAINS,
  type DomainType,
} from './definition'

export const comi_neck: ScoreType<
  typeof COMI_NECK_INPUTS,
  typeof COMI_NECK_OUTPUT
> = {
  name: 'COMI Neck',
  readmeLocation: __dirname,
  inputSchema: COMI_NECK_INPUTS,
  outputSchema: COMI_NECK_OUTPUT,
  calculate: ({ data }) => {
    const calculateDomainScore = (domain: DomainType) => {
      const { items, calc } = COMI_NECK_DOMAINS[domain]
      const domainItemValues = Object.values(pick(data, items))

      if (calc === 'max') return max(domainItemValues) ?? null
      if (calc === 'mean') return mean(domainItemValues) ?? null
      if (calc === 'raw') return domainItemValues[0] ?? null

      return null
    }

    const painScore = calculateDomainScore('PAIN')
    const neckRelatedFunctionScore = calculateDomainScore(
      'NECK_RELATED_FUNCTION',
    )
    const symptomSpecificWellbeingScore = calculateDomainScore(
      'SYMPTOM_SPECIFIC_WELLBEING',
    )
    const generalQolScore = calculateDomainScore('GENERAL_QOL')
    const disabilityScore = calculateDomainScore('DISABILITY')

    const totalScore = mean([
      painScore,
      neckRelatedFunctionScore,
      symptomSpecificWellbeingScore,
      generalQolScore,
      disabilityScore,
    ])

    return {
      TOTAL: totalScore,
      PAIN: painScore,
      NECK_RELATED_FUNCTION: neckRelatedFunctionScore,
      SYMPTOM_SPECIFIC_WELLBEING: symptomSpecificWellbeingScore,
      GENERAL_QOL: generalQolScore,
      DISABILITY: disabilityScore,
    }
  },
}
