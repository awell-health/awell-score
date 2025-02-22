import { mapValues, omit, pick, round, sum } from 'lodash'
import { ScoreType } from '../../types'
import { IKDC_INPUTS, IKDC_OUTPUT, INVERSE_ITEMS } from './definition'

export const ikdc: ScoreType<typeof IKDC_INPUTS, typeof IKDC_OUTPUT> = {
  name: 'International Knee Documentation Committee Subjective Knee Form (IKDC)',
  readmeLocation: __dirname,
  inputSchema: IKDC_INPUTS,
  outputSchema: IKDC_OUTPUT,
  calculate: ({ data }) => {
    const inverseInputItems = pick(data, INVERSE_ITEMS)
    const otherInputItems = omit(data, INVERSE_ITEMS)
    const inverseInputItemsValues = mapValues(inverseInputItems, value => {
      if (value === undefined) return null

      const INVERSE_CONST = 10
      return INVERSE_CONST - value
    })

    const MAX_POSSIBLE_SCORE = 87
    const ROUND_TO = 2

    const totalScore = sum([
      ...Object.values(inverseInputItemsValues),
      ...Object.values(otherInputItems),
    ])

    const score = round((totalScore / MAX_POSSIBLE_SCORE) * 100, ROUND_TO)

    return {
      IKDC_SCORE: score,
    }
  },
}
