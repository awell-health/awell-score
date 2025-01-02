import type { PRO2InputType } from '../../../src/types/calculations/inputs/custom/pro2.types'

const DEFAULT_FACTOR = 1
export const STOOL_FREQUENCY_FACTOR = 2
export const ABDOMINAL_PAIN_FACTOR = 5
export const GENERAL_WELL_BEING_FACTOR = 7

export const SUBSCORE_QUESTIONS = ['STOOL_FREQUENCY', 'ABDOMINAL_PAIN']

export const PRO2_INPUTS: Array<PRO2InputType> = [
  {
    input_id: 'STOOL_FREQUENCY',
    type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 20 },
      },
    },
    info: {
      en: `Stool frequency will be multiplied with a factor ${STOOL_FREQUENCY_FACTOR}`,
    },
    factor: STOOL_FREQUENCY_FACTOR,
    required: true,
  },
  {
    input_id: 'ABDOMINAL_PAIN',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None' } },
        { value: 1, label: { en: 'Mild' } },
        { value: 2, label: { en: 'Moderate' } },
        { value: 3, label: { en: 'Severe' } },
      ],
    },
    info: {
      en: `Abdominal pain will be multiplied with a factor ${ABDOMINAL_PAIN_FACTOR}`,
    },
    factor: ABDOMINAL_PAIN_FACTOR,
    required: true,
  },
  {
    input_id: 'GENERAL_WELL_BEING',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'Generally well' } },
        { value: 1, label: { en: 'Slightly under par' } },
        { value: 2, label: { en: 'Poor' } },
        { value: 3, label: { en: 'Very poor' } },
        { value: 4, label: { en: 'Terrible' } },
      ],
    },
    info: {
      en: `General well-being will be multiplied with a factor ${GENERAL_WELL_BEING_FACTOR}`,
    },
    factor: GENERAL_WELL_BEING_FACTOR,
    required: true,
  },
  {
    input_id: 'JOINT_PROBLEMS',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    factor: DEFAULT_FACTOR,
    required: true,
  },
  {
    input_id: 'SKIN_PROBLEMS',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    factor: DEFAULT_FACTOR,
    required: true,
  },
  {
    input_id: 'EYE_PROBLEMS',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    factor: DEFAULT_FACTOR,
    required: true,
  },
  {
    input_id: 'MOUTH_SORES',
    type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'No' } },
        { value: 1, label: { en: 'Yes' } },
      ],
    },
    factor: DEFAULT_FACTOR,
    required: true,
  },
]
