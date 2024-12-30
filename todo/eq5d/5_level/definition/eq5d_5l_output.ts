import type { CalculationOutputDefinition } from '../../../../src/types/calculations.types'

export const EQ5D_5L_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'EQ_HEALTH_STATE',
    label: { en: 'EQ Health State' },
    type: 'number',
  },
  {
    subresult_id: 'EQ_VAS',
    label: { en: 'EQ VAS' },
    type: 'number',
  },
  {
    subresult_id: 'UTILITY_VALUE_HEALTH_STATE_BELGIUM',
    label: { en: 'Utility value of health state - Belgium' },
    type: 'number',
  },
]
