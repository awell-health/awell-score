import type { CalculationType } from '../../../../../types/calculations.types'

export const test_calculation: CalculationType = {
  calculation_name: {
    en: 'Test calculation',
  },
  calculation_function: () => [],
  calculation_description: {
    en: 'Test description',
  },
  calculation_blueprint: {
    input_definition: [
      {
        id: 'NUMBER_INPUT',
        input_type: {
          type: 'number',
        },
      },
      {
        id: 'BOOLEAN_INPUT',
        input_type: {
          type: 'boolean',
        },
      },
      {
        id: 'STRING_INPUT',
        input_type: {
          type: 'string',
        },
      },
      {
        id: 'NUMBERS_ARRAY_INPUT',
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
          ],
        },
      },
      {
        id: 'STRINGS_ARRAY_INPUT',
        input_type: {
          type: 'strings_array',
          allowed_answers: [
            {
              value: '0',
              label: {
                en: 'Option 1',
              },
            },
            {
              value: '1',
              label: {
                en: 'Option 2',
              },
            },
            {
              value: '2',
              label: {
                en: 'Option 3',
              },
            },
          ],
        },
      },
    ],
    output_definition: [
      {
        subresult_id: 'OUTPUT',
        label: {
          en: 'Output',
        },
        type: 'number',
      },
    ],
  },
  is_private: false,
}
