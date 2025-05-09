export type SubscaleType =
  | 'PAIN'
  | 'SYMPTOMS'
  | 'ADL_FUNCTION'
  | 'SPORT_AND_RECREATION_FUNCTION'
  | 'QUALITY_OF_LIFE'

export const KOOS_SUBSCALES: Record<
  SubscaleType,
  { items: string[]; minItemsToCalculateScore: number }
> = {
  PAIN: {
    items: [
      'P1_PAIN_FREQUENCY',
      'P2_PAIN_TWISTING',
      'P3_STRETCHING',
      'P4_BENDING',
      'P5_WALKING',
      'P6_STAIRS',
      'P7_NIGHT',
      'P8_SITTING_LYING',
      'P9_STANDING',
    ],
    minItemsToCalculateScore: 5,
  },
  SYMPTOMS: {
    items: [
      'SY1_MORNING_STIFFNESS',
      'SY2_STIFFNESS_LATER_IN_DAY',
      'SY3_SWELLING',
      'SY4_GRINDING',
      'SY5_CATCHING',
      'SY6_STRETCHING',
      'SY7_BENDING',
    ],
    minItemsToCalculateScore: 4,
  },
  ADL_FUNCTION: {
    items: [
      'A1_DESCENDING_STAIRS',
      'A2_ASCENDING_STAIRS',
      'A3_RISING_FROM_CHAIR',
      'A4_STANDING',
      'A5_BENDING',
      'A6_WALKING',
      'A7_GET_IN_OUT_OF_CAR',
      'A8_SHOPPING',
      'A9_SOCKS_PUTTING_ON',
      'A10_GETTING_OUT_OF_BED',
      'A11_SOCKS_TAKING_OFF',
      'A12_LYING_IN_BED',
      'A13_BATHING',
      'A14_SITTING',
      'A15_TOILET',
      'A16_DOMESTIC_ACTIVITIES',
      'A17_LIGHT_DOMESTIC_ACTIVITIES',
    ],
    minItemsToCalculateScore: 9,
  },
  SPORT_AND_RECREATION_FUNCTION: {
    items: [
      'SP1_SQUATTING',
      'SP2_RUNNING',
      'SP3_JUMPING',
      'SP4_TWISTING',
      'SP5_KNEELING',
    ],
    minItemsToCalculateScore: 3,
  },
  QUALITY_OF_LIFE: {
    items: [
      'Q1_AWARENESS_OF_PROBLEMS',
      'Q2_LIFESTYLE_MODIFICATIONS',
      'Q3_CONFIDENCE',
      'Q4_GENERAL_DIFFICULTY',
    ],
    minItemsToCalculateScore: 2,
  },
}
