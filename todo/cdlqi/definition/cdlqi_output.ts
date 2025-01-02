import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const CDLQI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'SYMPTOMS_AND_FEELINGS',
    label: { en: 'Symptoms and feelings' },
    type: 'number',
  },
  {
    subresult_id: 'LEISURE',
    label: { en: 'Leisure' },
    type: 'number',
  },
  {
    subresult_id: 'SCHOOL_OR_HOLIDAYS',
    label: { en: 'School or holidays' },
    type: 'number',
  },
  {
    subresult_id: 'PERSONAL_RELATIONSHIPS',
    label: { en: 'Personal relationships' },
    type: 'number',
  },
  {
    subresult_id: 'SLEEP',
    label: { en: 'Sleep' },
    type: 'number',
  },
  {
    subresult_id: 'TREATMENT',
    label: { en: 'Treatment' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total' },
    type: 'number',
  },
]
