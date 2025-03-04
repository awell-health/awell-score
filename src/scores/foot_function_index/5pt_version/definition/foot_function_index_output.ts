import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../../types'
export const FFI_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score', nl: 'Total score' },
    type: z.number(),
  },
  LIMITATION: {
    label: { en: 'Limitation', nl: 'Beperkingen van activiteiten' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain', nl: 'Pijn' },
    type: z.number(),
  },
  DISABILITY: {
    label: { en: 'Disability', nl: 'Moeite met activiteiten' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
