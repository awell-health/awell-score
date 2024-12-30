import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const MPI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'MPI_PSYCHOSOCIAL',
    label: { en: 'Psychological/Psychosocial aspects of pain' },
    type: 'number',
  },
  {
    subresult_id: 'MPI_BEHAVIOUR',
    label: { en: 'Interactional aspects/reactions on pain' },
    type: 'number',
  },
  {
    subresult_id: 'MPI_ADL',
    label: { en: 'Participation in daily activities' },
    type: 'number',
  },
  {
    subresult_id: 'MPI_TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
