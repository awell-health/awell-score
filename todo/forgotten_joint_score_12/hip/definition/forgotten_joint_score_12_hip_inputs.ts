import type { InputType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
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

export const FJS_HIP_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    label: {
      nl: "Bent u zich bewust van uw heupgewricht 's nachts in bed?",
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u langer dan een uur op een stoel zit?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u langer dan 15 minuten wandelt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u een bad/douche neemt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u met de auto reist?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u de trap opgaat?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u op een oneffen ondergrond wandelt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q08',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u opstaat vanuit een laagzittende positie?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q09',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u lange tijd staat?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q10',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u huishoudelijke taken uitvoert of tuiniert?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q11',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u een korte wandeling of trektocht maakt?',
      en: '',
    },
    input_type,
  },
  {
    input_id: 'Q12',
    label: {
      nl: 'Bent u zich bewust van uw heupgewricht wanneer u uw favoriete sport beoefent?',
      en: '',
    },
    input_type,
  },
]
