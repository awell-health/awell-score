import { PANSS_6_INPUTS, PANNS_6_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const panss_6: ScoreType<typeof PANSS_6_INPUTS, typeof PANNS_6_OUTPUT> =
  {
    name: 'Positive and Negative Syndrome Scale (PANSS-6)',
    readmeLocation: __dirname,
    inputSchema: PANSS_6_INPUTS,
    outputSchema: PANNS_6_OUTPUT,
    calculate: ({ data }) => {
      const positiveScaleScores = [
        data.PANSS_6_Q01_DELUSIONS,
        data.PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS,
        data.PANSS_6_Q03_HALLUCINATORY_BEHAVIOR,
      ]

      const negativeScaleScores = [
        data.PANSS_6_Q04_BLUNTED_AFFECT,
        data.PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL,
        data.PANSS_6_Q06_LACK_OF_SPONTANEITY,
      ]

      const positiveScaleScore = _.sum(positiveScaleScores)
      const negativeScaleScore = _.sum(negativeScaleScores)

      return {
        PANNS_6_POSITIVE_SCALE_SCORE: positiveScaleScore,
        PANNS_6_NEGATIVE_SCALE_SCORE: negativeScaleScore,
        PANNS_6_TOTAL_SCORE: positiveScaleScore + negativeScaleScore,
      }
    },
  }
