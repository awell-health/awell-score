import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const SCL90_OUTPUT = {
  PSNEUR: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  AGO: {
    label: { en: 'Agoraphobia' },
    type: z.number(),
  },
  ANG: {
    label: { en: 'Anxiety' },
    type: z.number(),
  },
  DEP: {
    label: { en: 'Depression' },
    type: z.number(),
  },
  SOM: {
    label: { en: 'Somatization' },
    type: z.number(),
  },
  IN: {
    label: { en: 'Cognitive-Performance Deficits' },
    type: z.number(),
  },
  SEN: {
    label: { en: 'Interpersonal Sensitivity' },
    type: z.number(),
  },
  HOS: {
    label: { en: 'Hostility' },
    type: z.number(),
  },
  SLA: {
    label: { en: 'Sleep difficulties' },
    type: z.number(),
  },
  ADD: {
    label: { en: 'Additional items' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
