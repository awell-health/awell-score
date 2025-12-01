import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SF36_OUTPUT = {
  PHYSICAL_FUNCTIONING: {
    label: { en: 'Physical functioning', pl: 'Funkcjonowanie fizyczne' },
    type: z.number(),
  },
  ROLE_LIMITATIONS_PHYSICAL_HEALTH: {
    label: { en: 'Role limitations due to physical health', pl: 'Ograniczenia ról związane ze zdrowiem fizycznym' },
    type: z.number(),
  },
  ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS: {
    label: { en: 'Role limitations due to emotional problems', pl: 'Ograniczenia ról związane z problemami emocjonalnymi' },
    type: z.number(),
  },
  ENERGY_FATIGUE: {
    label: { en: 'Energy/fatigue', pl: 'Energia/zmęczenie' },
    type: z.number(),
  },
  EMOTIONAL_WELLBEING: {
    label: { en: 'Emotional well-being', pl: 'Samopoczucie emocjonalne' },
    type: z.number(),
  },
  SOCIAL_FUNCTIONING: {
    label: { en: 'Social functioning', pl: 'Funkcjonowanie społeczne' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain', pl: 'Ból' },
    type: z.number(),
  },
  GENERAL_HEALTH: {
    label: { en: 'General health', pl: 'Ogólne zdrowie' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
