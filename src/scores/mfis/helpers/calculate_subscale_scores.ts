import { pick, sum } from 'lodash'
import { MFIS_INPUTS } from '../definition'
import { MFIS_SUBSCALES, type SubscaleType } from '../definition/mfis_subscales'
import { z } from 'zod'

export const calculateSubscaleScore = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof MFIS_INPUTS]: (typeof MFIS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const subscaleInputs = pick(data, MFIS_SUBSCALES[subscale])

  const validSubscaleInputs = Object.values(subscaleInputs).filter(
    value => value !== undefined,
  )

  if (validSubscaleInputs.length === 0) {
    return null
  }

  return sum(validSubscaleInputs)
}
