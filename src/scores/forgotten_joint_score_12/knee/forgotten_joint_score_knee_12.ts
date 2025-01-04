import { FJS_KNEE_INPUTS, FJS_KNEE_OUTPUT } from './definition'
import { ScoreType } from '../../../types'
import { sum, mean } from 'lodash'

export const forgotten_joint_score_knee: ScoreType<
  typeof FJS_KNEE_INPUTS,
  typeof FJS_KNEE_OUTPUT
> = {
  name: 'Forgotten Joint Score – 12 (FJS-12) - Knee',
  readmeLocation: __dirname,
  inputSchema: FJS_KNEE_INPUTS,
  outputSchema: FJS_KNEE_OUTPUT,
  calculate: ({ data }) => {
    const MAX_INVALID_ANSWERS = 4
    const totalNbOfQuestions = Object.keys(FJS_KNEE_INPUTS).length

    const nbrOfValidAnsweredQuestions = Object.values(data).filter(
      v => v !== undefined,
    ).length
    const nbrOfInvalidAnsweredQuestions =
      totalNbOfQuestions - nbrOfValidAnsweredQuestions

    if (nbrOfInvalidAnsweredQuestions > MAX_INVALID_ANSWERS) {
      return { FORGOTTEN_JOINT_SCORE_KNEE: null }
    }

    const getWipScore = () => {
      if (nbrOfValidAnsweredQuestions === totalNbOfQuestions) {
        return sum(Object.values(data))
      }

      /**
       * In case of missing answers (<= 4), the mean of the answered items is used
       * instead of the sum of all items and multiplied by 12 (i.e. the missing values are
       * replaced with the mean of the completed items).
       */
      const meanOfAnsweredQuestions = mean(
        Object.values(data).filter(v => v !== undefined),
      )
      return meanOfAnsweredQuestions * 12
    }

    const fjsScore = 100 - ((getWipScore() - 12) / 48) * 100

    return { FORGOTTEN_JOINT_SCORE_KNEE: Math.round(fjsScore) }
  },
}
