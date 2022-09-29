import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const FFI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'LIMITATION',
    label: { en: 'Limitation', nl: 'Beperkingen van activiteiten' },
    type: 'number',
  },
  {
    subresult_id: 'PAIN',
    label: { en: 'Pain', nl: 'Pijn' },
    type: 'number',
  },
  {
    subresult_id: 'DISABILITY',
    label: { en: 'Disability', nl: 'Moeite met activiteiten' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score', nl: 'Total score' },
    type: 'number',
  },
]
