import { z } from 'zod'
import { type InputType } from '../../../../types/calculations.types'

export const AGE_CALC_INPUTS: Array<InputType> = [
  {
    input_id: 'date_of_birth',
    input_label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
    input_type: {
      type: 'date',
    },
    required: true,
  },
]

export const InputSchema = z.object({
  date_of_birth: z.string().date(),
})
