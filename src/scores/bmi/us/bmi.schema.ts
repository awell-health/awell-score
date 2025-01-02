import { z } from 'zod'

export const BmiInputSchema = {
  weight_pounds: {
    type: z.number().min(0).max(500),
    input_label: {
      en: 'Weight (lbs)',
    },
    unit: { en: 'pounds' },
  },
  height_feet: {
    type: z.number().min(0).max(8),
    input_label: {
      en: 'Height (feet)',
    },
    unit: { en: 'feet' },
  },
  height_inches: {
    type: z.number().min(0).max(50),
    input_label: {
      en: 'Height (inches)',
    },
    unit: { en: 'inches' },
  },
}

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
