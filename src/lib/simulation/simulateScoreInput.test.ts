import { z } from 'zod'
import { simulateScoreInput } from './simulateScoreInput'
import { ScoreInputSchemaType } from '../../types'
import { createZodObjectFromSchema } from '../createZodObjectFromInputSchema'

describe('Simulation', () => {
  describe('Number input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: { type: z.number().optional() },
        inputTwo: { type: z.number() },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Number),
        inputTwo: expect.any(Number),
      })
    })
  })

  describe('Number input with range', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: { type: z.number().min(10).max(20).optional() },
        inputTwo: { type: z.number().min(10).max(20) },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Number),
        inputTwo: expect.any(Number),
      })

      Object.values(result).forEach(value => {
        expect(value).toBeGreaterThanOrEqual(10)
        expect(value).toBeLessThanOrEqual(20)
      })
    })
  })

  describe('Enum number input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
        },
        inputTwo: {
          type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Number),
        inputTwo: expect.any(Number),
      })
    })
  })

  describe('Date input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z.string().optional().pipe(z.coerce.date().optional()),
        },
        inputTwo: {
          type: z.string().min(1).pipe(z.coerce.date()),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(String),
        inputTwo: expect.any(String),
      })
    })
  })

  describe('String input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z.string().optional(),
        },
        inputTwo: {
          type: z.string(),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(String),
        inputTwo: expect.any(String),
      })
    })
  })

  describe('Enum string input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z
            .union([z.literal('blue'), z.literal('green'), z.literal('red')])
            .optional(),
        },
        inputTwo: {
          type: z.union([
            z.literal('blue'),
            z.literal('green'),
            z.literal('red'),
          ]),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(String),
        inputTwo: expect.any(String),
      })
    })
  })

  describe('Boolean input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z.boolean().optional(),
        },
        inputTwo: {
          type: z.boolean(),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Boolean),
        inputTwo: expect.any(Boolean),
      })
    })
  })

  describe('Numbers array input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z
            .array(z.union([z.literal(1), z.literal(2), z.literal(3)]))
            .optional(),
        },
        inputTwo: {
          type: z.array(z.union([z.literal(1), z.literal(2), z.literal(3)])),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Array),
        inputTwo: expect.any(Array),
      })

      Object.values(result).forEach(arr => {
        expect(Array.isArray(arr)).toBe(true)
        // @ts-expect-error - we know it's an array
        arr.forEach(value => {
          expect([1, 2, 3]).toContain(value)
        })
      })
    })
  })

  describe('Strings array input', () => {
    it('should simulate the input', () => {
      const inputSchema = createZodObjectFromSchema({
        inputOne: {
          type: z
            .array(z.union([z.literal('1'), z.literal('2'), z.literal('3')]))
            .optional(),
        },
        inputTwo: {
          type: z.array(
            z.union([z.literal('1'), z.literal('2'), z.literal('3')]),
          ),
        },
      } satisfies ScoreInputSchemaType)

      const result = simulateScoreInput(inputSchema)

      expect(result).toEqual({
        inputOne: expect.any(Array),
        inputTwo: expect.any(Array),
      })

      Object.values(result).forEach(arr => {
        expect(Array.isArray(arr)).toBe(true)
        // @ts-expect-error - we know it's an array
        arr.forEach(value => {
          expect(['1', '2', '3']).toContain(value)
        })
      })
    })
  })
})
