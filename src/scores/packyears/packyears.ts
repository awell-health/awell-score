import { PACKYEARS_INPUTS, PACKYEARS_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import _ from 'lodash'

export const packyears: ScoreType<
  typeof PACKYEARS_INPUTS,
  typeof PACKYEARS_OUTPUT
> = {
  name: 'Packyears',
  readmeLocation: __dirname,
  inputSchema: PACKYEARS_INPUTS,
  outputSchema: PACKYEARS_OUTPUT,
  calculate: ({ data }) => {
    const CIGARETTES_IN_A_PACK = 20

    return {
      PACKYEARS:
        (data.cigarettes_per_day / CIGARETTES_IN_A_PACK) *
        data.number_years_smoking,
    }
  },
}
