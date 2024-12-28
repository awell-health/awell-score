import { z } from 'zod'

export const BWCS_OUTPUT = {
  BWCS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
}
