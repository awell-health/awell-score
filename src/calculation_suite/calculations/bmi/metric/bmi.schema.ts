import { z } from 'zod'

export const BmiInputSchema = {
  weight: {
    type: z.number(),
    label: {
      nl: 'Gewicht',
      en: 'Weight',
      fr: 'Poids',
      de: 'Gewicht',
    },
    unit: {
      nl: 'kg',
      en: 'kg',
      fr: 'kg',
      de: 'kg',
    },
  },
  height: {
    type: z.number().min(20).max(300),
    label: {
      nl: 'Lengte',
      en: 'Height',
      fr: 'Longueur',
      de: 'Länge',
    },
    unit: {
      nl: 'cm',
      en: 'cm',
      fr: 'cm',
      de: 'cm',
    },
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
