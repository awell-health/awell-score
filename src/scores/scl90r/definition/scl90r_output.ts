import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SCL90R_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  SOMATIZATION: {
    label: { en: 'Somatization' },
    type: z.number(),
  },
  OBSESSIVE_COMPULSIVE: {
    label: { en: 'Obsessive compulsive' },
    type: z.number(),
  },
  INTERPERSONAL_SENSITIVITY: {
    label: { en: 'Interpersonal Sensitivity' },
    type: z.number(),
  },
  DEPRESSION: {
    label: { en: 'Depression' },
    type: z.number(),
  },
  ANXIETY: {
    label: { en: 'Anxiety' },
    type: z.number(),
  },
  HOSTILITY: {
    label: { en: 'Hostility' },
    type: z.number(),
  },
  PHOBIC_ANXIETY: {
    label: { en: 'Phobic anxiety' },
    type: z.number(),
  },
  PARANOID_IDEATION: {
    label: { en: 'Paranoid ideation' },
    type: z.number(),
  },
  PSYCHOTICISM: {
    label: { en: 'Psychoticism' },
    type: z.number(),
  },
  ADDITIONAL_ITEMS: {
    label: { en: 'Additional items' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
