import { z } from 'zod'
import { createZodObjectFromSchema } from './'

describe('createZodObjectFromInputSchema', () => {
  it('should create a zod object from a score input schema', () => {
    const schema = {
      inputField1: {
        type: z.string(),
      },
      inputField2: {
        type: z.number(),
      },
    }

    const zodObject = createZodObjectFromSchema(schema)

    expect(zodObject).toBeDefined()
    expect(zodObject).toBeInstanceOf(z.ZodObject)

    const validInput = {
      inputField1: 'test string',
      inputField2: 123,
    }

    expect(zodObject.parse(validInput)).toEqual(validInput)
  })
})
