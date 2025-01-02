import type { CalculationOutputDefinition } from '../../../../src/types/calculations.types'

export const CMS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain', nl: 'Pijn' },
    type: 'number',
  },
  {
    subresult_id: 'ADL',
    label: {
      en: 'Activities Daily living',
      nl: 'Activiteiten dagelijks leven',
    },
    type: 'number',
  },
  {
    subresult_id: 'MOBILITY',
    label: {
      en: 'Mobility',
      nl: 'Mobiliteit',
    },
    type: 'number',
  },
  {
    subresult_id: 'STRENGTH',
    label: {
      en: 'Strength',
      nl: 'Kracht',
    },
    type: 'number',
  },
  {
    subresult_id: 'TS',
    label: { en: 'Total score' },
    type: 'number',
  },
]
