import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Nooit', en: 'Not at all' } },
    {
      value: 1,
      label: { nl: 'Minder dan 1 op de 5 keer', en: 'Less than 1 time in 5' },
    },
    {
      value: 2,
      label: {
        nl: 'Minder dan de helft van de keren',
        en: 'Less than half the time',
      },
    },
    {
      value: 3,
      label: {
        nl: 'Ongeveer de helft van de keren',
        en: 'About half the time',
      },
    },
    {
      value: 4,
      label: {
        nl: 'Meer dan de helft van de keren',
        en: 'More than half the time',
      },
    },
    { value: 5, label: { nl: 'Bijna altijd', en: 'Almost always' } },
  ],
}

export const IPSS_INPUTS: Array<InputType> = [
  {
    input_id: 'IPSS_Q01',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand had u het gevoel dat uw blaas na het plassen nog niet helemaal leeg was?',
      en: 'Over the past month, how often have you had a sensation of not emptying your bladder completely after you finish urinating?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q02',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand moest u binnen twee uur na het plassen opnieuw plassen?',
      en: 'Over the past month, how often have you had to urinate again less than two hours after you finished urinating?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q03',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand gebeurde het tijdens het plassen dat de straal enige keren stopte en dan weer begon?',
      en: 'Over the past month, how often have you found you stopped and started again several times when you urinated?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q04',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand had u moeite om het plassen uit te stellen?',
      en: 'Over the last month, how difficult have you found it to postpone urination?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q05',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand had u een slappe straal bij het plassen?',
      en: 'Over the past month, how often have you had a weak urinary stream?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q06',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand moest u persen voordat de urinestraal op gang kwam?',
      en: 'Over the past month, how often have you had to push or strain to begin urination?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'IPSS_Q07',
    input_label: {
      nl: 'Hoe vaak in de afgelopen maand moest u gemiddeld per nacht het bed uit om te plassen?',
      en: 'Over the past month, many times did you most typically get up to urinate from the time you went to bed until the time you got up in the morning?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { nl: '0 keer', en: 'None' } },
        { value: 1, label: { nl: '1 keer', en: '1 time' } },
        { value: 2, label: { nl: '2 keer', en: '2 times' } },
        { value: 3, label: { nl: '3 keer', en: '3 times' } },
        { value: 4, label: { nl: '4 keer', en: '4 times' } },
        { value: 5, label: { nl: '5 keer', en: '5 times' } },
      ],
    },
    required: true,
  },
]
