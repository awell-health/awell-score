import { ScoreType } from '../../types'
import {
  BMI_TEST_INPUTS,
  BMI_TEST_OUTPUT,
  BMI_TEST_SUBSCALES
} from './definition'
import { sum, round, mean } from 'lodash'

export const bmi_test: ScoreType<
  typeof BMI_TEST_INPUTS,
  typeof BMI_TEST_OUTPUT
> = {
  name: 'BMI Test',
  readmeLocation: __dirname,
  inputSchema: BMI_TEST_INPUTS,
  outputSchema: BMI_TEST_OUTPUT,
  calculate: ({ data }) => {
    const bmi = data.weight / ((data.height / 100) ** 2)
    return {
      bmi: round(bmi, 2)
    }
  }
}
