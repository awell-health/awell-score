import {
  KOOS_PS_INPUTS,
  KOOS_PS_OUTPUT,
  koos_conversion_table,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const koos_ps: ScoreType<typeof KOOS_PS_INPUTS, typeof KOOS_PS_OUTPUT> =
  {
    name: 'Knee Injury and Osteoarthritis Outcome Score-Physical function Short form (KOOS-PS)',
    readmeLocation: __dirname,
    inputSchema: KOOS_PS_INPUTS,
    outputSchema: KOOS_PS_OUTPUT,
    calculate: ({ data }) => {
      const totalScore = sum(Object.values(data))
      return {
        KOOS_PS: koos_conversion_table[totalScore.toString()],
      }
    },
  }
