import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SF36_OUTPUT = {
  PHYSICAL_FUNCTIONING: {
    label: { en: 'Physical functioning' },
    type: z.number(),
  },
  ROLE_LIMITATIONS_PHYSICAL_HEALTH: {
    label: { en: 'Role limitations due to physical health' },
    type: z.number(),
  },
  ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS: {
    label: { en: 'Role limitations due to emotional problems' },
    type: z.number(),
  },
  ENERGY_FATIGUE: {
    label: { en: 'Energy/fatigue' },
    type: z.number(),
  },
  EMOTIONAL_WELLBEING: {
    label: { en: 'Emotional well-being' },
    type: z.number(),
  },
  SOCIAL_FUNCTIONING: {
    label: { en: 'Social functioning' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain' },
    type: z.number(),
  },
  GENERAL_HEALTH: {
    label: { en: 'General health' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
