import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { BASFI_OUTPUT, BASFI_INPUTS } from './definition'

export const basfi: ScoreType<typeof BASFI_INPUTS, typeof BASFI_OUTPUT> = {
  name: 'Bath Ankylosing Spondylitis Functional Index (BASFI)',
  readmeLocation: __dirname,
  inputSchema: BASFI_INPUTS,
  outputSchema: BASFI_OUTPUT,
  calculate: ({ data }) => {
    const DIVISOR = 10
    const score = sum(Object.values(data)) / DIVISOR

    return {
      BASFI_SCORE: score,
    }
  },
}
