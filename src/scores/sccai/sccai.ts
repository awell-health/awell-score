import { SCCAI_INPUTS, SCCAI_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const sccai: ScoreType<typeof SCCAI_INPUTS, typeof SCCAI_OUTPUT> = {
  name: 'Simple Clinical Colitis Activity Index (SCCAI)',
  readmeLocation: __dirname,
  inputSchema: SCCAI_INPUTS,
  outputSchema: SCCAI_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = _.sum(Object.values(data))

    return {
      SCCAI: totalScore,
    }
  },
}
