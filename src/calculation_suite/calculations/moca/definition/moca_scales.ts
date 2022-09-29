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
          type: 'strings_array',
          allowed_answers: [
            { value: 'contour', label: { en: 'Contour' } },
            { value: 'numbers', label: { en: 'Numbers' } },
            { value: 'hands', label: { en: 'Hands' } },
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
          type: 'strings_array',
          allowed_answers: [
            { value: 'lion', label: { en: 'Lion' } },
            { value: 'rhino', label: { en: 'Rhino' } },
            { value: 'camel', label: { en: 'Camel' } },
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
          type: 'strings_array',
          allowed_answers: [
            { value: 'face', label: { en: 'Face' } },
            { value: 'velvet', label: { en: 'Velvet' } },
            { value: 'church', label: { en: 'Church' } },
            { value: 'daisy', label: { en: 'Daisy' } },
            { value: 'red', label: { en: 'Red' } },
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
          type: 'strings_array',
          allowed_answers: [
            { value: 'date', label: { en: 'Date' } },
            { value: 'month', label: { en: 'Month' } },
            { value: 'year', label: { en: 'Year' } },
            { value: 'day', label: { en: 'Day' } },
            { value: 'location', label: { en: 'Location' } },
            { value: 'place', label: { en: 'Place' } },
          ],
        },
      },
    ],
  },
]
