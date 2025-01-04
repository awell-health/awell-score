import {
  CAREGIVER_STRAIN_INDEX_INPUTS,
  CAREGIVER_STRAIN_INDEX_OUTPUT,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const caregiver_strain_index: ScoreType<
  typeof CAREGIVER_STRAIN_INDEX_INPUTS,
  typeof CAREGIVER_STRAIN_INDEX_OUTPUT
> = {
  name: 'Caregiver Strain Index (CSI)',
  readmeLocation: __dirname,
  inputSchema: CAREGIVER_STRAIN_INDEX_INPUTS,
  outputSchema: CAREGIVER_STRAIN_INDEX_OUTPUT,
  calculate: ({ data }) => {
    const totalScore = sum(Object.values(data))

    return {
      CAREGIVER_STRAIN_INDEX: totalScore,
    }
  },
}
