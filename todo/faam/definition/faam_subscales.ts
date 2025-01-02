import {
  InputType,
  type DefaultSubscaleType,
} from '../../../src/types/calculations.types'

export const NOT_APPLICABLE_ANSWER = 999

const ALLOWED_ANSWERS = [
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
]

const add_allowed_answers = (
  input: Pick<InputType, 'input_label' | 'input_id'>,
): InputType => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const FAAM_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'ADL',
    // 21 items
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Staan',
          en: 'Standing',
          fr: 'Se tenir debout',
        },
        input_id: 'ADL_Q01',
      },
      {
        input_label: {
          nl: 'Lopen op een vlakke ondergrond',
          en: 'Walking on even Ground',
          fr: 'Marcher sur un terrain régulier',
        },
        input_id: 'ADL_Q02',
      },
      {
        input_label: {
          nl: 'Lopen op een vlakke ondergrond zonder schoenen',
          en: 'Walking on even ground without shoes',
          fr: 'Marcher pied nu sur un terrain régulier',
        },
        input_id: 'ADL_Q03',
      },
      {
        input_label: {
          nl: 'Een helling op lopen',
          en: 'Walking up hills',
          fr: 'Monter une pente',
        },
        input_id: 'ADL_Q04',
      },
      {
        input_label: {
          nl: 'Een helling af lopen',
          en: 'Walking down hills',
          fr: 'Descendre une pente',
        },
        input_id: 'ADL_Q05',
      },
      {
        input_label: {
          nl: 'Een trap oplopen',
          en: 'Going up stairs',
          fr: 'Monter les escaliers',
        },
        input_id: 'ADL_Q06',
      },
      {
        input_label: {
          nl: 'Een trap aflopen',
          en: 'Going down stairs',
          fr: 'Descendre les escaliers',
        },
        input_id: 'ADL_Q07',
      },
      {
        input_label: {
          nl: 'Lopen op oneffen terrein',
          en: 'Walking on uneven ground',
          fr: 'Marcher sur un terrain irrégulier',
        },
        input_id: 'ADL_Q08',
      },
      {
        input_label: {
          nl: 'De stoep op en af stappen',
          en: 'Stepping up and down curbs',
          fr: 'Monter et descendre d’un trottoir',
        },
        input_id: 'ADL_Q09',
      },
      {
        input_label: {
          nl: 'Hurken',
          en: 'Squatting',
          fr: 'S’accroupir',
        },
        input_id: 'ADL_Q10',
      },
      {
        input_label: {
          nl: 'Op uw tenen gaan staan',
          en: 'Coming up on your toes',
          fr: 'Se mettre sur la pointe des pieds',
        },
        input_id: 'ADL_Q11',
      },
      {
        input_label: {
          nl: 'Als u begint te lopen',
          en: 'Walking initially',
          fr: 'Faire les premiers pas (le matin au réveil/ après une position assise prolongée',
        },
        input_id: 'ADL_Q12',
      },
      {
        input_label: {
          nl: 'Ongeveer 5 minuten wandelen',
          en: 'Walking 5 minutes or less',
          fr: 'Marcher 5 minutes ou moins',
        },
        input_id: 'ADL_Q13',
      },
      {
        input_label: {
          nl: 'Ongeveer 10 minuten wandelen',
          en: 'Walking approximately 10 minutes',
          fr: 'Marcher environ 10 minutes',
        },
        input_id: 'ADL_Q14',
      },
      {
        input_label: {
          nl: 'Langer dan 15 minuten wandelen',
          en: 'Walking 15 minutes or greater',
          fr: 'Marcher 15 minutes ou plus',
        },
        input_id: 'ADL_Q15',
      },
      {
        input_label: {
          nl: 'Huishoudelijke taken',
          en: 'Home responsibilities',
          fr: 'Les tâches ménagères',
        },
        input_id: 'ADL_Q16',
      },
      {
        input_label: {
          nl: 'Activiteiten in het algemene dagelijkse leven',
          en: 'Activities of daily living',
          fr: 'Les activités de la vie quotidienne',
        },
        input_id: 'ADL_Q17',
      },
      {
        input_label: {
          nl: 'Persoonlijke verzorging',
          en: 'Personal care',
          fr: 'Les soins personnels',
        },
        input_id: 'ADL_Q18',
      },
      {
        input_label: {
          nl: 'Licht tot matig zwaar werk(staan, lopen)',
          en: 'Light to moderate work (standing, walking)',
          fr: 'Un travail léger à modéré (se tenir debout, marcher)',
        },
        input_id: 'ADL_Q19',
      },
      {
        input_label: {
          nl: 'Zwaar werk (trekken/duwen,klimmen, sjouwen)',
          en: 'Heavy work (push/pulling,climbing, carrying)',
          fr: 'Un travail lourd (pousser/tirer, grimper, porter)',
        },
        input_id: 'ADL_Q20',
      },
      {
        input_label: {
          nl: 'Recreatieve activiteiten',
          en: 'Recreational activities',
          fr: 'Les activités de loisirs',
        },
        input_id: 'ADL_Q21',
      },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 19,
  },
  {
    id: 'SPORTS',
    /**
     * Literature says there are 8 items in the sports subscale
     * but I can only find 7 items. The 8th item that they are referring to is scored from 0-10
     * but no instructions are provided to recode this answer.
     *
     * https://www.physio-pedia.com/8-Item_Sports_Subscale
     *  */

    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hardlopen',
          en: 'Running',
          fr: 'Courir',
        },
        input_id: 'SPORTS_Q01',
      },
      {
        input_label: {
          nl: 'Springen',
          en: 'Jumping',
          fr: 'Sauter',
        },
        input_id: 'SPORTS_Q02',
      },
      {
        input_label: {
          nl: 'Landen na een sprong',
          en: 'Landing',
          fr: 'Se réceptionner d’un saut ',
        },
        input_id: 'SPORTS_Q03',
      },
      {
        input_label: {
          nl: 'Snel starten of stoppen met rennen',
          en: 'Starting and stopping quickly',
          fr: 'Démarrer et s’arrêter rapidement',
        },
        input_id: 'SPORTS_Q04',
      },
      {
        input_label: {
          nl: 'Zijwaarts bewegen/afzetten',
          en: 'Cutting/lateral Movements',
          fr: 'Faire des pas chassés/ des déplacements latéraux',
        },
        input_id: 'SPORTS_Q05',
      },
      {
        input_label: {
          nl: 'Lichte sportieve activiteiten',
          en: 'Low impact activities',
          fr: 'Activités sportives à faible impact (peu de chocs)',
        },
        input_id: 'SPORTS_Q06',
      },
      {
        input_label: {
          nl: 'Sporten zoals u normaal zou doen.',
          en: 'Ability to perform activity with your normal technique',
          fr: 'Capacité à exécuter votre activité sportive avec votre technique habituelle',
        },
        input_id: 'SPORTS_Q07',
      },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 7,
  },
]
