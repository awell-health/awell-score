import { ScoreType } from '../../types'
import {
  HOS_INPUTS,
  HOS_OUTPUT,
  HOS_SUBSCALES,
  NOT_APPLICABLE_ANSWER,
  type SubscaleType,
} from './definition'
import { isNil, mean, pick, round, sum } from 'lodash'

export const hos: ScoreType<typeof HOS_INPUTS, typeof HOS_OUTPUT> = {
  name: 'Hip Outcome Score (HOS)',
  readmeLocation: __dirname,
  inputSchema: HOS_INPUTS,
  outputSchema: HOS_OUTPUT,
  calculate: ({ data }) => {
    const MAX_SCORE_PER_ANSWER = 4
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = HOS_SUBSCALES[subscale]
      const subscaleInputData = pick(data, subscaleInputs)

      const validSubscaleInputs = Object.values(subscaleInputData).filter(
        value => !isNil(value),
      )

      if (validSubscaleInputs.length === 0) {
        return null
      }

      const validSubscaleInputsWithoutNotApplicable =
        validSubscaleInputs.filter(value => value !== NOT_APPLICABLE_ANSWER)

      const maxTotalScore =
        MAX_SCORE_PER_ANSWER * validSubscaleInputsWithoutNotApplicable.length

      return round(
        (sum(validSubscaleInputsWithoutNotApplicable) / maxTotalScore) * 100,
        ROUND_TO,
      )
    }

    const calculateTotalScore = () => {
      const validInputs = Object.values(data).filter(value => !isNil(value))

      if (validInputs.length === 0) {
        return null
      }

      const validInputsWithoutNotApplicable = validInputs.filter(
        value => value !== NOT_APPLICABLE_ANSWER,
      )

      const maxTotalScore =
        MAX_SCORE_PER_ANSWER * validInputsWithoutNotApplicable.length

      return round(
        (sum(validInputsWithoutNotApplicable) / maxTotalScore) * 100,
        ROUND_TO,
      )
    }

    const ADL = calculateSubscaleScore('ADL')
    const SPORTS = calculateSubscaleScore('SPORTS')
    const TOTAL = calculateTotalScore()

    return {
      TOTAL,
      ADL,
      SPORTS,
    }
  },
}
