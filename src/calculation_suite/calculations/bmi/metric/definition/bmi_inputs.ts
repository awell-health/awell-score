import { type InputType } from '../../../../../types/calculations.types'

export const BMI_INPUTS: Array<InputType> = [
  {
    input_id: 'weight',
    input_label: {
      nl: 'Gewicht',
      en: 'Weight',
      fr: 'Poids',
      de: 'Gewicht',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 10 },
        max: { value: 300 },
      },
    },
    format: 'kg',
    required: true,
  },
  {
    input_id: 'height',
    input_label: {
      nl: 'Lengte',
      en: 'Height',
      fr: 'Longueur',
      de: 'Länge',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 20 },
        max: { value: 300 },
      },
    },
    format: 'cm',
    required: true,
  },
]
