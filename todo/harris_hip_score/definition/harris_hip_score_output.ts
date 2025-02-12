import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const HARRIS_HIP_SCORE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'HARRIS_HIP_SCORE',
    label: { en: 'Harris Hip Score' },
    type: 'number',
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '100291-4',
            display: 'Total score [Harris Hip Score]',
          },
          {
            system: 'http://snomed.info/sct',
            code: '445021002',
            display: 'Harris hip score (observable entity)',
          },
        ],
        text: 'Harris Hip Score',
      },
    },
  },
  {
    subresult_id: 'RANGE_OF_MOTION_SCORE',
    label: { en: 'Range of motion score' },
    type: 'number',
    terminology: {
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: '100290-6',
            display: 'Range of motion score [Harris Hip Score]',
          },
          // No Snomed code available
        ],
        text: 'ROM score [Harris Hip Score]',
      },
    },
  },
]
