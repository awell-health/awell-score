import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const IAS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'HEALTH_ANXIETY',
    label: { en: 'Health anxiety' },
    type: 'number',
  },
  {
    subresult_id: 'ILNESS_BEHAVIOUR',
    label: { en: 'Ilness behaviour' },
    type: 'number',
  },
]
