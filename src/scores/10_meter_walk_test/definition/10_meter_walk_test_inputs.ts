import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const TEN_METER_WALK_TEST_INPUTS = {
  TRIAL_1: {
    type: z.number(),
    label: {
      en: 'Trial 1',
      nl: 'Poging 1',
    },
  },
  TRIAL_2: {
    type: z.number().optional(),
    label: {
      en: 'Trial 2',
      nl: 'Poging 2',
    },
  },
  TRIAL_3: {
    type: z.number().optional(),
    label: {
      en: 'Trial 3',
      nl: 'Poging 3',
    },
  },
} satisfies ScoreInputSchemaType
