import { type ScoreType } from '../../types'
import { BMI_INPUTS, BMI_OUTPUT } from './definition'
import { sum, mean } from 'lodash'

export const bmi: ScoreType<typeof BMI_INPUTS, typeof BMI_OUTPUT> = {
  name: 'Body Mass Index (BMI)',
  readmeLocation: __dirname,
  inputSchema: BMI_INPUTS,
  outputSchema: BMI_OUTPUT,
  calculate: ({ data }) => {
    return {
      bmi: data.weight / ((data.height / 100) ** 2),
    }
  }
}
