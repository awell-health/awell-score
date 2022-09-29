import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 0,
      label: { nl: 'Ik word niet doezelig/slaperig', en: 'Would never dose' },
    },
    {
      value: 1,
      label: {
        nl: 'Lichte kans dat ik doezelig/slaperig word',
        en: 'Slight chance of dozing',
      },
    },
    {
      value: 2,
      label: {
        nl: 'Matige kans dat ik doezelig/slaperig word',
        en: 'Moderate chance of dozing',
      },
    },
    {
      value: 3,
      label: {
        nl: 'Hoge kans dat ik doezelig/slaperig word',
        en: 'High chance of dozing',
      },
    },
  ],
}

export const ESS_INPUTS: Array<InputType> = [
  {
    input_id: 'ESS_Q1',
    input_label: {
      nl: 'Tijdens zitten en lezen',
      en: 'Sitting and reading',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q2',
    input_label: {
      nl: 'Tijdens televisie kijken',
      en: 'Watching TV',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q3',
    input_label: {
      nl: 'Zitten in een openbare instelling (zoals theater)',
      en: 'Sitting still in a public place (e.g. a theatre, a cinema or a meeting)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q4',
    input_label: {
      nl: 'Langer dan 1 uur zittend als passagier in de auto',
      en: 'As a passenger in a car for an hour without a break',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q5',
    input_label: {
      nl: 'Tijdens rust in de namiddag ',
      en: 'Lying down to rest in the afternoon when the circumstances allow',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q6',
    input_label: {
      nl: 'Zitten en praten met iemand',
      en: 'Sitting and talking to someone',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q7',
    input_label: {
      nl: 'Na de lunch',
      en: 'Sitting quietly after lunch without having drunk alcohol',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ESS_Q8',
    input_label: {
      nl: 'In de auto in een stilstaande file',
      en: 'In a car or bus while stopped for a few minutes in traffic',
    },
    input_type,
    required: true,
  },
]
