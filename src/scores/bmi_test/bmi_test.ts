import { ScoreType } from '../../types'
import { BMI_TEST_INPUTS, BMI_TEST_OUTPUT } from './definition'

export const bmi_test: ScoreType<
  typeof BMI_TEST_INPUTS,
  typeof BMI_TEST_OUTPUT
> = {
  name: 'BMI Test',
  readmeLocation: __dirname,
  inputSchema: BMI_TEST_INPUTS,
  outputSchema: BMI_TEST_OUTPUT,
  calculate: ({ data }) => {
    const heightInMeters = data.height / 100
    const bmi = data.weight / (heightInMeters * heightInMeters)
    return {
      bmi: Math.round(bmi * 100) / 100, // Rounds BMI to 2 decimal places
    }
  },
}
