import moment from 'moment'
import { CalculationType } from '../../../api/shared/classes/Calculation'
import { InputSchema, AGE_CALC_OUTPUT, AGE_CALC_INPUTS } from './definition'

export const age_calc: CalculationType<
  typeof InputSchema,
  typeof AGE_CALC_OUTPUT
> = {
  name: 'Age Calculator',
  readme_location: __dirname,
  inputSchema: InputSchema,
  outputSchema: AGE_CALC_OUTPUT,
  formData: AGE_CALC_INPUTS,
  calculate: ({ data }) => {
    const dobMoment = moment(data.date_of_birth, moment.ISO_8601)
    const age = moment().diff(dobMoment, 'years')

    return {
      AGE: age,
    }
  },
}
