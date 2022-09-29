import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const INPUT_TYPE: NumberInputType = {
  type: 'number',
  allowed_answers: [
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
}

export const MSQ_INPUTS: Array<InputType> = [
  {
    input_id: 'HEAD_Q01_HEADACHES',
    input_label: {
      en: 'Head - Headaches',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEAD_Q02_FAINTNESS',
    input_label: {
      en: 'Head - Faintness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEAD_Q03_DIZZINESS',
    input_label: {
      en: 'Head - Dizziness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEAD_Q04_INSOMNIA',
    input_label: {
      en: 'Head - Insomnia',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EYES_Q01_WATERY_OR_ITCHY_EYES',
    input_label: {
      en: 'Eyes - Watery or ichy eyes',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EYES_Q02_SWOLLEN_REDDENED_OR_STICKY_EYELIDS',
    input_label: {
      en: 'Eyes - Swollen, reddened or sticky eyelids',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EYES_Q03_BAGS_OR_DARK_CIRCLES_UNDER_EYES',
    input_label: {
      en: 'Eyes - Bags or dark circles under eyes',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EYES_Q04_BLURRED_OR_TUNNEL_VISION',
    input_label: {
      en: 'Eyes - Blurred or tunnel vision',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EARS_Q01_ITCHY_EARS',
    input_label: {
      en: 'Ears - Itchy ears',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EARS_Q02_EARACHES_EAR_INFECTIONS',
    input_label: {
      en: 'Ears - Earaches, ear infections',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EARS_Q03_DRAINAGE_FROM_EAR',
    input_label: {
      en: 'Ears - Drainage from ear',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EARS_Q04_RINGING_EARS_HEARING_LOSS',
    input_label: {
      en: 'Ears - Ringing in ears, hearing loss',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'NOSE_Q01_STUFFY_NOSE',
    input_label: {
      en: 'Nose - Stuffy nose',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'NOSE_Q02_SINUS_PROBLEMS',
    input_label: {
      en: 'Nose - Sinus problems',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'NOSE_Q03_HAY_FEVER',
    input_label: {
      en: 'Nose - Hay fever',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'NOSE_Q04_SNEEZING_ATTACKS',
    input_label: {
      en: 'Nose - Sneezing attacks',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'NOSE_Q05_EXCESSIVE_MUCUS_FORMATION',
    input_label: {
      en: 'Nose - Excessive mucus formation',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MOUTH_THROAT_Q01_CHRONIC_COUGHING',
    input_label: {
      en: 'Mouth/throat - Chronic coughing',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MOUTH_THROAT_Q02_GAGGING_FREQUENT_NEED_TO_CLEAR_THROAT',
    input_label: {
      en: 'Mouth/throat - Gagging, frequent need to clear throat',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MOUTH_THROAT_Q03_SORE_THROAT_HOARSENESS_LOSS_OF_VOUICE',
    input_label: {
      en: 'Mouth/throat - Sore throat, hoarseness, loss of voice',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MOUTH_THROAT_Q04_SWOLLEN_OR_DISCOLORED_TONGUE_GUMS_LIPS',
    input_label: {
      en: 'Mouth/throat - Swollen or discolored tongue, gums, lips',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MOUTH_THROAT_Q05_CANKER_SORES',
    input_label: {
      en: 'Mouth/throat - Canker sores',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'SKIN_Q01_ACNE',
    input_label: {
      en: 'Skin - Acne',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'SKIN_Q02_HIVES_RASHES_DRY_SKIN',
    input_label: {
      en: 'Skin - Hives, rashes, dry skin',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'SKIN_Q03_HAIR_LOSS',
    input_label: {
      en: 'Skin - Hair loss',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'SKIN_Q04_FLUSHING_HOT_FLASHES',
    input_label: {
      en: 'Skin - Flushing, hot flashes',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'SKIN_Q05_EXCESSIVE_SWEATING',
    input_label: {
      en: 'Skin - Excessive sweating',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEART_Q01_IRREGULAR_OR_SKIPPED_HEARTBEAT',
    input_label: {
      en: 'Heart - Irregular or skipped heartbeat',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEART_Q02_RAPID_OR_POUNDING_HEARTBEAT',
    input_label: {
      en: 'Heart - Rapid or pounding heartbeat',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'HEART_Q03_CHEST_PAIN',
    input_label: {
      en: 'Heart - Chest pain',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'LUNGS_Q01_CHEST_CONGESTION',
    input_label: {
      en: 'Lungs - Chest congestion',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'LUNGS_Q02_ASTHMA_BRONCHITIS',
    input_label: {
      en: 'Lungs - Asthma, bronchitis',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'LUNGS_Q03_SHORTNESS_OF_BREATH',
    input_label: {
      en: 'Lungs - Shortness of breath',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'LUNGS_Q04_DIFFICULTY_BREATHING',
    input_label: {
      en: 'Lungs - Difficulty breating',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING',
    input_label: {
      en: 'Digestive tract - Nausea, vomiting',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q02_DIARRHEA',
    input_label: {
      en: 'Digestive tract - Diarrhea',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q03_CONSTIPATION',
    input_label: {
      en: 'Digestive tract - Constipation',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q04_BLOATED_FEELING',
    input_label: {
      en: 'Digestive tract - Bloated feeling',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q05_BELCHING_PASSING_GAS',
    input_label: {
      en: 'Digestive tract - Belching, passing gas',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q06_HEARTBURN',
    input_label: {
      en: 'Digestive tract - Heartburn',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'DIGESTIVE_TRACT_Q07_INTESTINAL_STOMACH_PAIN',
    input_label: {
      en: 'Digestive tract - Intestinal/stomach pain',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'JOINTS_MUSCLE_Q01_PAIN_OR_ACHES_IN_JOINTS',
    input_label: {
      en: 'Joints/muscle - Pain or aches in joints',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'JOINTS_MUSCLE_Q02_ARTHRITIS',
    input_label: {
      en: 'Joints/muscle - Arthritis',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'JOINTS_MUSCLE_Q03_STIFFNESS_OR_LIMITATION_OF_MOVEMENT',
    input_label: {
      en: 'Joints/muscle - Stiffness or limitation of movement',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'JOINTS_MUSCLE_Q04_PAIN_OR_ACHES_IN_MUSCLES',
    input_label: {
      en: 'Joints/muscle - Pain or aches in muscles',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'JOINTS_MUSCLE_Q05_FEELING_OF_WEAKNESS_OR_TIREDNESS',
    input_label: {
      en: 'Joints/muscle - Feeling of weakness or tiredness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q01_BINGE_EATING_DRINKING',
    input_label: {
      en: 'Weight - Binge eating/drinking',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q02_CRAVING_CERTAIN_FOODS',
    input_label: {
      en: 'Weight - Craving certain foods',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q03_EXCESSIVE_WEIGHT',
    input_label: {
      en: 'Weight - Excessive weight',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q04_COMPULSIVE_EATING',
    input_label: {
      en: 'Weight - Compulsive eating',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q05_WATER_RETENTION',
    input_label: {
      en: 'Weight - Water retention',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'WEIGHT_Q06_UNDERWEIGHT',
    input_label: {
      en: 'Weight - Underweight',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'ENERGY_ACTIVITY_Q01_FATIGUE_SLUGGISHNESS',
    input_label: {
      en: 'Energy/activity - Fatigue, sluggishness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'ENERGY_ACTIVITY_Q02_APATHY_LETHARGY',
    input_label: {
      en: 'Energy/activity - Apathy, lethargy',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'ENERGY_ACTIVITY_Q03_HYPERACTIVITY',
    input_label: {
      en: 'Energy/activity - Hyperactivity',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'ENERGY_ACTIVITY_Q04_RESTLESSNESS',
    input_label: {
      en: 'Energy/activity - Restlessness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q01_POOR_MEMORY',
    input_label: {
      en: 'Mind - Poor memory',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q02_CONFUSION_POOR_COMPREHENSION',
    input_label: {
      en: 'Mind - Confusion, poor comprehension',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q03_POOR_CONCENTRATION',
    input_label: {
      en: 'Mind - Poor concentration',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q04_POOR_PHYSICAL_COORDINATION',
    input_label: {
      en: 'Mind - Poor physical coordination',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q05_DIFFICULTY_IN_MAKING_DECISIONS',
    input_label: {
      en: 'Mind - Difficulty in making decisions',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q06_STUTTERING_OR_STAMMERING',
    input_label: {
      en: 'Mind - Stuttering or stammering',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q07_SLURRED_SPEECH',
    input_label: {
      en: 'Mind - Slurred speech',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'MIND_Q08_LEARNING_DISABILITIES',
    input_label: {
      en: 'Mind - Learning disabilities',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EMOTIONS_Q01_MOOD_SWINGS',
    input_label: {
      en: 'Emotions - Mood swings',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EMOTIONS_Q02_ANXIETY_FEAR_NERVOUSNESS',
    input_label: {
      en: 'Emotions - Anxiety, fear, nervousness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EMOTIONS_Q03_ANGER_IRRITABILITY_AGGRESSIVENESS',
    input_label: {
      en: 'Emotions - Anger, irritability, aggressiveness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'EMOTIONS_Q04_DEPRESSION',
    input_label: {
      en: 'Emotions - Depression',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'OTHER_Q01_FREQUENT_ILLNESS',
    input_label: {
      en: 'Other - Frequent illness',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'OTHER_Q02_FREQUENT_OR_URGENT_URINATION',
    input_label: {
      en: 'Other - Frequent or urgent urination',
    },
    input_type: INPUT_TYPE,
  },
  {
    input_id: 'OTHER_Q03_GENITAL_ITCH_OR_DISCHARGE',
    input_label: {
      en: 'Other - Genital itch or discharge',
    },
    input_type: INPUT_TYPE,
  },
]
