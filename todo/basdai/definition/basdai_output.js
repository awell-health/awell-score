// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const BASDAI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BASDAI_TOTAL_SCORE',
    label: { en: 'Total' },
    type: 'number',
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441562009',
            display:
              'Bath Ankylosing Spondylitis Disease Activity Index score (observable entity)'
          }
          // BASDAI has no LOINC code
        ],
        text: 'BASDAI Index Score'
      }
    }
  }
]
