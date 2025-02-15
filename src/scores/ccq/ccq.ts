import { sum, pick } from 'lodash'
import { ScoreType } from '../../types'
import {
  CCQ_OUTPUT,
  CCQ_INPUTS,
  CCQ_SCALES,
  type SubscaleType,
} from './definition'

export const ccq: ScoreType<typeof CCQ_INPUTS, typeof CCQ_OUTPUT> = {
  name: 'Clinical COPD Questionnaire (CCQ)',
  readmeLocation: __dirname,
  inputSchema: CCQ_INPUTS,
  outputSchema: CCQ_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const { items, minAnswers } = CCQ_SCALES[subscale]

      const subscaleItems = pick(data, items)
      const validSubscaleItems = Object.values(subscaleItems).filter(
        v => v !== undefined,
      )

      if (validSubscaleItems.length < minAnswers) {
        return null
      }

      return sum(validSubscaleItems) / validSubscaleItems.length
    }

    const symptomsScore = calculateSubscaleScore('SYMPTOMS')
    const functionalStateScore = calculateSubscaleScore('FUNCTIONAL_STATE')
    const mentalStateScore = calculateSubscaleScore('MENTAL_STATE')

    const validItems = Object.values(data).filter(v => v !== undefined)

    const totalScore = [
      symptomsScore,
      functionalStateScore,
      mentalStateScore,
    ].every(score => score !== null)
      ? sum(validItems) / validItems.length
      : null

    return {
      TOTAL_SCORE: totalScore,
      SYMPTOMS: symptomsScore,
      FUNCTIONAL_STATE: functionalStateScore,
      MENTAL_STATE: mentalStateScore,
    }
  },
}
