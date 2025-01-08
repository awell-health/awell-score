import { ScoreType } from '../../types'
import { ISI_OUTPUT, ISI_INPUTS, ISI_INTERPRATION_TABLE } from './definition'
import { sum } from 'lodash'

export const isi: ScoreType<typeof ISI_INPUTS, typeof ISI_OUTPUT> = {
  name: 'Insomnia Severity Index (ISI)',
  readmeLocation: __dirname,
  inputSchema: ISI_INPUTS,
  outputSchema: ISI_OUTPUT,
  calculate: ({ data }) => {
    const score = sum(Object.values(data))

    return {
      ISI_TOTAL_SCORE: score,
      ISI_INTERPRETATION: ISI_INTERPRATION_TABLE[score.toString()],
    }
  },
}
