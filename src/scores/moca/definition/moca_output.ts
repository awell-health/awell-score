import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const MOCA_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  VISUOSPATIAL_EXECUTIVE: {
    label: { en: 'Visuospatial / executive' },
    type: z.number(),
  },
  NAMING: {
    label: { en: 'Naming' },
    type: z.number(),
  },
  ATTENTION: {
    label: { en: 'Attention' },
    type: z.number(),
  },
  LANGUAGE: {
    label: { en: 'Language' },
    type: z.number(),
  },
  ABSTRACTION: {
    label: { en: 'Abstraction' },
    type: z.number(),
  },
  DELAYED_RECALL: {
    label: { en: 'Delayed recall' },
    type: z.number(),
  },
  ORIENTATION: {
    label: { en: 'Orientation' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
