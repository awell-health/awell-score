import { ScoreType } from '../../../types'
import {
  FFI_INPUTS,
  FFI_OUTPUT,
  FFI_SUBSCALES,
  NOT_APPLICABLE_ANSWER,
  type SubscaleType,
} from './definition'
import { isNil, mean, pick, round, sum } from 'lodash'

export const foot_function_index_5pt: ScoreType<
  typeof FFI_INPUTS,
  typeof FFI_OUTPUT
> = {
  name: 'Foot Function Index (FFI) - 5pt',
  readmeLocation: __dirname,
  inputSchema: FFI_INPUTS,
  outputSchema: FFI_OUTPUT,
  calculate: ({ data }) => {
    const MAX_SCORE_PER_ANSWER = 4
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = FFI_SUBSCALES[subscale]
      const subscaleInputData = pick(data, subscaleInputs)

      const validSubscaleInputs = Object.values(subscaleInputData).filter(
        value => !isNil(value) && value !== NOT_APPLICABLE_ANSWER,
      )

      if (validSubscaleInputs.length === 0) {
        return null
      }

      const maxTotalScore = MAX_SCORE_PER_ANSWER * validSubscaleInputs.length

      return round((sum(validSubscaleInputs) / maxTotalScore) * 100, ROUND_TO)
    }

    const LIMITATION = calculateSubscaleScore('LIMITATION')
    const PAIN = calculateSubscaleScore('PAIN')
    const DISABILITY = calculateSubscaleScore('DISABILITY')

    const subscaleScores = [LIMITATION, PAIN, DISABILITY]

    const TOTAL = subscaleScores.every(score => score === null)
      ? null
      : round(mean(subscaleScores), ROUND_TO)

    return {
      TOTAL,
      LIMITATION,
      PAIN,
      DISABILITY,
    }
  },
}
