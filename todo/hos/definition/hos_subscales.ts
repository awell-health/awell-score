import {
  InputType,
  type DefaultSubscaleType,
} from '../../../src/types/calculations.types'

export const NOT_APPLICABLE_ANSWER = 999

const ALLOWED_ANSWERS = [
  {
    value: 4,
    label: {
      en: 'No difficulty at all',
      nl: 'Geen beperking',
    },
  },
  {
    value: 3,
    label: {
      en: 'Some difficulty',
      nl: 'Lichte beperking',
    },
  },
  {
    value: 2,
    label: {
      en: 'Moderate difficulty',
      nl: 'Matige beperking',
    },
  },
  {
    value: 1,
    label: {
      en: 'Extreme difficulty',
      nl: 'Extreme beperking',
    },
  },
  {
    value: 0,
    label: {
      en: 'Unable to do',
      nl: 'Onmogelijkheid tot uitvoeren',
    },
  },
  {
    value: NOT_APPLICABLE_ANSWER,
    label: {
      en: 'Not applicable',
      nl: 'Niet van toepassing',
    },
  },
]

const add_allowed_answers = (
  input: Pick<InputType, 'input_label' | 'input_id'>,
): InputType => ({
  ...input,
  type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const HOS_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'ADL',
    input_ids_in_subscale: [
      {
        input_id: 'Q01',
        label: {
          nl: '',
          en: 'Because of your hip how much difficulty do you have with: Standing for 15 minutes',
        },
      },
      {
        input_id: 'Q02',
        label: { nl: '', en: 'Getting into and out of an average car' },
      },
      {
        input_id: 'Q03',
        label: { nl: '', en: 'Walking up steep hills' },
      },
      {
        input_id: 'Q04',
        label: { nl: '', en: 'Walking down steep hills' },
      },
      {
        input_id: 'Q05',
        label: { nl: '', en: 'Going up 1 flight of stairs' },
      },
      {
        input_id: 'Q06',
        label: { nl: '', en: 'Going down 1 flight of stairs' },
      },
      {
        input_id: 'Q07',
        label: { nl: '', en: 'Stepping up and down curbs' },
      },
      { input_id: 'Q08', label: { nl: '', en: 'Deep squatting' } },
      {
        input_id: 'Q09',
        label: { nl: '', en: 'Getting into and out of a bath tub' },
      },
      { input_id: 'Q10', label: { nl: '', en: 'Walking initially' } },
      {
        input_id: 'Q11',
        label: { nl: '', en: 'Walking approximately 10 minutes' },
      },
      {
        input_id: 'Q12',
        label: { nl: '', en: 'Walking 15 minutes or greater' },
      },
      {
        input_id: 'Q13',
        label: { nl: '', en: 'Twisting/pivoting on involved leg' },
      },
      { input_id: 'Q14', label: { nl: '', en: 'Rolling over in bed' } },
      {
        input_id: 'Q15',
        label: {
          nl: '',
          en: 'Light to moderate work (standing, walking)',
        },
      },
      {
        input_id: 'Q16',
        label: {
          nl: '',
          en: 'Heavy work (push/pulling, climbing, carrying)',
        },
      },
      {
        input_id: 'Q17',
        label: { nl: '', en: 'Recreational activities' },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SPORTS',
    input_ids_in_subscale: [
      {
        input_id: 'SQ01',
        label: {
          nl: '',
          en: 'Because of your hip how much difficulty do you have with: Running one mile',
        },
      },
      { input_id: 'SQ02', label: { nl: '', en: 'Jumping' } },
      {
        input_id: 'SQ03',
        label: { nl: '', en: 'Swinging objects like a golf club' },
      },
      { input_id: 'SQ04', label: { nl: '', en: 'Landing' } },
      {
        input_id: 'SQ05',
        label: { nl: '', en: 'Starting and stopping quickly' },
      },
      {
        input_id: 'SQ06',
        label: { nl: '', en: 'Cutting/lateral movements' },
      },
      {
        input_id: 'SQ07',
        label: { nl: '', en: 'Low impact activities like fast walking' },
      },
      {
        input_id: 'SQ08',
        label: {
          nl: '',
          en: 'Ability to perform activity with your normal technique',
        },
      },
      {
        input_id: 'SQ09',
        label: {
          nl: '',
          en: 'Ability to participate in your desired sport as long as you would like',
        },
      },
    ].map(add_allowed_answers),
  },
]
