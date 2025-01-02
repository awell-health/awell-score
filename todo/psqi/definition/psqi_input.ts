import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const INPUT_TYPES: Record<string, NumberInputType> = {
  serie_1: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: 'Not during the past month',
          nl: 'Niet tijdens de afgelopen maand',
        },
      },
      {
        value: 1,
        label: {
          en: 'Less than once a week',
          nl: 'Minder dan één maal per week',
        },
      },
      {
        value: 2,
        label: {
          en: 'Once or twice a week',
          nl: 'Eén of twee maal per week',
        },
      },
      {
        value: 3,
        label: {
          en: 'Three or more times a week',
          nl: 'Drie of meer keer per week',
        },
      },
    ],
  },
  serie_2: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: '< 15 minutes',
          nl: '< 15 minuten',
        },
      },
      {
        value: 1,
        label: {
          en: '16-30 minutes',
          nl: '16-30 minuten',
        },
      },
      {
        value: 2,
        label: {
          en: '31-60 minutes',
          nl: '31-60 minuten',
        },
      },
      {
        value: 3,
        label: {
          en: '> 60 minutes',
          nl: '> 60 minuten',
        },
      },
    ],
  },
  serie_3: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: '> 7 hours',
          nl: '> 7 uur',
        },
      },
      {
        value: 1,
        label: {
          en: '6-7 hours',
          nl: '6-7 uur',
        },
      },
      {
        value: 2,
        label: {
          en: '5-6 hours',
          nl: '5-6 uur',
        },
      },
      {
        value: 3,
        label: {
          en: '< 5 hours',
          nl: '< 5 uur',
        },
      },
    ],
  },
  serie_4: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: 'No problem at all',
          nl: 'Geen enkel probleem',
        },
      },
      {
        value: 1,
        label: {
          en: 'Only a very slight problem',
          nl: 'Slechts een klein probleem',
        },
      },
      {
        value: 2,
        label: {
          en: 'Somewhat of a problem',
          nl: 'Enigszins een probleem',
        },
      },
      {
        value: 3,
        label: {
          en: 'A very big problem',
          nl: 'Een heel groot probleem',
        },
      },
    ],
  },
  serie_5: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: 'Very Good',
          nl: 'Zeer Goed',
        },
      },
      {
        value: 1,
        label: {
          en: 'Fairly Good',
          nl: 'Redelijk Goed',
        },
      },
      {
        value: 2,
        label: {
          en: 'Fairly Bad',
          nl: 'Eerder Slecht',
        },
      },
      {
        value: 3,
        label: {
          en: 'Very Bad',
          nl: 'Zeer Slecht',
        },
      },
    ],
  },
  serie_6: {
    type: 'number',
    allowed_answers: [
      {
        value: 0,
        label: {
          en: 'No bed partner or roommate',
          nl: 'Geen bedpartner of huisgenoot',
        },
      },
      {
        value: 1,
        label: {
          en: 'Partner/Roommate in other room',
          nl: 'Partner/huisgenoot in andere kamer',
        },
      },
      {
        value: 2,
        label: {
          en: 'Partner in the same room, but not same bed',
          nl: 'Partner in dezelfde kamer, maar niet hetzelfde bed',
        },
      },
      {
        value: 3,
        label: {
          en: 'Partner in same bed',
          nl: 'Partner in hetzelfde bed',
        },
      },
    ],
  },
  serie_7: {
    type: 'number',
    range: {
      min: { value: 1 },
      max: { value: 24 },
    },
  },
}

