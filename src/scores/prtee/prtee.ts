import { ScoreType } from '../../types'
import {
  PRTEE_INPUTS,
  PRTEE_OUTPUT,
  PRTEE_SUBSCALES,
  type SubscaleType,
} from './definition'
import { pick, sum } from 'lodash'

export const prtee: ScoreType<typeof PRTEE_INPUTS, typeof PRTEE_OUTPUT> = {
  name: 'Patient-Rated Tennis Elbow Evaluation (PRTEE)',
  readmeLocation: __dirname,
  inputSchema: PRTEE_INPUTS,
  outputSchema: PRTEE_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = PRTEE_SUBSCALES[subscale]
      const subscaleInputValues = pick(data, subscaleInputs)

      if (subscale === 'FUNCTION') {
        return sum(Object.values(subscaleInputValues)) / 2
      }

      return sum(Object.values(subscaleInputValues))
    }

    const PAIN_SCORE = calculateSubscaleScore('PAIN')
    const FUNCTION_SCORE = calculateSubscaleScore('FUNCTION')

    return {
      TOTAL: PAIN_SCORE + FUNCTION_SCORE,
      PAIN: PAIN_SCORE,
      FUNCTION: FUNCTION_SCORE,
    }
  },
}
