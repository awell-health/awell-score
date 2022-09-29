import type { DefaultSubscaleType } from '../../../../types/calculations.types'

export const UNABLE_TO_RATE = 999

export const MDS_UPDRS_SCALES: DefaultSubscaleType[] = [
  {
    id: 'PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    input_ids_in_subscale: [
      {
        input_id: 'PART_1_Q1_COGNITIVE_IMPAIRMENT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q2_HALLUCINATIONS_AND_PSYCHOSIS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q3_DEPRESSED_MOOD',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q4_ANXIOUS_MOOD',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q5_APATHY',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q6_FEATURES_OF_DOPAMINE_DYSREGULATION_SYNDROME',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q7_SLEEP_PROBLEMS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q8_DAYTIME_SLEEPINESS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q9_PAIN_AND_OTHER_SENSATIONS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q10_URINARY_PROBLEMS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q11_CONSTIPATION_PROBLEMS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q12_LIGHT_HEADEDNESS_ON_STANDING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_1_Q13_FATIGUE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
  },
  {
    id: 'PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    input_ids_in_subscale: [
      {
        input_id: 'PART_2_Q1_SPEECH',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q2_SALIVA_AND_DROOLING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q3_CHEWING_AND_SWALLOWING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q4_EATING_TASKS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q5_DRESSING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q6_HYGIENE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q7_HANDWRITING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q8_DOING_HOBBIES_AND_OTHER_ACTIVITIES',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q9_TURNING_IN_BED',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q10_TREMOR',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q11_GETTING_OUT_OF_BED_CAR_OR_DEEP_CHAIR',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q12_WALKING_AND_BALANCE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_2_Q13_FREEZING',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
  },
  {
    id: 'PART_3_MOTOR_EXAMINATION',
    input_ids_in_subscale: [
      {
        input_id: 'PART_3_Q1_SPEECH',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q2_FACIAL_EXPRESSION',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q3_RIGIDITY_NECK',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q3_RIGIDITY_RUE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q3_RIGIDITY_LUE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q3_RIGIDITY_RLE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q3_RIGIDITY_LLE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q4_FINGER_TAPPING_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q4_FINGER_TAPPING_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q5_HAND_MOVEMENTS_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q5_HAND_MOVEMENTS_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q7_TOE_TAPPING_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q7_TOE_TAPPING_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q8_LEG_AGILITY_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q8_LEG_AGILITY_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q9_ARISING_FROM_CHAIR',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q10_GAIT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q11_FREEZING_OF_GAIT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q12_POSTURAL_STABILITY',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q13_POSTURE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q14_GLOBAL_SPONTANEITY_OF_MOVEMENT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_RIGHT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_LEFT',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q17_REST_TREMOR_AMPLITUDE_RUE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q17_REST_TREMOR_AMPLITUDE_LUE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q17_REST_TREMOR_AMPLITUDE_RLE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q17_REST_TREMOR_AMPLITUDE_LLE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q17_REST_TREMOR_AMPLITUDE_LIP_JAW',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_3_Q18_CONSTANCY_OF_REST_TREMOR',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
  },
  {
    id: 'PART_4_MOTOR_COMPLICATIONS',
    input_ids_in_subscale: [
      {
        input_id: 'PART_4_Q1_TIME_SPENT_WITH_DYSKINESIAS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_4_Q2_FUNCTIONAL_IMPACT_OF_DYSKINESIAS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_4_Q3_TIME_SPENT_IN_THE_OFF_STATE',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_4_Q4_FUNCTIONAL_IMPACT_OF_FLUCTUATIONS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_4_Q5_COMPLEXITY_OF_MOTOR_FLUCTUATIONS',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'PART_4_Q6_PAINFUL_OFF_STATE_DYSTONIA',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
  },
]
