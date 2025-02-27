import { ScoreType } from '../../types'
import { QOL_STOMA_INPUTS, QOL_STOMA_OUTPUT } from './definition'
import { sum } from 'lodash'
export const qol_stoma: ScoreType<
  typeof QOL_STOMA_INPUTS,
  typeof QOL_STOMA_OUTPUT
> = {
  name: 'QOL Stoma',
  readmeLocation: __dirname,
  inputSchema: QOL_STOMA_INPUTS,
  outputSchema: QOL_STOMA_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = sum(Object.values(data))
    return {
      QOL_STOMA: totalScore,
    }
  },
}
