import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
} satisfies EnumNumberInputType

export const OKS_INPUTS = {
  '1_usual_knee_pain': {
    ...type,
    label: {
      en: 'During the past 4 weeks...How would you describe the pain you usually have from your knee?',
      nl: '',
    },
  },
  '2_washing_and_trouble_washing': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Have you had any trouble with washing and drying yourself (all over) because of your knee?',
      nl: '',
    },
  },
  '3_car_problem': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Have you had any trouble getting in and out of a car or using public transport because of your knee? (whichever you would tend to use)',
      nl: '',
    },
  },
  '4_time_before_pain': {
    ...type,
    label: {
      en: 'During the past 4 weeks...For how long have you been able to walk before pain from your knee becomes severe? (with or without a stick)',
      nl: '',
    },
  },
  '5_table_pain': {
    ...type,
    label: {
      en: 'During the past 4 weeks...After a meal (sat at a table), how painful has it been for you to stand up from a chair because of your knee?',
      nl: '',
    },
  },
  '6_have_you_been_limping_when_walking': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Have you been limping when walking, because of your knee?',
      nl: '',
    },
  },
  '7_kneel_down_and_get_up': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Could you kneel down and get up again afterwards?',
      nl: '',
    },
  },
  '8_trouble_with_night_pain': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Have you been troubled by pain from your knee in bed at night?',
      nl: '',
    },
  },
  '9_usual_pain_work': {
    ...type,
    label: {
      en: 'During the past 4 weeks...How much has pain from your knee interfered with your usual work (including housework)?',
      nl: '',
    },
  },
  '10_knee_sudden_failure': {
    ...type,
    label: {
      en: "During the past 4 weeks...Have you felt that your knee might suddenly 'give way' or let you down?",
      nl: '',
    },
  },
  '11_household_shopping': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Could you do the household shopping on your own?',
      nl: '',
    },
  },
  '12_flight_of_stairs': {
    ...type,
    label: {
      en: 'During the past 4 weeks...Could you walk down one flight of stairs?',
      nl: '',
    },
  },
} satisfies ScoreInputSchemaType
