import { ESS_INPUTS, ESS_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const ess: ScoreType<typeof ESS_INPUTS, typeof ESS_OUTPUT> = {
  name: 'Epworth Sleepiness Scale (ESS)',
  readmeLocation: __dirname,
  inputSchema: ESS_INPUTS,
  outputSchema: ESS_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = sum(Object.values(data))
    return { ess: totalScore }
  },
}
