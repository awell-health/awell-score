import { ScoreType } from '../../../types'
import { SHORT_FES_I_OUTPUT, SHORT_FES_I_INPUTS } from './definition'
import { sum } from 'lodash'

export const short_fes_i: ScoreType<
  typeof SHORT_FES_I_INPUTS,
  typeof SHORT_FES_I_OUTPUT
> = {
  name: 'Short Falls Efficacy Scale-International (Short FES-I)',
  readmeLocation: __dirname,
  inputSchema: SHORT_FES_I_INPUTS,
  outputSchema: SHORT_FES_I_OUTPUT,
  calculate: ({ data }) => {
    const MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE =
      Object.keys(SHORT_FES_I_INPUTS).length - 1

    const validInputs = Object.values(data).filter(v => v !== undefined)

    if (validInputs.length < MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE) {
      return {
        SHORT_FES_I_TOTAL_SCORE: null,
      }
    }

    const getTotalScore = () => {
      // No missing data
      if (validInputs.length === Object.keys(data).length) {
        return sum(validInputs)
      }

      return Math.round((sum(validInputs) / validInputs.length) * 7)
    }

    return {
      SHORT_FES_I_TOTAL_SCORE: getTotalScore(),
    }
  },
}
