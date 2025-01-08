import { ScoreType } from '../../types'
import { ZARIT_12_OUTPUT, ZARRIT_INPUTS } from './definition'
import { sum } from 'lodash'
export const zarit_12: ScoreType<typeof ZARRIT_INPUTS, typeof ZARIT_12_OUTPUT> =
  {
    name: 'Zarit Caregiver Burden Interview - Short Form (ZBI-12 / ZARIT-12)',
    readmeLocation: __dirname,
    inputSchema: ZARRIT_INPUTS,
    outputSchema: ZARIT_12_OUTPUT,
    calculate: ({ data }) => {
      const score = sum(Object.values(data))

      return {
        ZARIT_12: score,
      }
    },
  }
