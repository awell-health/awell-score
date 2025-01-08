import { ScoreType } from '../../../types'
import { VISA_G_OUTPUT, VISA_G_INPUTS } from './definition'
import { sum, omit } from 'lodash'

export const visa_g: ScoreType<typeof VISA_G_INPUTS, typeof VISA_G_OUTPUT> = {
  name: 'Victorian Institute of Sports Assessment – Gluteal Tendinopathy score (VISA-G)',
  readmeLocation: __dirname,
  inputSchema: VISA_G_INPUTS,
  outputSchema: VISA_G_OUTPUT,
  calculate: ({ data }) => {
    const optionalInputs = [
      data.VISA_G_Q08_A,
      data.VISA_G_Q08_B,
      data.VISA_G_Q08_C,
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
      VISA_G: sum(Object.values(omit(data, ['VISA_G_Q08']))),
    }
  },
}
