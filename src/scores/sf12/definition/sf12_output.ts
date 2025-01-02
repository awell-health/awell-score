import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const SF12_OUTPUT = {
  PHYSICAL_COMPONENT_SCORE: {
    label: { en: 'Physical Component Score (PCS)' },
    type: z.number(),
  },
  MENTAL_COMPONENT_SCORE: {
    label: { en: 'Mental Component Score (MCS)' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
