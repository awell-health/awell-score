import { pick, sum } from 'lodash'
import { WOOS_INPUTS } from '../definition'
import { WOOS_SUBSCALES, type SubscaleType } from '../definition/woos_subscales'
import { z } from 'zod'

export const calculateSubscaleScore = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof WOOS_INPUTS]: (typeof WOOS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const subscaleInputs = pick(data, WOOS_SUBSCALES[subscale])

  const validSubscaleInputs = Object.values(subscaleInputs).filter(
    value => value !== undefined,
  )

  if (validSubscaleInputs.length === 0) {
    return null
  }

  return sum(validSubscaleInputs)
}
