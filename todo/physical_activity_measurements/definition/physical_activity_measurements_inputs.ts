import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const HOW_MANY_DAYS_PER_WEEK: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { en: '0 days' } },
    { value: 1, label: { en: '1 day' } },
    { value: 2, label: { en: '2 days' } },
    { value: 3, label: { en: '3 days' } },
    { value: 4, label: { en: '4 days' } },
    { value: 5, label: { en: '5 days' } },
    { value: 6, label: { en: '6 days' } },
    { value: 7, label: { en: '7 days' } },
  ],
}

const ACTIVITY_PER_DAY_IN_MINUTES: NumberInputType = {
  type: 'number',
  range: {
    min: { value: 1 },
    max: { value: 720 },
  },
}

export const PA_INPUTS: Array<InputType> = [
  {
    input_id: 'LIGHT_PA_DAYS_PER_WEEK',
    input_type: HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of light physical activity' },
    format: 'days per week',
    required: false,
  },
  {
    input_id: 'LIGHT_PA_MINUTES_PER_DAY',
    input_type: ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of light physical activity' },
    format: 'minutes per day',
    required: false,
  },
  {
    input_id: 'MODERATE_PA_DAYS_PER_WEEK',
    input_type: HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of moderate physical activity' },
    format: 'days per week',
    required: false,
  },
  {
    input_id: 'MODERATE_PA_MINUTES_PER_DAY',
    input_type: ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of moderate physical activity' },
    format: 'minutes per day',
    required: false,
  },
  {
    input_id: 'VIGOROUS_PA_DAYS_PER_WEEK',
    input_type: HOW_MANY_DAYS_PER_WEEK,
    info: { en: 'Days per week of vigorous physical activity' },
    format: 'days per week',
    required: false,
  },
  {
    input_id: 'VIGOROUS_PA_MINUTES_PER_DAY',
    input_type: ACTIVITY_PER_DAY_IN_MINUTES,
    info: { en: 'Minutes per day of vigorous physical activity' },
    format: 'minutes per day',
    required: false,
  },
]
