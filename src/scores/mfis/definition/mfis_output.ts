import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const MFIS_OUTPUT = {
  MFIS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  MFIS_PHYSICAL_SUBSCALE_SCORE: {
    label: { en: 'Physical subscale score' },
    type: z.number(),
  },
  MFIS_COGNITIVE_SUBSCALE_SCORE: {
    label: { en: 'Cognitive subscale score' },
    type: z.number(),
  },
  MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE: {
    label: { en: 'Psychosocial subscale score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
