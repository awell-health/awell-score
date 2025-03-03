import { ScoreType } from '../../types'
import {
  HOOS_INPUTS,
  HOOS_OUTPUT,
  HOOS_SUBSCALES,
  type SubscaleType,
} from './definition'
import { isNil, pick, round, sum } from 'lodash'

export const hoos_extended: ScoreType<typeof HOOS_INPUTS, typeof HOOS_OUTPUT> =
  {
    name: 'Hip Disability and Osteoarthritis Outcome Score (HOOS)',
    readmeLocation: __dirname,
    inputSchema: HOOS_INPUTS,
    outputSchema: HOOS_OUTPUT,
    calculate: ({ data }) => {
      const MAX_SCORE_PER_ANSWER = 4
      const ROUND_TO = 2

      const calculateSubscaleScore = (subscale: SubscaleType) => {
        const subscaleInputs = HOOS_SUBSCALES[subscale]
        const subscaleInputData = pick(data, subscaleInputs)

        const validSubscaleInputs = Object.values(subscaleInputData).filter(
          value => !isNil(value),
        )

        if (validSubscaleInputs.length === 0) {
          return null
        }

        const maxTotalScore = MAX_SCORE_PER_ANSWER * validSubscaleInputs.length

        return (
          100 -
          round((sum(validSubscaleInputs) / maxTotalScore) * 100, ROUND_TO)
        )
      }

      const calculateTotalScore = () => {
        const validInputs = Object.values(data).filter(value => !isNil(value))

        if (validInputs.length === 0) {
          return null
        }

        const maxTotalScore = MAX_SCORE_PER_ANSWER * validInputs.length

        return 100 - round((sum(validInputs) / maxTotalScore) * 100, ROUND_TO)
      }

      const S = calculateSubscaleScore('S')
      const P = calculateSubscaleScore('P')
      const ADL = calculateSubscaleScore('ADL')
      const SP = calculateSubscaleScore('SP')
      const QOL = calculateSubscaleScore('QOL')
      const TOTAL = calculateTotalScore()

      return {
        TOTAL,
        S,
        P,
        ADL,
        SP,
        QOL,
      }
    },
  }
