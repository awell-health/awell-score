import moment from 'moment'
import { CalculationType } from '../../../api/shared/classes/Calculation'
import { AGE_CALC_OUTPUT, AGE_CALC_INPUTS } from './definition'

export const age_calc: CalculationType<
  typeof AGE_CALC_INPUTS,
  typeof AGE_CALC_OUTPUT
> = {
  name: 'Age Calculator',
  readme_location: __dirname,
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
