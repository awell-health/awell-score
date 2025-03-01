import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT = {
  PA_MINUTES_PER_WEEK: {
    label: { en: 'Physical activity in minutes/week' },
    type: z.number(),
  },
  PA_MET_MINUTES_PER_WEEK: {
    label: { en: 'Physical activity in MET-minutes/week' },
    type: z.number(),
  },
  ENOUGH_PA: {
    label: { en: 'Enough physical activity' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
