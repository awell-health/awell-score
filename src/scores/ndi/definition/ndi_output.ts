import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const NDI_OUTPUT = {
  NDI: {
    label: { en: 'NDI Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
