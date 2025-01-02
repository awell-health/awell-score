import type { InputType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 1,
      label: { nl: 'Nooit', en: '' },
    },
    {
      value: 2,
      label: {
        nl: 'Bijna nooit',
        en: '',
      },
    },
    {
      value: 3,
      label: {
        nl: 'Zelden',
        en: '',
      },
    },
    {
      value: 4,
      label: {
        nl: 'Soms',
        en: '',
      },
    },
    {
      value: 5,
      label: {
        nl: 'Meestal',
        en: '',
      },
    },
  ],
}

export const FJS_KNEE_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      nl: "Bent u zich bewust van uw kniegewricht 's nachts in bed?",
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u langer dan een uur op een stoel zit?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u langer dan 15 minuten wandelt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u een bad/douche neemt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u met de auto reist?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u de trap opgaat?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u op een oneffen ondergrond wandelt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q08',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u opstaat vanuit een laagzittende positie?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q09',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u lange tijd staat?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q10',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u huishoudelijke taken uitvoert of tuiniert?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q11',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u een korte wandeling of trektocht maakt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q12',
    input_label: {
      nl: 'Bent u zich bewust van uw kniegewricht wanneer u uw favoriete sport beoefent?',
      en: '',
    },
    input_type,
  },
]