export const PSQI_INPUT: Array<InputType> = [
  {
    input_id: 'Q01',
    type: INPUT_TYPES.serie_7,
    label: {
      en: 'During the past month, what time have you usually gone to bed at night? (In 24 hour format)',
      nl: 'Hoe laat ging u ’s avond meestal naar bed gedurende de afgelopen maand? (In 24-uursformaat)',
    },
  },
  {
    input_id: 'Q02',
    type: INPUT_TYPES.serie_2,
    label: {
      en: 'During the past month, how long (in minutes) has it usually taken you to fall asleep each night?',
      nl: 'Hoeveel minuten duurde het de afgelopen maand gewoonlijk elke nacht vooraleer u in slaap viel?',
    },
  },
  {
    input_id: 'Q03',
    type: INPUT_TYPES.serie_7,
    label: {
      en: 'During the past month, what time have you usually gotten up in the morning? (In 24 hour format)',
      nl: 'Hoe laat stond u tijdens de afgelopen maand ’s morgens op? (In 24-uursformaat)',
    },
  },
  {
    input_id: 'Q04',
    type: INPUT_TYPES.serie_7,
    label: {
      en: 'During the past month, how many hours of actual sleep did you get at night? (This may be different than the number of hours you spent in bed.)',
      nl: 'Aan hoeveel uren SLAAP kwam u gemiddeld per nacht tijdens de afgelopen maand? (Dat kan verschillen van het aantal uren dat u in bed doorbracht)',
    },
  },
  {
    input_id: 'Q05a',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you cannot get to sleep within 30 minutes',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u niet binnen 30 minuten in slaap viel?',
    },
  },
  {
    input_id: 'Q05b',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you wake up in the middle of the night or early morning?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u midden in de nacht of in de vroege morgen wakker werd?',
    },
  },
  {
    input_id: 'Q05c',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you have to get up to use the bathroom?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u naar het toilet moest gaan?',
    },
  },
  {
    input_id: 'Q05d',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you cannot breathe comfortably?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u niet makkelijk kon ademhalen?',
    },
  },
  {
    input_id: 'Q05e',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you cough or snore loudly?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u luid hoestte of snurkte?',
    },
  },
  {
    input_id: 'Q05f',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you feel too cold?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u het te koud had?',
    },
  },
  {
    input_id: 'Q05g',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you feel too hot?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u het te warm had?',
    },
  },
  {
    input_id: 'Q05h',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you have bad dreams?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u nachtmerries had?',
    },
  },
  {
    input_id: 'Q05i',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because you have pain?',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u pijn had?',
    },
  },
  {
    input_id: 'Q05j',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble sleeping because of other reason(s):',
      nl: 'Hoe vaak had u tijdens de afgelopen maand moeilijkheden met slapen, omdat u (een) andere reden (en) had?',
    },
  },
  {
    input_id: 'Q05jj',
    type: {
      type: 'string',
    },
    label: {
      en: 'If you had other reason(s), please describe:',
      nl: 'Als u een andere reden had, beschrijf deze dan:',
    },
  },
  {
    input_id: 'Q06',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you taken medicine to help you sleep (prescribed or “over the counter”)?',
      nl: 'Hoe vaak nam u gedurende de afgelopen maand geneesmiddelen in (al dan niet voorgeschreven) als hulp bij het slapen?',
    },
  },
  {
    input_id: 'Q07',
    type: INPUT_TYPES.serie_1,
    label: {
      en: 'During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?',
      nl: 'Hoe vaak had u het de afgelopen maand moeilijk om wakker te blijven tijdens het autorijden, het eten of deelname aan een sociale activiteit?',
    },
  },
  {
    input_id: 'Q08',
    type: INPUT_TYPES.serie_4,
    label: {
      en: 'During the past month, how much of a problem has it been for you to keep up enough enthusiasm to get things done?',
      nl: 'In welke mate was het de afgelopen maand voor u een probleem om met voldoende enthousiasme uw dagelijkse activiteiten uit te voeren?',
    },
  },
  {
    input_id: 'Q09',
    type: INPUT_TYPES.serie_5,
    label: {
      en: 'During the past month, how would you rate your sleep quality overall?',
      nl: 'Hoe zou u uw globale slaapkwaliteit tijdens de afgelopen maand beoordelen?',
    },
  },
]
