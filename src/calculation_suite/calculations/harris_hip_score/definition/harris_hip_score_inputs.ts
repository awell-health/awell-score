import type { InputType } from '../../../../types/calculations.types'

export const HARRIS_HIP_SCORE_INPUTS: Array<InputType> = [
  {
    input_id: 'PAIN',
    input_label: {
      nl: 'Pijn',
      en: 'Pain',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 44,
          label: {
            nl: 'Geen pijn',
            en: 'None or ignores it',
          },
        },
        {
          value: 40,
          label: {
            nl: 'Soms lichte pijn, geen invloed op activiteiten van het dagelijks leven (ADL)',
            en: 'Slight, occasional, no compromise in activities',
          },
        },
        {
          value: 30,
          label: {
            nl: 'Lichte pijn, geen invloed op ADL, soms sterke pijnstiller',
            en: 'Mild pain, no effect on average activities, rarely moderate pain with unusual activity; may take aspirin',
          },
        },
        {
          value: 20,
          label: {
            nl: 'Matige pijn, enige beperking in ADL, soms sterke pijnstiller',
            en: 'Moderate pain, tolerable but makes concession to pain. Some limitation of ordinary activity or work. May require occasional pain medication stronger than aspirin',
          },
        },
        {
          value: 10,
          label: {
            nl: 'Ernstige pijn, ernstige beperking in ADL',
            en: 'Marked pain, serious limitation of activities',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Totaal geinvalideerd, pijn in bed, bedlegerig',
            en: 'Totally disabled, crippled, pain in bed, bedridden',
          },
        },
      ],
    },
  },
  {
    input_id: 'LIMP',
    input_label: {
      nl: 'Manken',
      en: 'Limp',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 11,
          label: {
            nl: 'Geen',
            en: 'None',
          },
        },
        {
          value: 8,
          label: {
            nl: 'Licht',
            en: 'Slight',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Matig',
            en: 'Moderate',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernst',
            en: 'Severe',
          },
        },
      ],
    },
  },
  {
    input_id: 'SUPPORT',
    input_label: {
      nl: 'Steunmiddelen',
      en: 'Support',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 11,
          label: {
            nl: 'geen',
            en: 'None',
          },
        },
        {
          value: 7,
          label: {
            nl: 'Wandelstok voor lange wandelingen',
            en: 'Cane for long walks',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Wandelstok altijd',
            en: 'Cane most of the time',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Eén elleboogskruk',
            en: 'One crutch',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Twee wandelstokken',
            en: 'Two canes',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Twee elleboogskrukken of niet in staat om te lopen',
            en: 'Two crutches or not able to walk',
          },
        },
      ],
    },
  },
  {
    input_id: 'DISTANCE_WALKED',
    input_label: {
      nl: '',
      en: 'Distance walked',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 11,
          label: {
            nl: 'Onbeperkt',
            en: 'Unlimited',
          },
        },
        {
          value: 8,
          label: {
            nl: '1 kilometer',
            en: 'Six blocks',
          },
        },
        {
          value: 5,
          label: {
            nl: '500 meter',
            en: 'Two or three blocks',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Alleen binnenshuis',
            en: 'Indoors only',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Bed en stoel',
            en: 'Bed and chair only',
          },
        },
      ],
    },
  },
  {
    input_id: 'SITTING',
    input_label: {
      nl: 'Zitten',
      en: 'Sitting',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 5,
          label: {
            nl: 'Comfortabel op een normale stoel gedurende één uur',
            en: 'Comfortably in ordinary chair for one hour',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Half uur op een hoge stoel',
            en: 'On a high chair for 30 minutes',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Niet in staat comfortabel op een stoel te zitten',
            en: 'Unable to sit comfortably in any chair',
          },
        },
      ],
    },
  },
  {
    input_id: 'ENTER_PUBLIC_TRANSPORTATION',
    input_label: {
      nl: 'Instappen openbaar vervoer',
      en: 'Enter public transportation',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'In staat',
            en: 'Yes',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Niet in staat',
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'STAIRS',
    input_label: {
      nl: 'Traplopen',
      en: 'Stairs',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 4,
          label: {
            nl: 'Normaal, zonder gebruik leuning',
            en: 'Normally without using a railing',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Normaal, met gebruik leuning',
            en: 'Normally using a railing',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Op wat voor manier dan ook',
            en: 'In any manner',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Niet in staat om trap te lopen',
            en: 'Unable to do stairs',
          },
        },
      ],
    },
  },
  {
    input_id: 'PUT_ON_SOCKS_AND_SHOES',
    input_label: {
      nl: 'Aan- en uittrekken schoenen en sokken',
      en: 'Put on socks and shoes',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 4,
          label: {
            nl: 'Met gemak',
            en: 'With ease',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Met moeite',
            en: 'With difficulty',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Niet in staat',
            en: 'Unable',
          },
        },
      ],
    },
  },
  {
    input_id: 'ABSENCE_OF_DEFORMITY',
    input_label: {
      nl: 'Afwezigheid deformiteiten',
      en: 'Absence of deformity',
    },
    input_type: {
      type: 'numbers_array',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Flexie contractuur < 30',
            en: 'Less than 30° fixed flexion contracture',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Adductie contractuur < 10',
            en: 'Less than 10° fixed abduction',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Endorotatie contractuur < 10 in extensie',
            en: 'Less than 10° fixed internal rotation in extension',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Beenlengteverschil < 3,2 cm',
            en: 'Limb length discrepancy less than 3.2cm',
          },
        },
      ],
    },
  },
  {
    input_id: 'RANGE_OF_MOTION_FLEXION',
    input_label: {
      nl: 'Mobiliteit - Flexie (*140°)',
      en: 'Range of motion - Flexion (*140°)',
    },
    info: {
      nl: '* duidt de normaal aan',
      en: '* indicates normal',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'RANGE_OF_MOTION_ABDUCTION',
    input_label: {
      nl: 'Mobiliteit - Abductie (*40)',
      en: 'Range of motion - Abduction (*40)',
    },
    info: {
      nl: '* duidt de normaal aan',
      en: '* indicates normal',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'RANGE_OF_MOTION_ADDUCTION',
    input_label: {
      nl: 'Mobiliteit - Adductie (*40)',
      en: 'Range of motion - Adduction (*40)',
    },
    info: {
      nl: '* duidt de normaal aan',
      en: '* indicates normal',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'RANGE_OF_MOTION_EXTERNAL_ROTATION',
    input_label: {
      nl: 'Mobiliteit - Externe rotatie (*40)',
      en: 'Range of motion - External rotation (*40)',
    },
    info: {
      nl: '* duidt de normaal aan',
      en: '* indicates normal',
    },
    input_type: {
      type: 'number',
    },
  },
  {
    input_id: 'RANGE_OF_MOTION_INTERNAL_ROTATION',
    input_label: {
      nl: 'Mobiliteit - Interne rotatie (*40)',
      en: 'Range of motion - Internal rotation (*40)',
    },
    info: {
      nl: '* duidt de normaal aan',
      en: '* indicates normal',
    },
    input_type: {
      type: 'number',
    },
  },
]
