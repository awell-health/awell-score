import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const EQ5D_3L_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'EQ_HEALTH_STATE',
    label: { en: 'Body Mass Index' },
    type: 'number',
  },
  {
    subresult_id: 'EQ_VAS',
    label: { en: 'EQ_VAS' },
    type: 'number',
  },
]
