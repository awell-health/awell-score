import { ScoreType } from '../../types'
import { OSWESTRY_OUTPUT, OSWESTRY_INPUTS } from './definition'
import { sum } from 'lodash'

export const oswestry: ScoreType<
  typeof OSWESTRY_INPUTS,
  typeof OSWESTRY_OUTPUT
> = {
  name: 'Oswestry',
  readmeLocation: __dirname,
  inputSchema: OSWESTRY_INPUTS,
  outputSchema: OSWESTRY_OUTPUT,
  calculate: ({ data }) => {
    const MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE =
      Object.keys(OSWESTRY_INPUTS).length - 1

    const validInputs = Object.values(data).filter(v => v !== undefined)

    if (validInputs.length < MIN_ANSWERS_NEEDED_TO_CALCULATE_SCORE) {
      return {
        OSWESTRY: null,
      }
    }

    const MAX_ANSWER = 5
    const MAX_SCORE = validInputs.length * MAX_ANSWER
    const score = (sum(validInputs) / MAX_SCORE) * 100

    return {
      OSWESTRY: Math.round(score),
    }
  },
}
