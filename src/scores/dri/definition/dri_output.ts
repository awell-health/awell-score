import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const DRI_OUTPUT = {
  DRI: {
    label: { en: 'Total DRI score' },
    type: z.number(),
  },
  DRI_INTERPRETATION: {
    label: { en: 'DRI interpretation' },
    type: z.string(),
  },
  BASIC_ACTIVITIES: {
    label: { en: 'Common basic activities' },
    type: z.number(),
  },
  PHYSICAL_ACTIVITIES: {
    label: { en: 'More demanding daily physical activities' },
    type: z.number(),
  },
  WORK_RELATED_ACTIVITIES: {
    label: { en: 'More vigorous activities' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
