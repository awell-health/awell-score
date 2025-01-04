import { FJS_HIP_INPUTS, FJS_HIP_OUTPUT } from './definition'
import { ScoreType } from '../../../types'
import { sum, mean } from 'lodash'

export const forgotten_joint_score_hip: ScoreType<
  typeof FJS_HIP_INPUTS,
  typeof FJS_HIP_OUTPUT
> = {
  name: 'Forgotten Joint Score – 12 (FJS-12) - Hip',
  readmeLocation: __dirname,
  inputSchema: FJS_HIP_INPUTS,
  outputSchema: FJS_HIP_OUTPUT,
  calculate: ({ data }) => {
    const MAX_INVALID_ANSWERS = 4
    const totalNbOfQuestions = Object.keys(FJS_HIP_INPUTS).length

    const nbrOfValidAnsweredQuestions = Object.values(data).filter(
      v => v !== undefined,
    ).length
    const nbrOfInvalidAnsweredQuestions =
      totalNbOfQuestions - nbrOfValidAnsweredQuestions

    if (nbrOfInvalidAnsweredQuestions > MAX_INVALID_ANSWERS) {
      return { FORGOTTEN_JOINT_SCORE_HIP: null }
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

    return { FORGOTTEN_JOINT_SCORE_HIP: Math.round(fjsScore) }
  },
}
