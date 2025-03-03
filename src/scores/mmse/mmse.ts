import { ScoreType } from '../../types'
import { MMSE_INPUTS, MMSE_OUTPUT } from './definition'
import { sum } from 'lodash'

export const mmse: ScoreType<typeof MMSE_INPUTS, typeof MMSE_OUTPUT> = {
  name: 'Mini-mental State Examination (MMSE)',
  readmeLocation: __dirname,
  inputSchema: MMSE_INPUTS,
  outputSchema: MMSE_OUTPUT,
  calculate: ({ data }) => ({
    MMSE: sum(Object.values(data)),
  }),
}
