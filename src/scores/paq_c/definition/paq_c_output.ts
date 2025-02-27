import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PAQ_C_OUTPUT = {
  ACTIVITY_SUMMARY_SCORE: {
    label: { en: 'PAQ-C activity summary score' },
    type: z.number(),
  },
  ITEM_1_SPARE_TIME_ACTIVITY_SCORE: {
    label: { en: 'Spare time activity score (item 1)' },
    type: z.number(),
  },
  ITEMS_2_TO_8_ACTIVITY_SCORE: {
    label: { en: 'Activity score items 2 to 8' },
    type: z.number(),
  },
  ITEM_9_ACTIVITY_SCORE: {
    label: { en: 'Activity score item 9' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
