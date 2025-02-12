import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const CCQ_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'TOTAL_SCORE',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'SYMPTOMS',
    label: { en: 'Symptoms' },
    type: 'number',
  },
  {
    subresult_id: 'FUNCTIONAL_STATE',
    label: { en: 'Functional state' },
    type: 'number',
  },
  {
    subresult_id: 'MENTAL_STATE',
    label: { en: 'Mental state' },
    type: 'number',
  },
]
