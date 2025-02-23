import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { IPSS_INPUTS, IPSS_OUTPUT } from './definition'

export const ipss: ScoreType<typeof IPSS_INPUTS, typeof IPSS_OUTPUT> = {
  name: 'International Prostate Symptom Score (IPSS)',
  readmeLocation: __dirname,
  inputSchema: IPSS_INPUTS,
  outputSchema: IPSS_OUTPUT,
  calculate: ({ data }) => {
    return {
      IPSS: sum(Object.values(data)),
    }
  },
}
