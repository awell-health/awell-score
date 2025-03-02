import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { PDI_OUTPUT, PDI_INPUTS } from './definition'

export const pdi: ScoreType<typeof PDI_INPUTS, typeof PDI_OUTPUT> = {
  name: 'The Pain Disability Index (PDI)',
  readmeLocation: __dirname,
  inputSchema: PDI_INPUTS,
  outputSchema: PDI_OUTPUT,
  calculate: ({ data }) => {
    const score = sum(Object.values(data))

    return {
      PDI_INDEX: score,
    }
  },
}
