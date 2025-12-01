import { BAI_INPUTS, BAI_OUTPUT, BAI_INTERPRETATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const bai: ScoreType<typeof BAI_INPUTS, typeof BAI_OUTPUT> = {
  name: 'Beck Anxiety Inventory (BAI)',
  readmeLocation: __dirname,
  inputSchema: BAI_INPUTS,
  outputSchema: BAI_OUTPUT,
  calculate: ({ data }) => {
    const total_score = sum(Object.values(data))

    return {
      BAI_SCORE: total_score,
      BAI_INTERPRETATION: BAI_INTERPRETATION_TABLE[total_score.toString()],
    }
  },
}

