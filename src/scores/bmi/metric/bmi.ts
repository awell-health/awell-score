import { ScoreType } from '../../../types'
import { BmiOutputSchema, BmiInputSchema } from './bmi.schema'

export const bmi: ScoreType<typeof BmiInputSchema, typeof BmiOutputSchema> = {
  name: 'BMI (metric)',
  readmeLocation: __dirname,
  inputSchema: BmiInputSchema,
  outputSchema: BmiOutputSchema,
  terminology: {
    category: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
            display: 'Vital Signs',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '39156-5',
          display: 'Body mass index (BMI) [Ratio]',
        },
        {
          system: 'http://snomed.info/sct',
          code: '60621009',
          display: 'Body mass index (observable entity)',
        },
      ],
      text: 'Body Mass Index',
    },
  },
  calculate: ({ data }) => {
    const numeric_height_in_m = data.height / 100
    const BMI = data.weight / numeric_height_in_m ** 2

    return {
      BMI,
    }
  },
}
