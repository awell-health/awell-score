import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const EORTC_QLQ_BR23_OUTPUT = {
  BRI: {
    label: { en: 'Body image' },
    type: z.number(),
  },
  BRSEF: {
    label: { en: 'Sexual functioning' },
    type: z.number(),
  },
  BRSEE: {
    label: { en: 'Sexual enjoyment' },
    type: z.number(),
  },
  BRFU: {
    label: { en: 'Future perspective' },
    type: z.number(),
  },
  BRST: {
    label: { en: 'Systemic therapy side effects' },
    type: z.number(),
  },
  BRBS: {
    label: { en: 'Breast symptoms' },

    type: z.number(),
  },
  BRAS: {
    label: { en: 'Arm symptoms' },
    type: z.number(),
  },
  BRHL: {
    label: { en: 'Upset by hair loss' },
    type: z.number(),
  },
} as ScoreOutputSchemaType
