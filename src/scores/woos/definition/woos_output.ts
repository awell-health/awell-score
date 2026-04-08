import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const WOOS_OUTPUT = {
  WOOS_PHYSICAL_SYMPTOMS: {
    label: { en: 'Physical Symptoms (/600)' },
    type: z.number(),
  },
  WOOS_SPORTS_LEISURE_WORK: {
    label: { en: 'Sports/Recreation/Work (/500)' },
    type: z.number(),
  },
  WOOS_LIFESTYLE: {
    label: { en: 'Lifestyle (/500)' },
    type: z.number(),
  },
  WOOS_EMOTIONS: {
    label: { en: 'Emotions (/300)' },
    type: z.number(),
  },
  WOOS_TOTAL_SCORE: {
    label: { en: 'Total Score (/1900)' },
    type: z.number(),
  },
  WOOS_PERCENTAGE: {
    label: { en: 'Percentage Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
