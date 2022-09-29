import { type InputType } from '../../../../../types/calculations.types'

export const BMI_INPUTS: Array<InputType> = [
  {
    input_id: 'weight_pounds',
    input_label: {
      en: 'Weight (lbs)',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 500 },
      },
    },
    format: 'pounds',
  },
  {
    input_id: 'height_feet',
    input_label: {
      en: 'Height (feet)',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 8 },
      },
    },
    format: 'feet',
  },
  {
    input_id: 'height_inches',
    input_label: {
      en: 'Height (inches)',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 50 },
      },
    },
    format: 'inches',
  },
]
