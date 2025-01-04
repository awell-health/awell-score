import {
  CHA2DS2_VASC_SCORE_INPUTS,
  CHA2DS2_VASC_SCORE_OUTPUT,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const CHA2DS2_VASc_Score: ScoreType<
  typeof CHA2DS2_VASC_SCORE_INPUTS,
  typeof CHA2DS2_VASC_SCORE_OUTPUT
> = {
  name: 'CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk',
  readmeLocation: __dirname,
  inputSchema: CHA2DS2_VASC_SCORE_INPUTS,
  outputSchema: CHA2DS2_VASC_SCORE_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = sum(Object.values(data))

    return {
      CHA2DS2_VASC_SCORE: totalScore,
    }
  },
}
