import { ScoreType } from '../../types'
import {
  QUICKDASH_INPUTS,
  QUICKDASH_OUTPUT,
  QUICKDASH_SUBSCALES,
  type SubscaleType,
} from './definition'
import { pick, round, sum } from 'lodash'

export const quickdash: ScoreType<
  typeof QUICKDASH_INPUTS,
  typeof QUICKDASH_OUTPUT
> = {
  name: 'QuickDASH',
  readmeLocation: __dirname,
  inputSchema: QUICKDASH_INPUTS,
  outputSchema: QUICKDASH_OUTPUT,
  calculate: ({ data }) => {
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const minAnswersNeededToCalculateScore =
        subscale === 'QUICKDASH_SCORE'
          ? QUICKDASH_SUBSCALES.QUICKDASH_SCORE.length - 1
          : 4
      const inputs = pick(data, QUICKDASH_SUBSCALES[subscale])

      const validInputs = Object.values(inputs).filter(
        value => value !== undefined,
      )

      if (validInputs.length < minAnswersNeededToCalculateScore) {
        return null
      }

      const totalScore = sum(validInputs)
      const quickdashScore = (totalScore / validInputs.length - 1) * 25
      return round(quickdashScore, ROUND_TO)
    }

    return {
      QUICKDASH_SCORE: calculateSubscaleScore('QUICKDASH_SCORE'),
      WORK_MODULE: calculateSubscaleScore('WORK_MODULE'),
      SPORTS_PERFORMING_ARTS_MODULE: calculateSubscaleScore(
        'SPORTS_PERFORMING_ARTS_MODULE',
      ),
    }
  },
}
