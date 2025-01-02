import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const SCCAI_OUTPUT = {
  SCCAI: {
    label: { en: 'SCCAI score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
