import { pick, sum } from 'lodash'
import { ScoreType } from '../../types'
import {
  PCS_OUTPUT,
  PCS_INPUTS,
  PCS_SCALES,
  type SubscaleType,
} from './definition'

export const pcs: ScoreType<typeof PCS_INPUTS, typeof PCS_OUTPUT> = {
  name: 'Pain Catastrophizing Scale (PCS)',
  readmeLocation: __dirname,
  inputSchema: PCS_INPUTS,
  outputSchema: PCS_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = PCS_SCALES[subscale]
      const subscaleInputValues = pick(data, subscaleInputs)
      return sum(Object.values(subscaleInputValues))
    }

    const ruminationScore = calculateSubscaleScore('RUMINATION')
    const magnificationScore = calculateSubscaleScore('MAGNIFICATION')
    const helplessnessScore = calculateSubscaleScore('HELPLESSNESS')

    return {
      TOTAL: ruminationScore + magnificationScore + helplessnessScore,
      RUMINATION: ruminationScore,
      MAGNIFICATION: magnificationScore,
      HELPLESSNESS: helplessnessScore,
    }
  },
}
