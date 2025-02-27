import { z } from 'zod'
import { PCL5_INPUTS } from '../definition'
import { sum } from 'lodash'

export const calculateTotalSymptomSeverityScore = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof PCL5_INPUTS]: (typeof PCL5_INPUTS)[K]['type']
    }>
  >,
): number | null => {
  const validInputs = Object.values(data).filter(value => value !== undefined)

  if (validInputs.length === 0) return null

  return sum(validInputs)
}
