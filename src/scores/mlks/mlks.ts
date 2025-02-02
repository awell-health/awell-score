import { ScoreType } from '../../types'
import { MLKS_OUTPUT, MLKS_INPUTS } from './definition'
import { sum } from 'lodash'

export const mlks: ScoreType<typeof MLKS_INPUTS, typeof MLKS_OUTPUT> = {
  name: 'Modified Lysolm Knee Score (MLKS)',
  readmeLocation: __dirname,
  inputSchema: MLKS_INPUTS,
  outputSchema: MLKS_OUTPUT,
  calculate: ({ data }) => {
    const total_score = sum(Object.values(data))

    return {
      MLKS_TOTAL_SCORE: total_score,
    }
  },
}
