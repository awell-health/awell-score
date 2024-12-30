import { ScoreType } from '../../../types'
import { BmiOutputSchema, BmiInputSchema } from './bmi.schema'

export const bmi: ScoreType<typeof BmiInputSchema, typeof BmiOutputSchema> = {
  name: 'BMI (metric)',
  readme_location: __dirname,
  inputSchema: BmiInputSchema,
  outputSchema: BmiOutputSchema,
  calculate: ({ data }) => {
    const numeric_height_in_m = data.height / 100
    const BMI = data.weight / numeric_height_in_m ** 2

    return {
      BMI,
    }
  },
}
