// @flow
import type { InputType } from '../../../../types/calculations.types'

const INPUT_TYPE = {
  type: 'number',
  allowed_answers: [
    {
      value: 1,
      label: { en: 'Strongly disagree' }
    },
    {
      value: 2,
      label: { en: 'Disagree' }
    },
    {
      value: 3,
      label: { en: 'Neutral' }
    },
    {
      value: 4,
      label: { en: 'Agree' }
    },
    {
      value: 5,
      label: { en: 'Strongly agree' }
    }
  ]
}

export const CFWS_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'Our family is able to make decisions that benefit us'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'We care about one another'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'In my family, we have what we need for food and shelter'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'We are able to balance family needs so that we can pursue our own interests'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'We enjoy spending time together'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'Financial cost of caregiving for our family member with a disability, autism or a developmental delay is manageable'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'We have support outside of our family to help with caregiver/childcare responsibilities'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q08',
    input_label: {
      en: 'We have good communication in our family'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q09',
    input_label: {
      en: 'Family members feel safe in our family'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q10',
    input_label: {
      en: 'We prioritize individual family health needs'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q11',
    input_label: {
      en: 'We are able to resolve conflict and support each other when things go wrong'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q12',
    input_label: {
      en: 'Working members of my family are able to balance work and caregiver/childcare responsibilities'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q13',
    input_label: {
      en: 'We have access to disability, autism or developmental delay related resources'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q14',
    input_label: {
      en: 'Our family is part of a larger community'
    },
    input_type: INPUT_TYPE
  },
  {
    input_id: 'Q15',
    input_label: {
      en: 'In my family, we share our feelings and support each other’s emotional needs'
    },
    input_type: INPUT_TYPE
  }
]
