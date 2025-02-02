import { ScoreType } from '../../types'
import {
  MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT,
  MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
} from './definition'
import { sum } from 'lodash'

export const modified_caregiver_strain_index: ScoreType<
  typeof MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
  typeof MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT
> = {
  name: 'Modified Caregiver Strain Index (Modified CSI)',
  readmeLocation: __dirname,
  inputSchema: MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
  outputSchema: MODIFIED_CAREGIVER_STRAIN_INDEX_OUTPUT,
  calculate: ({ data }) => {
    const total_score = sum(Object.values(data))

    return {
      MODIFIED_CAREGIVER_STRAIN_INDEX: total_score,
    }
  },
}
