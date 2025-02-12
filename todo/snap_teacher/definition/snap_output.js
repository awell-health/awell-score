// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const SNAP_TEACHER_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'SNAP_TEACHER_INATTENTION_SCORE',
    label: { en: 'Inattention Subset Score' },
    type: 'number'
  },
  {
    subresult_id: 'SNAP_TEACHER_INATTENTION_SCORE_INTERPRETATION',
    label: { en: 'Inattention Subset Score Interpretation' },
    type: 'string'
  },
  {
    subresult_id: 'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE',
    label: { en: 'Hyperactivity/Impulsivity Subset Score' },
    type: 'number'
  },
  {
    subresult_id: 'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION',
    label: { en: 'Hyperactivity/Impulsivity Subset Score Interpretation' },
    type: 'string'
  },
  {
    subresult_id: 'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE',
    label: { en: 'Opposition/Defiance Subset score' },
    type: 'number'
  },
  {
    subresult_id: 'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION',
    label: { en: 'Opposition/Defiance Subset Score Interpretation' },
    type: 'string'
  }
]
