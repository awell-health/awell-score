import moment from 'moment'
import { ScoreType } from '../../types'
import { AGE_CALC_OUTPUT, AGE_CALC_INPUTS } from './definition'

export const age_calc: ScoreType<
  typeof AGE_CALC_INPUTS,
  typeof AGE_CALC_OUTPUT
> = {
  name: 'Age Calculator',
  readmeLocation: __dirname,
  inputSchema: AGE_CALC_INPUTS,
  outputSchema: AGE_CALC_OUTPUT,
  calculate: ({ data }) => {
    const dobMoment = moment(data.date_of_birth, moment.ISO_8601)
    const age = moment().diff(dobMoment, 'years')

    return {
      AGE: age,
    }
  },
}
