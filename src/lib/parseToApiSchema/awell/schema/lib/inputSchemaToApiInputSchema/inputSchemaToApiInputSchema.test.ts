import { z } from 'zod'
import { inputSchemaToApiInputSchema } from '../inputSchemaToApiInputSchema'
import { SimpleNumberInputType } from '../../../../../../types'

describe('inputSchemaToApiInputSchema', () => {
  describe('boolean field', () => {
    it('should convert a simple boolean type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          info: { en: 'Some info here' },
          type: z.boolean(),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          info: { en: 'Some info here' },
          input_type: {
            type: 'boolean',
            required: true,
            allowed_answers: [
              { value: true, label: { en: 'Yes' } },
              { value: false, label: { en: 'No' } },
            ],
          },
        },
      ])
    })

    it('should convert a boolean type with custom labels to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.boolean().optional(),
          uiOptions: {
            options: [
              { value: true, label: { en: 'Yes, sir' } },
              { value: false, label: { en: 'No, Sir' } },
            ],
          },
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'boolean',
            required: false,
            allowed_answers: [
              { value: true, label: { en: 'Yes, sir' } },
              { value: false, label: { en: 'No, Sir' } },
            ],
          },
        },
      ])
    })
  })

  describe('date field', () => {
    it('should convert a date type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.string().date().optional(),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'date',
            required: false,
          },
        },
      ])
    })
  })

  describe('string field', () => {
    it('should convert a string type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.string(),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'string',
            required: true,
          },
        },
      ])
    })

    describe('string union (enum)', () => {
      it('should convert it to allowed answers JSON schema if no uiOptions are provided', () => {
        const inputSchema = {
          inputId: {
            label: { en: 'inputId' },
            type: z.union([
              z.literal('option_1'),
              z.literal('option_2'),
              z.literal('option_3'),
            ]),
          },
        }
        const result = inputSchemaToApiInputSchema(inputSchema)

        expect(result).toEqual([
          {
            id: 'inputId',
            label: { en: 'inputId' },
            input_type: {
              type: 'string',
              required: true,
              allowed_answers: [
                { value: 'option_1' },
                { value: 'option_2' },
                { value: 'option_3' },
              ],
            },
          },
        ])
      })

      it('should convert it to allowed answers JSON schema and use uiOptions if provided', () => {
        const inputSchema = {
          inputId: {
            label: { en: 'inputId' },
            type: z
              .union([
                z.literal('option_1'),
                z.literal('option_2'),
                z.literal('option_3'),
              ])
              .optional(),
            uiOptions: {
              options: [
                { value: 'option_1', label: { en: 'Option 1' } },
                { value: 'option_2', label: { en: 'Option 2' } },
              ],
            },
          },
        }
        const result = inputSchemaToApiInputSchema(inputSchema)

        expect(result).toEqual([
          {
            id: 'inputId',
            label: { en: 'inputId' },
            input_type: {
              type: 'string',
              required: false,
              allowed_answers: [
                { value: 'option_1', label: { en: 'Option 1' } },
                { value: 'option_2', label: { en: 'Option 2' } },
                { value: 'option_3' },
              ],
            },
          },
        ])
      })
    })
  })

  describe('number field', () => {
    it('should convert a simple number type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.number(),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: { type: 'number', required: true },
        },
      ])
    })

    it('should convert a simple number with slider uiOptions to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.number().min(0).max(100).optional(),
          unit: { en: 'cm' },
          uiOptions: {
            component: 'slider',
            range: {
              min: { label: { en: 'Min label' } },
              max: { label: { en: 'Max label' } },
            },
          },
        } satisfies SimpleNumberInputType,
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'number',
            required: false,
            component: 'slider',
            range: {
              min: { value: 0, label: { en: 'Min label' } },
              max: { value: 100, label: { en: 'Max label' } },
            },
          },
          format: 'cm',
        },
      ])
    })

    it('should convert a number with min to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.number().min(10),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'number',
            required: true,
            range: { min: { value: 10 } },
          },
        },
      ])
    })

    it('should convert a number with max to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.number().max(999),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'number',
            required: true,
            range: { max: { value: 999 } },
          },
        },
      ])
    })

    it('should convert a number type with min and max to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.number().min(1).max(100),
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'number',
            required: true,
            range: {
              min: {
                value: 1,
              },
              max: {
                value: 100,
              },
            },
          },
        },
      ])
    })

    describe('numeric union (enum)', () => {
      it('should convert it to allowed answers JSON schema if no uiOptions are provided', () => {
        const inputSchema = {
          inputId: {
            label: { en: 'inputId' },
            type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
          },
        }
        const result = inputSchemaToApiInputSchema(inputSchema)

        expect(result).toEqual([
          {
            id: 'inputId',
            label: { en: 'inputId' },
            input_type: {
              type: 'number',
              required: true,
              allowed_answers: [{ value: 1 }, { value: 2 }, { value: 3 }],
            },
          },
        ])
      })

      it('should convert it to allowed answers JSON schema and use uiOptions if provided', () => {
        const inputSchema = {
          inputId: {
            label: { en: 'inputId' },
            type: z
              .union([z.literal(1), z.literal(2), z.literal(3)])
              .optional(),
            uiOptions: {
              options: [
                { value: 1, label: { en: 'Option 1' } },
                { value: 2, label: { en: 'Option 2' } },
              ],
            },
          },
        }
        const result = inputSchemaToApiInputSchema(inputSchema)

        expect(result).toEqual([
          {
            id: 'inputId',
            label: { en: 'inputId' },
            input_type: {
              type: 'number',
              required: false,
              allowed_answers: [
                { value: 1, label: { en: 'Option 1' } },
                { value: 2, label: { en: 'Option 2' } },
                { value: 3 },
              ],
            },
          },
        ])
      })
    })
  })

  describe('strings array field', () => {
    it('should convert a string array type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.array(z.union([z.literal('o1'), z.literal('o2')])).optional(),
          uiOptions: {
            options: [
              { value: 'o1', label: { en: 'Option 1' } },
              { value: 'o2', label: { en: 'Option 2' } },
            ],
          },
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'strings_array',
            required: false,
            allowed_answers: [
              { value: 'o1', label: { en: 'Option 1' } },
              { value: 'o2', label: { en: 'Option 2' } },
            ],
          },
        },
      ])
    })
  })

  describe('numbers array field', () => {
    it('should convert a number array type to a JSON schema', () => {
      const inputSchema = {
        inputId: {
          label: { en: 'inputId' },
          type: z.array(z.union([z.literal(1), z.literal(2)])),
          uiOptions: {
            options: [
              { value: 1, label: { en: 'Option 1' } },
              { value: 2, label: { en: 'Option 2' } },
            ],
          },
        },
      }
      const result = inputSchemaToApiInputSchema(inputSchema)

      expect(result).toEqual([
        {
          id: 'inputId',
          label: { en: 'inputId' },
          input_type: {
            type: 'numbers_array',
            required: true,
            allowed_answers: [
              { value: 1, label: { en: 'Option 1' } },
              { value: 2, label: { en: 'Option 2' } },
            ],
          },
        },
      ])
    })
  })
})
