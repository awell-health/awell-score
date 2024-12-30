import type { InputType } from '../../../src/types/calculations.types'

export const SCCAI_INPUTS: Array<InputType> = [
  {
    input_id: 'number_of_stools_during_day', // Bowel frequency (day)
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: '0-3' } },
        { value: 1, label: { en: '4-6' } },
        { value: 2, label: { en: '7-9' } },
        { value: 3, label: { en: '>9' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'nbr_stools_during_night', // Bowel frequency (night)
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: '0' } },
        { value: 1, label: { en: '1-3' } },
        { value: 2, label: { en: '4-6' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'urgency_of_going_to_toilet',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No urgency' } },
        { value: 1, label: { en: 'Hurry' } },
        { value: 2, label: { en: 'Immediately' } },
        { value: 3, label: { en: 'Incontinence' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'blood_in_stool',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No blood' } },
        { value: 1, label: { en: 'Trace' } },
        { value: 2, label: { en: 'Occasionaly frank' } },
        { value: 3, label: { en: 'Usually frank' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'general_wellness',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'Very well' } },
        { value: 1, label: { en: 'Slightly below par' } },
        { value: 2, label: { en: 'Poor' } },
        { value: 3, label: { en: 'Very poor' } },
        { value: 4, label: { en: 'Terrible' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'joint_pain',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'eye_problems',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'deep_skin_problems',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    required: true,
  },
  {
    input_id: 'surface_skin_problems',
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    required: true,
  },
]
