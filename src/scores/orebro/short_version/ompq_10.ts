import { ScoreType } from '../../../types'
import { OMPQ_10_INPUTS, OMPQ_10_OUTPUT } from './definition'
import { sum } from 'lodash'

export const ompq_10: ScoreType<typeof OMPQ_10_INPUTS, typeof OMPQ_10_OUTPUT> =
  {
    name: 'Orebro Musculoskeletal Pain Questionnaire - Short form (OMPQ-10)',
    readmeLocation: __dirname,
    inputSchema: OMPQ_10_INPUTS,
    outputSchema: OMPQ_10_OUTPUT,
    calculate: ({ data }) => {
      const POSITIVE_RESULT_CUT_OFF = 49
      const total_score = sum(Object.values(data))
      const result_is_positive = total_score > POSITIVE_RESULT_CUT_OFF
      const readable_result = result_is_positive
        ? `Positive score (Score > ${POSITIVE_RESULT_CUT_OFF})`
        : `Negative score (Score <= ${POSITIVE_RESULT_CUT_OFF})`

      return {
        OREBRO: total_score,
        INTERPRETATION: readable_result,
      }
    },
  }
