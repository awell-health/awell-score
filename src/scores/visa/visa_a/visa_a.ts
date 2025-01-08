import { ScoreType } from '../../../types'
import { VISA_A_OUTPUT, VISA_A_INPUTS } from './definition'
import { sum, omit } from 'lodash'

export const visa_a: ScoreType<typeof VISA_A_INPUTS, typeof VISA_A_OUTPUT> = {
  name: 'Victorian Institute of Sports Assessment – Achilles score (VISA-A)',
  readmeLocation: __dirname,
  inputSchema: VISA_A_INPUTS,
  outputSchema: VISA_A_OUTPUT,
  calculate: ({ data }) => {
    const optionalInputs = [
      data.VISA_A_Q08_A,
      data.VISA_A_Q08_B,
      data.VISA_A_Q08_C,
    ]

    /**
     * Only one of the optional inputs (Q08A, Q08B, Q08C) should be scored
     */
    if (optionalInputs.filter(v => v !== undefined).length > 1) {
      throw new Error(
        'Only one of the optional inputs (Q08A, Q08B, Q08C) should be scored',
      )
    }

    return {
      VISA_A: sum(Object.values(omit(data, ['VISA_A_Q08']))),
    }
  },
}
