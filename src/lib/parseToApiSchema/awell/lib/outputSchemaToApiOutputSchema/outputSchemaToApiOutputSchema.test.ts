import { z } from 'zod'
import { outputSchemaToApiOutputSchema } from './outputSchemaToApiOutputSchema'

describe('outputSchemaToApiOutputSchema', () => {
  describe('boolean field', () => {
    it('should convert a boolean type to a JSON schema', () => {
      const outputSchema = {
        resultId: {
          type: z.boolean(),
          label: {
            en: 'Result',
          },
        },
      }
      const result = outputSchemaToApiOutputSchema(outputSchema)

      expect(result).toEqual([
        {
          subresult_id: 'resultId',
          label: { en: 'Result' },
          type: 'boolean',
        },
      ])
    })
  })

  describe('string field', () => {
    it('should convert a string type to a JSON schema', () => {
      const outputSchema = {
        resultId: {
          type: z.string(),
          label: {
            en: 'Result',
          },
        },
      }
      const result = outputSchemaToApiOutputSchema(outputSchema)

      expect(result).toEqual([
        {
          subresult_id: 'resultId',
          label: { en: 'Result' },
          type: 'string',
        },
      ])
    })
  })

  describe('number field', () => {
    it('should convert a simple number type to a JSON schema', () => {
      const outputSchema = {
        resultId: {
          type: z.number(),
          label: {
            en: 'Result',
          },
        },
      }
      const result = outputSchemaToApiOutputSchema(outputSchema)

      expect(result).toEqual([
        {
          subresult_id: 'resultId',
          label: { en: 'Result' },
          type: 'number',
        },
      ])
    })
  })

  describe('Additional fields', () => {
    it('should include additional fields', () => {
      const outputSchema = {
        resultId: {
          type: z.number(),
          label: {
            en: 'Result',
          },
          unit: {
            en: 'Unit',
          },
          interpretation: {
            en: 'Interpretation',
          },
          terminology: {
            code: {
              coding: [
                {
                  system: 'http://example.com',
                  code: '123',
                  display: 'Example',
                },
              ],
              text: 'Example',
            },
          },
        },
      }
      const result = outputSchemaToApiOutputSchema(outputSchema)

      expect(result).toEqual([
        {
          subresult_id: 'resultId',
          label: { en: 'Result' },
          type: 'number',
          unit: { en: 'Unit' },
          interpretation: { en: 'Interpretation' },
          terminology: {
            code: {
              coding: [
                {
                  system: 'http://example.com',
                  code: '123',
                  display: 'Example',
                },
              ],
              text: 'Example',
            },
          },
        },
      ])
    })
  })
})
