import { type DefaultSubscaleType } from '../../../../types/calculations.types'

export const MOCA_SCALES: Array<DefaultSubscaleType> = [
  {
    id: 'VISUOSPATIAL_EXECUTIVE',
    input_ids_in_subscale: [
      {
        input_id: 'ALTERNATING_TRAIL_MARKING',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
      {
        input_id: 'VISUOCONSTRUCTIONAL_SKILLS_CUBE',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
      {
        input_id: 'VISUOCONSTRUCTIONAL_SKILLS_CLOCK',
        input_type: {
          type: 'numbers_array',
          allowed_answers: [
            { value: 0, label: { en: 'Contour' } },
            { value: 1, label: { en: 'Numbers' } },
            { value: 2, label: { en: 'Hands' } },
          ],
        },
      },
    ],
  },
  {
    id: 'NAMING',
    input_ids_in_subscale: [
      {
        input_id: 'NAMING',
        input_type: {
          type: 'numbers_array',
          allowed_answers: [
            { value: 0, label: { en: 'Lion' } },
            { value: 1, label: { en: 'Rhino' } },
            { value: 2, label: { en: 'Camel' } },
          ],
        },
      },
    ],
  },
  {
    id: 'ATTENTION',
    input_ids_in_subscale: [
      {
        input_id: 'FORWARD_DIGIT_SPAN',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
      {
        input_id: 'BACKWARD_DIGIT_SPAN',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
      {
        input_id: 'VIGILANCE',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
      {
        input_id: 'SERIAL_7S',
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 0 },
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ],
        },
      },
    ],
  },
  {
    id: 'LANGUAGE',
    input_ids_in_subscale: [
      {
        input_id: 'SENTENCE_REPETITION',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }, { value: 2 }],
        },
      },
      {
        input_id: 'VERBAL_FLUENCY',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }],
        },
      },
    ],
  },
  {
    id: 'ABSTRACTION',
    input_ids_in_subscale: [
      {
        input_id: 'ABSTRACTION',
        input_type: {
          type: 'number',
          allowed_answers: [{ value: 0 }, { value: 1 }, { value: 2 }],
        },
      },
    ],
  },
  {
    id: 'DELAYED_RECALL',
    input_ids_in_subscale: [
      {
        input_id: 'DELAYED_RECALL',
        input_type: {
          type: 'numbers_array',
          allowed_answers: [
            { value: 0, label: { en: 'Face' } },
            { value: 1, label: { en: 'Velvet' } },
            { value: 2, label: { en: 'Church' } },
            { value: 3, label: { en: 'Daisy' } },
            { value: 4, label: { en: 'Red' } },
          ],
        },
      },
    ],
  },
  {
    id: 'ORIENTATION',
    input_ids_in_subscale: [
      {
        input_id: 'ORIENTATION',
        input_type: {
          type: 'numbers_array',
          allowed_answers: [
            { value: 0, label: { en: 'Date' } },
            { value: 1, label: { en: 'Month' } },
            { value: 2, label: { en: 'Year' } },
            { value: 3, label: { en: 'Day' } },
            { value: 4, label: { en: 'Location' } },
            { value: 5, label: { en: 'Place' } },
          ],
        },
      },
    ],
  },
]
