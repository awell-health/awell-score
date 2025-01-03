import { EQ5D_5L_INPUTS, EQ5D_5L_OUTPUT } from './definition'
import { ScoreType } from '../../../types'
import _ from 'lodash'
import { calculate_be_utility_value } from './calculate_utility_values/Belgium/calculate_be_utility_value'

export const eq5d_5l: ScoreType<typeof EQ5D_5L_INPUTS, typeof EQ5D_5L_OUTPUT> =
  {
    name: 'EQ-5D-5L',
    readmeLocation: __dirname,
    inputSchema: EQ5D_5L_INPUTS,
    outputSchema: EQ5D_5L_OUTPUT,
    calculate: ({ data }) => {
      const healthStateValues = [
        data.eq5d_5l_mobility,
        data.eq5d_5l_selfcare,
        data.eq5d_5l_usual,
        data.eq5d_5l_pain,
        data.eq5d_5l_anxiety,
      ]

      const eqHealthState = Number(healthStateValues.join(''))
      const utilityValueBelgium = calculate_be_utility_value(eqHealthState)

      return {
        EQ_HEALTH_STATE: eqHealthState,
        EQ_VAS: data.eq5d_5l_vas,
        UTILITY_VALUE_HEALTH_STATE_BELGIUM: utilityValueBelgium,
      }
    },
  }
