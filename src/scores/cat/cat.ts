import { ScoreType } from '../../types'
import { CAT_OUTPUT, CAT_INPUTS, CAT_INTERPRATION_TABLE } from './definition'
import { sum } from 'lodash'

export const cat: ScoreType<typeof CAT_INPUTS, typeof CAT_OUTPUT> = {
  name: 'COPD Assessment Test (CAT)',
  readmeLocation: __dirname,
  inputSchema: CAT_INPUTS,
  outputSchema: CAT_OUTPUT,
  calculate: ({ data }) => {
    const score = sum(Object.values(data))

    return {
      CAT_POINTS: score,
      CAT_HEALTH_IMPACT: CAT_INTERPRATION_TABLE[score.toString()],
    }
  },
}
