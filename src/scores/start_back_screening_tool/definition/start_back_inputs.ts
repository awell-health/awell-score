import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const DISAGREE_ANSWER = 0
const AGREE_ANSWER = 1

const type = {
  type: z.union([z.literal(DISAGREE_ANSWER), z.literal(AGREE_ANSWER)]),
  uiOptions: {
    options: [
      { value: DISAGREE_ANSWER, label: { en: 'Disagree', nl: 'Oneens' } },
      { value: AGREE_ANSWER, label: { en: 'Agree', nl: 'Eens' } },
    ],
  },
} satisfies EnumNumberInputType

export const START_BACK_INPUTS = {
  Q01: {
    label: {
      en: 'My back pain has spread down my leg(s) at some time in the last 2 weeks',
      nl: 'In de laatste 2 weken straalde mijn rugpijn wel eens uit naar één of beide benen.',
    },
    ...type,
  },
  Q02: {
    label: {
      en: 'I have had pain in the shoulder or neck at some time in the last 2 weeks',
      nl: 'In de laatste 2 weken heb ik wel eens pijn in mijn schouder of nek gehad.',
    },
    ...type,
  },
  Q03: {
    label: {
      en: 'I have only walked short distances because of my back pain',
      nl: 'Vanwege mijn rugpijn liep ik alleen korte afstanden.',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'In the last 2 weeks, I have dressed more slowly than usual because of back pain',
      nl: 'In de laatste 2 weken kleedde ik me trager dan gewoonlijk aan vanwege mijn rugpijn.',
    },
    ...type,
  },
  Q05: {
    label: {
      en: `It's not really safe for a person with a condition like mine to  be physically active`,
      nl: 'Voor iemand in mijn toestand is het echt niet veilig om lichamelijk actief te zijn.',
    },
    ...type,
  },
  Q06: {
    label: {
      en: 'Worrying thoughts have been going through my mind a lot of the time',
      nl: 'Ongeruste gedachten gingen vaak door mijn hoofd.',
    },
    ...type,
  },
  Q07: {
    label: {
      en: `I feel that my back pain is terrible and it's never going to get any better`,
      nl: 'Ik vind dat mijn rugpijn verschrikkelijk is en ik geloof dat het nooit meer beter zal worden.',
    },
    ...type,
  },
  Q08: {
    label: {
      en: 'In general I have not enjoyed all the things I used to enjoy',
      nl: 'Over het geheel genomen heb ik niet genoten van alle dingen waar ik vroeger wel van genoot.',
    },
    ...type,
  },
  Q09: {
    label: {
      en: 'Overall, how bothersome has your back pain been in th last 2 weeks?',
      nl: 'Over het geheel genomen, hoe hinderlijk was uw rugpijn in de laatste 2 weken ?',
    },
    /**
     * Answer values 1 and 2 will be recoded to 0
     * Answer values 3 and 4 will be recoded to 1
     */
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ]),
    uiOptions: {
      options: [
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
  },
} satisfies ScoreInputSchemaType
