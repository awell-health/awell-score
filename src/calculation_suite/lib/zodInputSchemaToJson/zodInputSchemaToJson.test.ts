import { z } from 'zod'
import { zodInputSchemaToJson } from './zodInputSchemaToJson'

describe('zodInputSchemaToJson', () => {
  describe('boolean field', () => {
    it('should convert a simple boolean type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.boolean(),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'boolean',
        },
      })
    })
  })

  describe('date field', () => {
    it('should convert a simple date type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.string().date(),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'date',
        },
      })
    })
  })

  describe('string field', () => {
    it('should convert a simple string type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.string(),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'string',
        },
      })
    })

    describe('string union (enum)', () => {
      it('should convert it to allowed answers JSON schema', () => {
        const schema = z.object({
          Q1: z.union([
            z.literal('Option 1'),
            z.literal('Option 2'),
            z.literal('Option 3'),
          ]),
        })
        const result = zodInputSchemaToJson(schema)

        expect(result).toEqual({
          Q1: {
            type: 'string',
            allowed_answers: [
              { value: 'Option 1' },
              { value: 'Option 2' },
              { value: 'Option 3' },
            ],
          },
        })
      })
    })
  })

  describe('number field', () => {
    it('should convert a simple number type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.number(),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'number',
        },
      })
    })

    it('should a number type with min and max to a JSON schema', () => {
      const schema = z.object({
        Q1: z.number().min(1).max(100),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'number',
          range: {
            min: {
              value: 1,
            },
            max: {
              value: 100,
            },
          },
        },
      })
    })

    describe('numeric union (enum)', () => {
      it('should convert it to allowed answers JSON schema', () => {
        const schema = z.object({
          Q1: z.union([z.literal(1), z.literal(2), z.literal(3)]),
        })
        const result = zodInputSchemaToJson(schema)

        expect(result).toEqual({
          Q1: {
            type: 'number',
            allowed_answers: [{ value: 1 }, { value: 2 }, { value: 3 }],
          },
        })
      })
    })
  })

  describe('strings array field', () => {
    it('should convert a string array type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.array(z.union([z.literal('Option 1'), z.literal('Option 2')])),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'strings_array',
          allowed_answers: [{ value: 'Option 1' }, { value: 'Option 2' }],
        },
      })
    })
  })

  describe('numbers array field', () => {
    it('should convert a number array type to a JSON schema', () => {
      const schema = z.object({
        Q1: z.array(z.union([z.literal(1), z.literal(2)])),
      })
      const result = zodInputSchemaToJson(schema)

      expect(result).toEqual({
        Q1: {
          type: 'numbers_array',
          allowed_answers: [{ value: 1 }, { value: 2 }],
        },
      })
    })
  })
})
