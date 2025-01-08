import { ScoreType } from '../../../types'
import { VISA_P_OUTPUT, VISA_P_INPUTS } from './definition'
import { sum, omit } from 'lodash'

export const visa_p: ScoreType<typeof VISA_P_INPUTS, typeof VISA_P_OUTPUT> = {
  name: 'Victorian Institute of Sports Assessment – Patella score (VISA-P)',
  readmeLocation: __dirname,
  inputSchema: VISA_P_INPUTS,
  outputSchema: VISA_P_OUTPUT,
  calculate: ({ data }) => {
    const optionalInputs = [
      data.VISA_P_Q08_A,
      data.VISA_P_Q08_B,
      data.VISA_P_Q08_C,
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
      VISA_P: sum(Object.values(omit(data, ['VISA_P_Q08']))),
    }
  },
}
