import { ScoreType } from '../../types'
import { AQ50_INPUTS, AQ50_OUTPUT } from './definition'
import { sum } from 'lodash'

export const aq_50: ScoreType<typeof AQ50_INPUTS, typeof AQ50_OUTPUT> = {
  name: 'Autism Spectrum Quotient (AQ) - Adult Version (AQ-50)',
  readmeLocation: __dirname,
  inputSchema: AQ50_INPUTS,
  outputSchema: AQ50_OUTPUT,
  calculate: ({ data }) => {
    return {
      AQ50_SCORE: sum(Object.values(data)),
      AQ50_INTERPRETATION:
        'Total AQ-50 scores range from 0 to 50, with higher scores indicating more autistic traits. The published cut-offs are: screening threshold ≥26 and clinical threshold ≥32 (Baron-Cohen et al. 2001).',
    }
  },
}

