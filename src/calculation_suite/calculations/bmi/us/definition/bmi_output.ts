import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const BMI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BMI',
    label: { en: 'Body Mass Index' },
    unit: { en: '' },
    type: 'number',
  },
]
