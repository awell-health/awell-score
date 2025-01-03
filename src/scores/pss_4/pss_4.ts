import { PSS4_INPUTS, PSS4_OUTPUTS } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const pss_4: ScoreType<typeof PSS4_INPUTS, typeof PSS4_OUTPUTS> = {
  name: 'Perceived Stress Scale 4 (PSS-4)',
  readmeLocation: __dirname,
  inputSchema: PSS4_INPUTS,
  outputSchema: PSS4_OUTPUTS,
  calculate: ({ data }) => {
    const reversedInputs = [data.PSS4_Q02, data.PSS4_Q03]
    const MAX_SCORE = 4
    const reversedValues = reversedInputs.map(i => MAX_SCORE - i)

    const allValues = [data.PSS4_Q01, ...reversedValues, data.PSS4_Q04]
    const totalScore = _.sum(allValues)

    return {
      PSS4_SCORE: totalScore,
    }
  },
}
