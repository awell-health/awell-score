import { pickBy } from 'lodash'

import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../types'
import { mapValues, random, sample, sampleSize } from 'lodash'
import { simulateStringInput, simulateDateInput } from './lib'

export const simulateScoreInput = <InputSchema extends ScoreInputSchemaType>(
  schema: z.ZodObject<{
    [K in keyof InputSchema]: InputSchema[K]['type']
  }>,
): Record<string, unknown> => {
  const simulatedInput = mapValues(schema.shape, zodType => {
    const getZodType = () => {
      if (zodType instanceof z.ZodOptional) {
        const unwrappedType = zodType.unwrap()
        return unwrappedType
      }

      return zodType
    }

    const inputType = getZodType()

    if (inputType instanceof z.ZodString) {
      const isDate = inputType._def.checks.find(check => check.kind === 'date')
      if (isDate) {
        return simulateDateInput()
      }

      return simulateStringInput()
    }

    if (inputType instanceof z.ZodBoolean) {
      return sample([true, false])
    }

    if (inputType instanceof z.ZodNumber) {
      const min = inputType.minValue
      const max = inputType.maxValue

      return random(min ?? 0, max ?? 100, false)
    }

    if (inputType instanceof z.ZodUnion) {
      const optionValues = inputType.options.map(option => option.value)
      return sample(optionValues)
    }

    if (inputType instanceof z.ZodArray) {
      const itemType = inputType.element

      if (itemType instanceof z.ZodUnion) {
        const optionValues = itemType.options.map(option => option.value)
        const randomNumberBetweenOneAndMax = random(1, optionValues.length)
        return sampleSize(optionValues, randomNumberBetweenOneAndMax)
      }
    }

    return undefined
  })

  return pickBy(simulatedInput, value => value !== undefined)
}
