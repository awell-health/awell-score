import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PDI_OUTPUT = {
  PDI_INDEX: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
