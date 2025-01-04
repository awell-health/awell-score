import { EQ5D_3L_INPUTS, EQ5D_3L_OUTPUT } from './definition'
import { ScoreType } from '../../../types'

export const eq5d_3l: ScoreType<typeof EQ5D_3L_INPUTS, typeof EQ5D_3L_OUTPUT> =
  {
    name: 'EQ-5D-3L',
    readmeLocation: __dirname,
    inputSchema: EQ5D_3L_INPUTS,
    outputSchema: EQ5D_3L_OUTPUT,
    calculate: ({ data }) => {
      const healthStateValues = [
        data.eq5d_3l_mobility,
        data.eq5d_3l_selfcare,
        data.eq5d_3l_usual,
        data.eq5d_3l_pain,
        data.eq5d_3l_anxiety,
      ]

      return {
        EQ_HEALTH_STATE: Number(healthStateValues.join('')),
        EQ_VAS: data.eq5d_3l_vas,
      }
    },
  }
