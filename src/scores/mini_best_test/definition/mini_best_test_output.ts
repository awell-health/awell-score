import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const MINI_BEST_TEST_OUTPUT = {
  TOTAL: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  ANTICIPATORY_POSTURAL_ADJUSTEMENTS: {
    label: { en: 'Anticipatory postural adjustments' },
    type: z.number(),
  },
  REACTIVE_POSTURAL_CONTROL: {
    label: { en: 'Reactive postural control' },
    type: z.number(),
  },
  SENSORY_ORIENTATION: {
    label: { en: 'Sensory orientation' },
    type: z.number(),
  },
  DYNAMIC_GAIT: {
    label: { en: 'Dynamic gait' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
