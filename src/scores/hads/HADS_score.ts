import { ScoreType } from '../../types'
import {
  HADS_INPUTS,
  HADS_OUTPUT,
  HADS_SUBSCALES,
  type SubscaleType,
} from './definition'
import { isNil, pick, round, sum } from 'lodash'

export const hads: ScoreType<typeof HADS_INPUTS, typeof HADS_OUTPUT> = {
  name: 'Hospital Anxiety and Depression Scale (HADS)',
  readmeLocation: __dirname,
  inputSchema: HADS_INPUTS,
  outputSchema: HADS_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = HADS_SUBSCALES[subscale]
      const subscaleInputData = pick(data, subscaleInputs)

      const validSubscaleInputs = Object.values(subscaleInputData).filter(
        value => !isNil(value),
      )

      if (validSubscaleInputs.length !== subscaleInputs.length) {
        return null
      }

      return sum(validSubscaleInputs)
    }

    const FEAR = calculateSubscaleScore('FEAR')
    const DEPRESSION = calculateSubscaleScore('DEPRESSION')

    return {
      FEAR,
      DEPRESSION,
    }
  },
}
