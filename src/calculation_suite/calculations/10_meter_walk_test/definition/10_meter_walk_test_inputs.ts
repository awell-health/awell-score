import { z } from 'zod'

export const TEN_METER_WALK_TEST_INPUTS = {
  TRIAL_1: {
    input_label: {
      en: 'Trial 1',
      nl: 'Poging 1',
    },
  },
  TRIAL_2: {
    input_label: {
      en: 'Trial 2',
      nl: 'Poging 2',
    },
  },
  TRIAL_3: {
    input_label: {
      en: 'Trial 3',
      nl: 'Poging 3',
    },
  },
}

export const TEN_METER_WALK_TEST_INPUT_SCHEMA = z.object({
  TRIAL_1: z.number(),
  TRIAL_2: z.number().optional(),
  TRIAL_3: z.number().optional(),
})
