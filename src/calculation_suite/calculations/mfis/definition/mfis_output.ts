import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const MFIS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'MFIS_TOTAL_SCORE',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'MFIS_PHYSICAL_SUBSCALE_SCORE',
    label: { en: 'Physical subscale score' },
    type: 'number',
  },
  {
    subresult_id: 'MFIS_COGNITIVE_SUBSCALE_SCORE',
    label: { en: 'Cognitive subscale score' },
    type: 'number',
  },
  {
    subresult_id: 'MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE',
    label: { en: 'Psychosocial subscale score' },
    type: 'number',
  },
]
