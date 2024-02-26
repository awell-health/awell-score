import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const NO_ANSWER = 0
const YES_ANSWER = 1

const yes_no_input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: NO_ANSWER, label: { en: 'No' } },
    { value: YES_ANSWER, label: { en: 'Yes' } },
  ],
}

export const STOP_BANG_INPUTS: Array<InputType> = [
  {
    input_id: 'STOP_BANG_Q01',
    input_label: {
      en: 'Do you snore loudly?',
    },
    input_type: yes_no_input_type,
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q02',
    input_label: {
      en: 'Do you often feel tired, fatigued, or sleepy during daytime?',
    },
    input_type: yes_no_input_type,
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q03',
    input_label: {
      en: 'Has anyone observed you stop breathing during your sleep?',
    },
    input_type: yes_no_input_type,
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q04',
    input_label: {
      en: 'Do you have or are you being treated for high blood pressure?',
    },
    input_type: yes_no_input_type,
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q05',
    input_label: {
      en: `What is the patient's BMI?`,
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 100 },
      },
    },
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q06',
    input_label: {
      en: "What is the patient's age?",
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 120 },
      },
    },
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q07',
    input_label: {
      en: `What is the patient's neck circumference?`,
    },
    input_type: {
      type: 'number',
      range: {
        min: { value: 0 },
        max: { value: 100 },
      },
    },
    required: true,
  },
  {
    input_id: 'STOP_BANG_Q08',
    input_label: {
      en: "What is the patient's gender?",
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Male' },
          value: 1,
        },
        {
          label: { en: 'Female' },
          value: 2,
        },
      ],
    },
    required: true,
  },
]
