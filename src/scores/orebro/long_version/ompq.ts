import { ScoreType } from '../../../types'
import {
  OMPQ_OUTPUT,
  OMPQ_INPUTS,
  INVERSE_ITEMS,
  DEFAULT_MAX_SCORE_PER_INPUT,
} from './definition'
import { pick, mapValues, min, sum } from 'lodash'

export const ompq: ScoreType<typeof OMPQ_INPUTS, typeof OMPQ_OUTPUT> = {
  name: 'Orebro Musculoskeletal Pain Questionnaire (OMPQ)',
  readmeLocation: __dirname,
  inputSchema: OMPQ_INPUTS,
  outputSchema: OMPQ_OUTPUT,
  calculate: ({ data }) => {
    /**
     * For the inverse inputs the score is 10 minus the selected number.
     * The inverse inputs are 12, 16, 17, 21, 22, 23, 24 and 25.
     */
    const inverse_items = pick(data, INVERSE_ITEMS)
    const inverse_items_values = mapValues(inverse_items, value => {
      if (value === undefined) {
        return undefined
      }

      const inversed_value = DEFAULT_MAX_SCORE_PER_INPUT - Number(value)

      return inversed_value
    })

    /**
     * For question 5, count the number of pain sites and multiply by two.
     * Maximum allowed score is 10.
     */
    const Q5_MULTIPLIER = 2
    const Q5_score = min([
      data.OMPQ_Q05.length * Q5_MULTIPLIER, // Can be higher than max score
      DEFAULT_MAX_SCORE_PER_INPUT, // If so, cap at max score
    ])

    const recoded_data = {
      ...data,
      ...inverse_items_values,
      OMPQ_Q05: Q5_score,
    }

    return {
      OMPQ: sum(Object.values(recoded_data)),
    }
  },
}
