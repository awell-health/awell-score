import type { CalculationOutputDefinition } from '../../../../../../types/calculations.types'

export const TRIAGE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'FEMMES_ENCEINTES_TRIAGE',
    label: { en: 'Sum score' },
    type: 'number',
  },
]
