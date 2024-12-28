import { z } from 'zod'

export const AGE_CALC_INPUTS = {
  date_of_birth: {
    input_label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
  },
}

export const InputSchema = z.object({
  date_of_birth: z.string().date(),
})
