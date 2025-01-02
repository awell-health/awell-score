import { SST_INPUTS, SST_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const simple_shoulder_test: ScoreType<
  typeof SST_INPUTS,
  typeof SST_OUTPUT
> = {
  name: 'Simple Shoulder Test (SST)',
  readmeLocation: __dirname,
  inputSchema: SST_INPUTS,
  outputSchema: SST_OUTPUT,
  calculate: ({ data }) => {
    const totalQuestions = Object.values(data).filter(
      d => d !== undefined,
    ).length

    if (totalQuestions === 0) {
      return {
        SST: null,
      }
    }

    const totalScore = _.sum(Object.values(data))
    const percentageScore = (totalScore / totalQuestions) * 100
    const ROUND_TO = 2

    return {
      SST: _.round(percentageScore, ROUND_TO),
    }
  },
}
