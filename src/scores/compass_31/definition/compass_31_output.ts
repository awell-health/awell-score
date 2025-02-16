import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const COMPASS_31_OUTPUT = {
  COMPASS_31_TOTAL_SCORE: {
    label: { en: 'COMPASS 31 Total Score' },
    type: z.number(),
  },
  COMPASS_31_ORTHOSTATIC_INTOLERANCE: {
    label: { en: 'COMPASS 31 - Orthostatic Intolerance' },
    type: z.number(),
  },
  COMPASS_31_VASOMOTOR: {
    label: { en: 'COMPASS 31 - Vasomotor' },
    type: z.number(),
  },
  COMPASS_31_SECRETOMOTOR: {
    label: { en: 'COMPASS 31 - Secretomotor' },
    type: z.number(),
  },
  COMPASS_31_GASTROINTESTINAL: {
    label: { en: 'COMPASS 31 - Gastrointestinal' },
    type: z.number(),
  },
  COMPASS_31_BLADDER: {
    label: { en: 'COMPASS 31 - Bladder' },
    type: z.number(),
  },
  COMPASS_31_PUPILLOMOTOR: {
    label: { en: 'COMPASS 31 - Pupillomotor' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
