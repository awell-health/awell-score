import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SNAP_PARENT_OUTPUT = {
  SNAP_PARENT_INATTENTION_SCORE: {
    label: { en: 'Inattention Subset Score' },
    type: z.number(),
  },
  SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION: {
    label: { en: 'Inattention Subset Score Interpretation' },
    type: z.string(),
  },
  SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE: {
    label: { en: 'Hyperactivity/Impulsivity Subset Score' },
    type: z.number(),
  },
  SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION: {
    label: { en: 'Hyperactivity/Impulsivity Subset Score Interpretation' },
    type: z.string(),
  },
  SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE: {
    label: { en: 'Opposition/Defiance Subset score' },
    type: z.number(),
  },
  SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION: {
    label: { en: 'Opposition/Defiance Subset Score Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
