import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { DEFAULT_ALLOWED_ANSWER_VALUES } from '../../common/eortc_parameters'

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: {
    type: 'number',
    allowed_answers: DEFAULT_ALLOWED_ANSWER_VALUES,
  },
})

const GLOBAL_HEALTH_STATUS_RANGE = {
  min: {
    value: 1,
    label: { nl: 'Erg slecht', en: 'Very poor' },
  },
  max: {
    value: 7,
    label: { nl: 'Uitstekend', en: 'Excellent' },
  },
}

export const EORTC_QLQ_C30_SCALES: Array<EORTCScaleType> = [
  {
    id: 'QL2',
    scale_type: 'global_health_status',
    item_range: 6,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Hoe zou u uw algehele gezondheid gedurende de afgelopen week beoordelen?',
          en: 'How would you rate your overall health during the past week?',
        },
        input_id: 'EORTCQLQC30_Q29',
        type: {
          type: 'number',
          component: 'slider',
          range: GLOBAL_HEALTH_STATUS_RANGE,
        },
      },
      {
        label: {
          nl: 'Hoe zou u uw algehele "kwaliteit van het leven" gedurende de afgelopen week beoordelen?',
          en: 'How would you rate your overall quality of life during the past week?',
        },
        input_id: 'EORTCQLQC30_Q30',
        type: {
          type: 'number',
          component: 'slider',
          range: GLOBAL_HEALTH_STATUS_RANGE,
        },
      },
    ],
  },
  {
    id: 'PF2',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u moeite met het doen van inspannende activiteiten zoals het dragen van een zware boodschappentas of een koffer?',
          en: 'Do you have any trouble doing strenuous activities, like carrying a heavy shopping bag or a suitcase?',
        },
        input_id: 'EORTCQLQC30_Q01',
      },
      {
        label: {
          nl: 'Heeft u moeite met het maken van een lange wandeling?',
          en: 'Do you have any trouble taking a long walk?',
        },
        input_id: 'EORTCQLQC30_Q02',
      },
      {
        label: {
          nl: 'Heeft u moeite met het maken van een korte wandeling buitenshuis?',
          en: 'Do you have any trouble taking a short walk outside of the house?',
        },
        input_id: 'EORTCQLQC30_Q03',
      },
      {
        label: {
          nl: 'Moet u overdag in bed of op een stoel blijven?',
          en: 'Do you need to stay in bed or a chair during the day?',
        },
        input_id: 'EORTCQLQC30_Q04',
      },
      {
        label: {
          nl: 'Heeft u hulp nodig met eten, aankleden, uzelf wassen of naar het toilet gaan?',
          en: 'Do you need help with eating, dressing, washing yourself or using the toilet?',
        },
        input_id: 'EORTCQLQC30_Q05',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'RF2',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was u gedurende de afgelopen week beperkt bij het doen van uw werk of andere dagelijkse bezigheden?',
          en: 'Were you limited in doing either your work or other daily activities during the past week?',
        },
        input_id: 'EORTCQLQC30_Q06',
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week beperkt in het uitoefenen van uw hobby’s of bij andere bezigheden die u in uw vrije tijd doet?',
          en: 'Were you limited in pursuing your hobbies or other leisure time activities during the past week?',
        },
        input_id: 'EORTCQLQC30_Q07',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'EF',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen week gespannen?',
          en: 'Did you feel tense during the past week?',
        },
        input_id: 'EORTCQLQC30_Q21',
      },
      {
        label: {
          nl: 'Maakte u zich gedurende de afgelopen week zorgen?',
          en: 'Did you worry during the past week?',
        },
        input_id: 'EORTCQLQC30_Q22',
      },
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen week prikkelbaar?',
          en: 'Did you feel irritable during the past week?',
        },
        input_id: 'EORTCQLQC30_Q23',
      },
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen week neerslachtig?',
          en: 'Did you feel depressed during the past week?',
        },
        input_id: 'EORTCQLQC30_Q24',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'CF',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week moeite gehad met het concentreren op dingen, zoals een krant lezen of televisie kijken?',
          en: 'Have you had difficulty in concentrating on things, like reading a newspaper or watching television during the past week?',
        },
        input_id: 'EORTCQLQC30_Q20',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week moeite gehad met het herinneren van dingen?',
          en: 'Have you had difficulty remembering things during the past week?',
        },
        input_id: 'EORTCQLQC30_Q25',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SF',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft uw lichamelijke toestand of medische behandeling gedurende de afgelopen week uw familieleven in de weg gestaan?',
          en: 'Has your physical condition or medical treatment interfered with your family life during the past week?',
        },
        input_id: 'EORTCQLQC30_Q26',
      },
      {
        label: {
          nl: 'Heeft uw lichamelijke toestand of medische behandeling gedurende de afgelopen week u belemmerd in uw sociale bezigheden?',
          en: 'Has your physical condition or medical treatment interfered with your social activities during the past week?',
        },
        input_id: 'EORTCQLQC30_Q27',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'FA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week behoefte om te rusten?',
          en: 'Did you need to rest during the past week?',
        },
        input_id: 'EORTCQLQC30_Q10',
      },
      {
        label: {
          nl: 'Heeft u zich gedurende de afgelopen week slap gevoeld during the past week?',
          en: 'Have you felt weak?',
        },
        input_id: 'EORTCQLQC30_Q12',
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week moe?',
          en: 'Were you tired during the past week?',
        },
        input_id: 'EORTCQLQC30_Q18',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'NV',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u zich gedurende de afgelopen misselijk gevoeld?',
          en: 'Have you felt nauseated during the past week?',
        },
        input_id: 'EORTCQLQC30_Q14',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen overgegeven?',
          en: 'Have you vomited during the past week?',
        },
        input_id: 'EORTCQLQC30_Q15',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'PA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn gehad?',
          en: 'Have you had pain during the past week?',
        },
        input_id: 'EORTCQLQC30_Q09',
      },
      {
        label: {
          nl: 'Heeft pijn u gedurende de afgelopen week gehinderd in uw dagelijkse bezigheden?',
          en: 'Did pain interfere with your daily activities during the past week?',
        },
        input_id: 'EORTCQLQC30_Q19',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'DY',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was u gedurende de afgelopen week kortademig?',
          en: 'Were you short of breath during the past week?',
        },
        input_id: 'EORTCQLQC30_Q08',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SL',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week moeite met slapen gehad?',
          en: 'Have you had trouble sleeping during the past week?',
        },
        input_id: 'EORTCQLQC30_Q11',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'AP',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week gebrek aan eetlust gehad?',
          en: 'Have you lacked appetite during the past week?',
        },
        input_id: 'EORTCQLQC30_Q13',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'CO',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week last van obstipatie? (was u verstopt?)',
          en: 'Have you been constipated during the past week?',
        },
        input_id: 'EORTCQLQC30_Q16',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'DI',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week diarree?',
          en: 'Have you had diarrhea during the past week?',
        },
        input_id: 'EORTCQLQC30_Q17',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'FI',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft uw lichamelijke toestand of medische behandeling gedurende de afeglopen week financiële moeilijkheden met zich meegebracht?',
          en: 'Has your physical condition or medical treatment caused you financial difficulties during the past week?',
        },
        input_id: 'EORTCQLQC30_Q28',
      },
    ].map(add_allowed_answers),
  },
]
