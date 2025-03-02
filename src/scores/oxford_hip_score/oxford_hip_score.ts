import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { OHS_OUTPUT, OHS_INPUTS } from './definition'

export const oxford_hip_score: ScoreType<typeof OHS_INPUTS, typeof OHS_OUTPUT> =
  {
    name: 'Oxford Hip Score (OHS)',
    readmeLocation: __dirname,
    inputSchema: OHS_INPUTS,
    outputSchema: OHS_OUTPUT,
    calculate: ({ data }) => {
      const score = sum(Object.values(data))

      return {
        OXFORD_HIP_SCORE: score,
      }
    },
  }
