import { type ScoreType } from '../../types'
import { BMI_TEST_INPUTS, BMI_TEST_OUTPUT } from './definition'
import { round } from 'lodash'

export const bmi_test: ScoreType<typeof BMI_TEST_INPUTS, typeof BMI_TEST_OUTPUT> = {
  name: 'BMI Test',
  readmeLocation: __dirname,
  inputSchema: BMI_TEST_INPUTS,
  outputSchema: BMI_TEST_OUTPUT,
  calculate: ({ data }) => {
    const BMI = data.weight / ((data.height / 100) ** 2)
    return {
      BMI_RESULT: round(BMI, 2),
    }
  }
}
