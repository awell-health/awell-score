import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const PCI_OUTPUT = {
  PAIN_TRANSFORM: {
    label: { en: 'Pain Transformation' },
    type: z.number(),
  },
  DISTRACTION: {
    label: { en: 'Distraction' },
    type: z.number(),
  },
  REDUCING_DEMANDS: {
    label: { en: 'Reducing Demands' },
    type: z.number(),
  },
  RETREATING: {
    label: { en: 'Retreating' },
    type: z.number(),
  },
  WORRYING: {
    label: { en: 'Worrying' },
    type: z.number(),
  },
  RESTING: {
    label: { en: 'Resting' },
    type: z.number(),
  },
  ACTIVE_COPING: {
    label: { en: 'Active coping' },
    type: z.number(),
  },
  ACTIVE_COPING_PERCENTAGE: {
    label: { en: 'Active coping (%)' },
    type: z.number(),
  },
  PASSIVE_COPING: {
    label: { en: 'Passive coping' },
    type: z.number(),
  },
  PASSIVE_COPING_PERCENTAGE: {
    label: { en: 'Passive coping (%)' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
