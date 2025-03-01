import { pick, sum } from 'lodash'
import { PSQI_SUBSCALES, type SubscaleType } from '../definition'
import { Data } from './types'

export const calculate_subscale_scores = (
  data: Data,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = PSQI_SUBSCALES[subscale]
  const subscaleInputs = pick(data, INPUT_IDS_NEEDED_FOR_SCORING)

  const validSubscaleInputs = Object.values(subscaleInputs).filter(
    v => v !== undefined,
  )

  if (validSubscaleInputs.length === 0) {
    return null
  }

  const subscaleScore = sum(validSubscaleInputs)

  return subscaleScore
}
