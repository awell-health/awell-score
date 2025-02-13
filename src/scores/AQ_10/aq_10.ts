import { ScoreType } from '../../types'
import { AQ10_INPUTS, AQ10_OUTPUT } from './definition'
import { sum } from 'lodash'

export const aq_10: ScoreType<typeof AQ10_INPUTS, typeof AQ10_OUTPUT> = {
  name: 'Autism Spectrum Quotient (AQ) - Adolescent Version - (AQ-10)',
  readmeLocation: __dirname,
  inputSchema: AQ10_INPUTS,
  outputSchema: AQ10_OUTPUT,
  calculate: ({ data }) => {
    return {
      AQ10_SCORE: sum(Object.values(data)),
      AQ10_INTERPRETATION:
        'If the individual scores 6 or above, consider referring them for a specialist diagnostic assessment.',
    }
  },
}
