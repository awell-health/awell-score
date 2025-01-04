import {
  HOOS_PS_INPUTS,
  HOOS_PS_OUTPUT,
  hoos_conversion_table,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const hoos_ps: ScoreType<typeof HOOS_PS_INPUTS, typeof HOOS_PS_OUTPUT> =
  {
    name: 'Hip disability and Osteoarthritis Outcome Score-Physical function Short form (HOOS-PS)',
    readmeLocation: __dirname,
    inputSchema: HOOS_PS_INPUTS,
    outputSchema: HOOS_PS_OUTPUT,
    calculate: ({ data }) => {
      const totalScore = sum(Object.values(data))
      return {
        HOOS_PS: hoos_conversion_table[totalScore.toString()],
      }
    },
  }
