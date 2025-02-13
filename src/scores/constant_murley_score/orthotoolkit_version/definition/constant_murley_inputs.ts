import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../../types'

export const CMS_INPUTS = {
  Q01_PAIN_SCORE: {
    label: {
      en: 'Score the highest pain level that you have experienced in your shoulder during ordinary activities within the last 24 hours.',
      nl: 'Wat is de hoogste pijnscore die u de laatste 24u heeft ervaren in uw schouder tijdens het uitvoeren van normale activiteiten?',
    },
    type: z.number().min(0).max(15),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Intolerable pain', nl: 'Ondraaglijke pijn' },
        },
        max: {
          label: { en: 'No pain', nl: 'Geen pijn' },
        },
      },
    },
  },
  Q02_SLEEP_SCORE: {
    label: {
      en: 'Is	your sleep disturbed by your shoulder?',
      nl: 'Is je slaap verstoord door uw schouder?',
    },
    type: z.union([z.literal(2), z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
        {
          value: 2,
          label: { en: 'Undisturbed sleep', nl: 'Ik slaap onverstoord' },
        },
        {
          value: 1,
          label: {
            en: 'Occasional disturbance',
            nl: 'Mijn slaap is occasioneel verstoord',
          },
        },
        {
          value: 0,
          label: {
            en: 'Every night',
            nl: 'Mijn slaap is elke nacht verstoord',
          },
        },
      ],
    },
  },
  Q03_WORK_ADL_SCORE: {
    label: {
      en: 'How much of your normal daily work does your shoulder allow you to perform?',
      nl: 'Hoeveel van uw normale dagelijkse werk laat uw schouder toe om te doen?',
    },
    type: z.number().min(0).max(4),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'All', nl: 'Allemaal' },
        },
      },
    },
  },
  Q04_SPORTS_HOBBY_SCORE: {
    label: {
      en: 'How much of your normal recreational activity does your shoulder allow you to perform?',
      nl: 'Hoeveel van uw normale recreationale activiteiten laat uw schouder toe om te doen?',
    },
    type: z.number().min(0).max(4),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'All', nl: 'Allemaal' },
        },
      },
    },
  },
  Q05_ADL_FUNCTIONING_SCORE: {
    label: {
      en: 'To which level can you use your hand comfortably?',
      nl: 'Tot welke hoogte kan u uw hand comfortabel gebruiken?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(4),
      z.literal(6),
      z.literal(8),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Below the waist', nl: 'Hand onder middel' },
        },
        {
          value: 2,
          label: { en: 'Up to the waist', nl: 'Hand tot middel' },
        },
        {
          value: 4,
          label: {
            en: 'Up to the xiphoid/sternum',
            nl: 'Hand tot borsthoogte',
          },
        },
        {
          value: 6,
          label: { en: 'Up to the neck', nl: 'Hand schouderhoogte / nek' },
        },
        {
          value: 8,
          label: {
            en: 'Up to the top of the head',
            nl: 'Hand op hoofdhoogte',
          },
        },
        {
          value: 10,
          label: { en: 'Above the head', nl: 'Hand boven hoofd hoogte' },
        },
      ],
    },
  },
  Q06_FLEXION_ROM: {
    label: {
      en: 'Forward flexion',
      nl: 'Elevatie',
    },
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(4),
      z.literal(6),
      z.literal(8),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: '0-30 degrees', nl: '0-30 graden' },
        },
        {
          value: 2,
          label: { en: '31-60 degrees', nl: '31-60 graden' },
        },
        {
          value: 4,
          label: {
            en: '61-90 degrees',
            nl: '61-90 graden',
          },
        },
        {
          value: 6,
          label: { en: '91-120 degrees', nl: '91-120 graden' },
        },
        {
          value: 8,
          label: {
            en: '121-150 degrees',
            nl: '121-150 graden',
          },
        },
        {
          value: 10,
          label: { en: '151+ degrees', nl: '151+ graden' },
        },
      ],
    },
  },
  Q07_ABDUCTION_ROM: {
    label: {
      en: 'Lateral elevation (abduction)',
      nl: 'Abductie',
    },
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(4),
      z.literal(6),
      z.literal(8),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: '0-30 degrees', nl: '0-30 graden' },
        },
        {
          value: 2,
          label: { en: '31-60 degrees', nl: '31-60 graden' },
        },
        {
          value: 4,
          label: {
            en: '61-90 degrees',
            nl: '61-90 graden',
          },
        },
        {
          value: 6,
          label: { en: '91-120 degrees', nl: '91-120 graden' },
        },
        {
          value: 8,
          label: {
            en: '121-150 degrees',
            nl: '121-150 graden',
          },
        },
        {
          value: 10,
          label: { en: '151+ degrees', nl: '151+ graden' },
        },
      ],
    },
  },
  Q08_ENDOROTATION_ROM: {
    label: {
      en: 'Internal rotation',
      nl: 'Interne rotatie',
    },
    info: {
      en: 'Patient points to anatomical landmarks with thumb',
    },
    type: z.union([
      z.literal(0),
      z.literal(2),
      z.literal(4),
      z.literal(6),
      z.literal(8),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        {
          value: 0,
          label: {
            nl: 'Hand laterale zijde trochanter',
            en: 'Lateral aspect of the thigh',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Duim achter bil / hand naar bil',
            en: 'Behind the buttock',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Duim op andere SIG / hand naar lumbosacraal',
            en: 'Sacroiliac joint',
          },
        },
        { value: 6, label: { nl: 'Duim/hand naar lumbaal', en: 'Waist' } },
        {
          value: 8,
          label: {
            nl: 'Duim op Th12 / hand naar TLO',
            en: '12th thoracic vertebra',
          },
        },
        {
          value: 10,
          label: {
            nl: 'Duim tussen scapulae / Hand los van de rug',
            en: 'Interscapular level',
          },
        },
      ],
    },
  },
  Q09_EXOROTATION_ROM: {
    label: {
      en: 'External rotation (check all that apply)',
      nl: 'Externe rotatie (check all that apply)',
    },
    type: z
      .array(
        z.union([
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
          z.literal(5),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            en: 'Hands behind head,	elbows forward',
            nl: 'Hand achter op het hoofd met elleboog naar voren',
          },
        },
        {
          value: 2,
          label: {
            en: 'Hands behind head, elbows back',
            nl: 'Hand achter op het hoofd met elleboog naar buiten',
          },
        },
        {
          value: 3,
          label: {
            en: 'Hands to the top of the head,	elbows forward',
            nl: 'Hand op het hoofd met elleboog naar voren',
          },
        },
        {
          value: 4,
          label: {
            en: 'Hands	to the top of the head,	elbows back',
            nl: 'Hand op het hoofd met elleboog naar buiten',
          },
        },
        {
          value: 5,
          label: {
            en: 'Full elevation',
            nl: 'Volledige elevatie vanaf bovenkant hoofd',
          },
        },
      ],
    },
  },
  Q10_ATTEMPT_1: {
    label: { en: 'Stength - Attempt 1', nl: 'Kracht - Poging 1' },
    type: z.number(),
    info: {
      en: 'Result should be entered in kg',
      nl: 'Geef resultaat in kg in',
    },
    unit: { en: 'kg' },
  },
  Q11_ATTEMPT_2: {
    label: { en: 'Stength - Attempt 2', nl: 'Kracht - Poging 2' },
    type: z.number().optional(),
    info: {
      en: 'Result should be entered in kg',
      nl: 'Geef resultaat in kg in',
    },
    unit: { en: 'kg' },
  },
  Q12_ATTEMPT_3: {
    label: { en: 'Stength - Attempt 3', nl: 'Kracht - Poging 3' },
    type: z.number().optional(),
    info: {
      en: 'Result should be entered in kg',
      nl: 'Geef resultaat in kg in',
    },
    unit: { en: 'kg' },
  },
} satisfies ScoreInputSchemaType
