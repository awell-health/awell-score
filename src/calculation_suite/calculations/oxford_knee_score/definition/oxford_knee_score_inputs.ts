import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

export const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ],
}

export const OKS_INPUTS: Array<InputType> = [
  {
    input_id: '1_usual_knee_pain',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...How would you describe the pain you usually have from your knee?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '2_washing_and_trouble_washing',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Have you had any trouble with washing and drying yourself (all over) because of your knee?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '3_car_problem',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Have you had any trouble getting in and out of a car or using public transport because of your knee? (whichever you would tend to use)',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '4_time_before_pain',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...For how long have you been able to walk before pain from your knee becomes severe? (with or without a stick)',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '5_table_pain',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...After a meal (sat at a table), how painful has it been for you to stand up from a chair because of your knee?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '6_have_you_been_limping_when_walking',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Have you been limping when walking, because of your knee?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '7_kneel_down_and_get_up',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Could you kneel down and get up again afterwards?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '8_trouble_with_night_pain',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Have you been troubled by pain from your knee in bed at night?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '9_usual_pain_work',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...How much has pain from your knee interfered with your usual work (including housework)?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '10_knee_sudden_failure',
    input_type,
    input_label: {
      en: "During the past 4 weeks...Have you felt that your knee might suddenly 'give way' or let you down?",
      nl: '',
    },
    required: true,
  },
  {
    input_id: '11_household_shopping',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Could you do the household shopping on your own?',
      nl: '',
    },
    required: true,
  },
  {
    input_id: '12_flight_of_stairs',
    input_type,
    input_label: {
      en: 'During the past 4 weeks...Could you walk down one flight of stairs?',
      nl: '',
    },
    required: true,
  },
]
