import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { OKS_OUTPUT, OKS_INPUTS } from './definition'

export const oxford_knee_score: ScoreType<
  typeof OKS_INPUTS,
  typeof OKS_OUTPUT
> = {
  name: 'Oxford Knee Score (OKS)',
  readmeLocation: __dirname,
  inputSchema: OKS_INPUTS,
  outputSchema: OKS_OUTPUT,
  calculate: ({ data }) => {
    const score = sum(Object.values(data))

    return {
      OXFORD_KNEE_SCORE: score,
    }
  },
}
