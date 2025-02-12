// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const BASFI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BASFI_SCORE',
    label: { en: 'Total' },
    type: 'number',
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441680005',
            display:
              'Bath Ankylosing Spondylitis Functional Index score (observable entity)'
          }
          // BASFI has no LOINC code
        ],
        text: 'BASFI Score'
      }
    }
  }
]
