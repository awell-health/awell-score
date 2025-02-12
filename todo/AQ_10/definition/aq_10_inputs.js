// @flow
import type { InputType } from '../../../../types/calculations.types'

// for questions 1, 5, 8 and 10
const allowed_answers_1 = [
  {
    label: { en: 'Definitely Agree' },
    value: 1
  },
  {
    label: { en: 'Slightly Agree' },
    value: 1
  },
  {
    label: { en: 'Slightly Disagree' },
    value: 0
  },
  {
    label: { en: 'Definitely Disagree' },
    value: 0
  }
]

// for questions 2, 3, 4, 6, 7 and 9
const allowed_answers_2 = [
  {
    label: { en: 'Definitely Agree' },
    value: 0
  },
  {
    label: { en: 'Slightly Agree' },
    value: 0
  },
  {
    label: { en: 'Slightly Disagree' },
    value: 1
  },
  {
    label: { en: 'Definitely Disagree' },
    value: 1
  }
]

export const AQ10_INPUTS: Array<InputType> = [
  {
    input_id: 'AQ10_Q01',
    input_label: {
      en: 'S/he notices patterns in things all the time'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_1
    }
  },
  {
    input_id: 'AQ10_Q02',
    input_label: {
      en: 'S/he usually concentrates more on the whole picture, rather than the small details'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q03',
    input_label: {
      en: 'In a social group, s/he can easily keep track of several different people`s conversations'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q04',
    input_label: {
      en: 'If there is an interruption, s/he can switch back to what s/he was doing very quickly'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q05',
    input_label: {
      en: 'S/he frequently finds that s/he doesn`t know how to keep a conversation going'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_1
    }
  },
  {
    input_id: 'AQ10_Q06',
    input_label: {
      en: 'S/he is good at social chit-chat'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q07',
    input_label: {
      en: 'When s/he was younger, s/he used to enjoy playing games involving pretending with other children'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q08',
    input_label: {
      en: 'S/he finds it difficult to imagine what it would be like to be someone else'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_1
    }
  },
  {
    input_id: 'AQ10_Q09',
    input_label: {
      en: 'S/he finds social situations easy'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_2
    }
  },
  {
    input_id: 'AQ10_Q10',
    input_label: {
      en: 'S/he finds it hard to make new friends'
    },
    input_type: {
      type: 'number',
      allowed_answers: allowed_answers_1
    }
  }
]
