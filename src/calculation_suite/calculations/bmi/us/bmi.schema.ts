import { z } from 'zod'

export const BmiInputSchema = z.object({
  weight_pounds: z.number().min(0).max(500),
  height_feet: z.number().min(0).max(8),
  height_inches: z.number().min(0).max(50),
})

export const BmiOutputSchema = {
  BMI: {
    type: z.number(),
    label: { en: 'Body Mass Index' },
    unit: { en: 'kg/m2' },
    terminology: {
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
  },
}
