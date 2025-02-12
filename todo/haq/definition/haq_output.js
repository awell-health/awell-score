// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const HAQ_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'DI',
    label: { en: 'Disability Index' },
    type: 'number',
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '75874-8',
            display: 'Total score [HAQ-DI]'
          }
          // HAQ has no Snomed code
        ],
        text: 'HAQ score (Disability Index)'
      }
    }
  }
]
