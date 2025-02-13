import { z } from 'zod'
import { SNAP_INPUTS, SNAP_SUBSCALES, type SubscaleType } from '../definition'
import { pick, sum } from 'lodash'

export const calculate_subscale_scores = (
  inputData: z.infer<
    z.ZodObject<{
      [K in keyof typeof SNAP_INPUTS]: (typeof SNAP_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const subscaleInputIds = SNAP_SUBSCALES[subscale]
  const subscaleInputData = Object.values(pick(inputData, subscaleInputIds))

  return sum(subscaleInputData)
}
