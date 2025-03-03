import { z } from 'zod'
import type { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

export const UNABLE_TO_RATE = 999

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(UNABLE_TO_RATE),
    ])
    .optional(),
} satisfies EnumNumberInputType

export const MDS_UPDRS_INPUTS = {
  PART_1_Q1_COGNITIVE_IMPAIRMENT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q2_HALLUCINATIONS_AND_PSYCHOSIS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q3_DEPRESSED_MOOD: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q4_ANXIOUS_MOOD: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q5_APATHY: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q6_FEATURES_OF_DOPAMINE_DYSREGULATION_SYNDROME: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q7_SLEEP_PROBLEMS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q8_DAYTIME_SLEEPINESS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q9_PAIN_AND_OTHER_SENSATIONS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q10_URINARY_PROBLEMS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q11_CONSTIPATION_PROBLEMS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q12_LIGHT_HEADEDNESS_ON_STANDING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_1_Q13_FATIGUE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },

  PART_2_Q1_SPEECH: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q2_SALIVA_AND_DROOLING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q3_CHEWING_AND_SWALLOWING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q4_EATING_TASKS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q5_DRESSING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q6_HYGIENE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q7_HANDWRITING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q8_DOING_HOBBIES_AND_OTHER_ACTIVITIES: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q9_TURNING_IN_BED: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q10_TREMOR: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q11_GETTING_OUT_OF_BED_CAR_OR_DEEP_CHAIR: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q12_WALKING_AND_BALANCE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_2_Q13_FREEZING: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },

  PART_3_Q1_SPEECH: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q2_FACIAL_EXPRESSION: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q3_RIGIDITY_NECK: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q3_RIGIDITY_RUE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q3_RIGIDITY_LUE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q3_RIGIDITY_RLE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q3_RIGIDITY_LLE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q4_FINGER_TAPPING_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q4_FINGER_TAPPING_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q5_HAND_MOVEMENTS_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q5_HAND_MOVEMENTS_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q7_TOE_TAPPING_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q7_TOE_TAPPING_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q8_LEG_AGILITY_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q8_LEG_AGILITY_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q9_ARISING_FROM_CHAIR: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q10_GAIT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q11_FREEZING_OF_GAIT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q12_POSTURAL_STABILITY: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q13_POSTURE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q14_GLOBAL_SPONTANEITY_OF_MOVEMENT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_RIGHT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_LEFT: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q17_REST_TREMOR_AMPLITUDE_RUE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q17_REST_TREMOR_AMPLITUDE_LUE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q17_REST_TREMOR_AMPLITUDE_RLE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q17_REST_TREMOR_AMPLITUDE_LLE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q17_REST_TREMOR_AMPLITUDE_LIP_JAW: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_3_Q18_CONSTANCY_OF_REST_TREMOR: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },

  PART_4_Q1_TIME_SPENT_WITH_DYSKINESIAS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_4_Q2_FUNCTIONAL_IMPACT_OF_DYSKINESIAS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_4_Q3_TIME_SPENT_IN_THE_OFF_STATE: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_4_Q4_FUNCTIONAL_IMPACT_OF_FLUCTUATIONS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_4_Q5_COMPLEXITY_OF_MOTOR_FLUCTUATIONS: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
  PART_4_Q6_PAINFUL_OFF_STATE_DYSTONIA: {
    label: { nl: '', en: '' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normal: <ADD>', nl: 'Normaal: <ADD>' } },
        {
          value: 1,
          label: { en: 'Slight: <ADD>', nl: 'Heel licht: <ADD>' },
        },
        { value: 2, label: { en: 'Mild: <ADD>', nl: 'Licht: <ADD>' } },
        { value: 3, label: { en: 'Moderate: <ADD>', nl: 'Matig: <ADD>' } },
        { value: 4, label: { en: 'Severe: <ADD>', nl: 'Ernstig: <ADD>' } },
        { value: UNABLE_TO_RATE, label: { en: 'Unable to rate' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
