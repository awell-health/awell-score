import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const KCCQ_12_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'KCCQ12',
    label: { en: 'Summary score' },
    type: 'number',
  },
  {
    subresult_id: 'KCCQ12-PL',
    label: { en: 'Physical Limitation Score' },
    type: 'number',
  },
  {
    subresult_id: 'KCCQ12-SF',
    label: { en: 'Symptom Frequency Score' },
    type: 'number',
  },
  {
    subresult_id: 'KCCQ12-QL',
    label: { en: 'Quality of Life Score' },
    type: 'number',
  },
  {
    subresult_id: 'KCCQ12-SL',
    label: { en: 'Social Limitation Score' },
    type: 'number',
  },
]
