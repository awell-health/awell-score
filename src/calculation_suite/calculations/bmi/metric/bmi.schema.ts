import { z } from 'zod'

export const BmiInputSchema = z.object({
  weight: z.number().min(10).max(300),
  height: z.number().min(20).max(300),
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
