import {
  KOOS_INPUTS,
  KOOS_OUTPUT,
  koos_conversion_table,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const koos: ScoreType<typeof KOOS_INPUTS, typeof KOOS_OUTPUT> = {
  name: 'Knee Injury and Osteoarthritis Outcome Score-Physical function Short form (KOOS-PS)',
  readmeLocation: __dirname,
  inputSchema: KOOS_INPUTS,
  outputSchema: KOOS_OUTPUT,
  calculate: ({ data }) => {
      const totalScore = sum(Object.values(data))
      return {
      KOOS: koos_conversion_table[totalScore.toString()],
    }
  },
}
