import type { InputType } from '../../../src/types/calculations.types'

export const DEMO_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01_STRING',
    label: {
      en: 'This is a string input type (free text)',
    },
    type: {
      type: 'string',
    },
  },
  {
    input_id: 'Q02_STRING_WITH_SET_OF_ALLOWED_ANSWERS',
    label: {
      en: 'This is a string input type where only a specific set of string answers are allowed',
    },
    type: {
      type: 'string',
      allowed_answers: [
        {
          value: 'option_1',
          label: {
            en: 'Option 1',
          },
        },
        {
          value: 'option_2',
          label: {
            en: 'Option 2',
          },
        },
        {
          value: 'option_3',
          label: {
            en: 'Option 3',
          },
        },
        {
          value: 'option_4',
          label: {
            en: 'Option 4',
          },
        },
        {
          value: 'option_5',
          label: {
            en: 'Option 5',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q03_NUMBER',
    label: {
      en: 'This is a numeric input type (without any validation, i.e. no range or set of limited allowed answers)',
    },
    type: {
      type: 'number',
    },
  },
  {
    input_id: 'Q04_NUMBER_WITH_RANGE',
    label: {
      en: 'This is a numeric input type with range validation [0, 10]',
    },
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
  },
  {
    input_id: 'Q05_NUMBER_WITH_SET_OF_ALLOWED_ANSWERS',
    label: {
      en: 'This is a numeric input type where only a specific set of numeric answers are allowed',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Option 1',
          },
        },
        {
          value: 1,
          label: {
            en: 'Option 2',
          },
        },
        {
          value: 3,
          label: {
            en: 'Option 3',
          },
        },
        {
          value: 4,
          label: {
            en: 'Option 4',
          },
        },
        {
          value: 5,
          label: {
            en: 'Option 5',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q06_NUMBERS_ARRAY',
    label: {
      en: 'This is a numbers array input type',
    },
    type: {
      type: 'numbers_array',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Option 1',
          },
        },
        {
          value: 1,
          label: {
            en: 'Option 2',
          },
        },
        {
          value: 3,
          label: {
            en: 'Option 3',
          },
        },
        {
          value: 4,
          label: {
            en: 'Option 4',
          },
        },
        {
          value: 5,
          label: {
            en: 'Option 5',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q07_STRINGS_ARRAY',
    label: {
      en: 'This is a strings array input type',
    },
    type: {
      type: 'strings_array',
      allowed_answers: [
        {
          value: 'option_1',
          label: {
            en: 'Option 1',
          },
        },
        {
          value: 'option_2',
          label: {
            en: 'Option 2',
          },
        },
        {
          value: 'option_3',
          label: {
            en: 'Option 3',
          },
        },
        {
          value: 'option_4',
          label: {
            en: 'Option 4',
          },
        },
        {
          value: 'option_5',
          label: {
            en: 'Option 5',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q08_BOOLEAN',
    label: {
      en: 'This is a boolean input type',
    },
    type: {
      type: 'boolean',
    },
  },
  {
    input_id: 'Q09_BOOLEAN',
    label: {
      en: 'This is a date input type',
    },
    type: {
      type: 'date',
    },
  },
]
