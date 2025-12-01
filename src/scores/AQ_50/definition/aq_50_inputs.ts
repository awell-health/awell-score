import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

// For questions where "definitely agree" or "slightly agree" = 1 point
// Questions: 2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46
const inputType1 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 0,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

// For questions where "slightly disagree" or "definitely disagree" = 1 point
// Questions: 1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50
const inputType2 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 1,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 1,
      },
    ],
  },
} satisfies EnumNumberInputType

export const AQ50_INPUTS = {
  AQ50_Q01: {
    label: {
      en: 'I prefer to do things with others rather than on my own.',
    },
    ...inputType2,
  },
  AQ50_Q02: {
    label: {
      en: 'I prefer to do things the same way over and over again.',
    },
    ...inputType1,
  },
  AQ50_Q03: {
    label: {
      en: 'If I try to imagine something, I find it very easy to create a picture in my mind.',
    },
    ...inputType2,
  },
  AQ50_Q04: {
    label: {
      en: 'I frequently get so strongly absorbed in one thing that I lose sight of other things.',
    },
    ...inputType1,
  },
  AQ50_Q05: {
    label: {
      en: 'I often notice small sounds when others do not.',
    },
    ...inputType1,
  },
  AQ50_Q06: {
    label: {
      en: 'I usually notice car number plates or similar strings of information.',
    },
    ...inputType1,
  },
  AQ50_Q07: {
    label: {
      en: 'Other people frequently tell me that what I`ve said is impolite, even though I think it is polite.',
    },
    ...inputType1,
  },
  AQ50_Q08: {
    label: {
      en: 'When I`m reading a story, I can easily imagine what the characters might look like.',
    },
    ...inputType2,
  },
  AQ50_Q09: {
    label: {
      en: 'I am fascinated by dates.',
    },
    ...inputType1,
  },
  AQ50_Q10: {
    label: {
      en: 'In a social group, I can easily keep track of several different people`s conversations.',
    },
    ...inputType2,
  },
  AQ50_Q11: {
    label: {
      en: 'I find social situations easy.',
    },
    ...inputType2,
  },
  AQ50_Q12: {
    label: {
      en: 'I tend to notice details that others do not.',
    },
    ...inputType1,
  },
  AQ50_Q13: {
    label: {
      en: 'I would rather go to a library than a party.',
    },
    ...inputType1,
  },
  AQ50_Q14: {
    label: {
      en: 'I find making up stories easy.',
    },
    ...inputType2,
  },
  AQ50_Q15: {
    label: {
      en: 'I find myself drawn more strongly to people than to things.',
    },
    ...inputType2,
  },
  AQ50_Q16: {
    label: {
      en: 'I tend to have very strong interests which I get upset about if I can`t pursue.',
    },
    ...inputType1,
  },
  AQ50_Q17: {
    label: {
      en: 'I enjoy social chit-chat.',
    },
    ...inputType2,
  },
  AQ50_Q18: {
    label: {
      en: 'When I talk, it isn`t always easy for others to get a word in edgeways.',
    },
    ...inputType1,
  },
  AQ50_Q19: {
    label: {
      en: 'I am fascinated by numbers.',
    },
    ...inputType1,
  },
  AQ50_Q20: {
    label: {
      en: 'When I`m reading a story, I find it difficult to work out the characters` intentions.',
    },
    ...inputType1,
  },
  AQ50_Q21: {
    label: {
      en: 'I don`t particularly enjoy reading fiction.',
    },
    ...inputType1,
  },
  AQ50_Q22: {
    label: {
      en: 'I find it hard to make new friends.',
    },
    ...inputType1,
  },
  AQ50_Q23: {
    label: {
      en: 'I notice patterns in things all the time.',
    },
    ...inputType1,
  },
  AQ50_Q24: {
    label: {
      en: 'I would rather go to the theatre than a museum.',
    },
    ...inputType2,
  },
  AQ50_Q25: {
    label: {
      en: 'It does not upset me if my daily routine is disturbed.',
    },
    ...inputType2,
  },
  AQ50_Q26: {
    label: {
      en: 'I frequently find that I don`t know how to keep a conversation going.',
    },
    ...inputType1,
  },
  AQ50_Q27: {
    label: {
      en: 'I find it easy to "read between the lines" when someone is talking to me.',
    },
    ...inputType2,
  },
  AQ50_Q28: {
    label: {
      en: 'I usually concentrate more on the whole picture, rather than the small details.',
    },
    ...inputType2,
  },
  AQ50_Q29: {
    label: {
      en: 'I am not very good at remembering phone numbers.',
    },
    ...inputType2,
  },
  AQ50_Q30: {
    label: {
      en: 'I don`t usually notice small changes in a situation, or a person`s appearance.',
    },
    ...inputType2,
  },
  AQ50_Q31: {
    label: {
      en: 'I know how to tell if someone listening to me is getting bored.',
    },
    ...inputType2,
  },
  AQ50_Q32: {
    label: {
      en: 'I find it easy to do more than one thing at once.',
    },
    ...inputType2,
  },
  AQ50_Q33: {
    label: {
      en: 'When I talk on the phone, I`m not sure when it`s my turn to speak.',
    },
    ...inputType1,
  },
  AQ50_Q34: {
    label: {
      en: 'I enjoy doing things spontaneously.',
    },
    ...inputType2,
  },
  AQ50_Q35: {
    label: {
      en: 'I am often the last to understand the point of a joke.',
    },
    ...inputType1,
  },
  AQ50_Q36: {
    label: {
      en: 'I find it easy to work out what someone is thinking or feeling just by looking at their face.',
    },
    ...inputType2,
  },
  AQ50_Q37: {
    label: {
      en: 'If there is an interruption, I can switch back to what I was doing very quickly.',
    },
    ...inputType2,
  },
  AQ50_Q38: {
    label: {
      en: 'I am good at social chit-chat.',
    },
    ...inputType2,
  },
  AQ50_Q39: {
    label: {
      en: 'People often tell me that I keep going on and on about the same thing.',
    },
    ...inputType1,
  },
  AQ50_Q40: {
    label: {
      en: 'When I was young, I used to enjoy playing games involving pretending with other children.',
    },
    ...inputType2,
  },
  AQ50_Q41: {
    label: {
      en: 'I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant, etc.).',
    },
    ...inputType1,
  },
  AQ50_Q42: {
    label: {
      en: 'I find it difficult to imagine what it would be like to be someone else.',
    },
    ...inputType1,
  },
  AQ50_Q43: {
    label: {
      en: 'I like to plan any activities I participate in carefully.',
    },
    ...inputType1,
  },
  AQ50_Q44: {
    label: {
      en: 'I enjoy social occasions.',
    },
    ...inputType2,
  },
  AQ50_Q45: {
    label: {
      en: 'I find it difficult to work out people`s intentions.',
    },
    ...inputType1,
  },
  AQ50_Q46: {
    label: {
      en: 'New situations make me anxious.',
    },
    ...inputType1,
  },
  AQ50_Q47: {
    label: {
      en: 'I enjoy meeting new people.',
    },
    ...inputType2,
  },
  AQ50_Q48: {
    label: {
      en: 'I am a good diplomat.',
    },
    ...inputType2,
  },
  AQ50_Q49: {
    label: {
      en: 'I am not very good at remembering people`s date of birth.',
    },
    ...inputType2,
  },
  AQ50_Q50: {
    label: {
      en: 'I find it very easy to play games with children that involve pretending.',
    },
    ...inputType2,
  },
} satisfies ScoreInputSchemaType

