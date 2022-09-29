import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const POSAS_PATIENT_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'POSAS_PATIENT',
    label: { en: 'POSAS Patient score' },
    type: 'number',
  },
]
