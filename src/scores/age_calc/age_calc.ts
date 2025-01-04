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
    const dateOfBirth = new Date(data.date_of_birth)
    const today = new Date()

    const age = today.getFullYear() - dateOfBirth.getFullYear()
    const isBirthdayPassed =
      today.getMonth() > dateOfBirth.getMonth() ||
      (today.getMonth() === dateOfBirth.getMonth() &&
        today.getDate() >= dateOfBirth.getDate())

    const adjustedAge = isBirthdayPassed ? age : age - 1

    return {
      AGE: adjustedAge,
    }
  },
}
