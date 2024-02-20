// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const ACRO_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ACRO_GLOBAL_SCORE',
    label: { en: 'Global score' },
    type: 'number'
  },
  {
    subresult_id: 'ACRO_PHYSICAL_SUBSCALE_SCORE',
    label: { en: 'Physical subscale score' },
    type: 'number'
  },
  {
    subresult_id: 'ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
    label: { en: 'Psychological subscale - Appearance score' },
    type: 'number'
  },
  {
    subresult_id: 'ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
    label: { en: 'Psychosocial - Personal relationship score' },
    type: 'number'
  }
]
