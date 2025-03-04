import { ScoreType } from '../../types'
import {
  FAAM_INPUTS,
  FAAM_OUTPUT,
  FAAM_SUBSCALES,
  NOT_APPLICABLE_ANSWER,
  type SubscaleType,
} from './definition'
import { isNil, pick, round, sum } from 'lodash'

export const faam: ScoreType<typeof FAAM_INPUTS, typeof FAAM_OUTPUT> = {
  name: 'Foot and Ankle Ability Measure (FAAM)',
  readmeLocation: __dirname,
  inputSchema: FAAM_INPUTS,
  outputSchema: FAAM_OUTPUT,
  calculate: ({ data }) => {
    const MAX_SCORE_PER_ANSWER = 4
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const { inputs, minRequiredAnswers } = FAAM_SUBSCALES[subscale]
      const subscaleInputData = pick(data, inputs)

      const validSubscaleInputs = Object.values(subscaleInputData).filter(
        value => !isNil(value),
      )

      if (validSubscaleInputs.length < minRequiredAnswers) {
        return null
      }

      const validSubscaleInputsWithoutNonApplicableScores =
        validSubscaleInputs.filter(value => value !== NOT_APPLICABLE_ANSWER)

      const maxTotalScore =
        MAX_SCORE_PER_ANSWER *
        validSubscaleInputsWithoutNonApplicableScores.length

      return round(
        (sum(validSubscaleInputsWithoutNonApplicableScores) / maxTotalScore) *
          100,
        ROUND_TO,
      )
    }

    const ADL = calculateSubscaleScore('ADL')
    const SPORTS = calculateSubscaleScore('SPORTS')

    return {
      ADL,
      SPORTS,
    }
  },
}
