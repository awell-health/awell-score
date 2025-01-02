import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

const DEFAULT_ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
]

const NO_ANSWER = 0
const YES_ANSWER = 1

const ALLOWED_ANSWERS_FOR_BOOLEAN = [
  { value: NO_ANSWER, label: { en: 'No' } },
  { value: YES_ANSWER, label: { en: 'Yes' } },
]

const NOT_SEXUAL_ACTIVE = { value: 5, label: { en: 'Not sexually active' } }
const DONT_WANT_TO_ANSWER = {
  value: 777,
  label: { en: 'Does not want to answer' },
}
const NOT_APPLICABLE = { value: 888, label: { en: 'Not applicable' } }

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: DEFAULT_ALLOWED_ANSWERS },
})

/**
 * "Symptom scale" is a synonym for "subscale"
 */
export const PRO_CTCAE_SYMPTOMS: Array<DefaultSubscaleType> = [
  {
    id: 'dry_mouth',
    input_ids_in_subscale: [{ input_id: 'proctcae_1_dry_mouth_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'difficulty_swallowing',
    input_ids_in_subscale: [
      { input_id: 'proctcae_2_difficulty_swallowing_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'mouth_throat_sores',
    input_ids_in_subscale: [
      { input_id: 'proctcae_3_mouth_throat_sores_severity' },
      {
        input_id: 'proctcae_3_mouth_throat_sores_impact',
        not_applicable_if: {
          input_id: 'proctcae_3_mouth_throat_sores_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'cheilosis_cheilitis',
    input_ids_in_subscale: [
      { input_id: 'proctcae_4_cheilosis_cheilitis_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'voice_quality_changes',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_5_voice_quality_changes_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'hoarseness',
    input_ids_in_subscale: [{ input_id: 'proctcae_6_hoarseness_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'taste_changes',
    input_ids_in_subscale: [
      { input_id: 'proctcae_7_taste_changes_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'decreased_appetite',
    input_ids_in_subscale: [
      { input_id: 'proctcae_8_decreased_appetite_severity' },
      {
        input_id: 'proctcae_8_decreased_appetite_impact',
        not_applicable_if: {
          input_id: 'proctcae_8_decreased_appetite_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'nausea',
    input_ids_in_subscale: [
      { input_id: 'proctcae_9_nausea_frequency' },
      {
        input_id: 'proctcae_9_nausea_severity',
        not_applicable_if: {
          input_id: 'proctcae_9_nausea_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'vomiting',
    input_ids_in_subscale: [
      { input_id: 'proctcae_10_vomiting_frequency' },
      {
        input_id: 'proctcae_10_vomiting_severity',
        not_applicable_if: {
          input_id: 'proctcae_10_vomiting_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'heartburn',
    input_ids_in_subscale: [
      { input_id: 'proctcae_11_heartburn_frequency' },
      {
        input_id: 'proctcae_11_heartburn_severity',
        not_applicable_if: {
          input_id: 'proctcae_11_heartburn_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'gas',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_12_gas_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'bloating',
    input_ids_in_subscale: [
      { input_id: 'proctcae_13_bloating_frequency' },
      {
        input_id: 'proctcae_13_bloating_severity',
        not_applicable_if: {
          input_id: 'proctcae_13_bloating_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'hiccups',
    input_ids_in_subscale: [
      { input_id: 'proctcae_14_hiccups_frequency' },
      {
        input_id: 'proctcae_14_hiccups_severity',
        not_applicable_if: {
          input_id: 'proctcae_14_hiccups_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'constipation',
    input_ids_in_subscale: [
      { input_id: 'proctcae_15_constipation_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'diarrhea',
    input_ids_in_subscale: [{ input_id: 'proctcae_16_diarrhea_frequency' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'abdominal_pain',
    input_ids_in_subscale: [
      { input_id: 'proctcae_17_abdominal_pain_frequency' },
      {
        input_id: 'proctcae_17_abdominal_pain_severity',
        not_applicable_if: {
          input_id: 'proctcae_17_abdominal_pain_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_17_abdominal_pain_impact',
        not_applicable_if: {
          input_id: 'proctcae_17_abdominal_pain_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'fecal_incontinence',
    input_ids_in_subscale: [
      { input_id: 'proctcae_18_fecal_incontinence_frequency' },
      {
        input_id: 'proctcae_18_fecal_incontinence_impact',
        not_applicable_if: {
          input_id: 'proctcae_18_fecal_incontinence_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'shortness_of_breath',
    input_ids_in_subscale: [
      { input_id: 'proctcae_19_shortness_of_breath_severity' },
      {
        input_id: 'proctcae_19_shortness_of_breath_impact',
        not_applicable_if: {
          input_id: 'proctcae_19_shortness_of_breath_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'cough',
    input_ids_in_subscale: [
      { input_id: 'proctcae_20_cough_severity' },
      {
        input_id: 'proctcae_20_cough_impact',
        not_applicable_if: {
          input_id: 'proctcae_20_cough_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'wheezing',
    input_ids_in_subscale: [{ input_id: 'proctcae_21_wheezing_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'swelling',
    input_ids_in_subscale: [
      { input_id: 'proctcae_22_swelling_frequency' },
      {
        input_id: 'proctcae_22_swelling_severity',
        not_applicable_if: {
          input_id: 'proctcae_22_swelling_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_22_swelling_impact',
        not_applicable_if: {
          input_id: 'proctcae_22_swelling_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'heart_palpitations',
    input_ids_in_subscale: [
      { input_id: 'proctcae_23_heart_palpitations_frequency' },
      {
        input_id: 'proctcae_23_heart_palpitations_severity',
        not_applicable_if: {
          input_id: 'proctcae_23_heart_palpitations_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'rash',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_24_rash_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'skin_dryness',
    input_ids_in_subscale: [
      { input_id: 'proctcae_25_skin_dryness_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'acne',
    input_ids_in_subscale: [{ input_id: 'proctcae_26_acne_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'hair_loss',
    input_ids_in_subscale: [
      { input_id: 'proctcae_27_hair_loss_frequency' },
    ].map(add_allowed_answers),
  },
  {
    id: 'itching',
    input_ids_in_subscale: [{ input_id: 'proctcae_28_itching_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'hives',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_29_hives_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'hand_foot_syndrome',
    input_ids_in_subscale: [
      { input_id: 'proctcae_30_hand_foot_syndrome_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'nail_loss',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_31_nail_loss_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'nail_ridging',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_32_nail_ridging_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'nail_discoloration',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_33_nail_discoloration_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'sensitivity_to_sunlight',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_34_sensitivity_to_sunlight_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'bed_pressure_sores',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_35_bed_pressure_sores_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'radiation_skin_reaction',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_36_radiation_skin_reaction_severity',
        input_type: {
          type: 'number',
          allowed_answers: [...DEFAULT_ALLOWED_ANSWERS, NOT_APPLICABLE],
        },
      },
    ],
  },
  {
    id: 'skin_darkening',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_37_skin_darkening_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'stretch_marks',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_38_stretch_marks_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'numbness_tingling',
    input_ids_in_subscale: [
      { input_id: 'proctcae_39_numbness_tingling_severity' },
      {
        input_id: 'proctcae_39_numbness_tingling_impact',
        not_applicable_if: {
          input_id: 'proctcae_39_numbness_tingling_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'dizziness',
    input_ids_in_subscale: [
      { input_id: 'proctcae_40_dizziness_severity' },
      {
        input_id: 'proctcae_40_dizziness_impact',
        not_applicable_if: {
          input_id: 'proctcae_40_dizziness_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'blurred_vision',
    input_ids_in_subscale: [
      { input_id: 'proctcae_41_blurred_vision_severity' },
      {
        input_id: 'proctcae_41_blurred_vision_impact',
        not_applicable_if: {
          input_id: 'proctcae_41_blurred_vision_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'flashing_lights',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_42_flashing_lights_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'visual_floaters',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_43_visual_floaters_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'watery_eyes',
    input_ids_in_subscale: [
      { input_id: 'proctcae_44_watery_eyes_severity' },
      {
        input_id: 'proctcae_44_watery_eyes_impact',
        not_applicable_if: {
          input_id: 'proctcae_44_watery_eyes_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'ringing_in_ears',
    input_ids_in_subscale: [
      { input_id: 'proctcae_45_ringing_in_ears_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'concentration',
    input_ids_in_subscale: [
      { input_id: 'proctcae_46_concentration_severity' },
      {
        input_id: 'proctcae_46_concentration_impact',
        not_applicable_if: {
          input_id: 'proctcae_46_concentration_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'memory',
    input_ids_in_subscale: [
      { input_id: 'proctcae_47_memory_severity' },
      {
        input_id: 'proctcae_47_memory_impact',
        not_applicable_if: {
          input_id: 'proctcae_47_memory_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'general_pain',
    input_ids_in_subscale: [
      { input_id: 'proctcae_48_general_pain_frequency' },
      {
        input_id: 'proctcae_48_general_pain_severity',
        not_applicable_if: {
          input_id: 'proctcae_48_general_pain_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_48_general_pain_impact',
        not_applicable_if: {
          input_id: 'proctcae_48_general_pain_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'headache',
    input_ids_in_subscale: [
      { input_id: 'proctcae_49_headache_frequency' },
      {
        input_id: 'proctcae_49_headache_severity',
        not_applicable_if: {
          input_id: 'proctcae_49_headache_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_49_headache_impact',
        not_applicable_if: {
          input_id: 'proctcae_49_headache_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'muscle_pain',
    input_ids_in_subscale: [
      { input_id: 'proctcae_50_muscle_pain_frequency' },
      {
        input_id: 'proctcae_50_muscle_pain_severity',
        not_applicable_if: {
          input_id: 'proctcae_50_muscle_pain_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_50_muscle_pain_impact',
        not_applicable_if: {
          input_id: 'proctcae_50_muscle_pain_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'joint_pain',
    input_ids_in_subscale: [
      { input_id: 'proctcae_51_joint_pain_frequency' },
      {
        input_id: 'proctcae_51_joint_pain_severity',
        not_applicable_if: {
          input_id: 'proctcae_51_joint_pain_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_51_joint_pain_impact',
        not_applicable_if: {
          input_id: 'proctcae_51_joint_pain_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'insomnia',
    input_ids_in_subscale: [
      { input_id: 'proctcae_52_insomnia_severity' },
      {
        input_id: 'proctcae_52_insomnia_impact',
        not_applicable_if: {
          input_id: 'proctcae_52_insomnia_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'fatigue',
    input_ids_in_subscale: [
      { input_id: 'proctcae_53_fatigue_severity' },
      {
        input_id: 'proctcae_53_fatigue_impact',
        not_applicable_if: {
          input_id: 'proctcae_53_fatigue_severity',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'anxious',
    input_ids_in_subscale: [
      { input_id: 'proctcae_54_anxious_frequency' },
      {
        input_id: 'proctcae_54_anxious_severity',
        not_applicable_if: {
          input_id: 'proctcae_54_anxious_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_54_anxious_impact',
        not_applicable_if: {
          input_id: 'proctcae_54_anxious_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'discouraged',
    input_ids_in_subscale: [
      { input_id: 'proctcae_55_discouraged_frequency' },
      {
        input_id: 'proctcae_55_discouraged_severity',
        not_applicable_if: {
          input_id: 'proctcae_55_discouraged_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_55_discouraged_impact',
        not_applicable_if: {
          input_id: 'proctcae_55_discouraged_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'sad',
    input_ids_in_subscale: [
      { input_id: 'proctcae_56_sad_frequency' },
      {
        input_id: 'proctcae_56_sad_severity',
        not_applicable_if: {
          input_id: 'proctcae_56_sad_frequency',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'proctcae_56_sad_impact',
        not_applicable_if: {
          input_id: 'proctcae_56_sad_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'irregular_periods_vaginal_bleeding',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_57_irregular_periods_vaginal_bleeding_boolean',
        input_type: {
          type: 'number',
          allowed_answers: [...ALLOWED_ANSWERS_FOR_BOOLEAN, NOT_APPLICABLE],
        },
      },
    ],
  },
  {
    id: 'missed_expected_menstruation_period',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_58_missed_expected_menstruation_period_boolean',
        input_type: {
          type: 'number',
          allowed_answers: [...ALLOWED_ANSWERS_FOR_BOOLEAN, NOT_APPLICABLE],
        },
      },
    ],
  },
  {
    id: 'vaginal_discharge',
    input_ids_in_subscale: [
      { input_id: 'proctcae_59_vaginal_discharge_frequency' },
    ].map(add_allowed_answers),
  },
  {
    id: 'vaginal_dryness',
    input_ids_in_subscale: [
      { input_id: 'proctcae_60_vaginal_dryness_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'painful_urination',
    input_ids_in_subscale: [
      { input_id: 'proctcae_61_painful_urination_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'urinary_urgency',
    input_ids_in_subscale: [
      { input_id: 'proctcae_62_urinary_urgency_frequency' },
      {
        input_id: 'proctcae_62_urinary_urgency_impact',
        not_applicable_if: {
          input_id: 'proctcae_62_urinary_urgency_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'urinary_frequency',
    input_ids_in_subscale: [
      { input_id: 'proctcae_63_urinary_frequency_frequency' },
      {
        input_id: 'proctcae_63_urinary_frequency_impact',
        not_applicable_if: {
          input_id: 'proctcae_63_urinary_frequency_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'change_in_usual_urine_color',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_64_change_in_usual_urine_color_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'urinary_incontinence',
    input_ids_in_subscale: [
      { input_id: 'proctcae_65_urinary_incontinence_frequency' },
      {
        input_id: 'proctcae_65_urinary_incontinence_impact',
        not_applicable_if: {
          input_id: 'proctcae_65_urinary_incontinence_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'achieve_and_maintain_erection',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_66_achieve_and_maintain_erection_severity',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...DEFAULT_ALLOWED_ANSWERS,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'ejaculation',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_67_ejaculation_frequency',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...DEFAULT_ALLOWED_ANSWERS,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'decreased_libido',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_68_decreased_libido_severity',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...DEFAULT_ALLOWED_ANSWERS,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'delayed_orgasm',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_69_delayed_orgasm_boolean',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...ALLOWED_ANSWERS_FOR_BOOLEAN,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'unable_to_have_orgasm',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_70_unable_to_have_orgasm_boolean',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...ALLOWED_ANSWERS_FOR_BOOLEAN,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'pain_w_sexual_intercourse',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_71_pain_w_sexual_intercourse_severity',
        input_type: {
          type: 'number',
          allowed_answers: [
            ...DEFAULT_ALLOWED_ANSWERS,
            NOT_SEXUAL_ACTIVE,
            DONT_WANT_TO_ANSWER,
          ],
        },
      },
    ],
  },
  {
    id: 'breast_swelling_and_tenderness',
    input_ids_in_subscale: [
      { input_id: 'proctcae_72_breast_swelling_and_tenderness_severity' },
    ].map(add_allowed_answers),
  },
  {
    id: 'bruising',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_73_bruising_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'chills',
    input_ids_in_subscale: [
      { input_id: 'proctcae_74_chills_frequency' },
      {
        input_id: 'proctcae_74_chills_severity',
        not_applicable_if: {
          input_id: 'proctcae_74_chills_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'increased_sweating',
    input_ids_in_subscale: [
      { input_id: 'proctcae_75_increased_sweating_frequency' },
      {
        input_id: 'proctcae_75_increased_sweating_severity',
        not_applicable_if: {
          input_id: 'proctcae_75_increased_sweating_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'decreased_sweating',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_76_decreased_sweating_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
  {
    id: 'hot_flashes',
    input_ids_in_subscale: [
      { input_id: 'proctcae_77_hot_flashes_frequency' },
      {
        input_id: 'proctcae_77_hot_flashes_severity',
        not_applicable_if: {
          input_id: 'proctcae_77_hot_flashes_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'nosebleed',
    input_ids_in_subscale: [
      { input_id: 'proctcae_78_nosebleed_frequency' },
      {
        input_id: 'proctcae_78_nosebleed_severity',
        not_applicable_if: {
          input_id: 'proctcae_78_nosebleed_frequency',
          value_is_one_of: [0],
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'pain_and_swelling',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_79_pain_and_swelling_boolean',
        input_type: {
          type: 'number',
          allowed_answers: [...ALLOWED_ANSWERS_FOR_BOOLEAN, NOT_APPLICABLE],
        },
      },
    ],
  },
  {
    id: 'body_odor',
    input_ids_in_subscale: [{ input_id: 'proctcae_80_body_odor_severity' }].map(
      add_allowed_answers,
    ),
  },
  {
    id: 'other_symptoms',
    input_ids_in_subscale: [
      {
        input_id: 'proctcae_81_other_symptoms_boolean',
        input_type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS_FOR_BOOLEAN,
        },
      },
    ],
  },
]
