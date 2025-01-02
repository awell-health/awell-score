import type { InputType } from '../../../../../types/calculations.types'
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

export const ADDITIONAL_INPUTS: InputType[] = [
  {
    label: {
      nl: 'Nam u gedurende de afgelopen week enige medicatie tegen de pijn?',
      en: 'Did you take medicine for pain during the past week?',
    },
    input_id: 'EORTCQLQLC13_Q13_PART_1', // Item 43
    type: {
      type: 'number',
      allowed_answers: [
        { value: 1, label: { en: 'No', nl: 'Nee' } },
        { value: 2, label: { en: 'Yes', nl: 'Ja' } },
      ],
    },
    required: true,
  },
  {
    label: {
      nl: 'Indien ja, hoeveel hielp het?',
      en: 'If yes, how much did it help?',
    },
    input_id: 'EORTCQLQLC13_Q13_PART_2', // Part 2 of item 43
    type: {
      type: 'number',
      allowed_answers: DEFAULT_ALLOWED_ANSWER_VALUES,
    },
    not_applicable_if: {
      input_id: 'EORTCQLQLC13_Q13_PART_1',
      value_is_one_of: [1],
    },
    required: true,
  },
]

/**
 * Question 1 = Item 31 in EORTC LC13 questionnaire
 * Question 2 = Item 32
 * Question 29 = Item 59
 */
export const EORTC_QLQ_LC13_SCALES: Array<EORTCScaleType> = [
  {
    id: 'LCDY',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was u gedurende de afgelopen week kortademig toen u rustte?',
          en: 'Were you short of breath when you rested during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q03',
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week kortademig toen u wandelde?',
          en: 'Were you short of breath when you walked during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q04',
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week kortademig toen u trappen liep?',
          en: 'Were you short of breath when you climbed stairs during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q05',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCCO',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Hoeveel heeft u gedurende de afgelopen week gehoest?',
          en: 'How much did you cough during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q01',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCHA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week bloed opgehoest?',
          en: 'Did you cough up blood during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q02',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCSM',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week een pijnlijke mond of tong?',
          en: 'Have you had a sore mouth or tongue during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q06',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCDS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week moeite met slikken?',
          en: 'Have you had trouble swallowing during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q07',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCPN',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week prikkelende handen of voeten?',
          en: 'Have you had tingling hands or feet during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q08',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCHR',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week haaruitval gehad?',
          en: 'Have you had hair loss during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q09',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCPC',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week pijn in uw borst?',
          en: 'Have you had pain in your chest during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q10',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCPA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week pijn in uw arm of schouder?',
          en: 'Have you had pain in your arm or shoulder during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q11',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'LCPO',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had u gedurende de afgelopen week pijn in andere delen van uw lichaam?',
          en: 'Have you had pain in other parts of your body during the past week?',
        },
        input_id: 'EORTCQLQLC13_Q12',
      },
    ].map(add_allowed_answers),
  },
]
