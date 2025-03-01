import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PSQI_OUTPUT = {
  PSQI_TOTAL_SCORE: {
    label: { en: 'PSQI Total Score' },
    type: z.number(),
  },
  SUBJECTIVE_SLEEP_QUALITY: {
    label: { en: 'Subjective Sleep Quality' },
    type: z.number(),
  },
  SLEEP_LATENCY: {
    label: { en: 'Sleep Latency' },
    type: z.number(),
  },
  SLEEP_DURATION: {
    label: { en: 'Sleep Duration' },
    type: z.number(),
  },
  HABITUAL_SLEEP_EFFICIENCY: {
    label: { en: 'Habitual Sleep Efficiency' },
    type: z.number(),
  },
  SLEEP_DISTURBANCES: {
    label: { en: 'Sleep Disturbances' },
    type: z.number(),
  },
  USE_OF_SLEEPING_MEDICATION: {
    label: { en: 'Use of Sleeping Medication' },
    type: z.number(),
  },
  DAYTIME_DYSFUNCTION: {
    label: { en: 'Daytime Dysfunction' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
