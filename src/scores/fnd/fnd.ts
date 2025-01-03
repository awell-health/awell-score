import { FND_INPUTS, FND_OUTPUT, FND_INTERPRATION_TABLE } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const fnd: ScoreType<typeof FND_INPUTS, typeof FND_OUTPUT> = {
  name: 'Fagerstrom Test for Nicotine Dependence (FND)',
  readmeLocation: __dirname,
  inputSchema: FND_INPUTS,
  outputSchema: FND_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = _.sum(Object.values(data))
    return {
      FAGERSTROM_TOTAL_SCORE: totalScore,
      FAGERSTROM_DEPENDENCE_LEVEL:
        FND_INTERPRATION_TABLE[totalScore.toString()],
    }
  },
}
