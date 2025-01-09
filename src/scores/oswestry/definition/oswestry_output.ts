import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const OSWESTRY_OUTPUT = {
  OSWESTRY: {
    label: { en: 'Oswestry score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
