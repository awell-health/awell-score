import { pick, round, sum } from 'lodash'
import { OAS_INPUTS, OAS_SUBSCALE_ITEMS, OasSubscale } from '../definition'

export const calculate_mean_score = (
  input: Record<string, number>,
  subscale: OasSubscale,
): number | null => {
  const subscale_items = Object.values(
    pick(input, OAS_SUBSCALE_ITEMS[subscale]),
  )

  if (subscale_items.length === 0) return null

  const ROUND_TO = 2
  return round(sum(subscale_items) / subscale_items.length, ROUND_TO)
}
