import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PSS4_OUTPUTS = {
  PSS4_SCORE: {
    label: { en: 'PSS-4 Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
