import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 0,
        label: { en: 'Never or almost never have the symptom' },
      },
      {
        value: 1,
        label: {
          en: 'Occasionally have it, effect is not severe',
        },
      },
      {
        value: 2,
        label: {
          en: 'Occasionally have it, effect is severe',
        },
      },
      {
        value: 3,
        label: {
          en: 'Frequently have it, effect is not severe',
        },
      },
      {
        value: 4,
        label: {
          en: 'Frequently have it, effect is severe',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const MSQ_INPUTS = {
  HEAD_Q01_HEADACHES: {
    label: {
      en: 'Head - Headaches',
    },
    ...type,
  },
  HEAD_Q02_FAINTNESS: {
    label: {
      en: 'Head - Faintness',
    },
    ...type,
  },
  HEAD_Q03_DIZZINESS: {
    label: {
      en: 'Head - Dizziness',
    },
    ...type,
  },
  HEAD_Q04_INSOMNIA: {
    label: {
      en: 'Head - Insomnia',
    },
    ...type,
  },
  EYES_Q01_WATERY_OR_ITCHY_EYES: {
    label: {
      en: 'Eyes - Watery or itchy eyes',
    },
    ...type,
  },
  EYES_Q02_SWOLLEN_REDDENED_OR_STICKY_EYELIDS: {
    label: {
      en: 'Eyes - Swollen, reddened or sticky eyelids',
    },
    ...type,
  },
  EYES_Q03_BAGS_OR_DARK_CIRCLES_UNDER_EYES: {
    label: {
      en: 'Eyes - Bags or dark circles under eyes',
    },
    ...type,
  },
  EYES_Q04_BLURRED_OR_TUNNEL_VISION: {
    label: {
      en: 'Eyes - Blurred or tunnel vision',
    },
    ...type,
  },
  EARS_Q01_ITCHY_EARS: {
    label: {
      en: 'Ears - Itchy ears',
    },
    ...type,
  },
  EARS_Q02_EARACHES_EAR_INFECTIONS: {
    label: {
      en: 'Ears - Earaches, ear infections',
    },
    ...type,
  },
  EARS_Q03_DRAINAGE_FROM_EAR: {
    label: {
      en: 'Ears - Drainage from ear',
    },
    ...type,
  },
  EARS_Q04_RINGING_EARS_HEARING_LOSS: {
    label: {
      en: 'Ears - Ringing in ears, hearing loss',
    },
    ...type,
  },
  NOSE_Q01_STUFFY_NOSE: {
    label: {
      en: 'Nose - Stuffy nose',
    },
    ...type,
  },
  NOSE_Q02_SINUS_PROBLEMS: {
    label: {
      en: 'Nose - Sinus problems',
    },
    ...type,
  },
  NOSE_Q03_HAY_FEVER: {
    label: {
      en: 'Nose - Hay fever',
    },
    ...type,
  },
  NOSE_Q04_SNEEZING_ATTACKS: {
    label: {
      en: 'Nose - Sneezing attacks',
    },
    ...type,
  },
  NOSE_Q05_EXCESSIVE_MUCUS_FORMATION: {
    label: {
      en: 'Nose - Excessive mucus formation',
    },
    ...type,
  },
  MOUTH_THROAT_Q01_CHRONIC_COUGHING: {
    label: {
      en: 'Mouth/throat - Chronic coughing',
    },
    ...type,
  },
  MOUTH_THROAT_Q02_GAGGING_FREQUENT_NEED_TO_CLEAR_THROAT: {
    label: {
      en: 'Mouth/throat - Gagging, frequent need to clear throat',
    },
    ...type,
  },
  MOUTH_THROAT_Q03_SORE_THROAT_HOARSENESS_LOSS_OF_VOUICE: {
    label: {
      en: 'Mouth/throat - Sore throat, hoarseness, loss of voice',
    },
    ...type,
  },
  MOUTH_THROAT_Q04_SWOLLEN_OR_DISCOLORED_TONGUE_GUMS_LIPS: {
    label: {
      en: 'Mouth/throat - Swollen or discolored tongue, gums, lips',
    },
    ...type,
  },
  MOUTH_THROAT_Q05_CANKER_SORES: {
    label: {
      en: 'Mouth/throat - Canker sores',
    },
    ...type,
  },
  SKIN_Q01_ACNE: {
    label: {
      en: 'Skin - Acne',
    },
    ...type,
  },
  SKIN_Q02_HIVES_RASHES_DRY_SKIN: {
    label: {
      en: 'Skin - Hives, rashes, dry skin',
    },
    ...type,
  },
  SKIN_Q03_HAIR_LOSS: {
    label: {
      en: 'Skin - Hair loss',
    },
    ...type,
  },
  SKIN_Q04_FLUSHING_HOT_FLASHES: {
    label: {
      en: 'Skin - Flushing, hot flashes',
    },
    ...type,
  },
  SKIN_Q05_EXCESSIVE_SWEATING: {
    label: {
      en: 'Skin - Excessive sweating',
    },
    ...type,
  },
  HEART_Q01_IRREGULAR_OR_SKIPPED_HEARTBEAT: {
    label: {
      en: 'Heart - Irregular or skipped heartbeat',
    },
    ...type,
  },
  HEART_Q02_RAPID_OR_POUNDING_HEARTBEAT: {
    label: {
      en: 'Heart - Rapid or pounding heartbeat',
    },
    ...type,
  },
  HEART_Q03_CHEST_PAIN: {
    label: {
      en: 'Heart - Chest pain',
    },
    ...type,
  },
  LUNGS_Q01_CHEST_CONGESTION: {
    label: {
      en: 'Lungs - Chest congestion',
    },
    ...type,
  },
  LUNGS_Q02_ASTHMA_BRONCHITIS: {
    label: {
      en: 'Lungs - Asthma, bronchitis',
    },
    ...type,
  },
  LUNGS_Q03_SHORTNESS_OF_BREATH: {
    label: {
      en: 'Lungs - Shortness of breath',
    },
    ...type,
  },
  LUNGS_Q04_DIFFICULTY_BREATHING: {
    label: {
      en: 'Lungs - Difficulty breating',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING: {
    label: {
      en: 'Digestive tract - Nausea, vomiting',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q02_DIARRHEA: {
    label: {
      en: 'Digestive tract - Diarrhea',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q03_CONSTIPATION: {
    label: {
      en: 'Digestive tract - Constipation',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q04_BLOATED_FEELING: {
    label: {
      en: 'Digestive tract - Bloated feeling',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q05_BELCHING_PASSING_GAS: {
    label: {
      en: 'Digestive tract - Belching, passing gas',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q06_HEARTBURN: {
    label: {
      en: 'Digestive tract - Heartburn',
    },
    ...type,
  },
  DIGESTIVE_TRACT_Q07_INTESTINAL_STOMACH_PAIN: {
    label: {
      en: 'Digestive tract - Intestinal/stomach pain',
    },
    ...type,
  },
  JOINTS_MUSCLE_Q01_PAIN_OR_ACHES_IN_JOINTS: {
    label: {
      en: 'Joints/muscle - Pain or aches in joints',
    },
    ...type,
  },
  JOINTS_MUSCLE_Q02_ARTHRITIS: {
    label: {
      en: 'Joints/muscle - Arthritis',
    },
    ...type,
  },
  JOINTS_MUSCLE_Q03_STIFFNESS_OR_LIMITATION_OF_MOVEMENT: {
    label: {
      en: 'Joints/muscle - Stiffness or limitation of movement',
    },
    ...type,
  },
  JOINTS_MUSCLE_Q04_PAIN_OR_ACHES_IN_MUSCLES: {
    label: {
      en: 'Joints/muscle - Pain or aches in muscles',
    },
    ...type,
  },
  JOINTS_MUSCLE_Q05_FEELING_OF_WEAKNESS_OR_TIREDNESS: {
    label: {
      en: 'Joints/muscle - Feeling of weakness or tiredness',
    },
    ...type,
  },
  WEIGHT_Q01_BINGE_EATING_DRINKING: {
    label: {
      en: 'Weight - Binge eating/drinking',
    },
    ...type,
  },
  WEIGHT_Q02_CRAVING_CERTAIN_FOODS: {
    label: {
      en: 'Weight - Craving certain foods',
    },
    ...type,
  },
  WEIGHT_Q03_EXCESSIVE_WEIGHT: {
    label: {
      en: 'Weight - Excessive weight',
    },
    ...type,
  },
  WEIGHT_Q04_COMPULSIVE_EATING: {
    label: {
      en: 'Weight - Compulsive eating',
    },
    ...type,
  },
  WEIGHT_Q05_WATER_RETENTION: {
    label: {
      en: 'Weight - Water retention',
    },
    ...type,
  },
  WEIGHT_Q06_UNDERWEIGHT: {
    label: {
      en: 'Weight - Underweight',
    },
    ...type,
  },
  ENERGY_ACTIVITY_Q01_FATIGUE_SLUGGISHNESS: {
    label: {
      en: 'Energy/activity - Fatigue, sluggishness',
    },
    ...type,
  },
  ENERGY_ACTIVITY_Q02_APATHY_LETHARGY: {
    label: {
      en: 'Energy/activity - Apathy, lethargy',
    },
    ...type,
  },
  ENERGY_ACTIVITY_Q03_HYPERACTIVITY: {
    label: {
      en: 'Energy/activity - Hyperactivity',
    },
    ...type,
  },
  ENERGY_ACTIVITY_Q04_RESTLESSNESS: {
    label: {
      en: 'Energy/activity - Restlessness',
    },
    ...type,
  },
  MIND_Q01_POOR_MEMORY: {
    label: {
      en: 'Mind - Poor memory',
    },
    ...type,
  },
  MIND_Q02_CONFUSION_POOR_COMPREHENSION: {
    label: {
      en: 'Mind - Confusion, poor comprehension',
    },
    ...type,
  },
  MIND_Q03_POOR_CONCENTRATION: {
    label: {
      en: 'Mind - Poor concentration',
    },
    ...type,
  },
  MIND_Q04_POOR_PHYSICAL_COORDINATION: {
    label: {
      en: 'Mind - Poor physical coordination',
    },
    ...type,
  },
  MIND_Q05_DIFFICULTY_IN_MAKING_DECISIONS: {
    label: {
      en: 'Mind - Difficulty in making decisions',
    },
    ...type,
  },
  MIND_Q06_STUTTERING_OR_STAMMERING: {
    label: {
      en: 'Mind - Stuttering or stammering',
    },
    ...type,
  },
  MIND_Q07_SLURRED_SPEECH: {
    label: {
      en: 'Mind - Slurred speech',
    },
    ...type,
  },
  MIND_Q08_LEARNING_DISABILITIES: {
    label: {
      en: 'Mind - Learning disabilities',
    },
    ...type,
  },
  EMOTIONS_Q01_MOOD_SWINGS: {
    label: {
      en: 'Emotions - Mood swings',
    },
    ...type,
  },
  EMOTIONS_Q02_ANXIETY_FEAR_NERVOUSNESS: {
    label: {
      en: 'Emotions - Anxiety, fear, nervousness',
    },
    ...type,
  },
  EMOTIONS_Q03_ANGER_IRRITABILITY_AGGRESSIVENESS: {
    label: {
      en: 'Emotions - Anger, irritability, aggressiveness',
    },
    ...type,
  },
  EMOTIONS_Q04_DEPRESSION: {
    label: {
      en: 'Emotions - Depression',
    },
    ...type,
  },
  OTHER_Q01_FREQUENT_ILLNESS: {
    label: {
      en: 'Other - Frequent illness',
    },
    ...type,
  },
  OTHER_Q02_FREQUENT_OR_URGENT_URINATION: {
    label: {
      en: 'Other - Frequent or urgent urination',
    },
    ...type,
  },
  OTHER_Q03_GENITAL_ITCH_OR_DISCHARGE: {
    label: {
      en: 'Other - Genital itch or discharge',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
