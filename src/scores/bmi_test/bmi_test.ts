import { ScoreType } from '../../types'
import { BMI_TEST_INPUTS, BMI_TEST_OUTPUT } from './definition'
import { round } from 'lodash'

export const bmi_test: ScoreType<typeof BMI_TEST_INPUTS, typeof BMI_TEST_OUTPUT> = {
  name: 'BMI Test',
  readmeLocation: __dirname,
  inputSchema: BMI_TEST_INPUTS,
  outputSchema: BMI_TEST_OUTPUT,
  calculate: ({ data }) => {
    const HEIGHT_IN_METERS = data.height / 100
    const BMI_RESULT = data.weight / (HEIGHT_IN_METERS ** 2)

    return {
      bmi: round(BMI_RESULT, 2),
    }
  }
}
