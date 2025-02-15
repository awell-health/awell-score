import { pick, max, mean } from 'lodash'
import { ScoreType } from '../../../../src/types'
import {
  COMI_BACK_OUTPUT,
  COMI_BACK_INPUTS,
  COMI_BACK_DOMAINS,
  type DomainType,
} from './definition'

export const comi_back: ScoreType<
  typeof COMI_BACK_INPUTS,
  typeof COMI_BACK_OUTPUT
> = {
  name: 'COMI Back',
  readmeLocation: __dirname,
  inputSchema: COMI_BACK_INPUTS,
  outputSchema: COMI_BACK_OUTPUT,
  calculate: ({ data }) => {
    const calculateDomainScore = (domain: DomainType) => {
      const { items, calc } = COMI_BACK_DOMAINS[domain]
      const domainItemValues = Object.values(pick(data, items))

      if (calc === 'max') return max(domainItemValues) ?? null
      if (calc === 'mean') return mean(domainItemValues) ?? null
      if (calc === 'raw') return domainItemValues[0] ?? null

      return null
    }

    const painScore = calculateDomainScore('PAIN')
    const backRelatedFunctionScore = calculateDomainScore(
      'BACK_RELATED_FUNCTION',
    )
    const symptomSpecificWellbeingScore = calculateDomainScore(
      'SYMPTOM_SPECIFIC_WELLBEING',
    )
    const generalQolScore = calculateDomainScore('GENERAL_QOL')
    const disabilityScore = calculateDomainScore('DISABILITY')

    const totalScore = mean([
      painScore,
      backRelatedFunctionScore,
      symptomSpecificWellbeingScore,
      generalQolScore,
      disabilityScore,
    ])

    return {
      TOTAL: totalScore,
      PAIN: painScore,
      BACK_RELATED_FUNCTION: backRelatedFunctionScore,
      SYMPTOM_SPECIFIC_WELLBEING: symptomSpecificWellbeingScore,
      GENERAL_QOL: generalQolScore,
      DISABILITY: disabilityScore,
    }
  },
}
