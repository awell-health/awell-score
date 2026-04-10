import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const WOOS_OUTPUT = {
  WOOS_PHYSICAL_SYMPTOMS: {
    label: { en: 'Physical Symptoms', fr: 'Symptômes physiques' },
    type: z.number(),
  },
  WOOS_SPORTS_RECREATION_WORK: {
    label: { en: 'Sports/Recreation/Work', fr: 'Sports/loisirs/travail' },
    type: z.number(),
  },
  WOOS_LIFESTYLE: {
    label: { en: 'Lifestyle', fr: 'Mode de vie' },
    type: z.number(),
  },
  WOOS_EMOTIONS: {
    label: { en: 'Emotions', fr: 'Émotions' },
    type: z.number(),
  },
  WOOS_TOTAL: {
    label: { en: 'Total Score', fr: 'Score total' },
    type: z.number(),
  },
  WOOS_PERCENTAGE: {
    label: {
      en: 'Percentage of Normal',
      fr: 'Pourcentage de la normale',
    },
    type: z.number(),
    unit: { en: '%', fr: '%' },
  },
} satisfies ScoreOutputSchemaType
