import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ACRO_OUTPUT = {
  ACRO_GLOBAL_SCORE: {
    label: { en: 'Global score' },
    type: z.number(),
  },
  ACRO_PHYSICAL_SUBSCALE_SCORE: {
    label: { en: 'Physical subscale score' },
    type: z.number(),
  },
  ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE: {
    label: { en: 'Psychological subscale - Appearance score' },
    type: z.number(),
  },
  ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: {
    label: { en: 'Psychosocial - Personal relationship score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
