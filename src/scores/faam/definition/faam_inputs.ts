import { z } from 'zod'
import type { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const NOT_APPLICABLE_ANSWER = 999

const type = {
  type: z
    .union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
      z.literal(NOT_APPLICABLE_ANSWER),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 4,
        label: {
          en: 'No difficulty',
          nl: 'Geen moeite',
          fr: 'Pas de difficulté',
        },
      },
      {
        value: 3,
        label: {
          en: 'Slight difficulty',
          nl: 'Weinig moeite',
          fr: 'Difficulté légère',
        },
      },
      {
        value: 2,
        label: {
          en: 'Moderate difficulty',
          nl: 'Wat moeite',
          fr: 'Difficulté légère',
        },
      },
      {
        value: 1,
        label: {
          en: 'Extreme difficulty',
          nl: 'Veel moeite',
          fr: 'Difficulté sévère',
        },
      },
      {
        value: 0,
        label: {
          en: 'Unable to do',
          nl: 'Niet mogelijk',
          fr: 'Incapable de le faire',
        },
      },
      {
        value: NOT_APPLICABLE_ANSWER,
        label: {
          en: 'Not applicable',
          nl: 'Niet van toepassing',
          fr: 'Non applicable',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const FAAM_INPUTS = {
  ADL_Q01: {
    label: {
      nl: 'Staan',
      en: 'Standing',
      fr: 'Se tenir debout',
    },
    ...type,
  },
  ADL_Q02: {
    label: {
      nl: 'Lopen op een vlakke ondergrond',
      en: 'Walking on even Ground',
      fr: 'Marcher sur un terrain régulier',
    },
    ...type,
  },
  ADL_Q03: {
    label: {
      nl: 'Lopen op een vlakke ondergrond zonder schoenen',
      en: 'Walking on even ground without shoes',
      fr: 'Marcher pied nu sur un terrain régulier',
    },
    ...type,
  },
  ADL_Q04: {
    label: {
      nl: 'Een helling op lopen',
      en: 'Walking up hills',
      fr: 'Monter une pente',
    },
    ...type,
  },
  ADL_Q05: {
    label: {
      nl: 'Een helling af lopen',
      en: 'Walking down hills',
      fr: 'Descendre une pente',
    },
    ...type,
  },
  ADL_Q06: {
    label: {
      nl: 'Een trap oplopen',
      en: 'Going up stairs',
      fr: 'Monter les escaliers',
    },
    ...type,
  },
  ADL_Q07: {
    label: {
      nl: 'Een trap aflopen',
      en: 'Going down stairs',
      fr: 'Descendre les escaliers',
    },
    ...type,
  },
  ADL_Q08: {
    label: {
      nl: 'Lopen op oneffen terrein',
      en: 'Walking on uneven ground',
      fr: 'Marcher sur un terrain irrégulier',
    },
    ...type,
  },
  ADL_Q09: {
    label: {
      nl: 'De stoep op en af stappen',
      en: 'Stepping up and down curbs',
      fr: 'Monter et descendre d’un trottoir',
    },
    ...type,
  },
  ADL_Q10: {
    label: {
      nl: 'Hurken',
      en: 'Squatting',
      fr: 'S’accroupir',
    },
    ...type,
  },
  ADL_Q11: {
    label: {
      nl: 'Op uw tenen gaan staan',
      en: 'Coming up on your toes',
      fr: 'Se mettre sur la pointe des pieds',
    },
    ...type,
  },
  ADL_Q12: {
    label: {
      nl: 'Als u begint te lopen',
      en: 'Walking initially',
      fr: 'Faire les premiers pas (le matin au réveil/ après une position assise prolongée',
    },
    ...type,
  },
  ADL_Q13: {
    label: {
      nl: 'Ongeveer 5 minuten wandelen',
      en: 'Walking 5 minutes or less',
      fr: 'Marcher 5 minutes ou moins',
    },
    ...type,
  },
  ADL_Q14: {
    label: {
      nl: 'Ongeveer 10 minuten wandelen',
      en: 'Walking approximately 10 minutes',
      fr: 'Marcher environ 10 minutes',
    },
    ...type,
  },
  ADL_Q15: {
    label: {
      nl: 'Langer dan 15 minuten wandelen',
      en: 'Walking 15 minutes or greater',
      fr: 'Marcher 15 minutes ou plus',
    },
    ...type,
  },
  ADL_Q16: {
    label: {
      nl: 'Huishoudelijke taken',
      en: 'Home responsibilities',
      fr: 'Les tâches ménagères',
    },
    ...type,
  },
  ADL_Q17: {
    label: {
      nl: 'Activiteiten in het algemene dagelijkse leven',
      en: 'Activities of daily living',
      fr: 'Les activités de la vie quotidienne',
    },
    ...type,
  },
  ADL_Q18: {
    label: {
      nl: 'Persoonlijke verzorging',
      en: 'Personal care',
      fr: 'Les soins personnels',
    },
    ...type,
  },
  ADL_Q19: {
    label: {
      nl: 'Licht tot matig zwaar werk(staan, lopen)',
      en: 'Light to moderate work (standing, walking)',
      fr: 'Un travail léger à modéré (se tenir debout, marcher)',
    },
    ...type,
  },
  ADL_Q20: {
    label: {
      nl: 'Zwaar werk (trekken/duwen,klimmen, sjouwen)',
      en: 'Heavy work (push/pulling,climbing, carrying)',
      fr: 'Un travail lourd (pousser/tirer, grimper, porter)',
    },
    ...type,
  },
  ADL_Q21: {
    label: {
      nl: 'Recreatieve activiteiten',
      en: 'Recreational activities',
      fr: 'Les activités de loisirs',
    },
    ...type,
  },
  ADL_RATING: {
    label: {
      nl: 'How would you rate your current level of function during your usual activities of daily living from 0 to 100 with 100 being your level of function prior to your foot or ankle problem and 0 being the inability to perform any of your usual daily activities.',
      en: 'How would you rate your current level of function during your usual activities of daily living from 0 to 100 with 100 being your level of function prior to your foot or ankle problem and 0 being the inability to perform any of your usual daily activities.',
      fr: 'A combien estimez-vous votre niveau actuel de fonctionnement dans les activités habituelles de votre vie quotidienne de 0 à 100, 100 étant votre niveau de fonctionnement avant votre problème de pied ou de cheville, 0 étant l’incapacité à faire la moindre de vos activités quotidiennes habituelles ?',
    },
    type: z.number().min(0).max(100).optional(),
    uiOptions: {
      component: 'slider',
    },
  },
  SPORTS_Q01: {
    label: {
      nl: 'Hardlopen',
      en: 'Running',
      fr: 'Courir',
    },
    ...type,
  },
  SPORTS_Q02: {
    label: {
      nl: 'Springen',
      en: 'Jumping',
      fr: 'Sauter',
    },
    ...type,
  },
  SPORTS_Q03: {
    label: {
      nl: 'Landen na een sprong',
      en: 'Landing',
      fr: 'Se réceptionner d’un saut ',
    },
    ...type,
  },
  SPORTS_Q04: {
    label: {
      nl: 'Snel starten of stoppen met rennen',
      en: 'Starting and stopping quickly',
      fr: 'Démarrer et s’arrêter rapidement',
    },
    ...type,
  },
  SPORTS_Q05: {
    label: {
      nl: 'Zijwaarts bewegen/afzetten',
      en: 'Cutting/lateral Movements',
      fr: 'Faire des pas chassés/ des déplacements latéraux',
    },
    ...type,
  },
  SPORTS_Q06: {
    label: {
      nl: 'Lichte sportieve activiteiten',
      en: 'Low impact activities',
      fr: 'Activités sportives à faible impact (peu de chocs)',
    },
    ...type,
  },
  SPORTS_Q07: {
    label: {
      nl: 'Sporten zoals u normaal zou doen.',
      en: 'Ability to perform activity with your normal technique',
      fr: 'Capacité à exécuter votre activité sportive avec votre technique habituelle',
    },
    ...type,
  },
  SPORTS_RATING: {
    label: {
      nl: 'How would you rate your current level of function during your sports related activities from 0 to 100 with 100 being your level of function prior to your foot or ankle problem and 0 being the inability to perform any of your usual sports related activities?',
      en: 'How would you rate your current level of function during your sports related activities from 0 to 100 with 100 being your level of function prior to your foot or ankle problem and 0 being the inability to perform any of your usual sports related activities?',
      fr: "A combien estimez-vous votre niveau actuel de fonctionnement durant vos activités sportives de 0 à 100, 100 étant votre niveau de fonctionnement avant votre problème de pied ou de cheville, 0 étant l'incapacité à faire la moindre de vos activités sportives habituelles?",
    },
    type: z.number().min(0).max(100).optional(),
    uiOptions: {
      component: 'slider',
    },
  },
  OVERALL_RATING: {
    label: {
      nl: 'Overall, how would you rate your current level of function?',
      en: 'Overall, how would you rate your current level of function?',
      fr: 'Globalement, comment estimez-vous votre niveau actuel de fonctionnement ?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Normal', nl: 'Normaal', fr: 'Normal' },
        },
        {
          value: 1,
          label: {
            en: 'Nearly normal',
            nl: 'Vrijwel normaal',
            fr: 'Presque normal',
          },
        },
        {
          value: 2,
          label: {
            en: 'Abnormal',
            nl: 'Abnormaal',
            fr: 'En dessous de la normale',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severely Abnormal',
            nl: 'Zeer abnormaal',
            fr: 'Bien en dessous de la normale',
          },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
