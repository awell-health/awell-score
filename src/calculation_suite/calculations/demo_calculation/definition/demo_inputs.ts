import type { InputType } from '../../../../types/calculations.types'

export const DEMO_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01_STRING',
    input_label: {
      en: 'This is a string input type (free text)',
    },
    input_type: {
      type: 'string',
    },
  },
  {
    input_id: 'Q02_STRING_WITH_SET_OF_ALLOWED_ANSWERS',
    input_label: {
      en: 'This is a string input type where only a specific set of string answers are allowed',
    },
    input_type: {
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
    input_label: {
      en: 'This is a numeric input type (without any validation, i.e. no range or set of limited allowed answers)',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'Q04_NUMBER_WITH_RANGE',
    input_label: {
      en: 'This is a numeric input type with range validation [0, 10]',
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 10 },
      },
    },
  },
  {
    input_id: 'Q05_NUMBER_WITH_SET_OF_ALLOWED_ANSWERS',
    input_label: {
      en: 'This is a numeric input type where only a specific set of numeric answers are allowed',
    },
    input_type: {
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
    input_label: {
      en: 'This is a numbers array input type',
    },
    input_type: {
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
    input_label: {
      en: 'This is a strings array input type',
    },
    input_type: {
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
    input_label: {
      en: 'This is a boolean input type',
    },
    input_type: {
      type: 'boolean',
    },
  },
  {
    input_id: 'Q09_BOOLEAN',
    input_label: {
      en: 'This is a date input type',
    },
    input_type: {
      type: 'date',
    },
  },
]
