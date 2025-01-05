import { ScoreType } from '../../types'
import { CSI_OUTPUT, CSI_INPUTS } from './definition'
import { sum } from 'lodash'
export const csi: ScoreType<typeof CSI_INPUTS, typeof CSI_OUTPUT> = {
  name: 'Central Sensitization Inventory (CSI)',
  readmeLocation: __dirname,
  inputSchema: CSI_INPUTS,
  outputSchema: CSI_OUTPUT,
  calculate: ({ data }) => {
    const CUT_OFF_SCORE = 40

    const score = sum(Object.values(data))
    const sensitivationPresent = score >= CUT_OFF_SCORE

    return {
      csi: score,
      interpretation: sensitivationPresent,
    }
  },
}
