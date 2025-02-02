import { OAS_INPUTS, OAS_SUBSCALE_ITEMS, OasSubscale } from '../definition'
import { pick, sum } from 'lodash'

export const calculate_total_score = (
  input: Record<string, number>,
  subscale: OasSubscale,
): number | null => {
  const subscale_items = Object.values(
    pick(input, OAS_SUBSCALE_ITEMS[subscale]),
  )

  if (subscale_items.length === 0) return null

  return sum(subscale_items)
}
