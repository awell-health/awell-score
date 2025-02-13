import { ScoreType } from '../../../types'
import { INVERSE_ITEMS, OMPQ_10_INPUTS, OMPQ_10_OUTPUT } from './definition'
import { pick, sum, omit, mapValues, pickBy } from 'lodash'

export const ompq_10: ScoreType<typeof OMPQ_10_INPUTS, typeof OMPQ_10_OUTPUT> =
  {
    name: 'Orebro Musculoskeletal Pain Questionnaire - Short form (OMPQ-10)',
    readmeLocation: __dirname,
    inputSchema: OMPQ_10_INPUTS,
    outputSchema: OMPQ_10_OUTPUT,
    calculate: ({ data }) => {
      const validInputs = pickBy(data, value => value !== undefined)

      if (Object.keys(validInputs).length === 0) return { OREBRO: null }

      const inverseItems = pick(validInputs, INVERSE_ITEMS)
      const nonInverseItems = omit(validInputs, INVERSE_ITEMS)

      const inverseItemsInversed = mapValues(inverseItems, value => {
        const MAX_SCORE = 10
        return MAX_SCORE - value
      })

      const allItems = { ...inverseItemsInversed, ...nonInverseItems }

      const total_score = sum(Object.values(allItems))

      return {
        OREBRO: total_score,
      }
    },
  }
