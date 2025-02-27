import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'
export const QOL_STOMA_OUTPUT = {
  QOL_STOMA: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
