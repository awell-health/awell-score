import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

export const MODERATELY_ANSWER = 2

const ANSWER_OPTIONS: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 0,
      label: { nl: 'Helemaal niet', en: 'Not at all' },
    },
    {
      value: 1,
      label: {
        nl: 'Een beetje',
        en: 'A little bit',
      },
    },
    {
      value: MODERATELY_ANSWER,
      label: {
        nl: 'Matig',
        en: 'Moderately',
      },
    },
    {
      value: 3,
      label: {
        nl: 'Nogal veel',
        en: 'Quite a bit',
      },
    },
    {
      value: 4,
      label: {
        nl: 'Extreem veel',
        en: 'Extremely',
      },
    },
  ],
}

export const PCL5_INPUTS: Array<InputType> = [
  {
    input_id: 'PCL5_Q01',
    label: {
      en: 'In the past month, how much were you bothered by: repeated, disturbing, and unwanted memories of the stressful experience?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q02',
    label: {
      en: 'In the past month, how much were you bothered by: repeated, disturbing dreams of the stressful experience?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q03',
    label: {
      en: 'In the past month, how much were you bothered by: suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q04',
    label: {
      en: 'In the past month, how much were you bothered by: feeling very upset when something reminded you of the stressful experience?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q05',
    label: {
      en: 'In the past month, how much were you bothered by: having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q06',
    label: {
      en: 'In the past month, how much were you bothered by: avoiding memories, thoughts, or feelings related to the stressful experience?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q07',
    label: {
      en: 'In the past month, how much were you bothered by: avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q08',
    label: {
      en: 'In the past month, how much were you bothered by: trouble remembering important parts of the stressful experience?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q09',
    label: {
      en: 'In the past month, how much were you bothered by: having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q10',
    label: {
      en: 'In the past month, how much were you bothered by: blaming yourself or someone else for the stressful experience or what happened after it?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q11',
    label: {
      en: 'In the past month, how much were you bothered by: having strong negative feelings such as fear, horror, anger, guilt, or shame?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q12',
    label: {
      en: 'In the past month, how much were you bothered by: loss of interest in activities that you used to enjoy?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q13',
    label: {
      en: 'In the past month, how much were you bothered by: feeling distant or cut off from other people?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q14',
    label: {
      en: 'In the past month, how much were you bothered by: trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q15',
    label: {
      en: 'In the past month, how much were you bothered by: irritable behavior, angry outbursts, or acting aggressively?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q16',
    label: {
      en: 'In the past month, how much were you bothered by: taking too many risks or doing things that could cause you harm?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q17',
    label: {
      en: 'In the past month, how much were you bothered by: being “superalert” or watchful or on guard?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q18',
    label: {
      en: 'In the past month, how much were you bothered by: feeling jumpy or easily startled?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q19',
    label: {
      en: 'In the past month, how much were you bothered by: having difficulty concentrating?',
    },
    type: ANSWER_OPTIONS,
  },
  {
    input_id: 'PCL5_Q20',
    label: {
      en: 'In the past month, how much were you bothered by: trouble falling or staying asleep?',
    },
    type: ANSWER_OPTIONS,
  },
]
