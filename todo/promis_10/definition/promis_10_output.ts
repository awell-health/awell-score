import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PROMIS_10_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'GLOBAL_PHYSICAL_HEALTH_RAW_SCORE',
    label: { en: 'Global Physical Health: raw score' },
    type: 'number',
  },
  {
    subresult_id: 'GLOBAL_MENTAL_HEALTH_RAW_SCORE',
    label: { en: 'Global Mental Health: raw score' },
    type: 'number',
  },
  {
    subresult_id: 'GLOBAL_PHYSICAL_HEALTH_T_SCORE',
    label: { en: 'Global Physical Health: T-score' },
    type: 'number',
  },
  {
    subresult_id: 'GLOBAL_MENTAL_HEALTH_T_SCORE',
    label: { en: 'Global Mental Health: T-score' },
    type: 'number',
  },
]
