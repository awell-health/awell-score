import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const DISAGREE_ANSWER = 0
const AGREE_ANSWER = 1

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: DISAGREE_ANSWER, label: { en: 'Disagree', nl: 'Oneens' } },
    { value: AGREE_ANSWER, label: { en: 'Agree', nl: 'Eens' } },
  ],
}

export const START_BACK_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    label: {
      en: 'My back pain has spread down my leg(s) at some time in the last 2 weeks',
      nl: 'In de laatste 2 weken straalde mijn rugpijn wel eens uit naar één of beide benen.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q02',
    label: {
      en: 'I have had pain in the shoulder or neck at some time in the last 2 weeks',
      nl: 'In de laatste 2 weken heb ik wel eens pijn in mijn schouder of nek gehad.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q03',
    label: {
      en: 'I have only walked short distances because of my back pain',
      nl: 'Vanwege mijn rugpijn liep ik alleen korte afstanden.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q04',
    label: {
      en: 'In the last 2 weeks, I have dressed more slowly than usual because of back pain',
      nl: 'In de laatste 2 weken kleedde ik me trager dan gewoonlijk aan vanwege mijn rugpijn.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q05',
    label: {
      en: `It's not really safe for a person with a condition like mine to  be physically active`,
      nl: 'Voor iemand in mijn toestand is het echt niet veilig om lichamelijk actief te zijn.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q06',
    label: {
      en: 'Worrying thoughts have been going through my mind a lot of the time',
      nl: 'Ongeruste gedachten gingen vaak door mijn hoofd.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q07',
    label: {
      en: `I feel that my back pain is terrible and it's never going to get any better`,
      nl: 'Ik vind dat mijn rugpijn verschrikkelijk is en ik geloof dat het nooit meer beter zal worden.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q08',
    label: {
      en: 'In general I have not enjoyed all the things I used to enjoy',
      nl: 'Over het geheel genomen heb ik niet genoten van alle dingen waar ik vroeger wel van genoot.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q09',
    label: {
      en: 'Overall, how bothersome has your back pain been in th last 2 weeks?',
      nl: 'Over het geheel genomen, hoe hinderlijk was uw rugpijn in de laatste 2 weken ?',
    },
    /**
     * Answer values 1 and 2 will be recoded to 0
     * Answer values 3 and 4 will be recoded to 1
     */
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'Not at all', nl: 'In het geheel niet' } },
        { value: 1, label: { en: 'Slightly', nl: 'Een beetje' } },
        { value: 2, label: { en: 'Moderately', nl: 'Matig' } },
        { value: 3, label: { en: 'Very much', nl: 'Erg' } },
        { value: 4, label: { en: 'Extremely', nl: 'Extreem' } },
      ],
    },
    info: {
      en: '"Slightly" (1) and "Moderately" (2) will be recoded to 0; "Very much" (3) and "Extremely" (4) will be recoded to 1;',
      nl: '"Een beetje" (1) en "matig" (2) worden gehercodeerd naar 0; "Erg" en "Extreem" worden gehercodeerd naar 1; ',
    },
    required: true,
  },
]
