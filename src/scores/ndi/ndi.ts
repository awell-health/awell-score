import { ScoreType } from '../../types'
import { NDI_INPUTS, NDI_OUTPUT } from './definition'
import { sum } from 'lodash'

export const ndi: ScoreType<typeof NDI_INPUTS, typeof NDI_OUTPUT> = {
  name: 'Neck Disability Index (NDI)',
  readmeLocation: __dirname,
  inputSchema: NDI_INPUTS,
  outputSchema: NDI_OUTPUT,
  calculate: ({ data }) => {
    const MIN_AMOUNT_OF_ANSWERS_NEEDED = 9

    const validInputs = Object.values(data).filter(value => value !== undefined)

    if (validInputs.length < MIN_AMOUNT_OF_ANSWERS_NEEDED)
      return {
        NDI: null,
      }

    const MAX_ANSWER = 5
    const MAX_SCORE = validInputs.length * MAX_ANSWER
    const totalScore = (sum(validInputs) / MAX_SCORE) * 100

    return {
      NDI: Math.round(totalScore),
    }
  },
}
