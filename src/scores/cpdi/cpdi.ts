import { CPDI_INPUTS, CPDI_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const cpdi: ScoreType<typeof CPDI_INPUTS, typeof CPDI_OUTPUT> = {
  name: 'Simple Shoulder Test (SST)',
  readmeLocation: __dirname,
  inputSchema: CPDI_INPUTS,
  outputSchema: CPDI_OUTPUT,
  calculate: ({ data }) => {
    const MAX_SCORE_PER_QUESTION = 4
    const MAX_SCORE = Object.keys(CPDI_INPUTS).length * MAX_SCORE_PER_QUESTION

    const totalScore = sum(Object.values(data))
    const percentageScore = (totalScore / MAX_SCORE) * 100

    return {
      CPDI: Math.round(percentageScore),
    }
  },
}
