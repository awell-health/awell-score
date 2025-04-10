export type SubscaleType =
  | 'PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING'
  | 'PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING'
  | 'PART_3_MOTOR_EXAMINATION'
  | 'PART_4_MOTOR_COMPLICATIONS'

export const MDS_UPDRS_SCALES: Record<SubscaleType, string[]> = {
  PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING: [
    'PART_1_Q1_COGNITIVE_IMPAIRMENT',
    'PART_1_Q2_HALLUCINATIONS_AND_PSYCHOSIS',
    'PART_1_Q3_DEPRESSED_MOOD',
    'PART_1_Q4_ANXIOUS_MOOD',
    'PART_1_Q5_APATHY',
    'PART_1_Q6_FEATURES_OF_DOPAMINE_DYSREGULATION_SYNDROME',
    'PART_1_Q7_SLEEP_PROBLEMS',
    'PART_1_Q8_DAYTIME_SLEEPINESS',
    'PART_1_Q9_PAIN_AND_OTHER_SENSATIONS',
    'PART_1_Q10_URINARY_PROBLEMS',
    'PART_1_Q11_CONSTIPATION_PROBLEMS',
    'PART_1_Q12_LIGHT_HEADEDNESS_ON_STANDING',
    'PART_1_Q13_FATIGUE',
  ],
  PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING: [
    'PART_2_Q1_SPEECH',
    'PART_2_Q2_SALIVA_AND_DROOLING',
    'PART_2_Q3_CHEWING_AND_SWALLOWING',
    'PART_2_Q4_EATING_TASKS',
    'PART_2_Q5_DRESSING',
    'PART_2_Q6_HYGIENE',
    'PART_2_Q7_HANDWRITING',
    'PART_2_Q8_DOING_HOBBIES_AND_OTHER_ACTIVITIES',
    'PART_2_Q9_TURNING_IN_BED',
    'PART_2_Q10_TREMOR',
    'PART_2_Q11_GETTING_OUT_OF_BED_CAR_OR_DEEP_CHAIR',
    'PART_2_Q12_WALKING_AND_BALANCE',
    'PART_2_Q13_FREEZING',
  ],
  PART_3_MOTOR_EXAMINATION: [
    'PART_3_Q1_SPEECH',
    'PART_3_Q2_FACIAL_EXPRESSION',
    'PART_3_Q3_RIGIDITY_NECK',
    'PART_3_Q3_RIGIDITY_RUE',
    'PART_3_Q3_RIGIDITY_LUE',
    'PART_3_Q3_RIGIDITY_RLE',
    'PART_3_Q3_RIGIDITY_LLE',
    'PART_3_Q4_FINGER_TAPPING_RIGHT',
    'PART_3_Q4_FINGER_TAPPING_LEFT',
    'PART_3_Q5_HAND_MOVEMENTS_RIGHT',
    'PART_3_Q5_HAND_MOVEMENTS_LEFT',
    'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_RIGHT',
    'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_LEFT',
    'PART_3_Q7_TOE_TAPPING_RIGHT',
    'PART_3_Q7_TOE_TAPPING_LEFT',
    'PART_3_Q8_LEG_AGILITY_RIGHT',
    'PART_3_Q8_LEG_AGILITY_LEFT',
    'PART_3_Q9_ARISING_FROM_CHAIR',
    'PART_3_Q10_GAIT',
    'PART_3_Q11_FREEZING_OF_GAIT',
    'PART_3_Q12_POSTURAL_STABILITY',
    'PART_3_Q13_POSTURE',
    'PART_3_Q14_GLOBAL_SPONTANEITY_OF_MOVEMENT',
    'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_RIGHT',
    'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_LEFT',
    'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_RIGHT',
    'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_LEFT',
    'PART_3_Q17_REST_TREMOR_AMPLITUDE_RUE',
    'PART_3_Q17_REST_TREMOR_AMPLITUDE_LUE',
    'PART_3_Q17_REST_TREMOR_AMPLITUDE_RLE',
    'PART_3_Q17_REST_TREMOR_AMPLITUDE_LLE',
    'PART_3_Q17_REST_TREMOR_AMPLITUDE_LIP_JAW',
    'PART_3_Q18_CONSTANCY_OF_REST_TREMOR',
  ],
  PART_4_MOTOR_COMPLICATIONS: [
    'PART_4_Q1_TIME_SPENT_WITH_DYSKINESIAS',
    'PART_4_Q2_FUNCTIONAL_IMPACT_OF_DYSKINESIAS',
    'PART_4_Q3_TIME_SPENT_IN_THE_OFF_STATE',
    'PART_4_Q4_FUNCTIONAL_IMPACT_OF_FLUCTUATIONS',
    'PART_4_Q5_COMPLEXITY_OF_MOTOR_FLUCTUATIONS',
    'PART_4_Q6_PAINFUL_OFF_STATE_DYSTONIA',
  ],
}
