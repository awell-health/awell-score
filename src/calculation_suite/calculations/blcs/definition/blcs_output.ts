import { z } from 'zod'

export const BLCS_OUTPUT = {
  BLCS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
}
