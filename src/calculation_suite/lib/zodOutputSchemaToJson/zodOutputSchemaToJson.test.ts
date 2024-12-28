import { z } from 'zod'
import { zodOutputSchemaToJson } from './zodOutputSchemaToJson'

describe('zodOutputSchemaToJson', () => {
  describe('boolean field', () => {
    it('should convert a boolean type to a JSON schema', () => {
      const schema = z.object({
        result: z.boolean(),
      })
      const result = zodOutputSchemaToJson(schema)

      expect(result).toEqual({
        result: {
          type: 'boolean',
        },
      })
    })
  })

  describe('date field', () => {
    it('should convert a date type to a JSON schema', () => {
      const schema = z.object({
        result: z.string().date(),
      })
      const result = zodOutputSchemaToJson(schema)

      expect(result).toEqual({
        result: {
          type: 'date',
        },
      })
    })
  })

  describe('string field', () => {
    it('should convert a string type to a JSON schema', () => {
      const schema = z.object({
        result: z.string(),
      })
      const result = zodOutputSchemaToJson(schema)

      expect(result).toEqual({
        result: {
          type: 'string',
        },
      })
    })
  })

  describe('number field', () => {
    it('should convert a simple number type to a JSON schema', () => {
      const schema = z.object({
        result: z.number(),
      })
      const result = zodOutputSchemaToJson(schema)

      expect(result).toEqual({
        result: {
          type: 'number',
        },
      })
    })
  })
})
