import { mean, pick, round } from 'lodash'
import { ScoreType } from '../../types'
import {
  DRI_OUTPUT,
  DRI_INPUTS,
  DRI_SUBSCALES,
  type SubscaleType,
} from './definition'

export const dri: ScoreType<typeof DRI_INPUTS, typeof DRI_OUTPUT> = {
  name: 'Disability Rating Index (DRI)',
  readmeLocation: __dirname,
  inputSchema: DRI_INPUTS,
  outputSchema: DRI_OUTPUT,
  calculate: ({ data }) => {
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleItems = DRI_SUBSCALES[subscale]
      const subscaleInputItems = pick(data, subscaleItems)

      const validSubscaleItems = Object.values(subscaleInputItems).filter(
        v => v !== undefined,
      )

      if (validSubscaleItems.length === 0) {
        return null
      }

      return round(mean(validSubscaleItems), ROUND_TO)
    }

    const basicActivitiesScore = calculateSubscaleScore('BASIC_ACTIVITIES')
    const physicalActivitiesScore = calculateSubscaleScore(
      'PHYSICAL_ACTIVITIES',
    )
    const workRelatedActivitiesScore = calculateSubscaleScore(
      'WORK_RELATED_ACTIVITIES',
    )

    const validItems = Object.values(data).filter(v => v !== undefined)

    const totalScore = [
      basicActivitiesScore,
      physicalActivitiesScore,
      workRelatedActivitiesScore,
    ].every(score => score === null)
      ? null
      : round(mean(validItems), ROUND_TO)

    const getInterpretation = (score: number | null) => {
      if (score === null) {
        return null
      }

      const POSITIVE_SCORE_CUT_OFF = 50

      const is_positive_score = score >= POSITIVE_SCORE_CUT_OFF
      const interpretation = is_positive_score
        ? `Positive score (Score >= ${POSITIVE_SCORE_CUT_OFF}%)`
        : `Negative score (Score < ${POSITIVE_SCORE_CUT_OFF}%)`

      return interpretation
    }

    return {
      DRI: totalScore,
      DRI_INTERPRETATION: getInterpretation(totalScore),
      BASIC_ACTIVITIES: basicActivitiesScore,
      PHYSICAL_ACTIVITIES: physicalActivitiesScore,
      WORK_RELATED_ACTIVITIES: workRelatedActivitiesScore,
    }
  },
}
