import { z } from 'zod'
import type { InputType } from '../../../../types/calculations.types'

export const TEN_METER_WALK_TEST_INPUTS: Array<InputType> = [
  {
    input_id: 'TRIAL_1',
    input_label: {
      en: 'Trial 1',
      nl: 'Poging 1',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'TRIAL_2',
    input_label: {
      en: 'Trial 2',
      nl: 'Poging 2',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'TRIAL_3',
    input_label: {
      en: 'Trial 3',
      nl: 'Poging 3',
    },
    input_type: {
      type: 'number',
    },
  },
]

export const TEN_METER_WALK_TEST_INPUT_SCHEMA = z.object({
  TRIAL_1: z.number(),
  TRIAL_2: z.number().optional(),
  TRIAL_3: z.number().optional(),
})
