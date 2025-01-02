import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const DLQI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'SYMPTOMS_AND_FEELING',
    label: { en: 'Symptoms and feelings' },
    type: 'number',
  },
  {
    subresult_id: 'DAILY_ACTIVITIES',
    label: { en: 'Daily activities' },
    type: 'number',
  },
  {
    subresult_id: 'LEISURE',
    label: { en: 'Leisure' },
    type: 'number',
  },
  {
    subresult_id: 'WORK_AND_SCHOOL',
    label: { en: 'Work and school' },
    type: 'number',
  },
  {
    subresult_id: 'PERSONAL_RELATIONSHIPS',
    label: { en: 'Personal relationships' },
    type: 'number',
  },
  {
    subresult_id: 'TREATMENT',
    label: { en: 'Treatment' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total DLQI score' },
    type: 'number',
  },
]
