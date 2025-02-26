import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { BPSES_OUTPUT, BPSES_INPUTS } from './definition'

export const bpses: ScoreType<typeof BPSES_INPUTS, typeof BPSES_OUTPUT> = {
  name: 'Brief Parental Self Efficacy Scale (BPSES)',
  readmeLocation: __dirname,
  inputSchema: BPSES_INPUTS,
  outputSchema: BPSES_OUTPUT,
  calculate: ({ data }) => {
    const score = sum(Object.values(data))

    return {
      BPSES_SCORE: score,
    }
  },
}
