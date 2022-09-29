import type { InputType } from '../../../../../types/calculations.types'
import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'Not at all concerned', nl: 'Helemaal niet bezorgd' },
      value: 1,
    },
    {
      label: { en: 'Somewhat concerned', nl: 'Een beetje bezorgd' },
      value: 2,
    },
    {
      label: { en: 'Fairly concerned', nl: 'Tamelijk bezorgd' },
      value: 3,
    },
    {
      label: { en: 'Very concerned', nl: 'Erg bezorgd' },
      value: 4,
    },
  ],
}

export const SHORT_FES_I_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'How concerned are you that you might fall when getting dressed or undressed?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het aan- of uitkleden?',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'How concerned are you that you might fall when taking a bath or shower?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het nemen van een bad of douche?',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'How concerned are you that you might fall when getting in or out of a chair?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het in of uit een stoel komen?',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'How concerned are you that you might fall when going up or down stairs?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het op- of aflopen van een trap?',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'How concerned are you that you might fall when reaching for something above your head or on the ground?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het reiken naar iets boven uw hoofd of naar iets op de grond?',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'How concerned are you that you might fall when walking up or down a slope?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het op- of aflopen van een helling?',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'How concerned are you that you might fall when going out to a social event (e.g. religious service, family gathering or club meeting)?',
      nl: 'Hoe bezorgd bent u dat u zou kunnen vallen bij Het bezoeken van een sociale gelegenheid (zoals kerkdienst, familiebijeenkomst of verenigingsactiviteit)?',
    },
    input_type,
  },
]
