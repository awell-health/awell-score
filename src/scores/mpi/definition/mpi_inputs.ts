import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
} satisfies EnumNumberInputType

export const MPI_INPUTS = {
  MPI_PART1_Q01: {
    label: {
      en: '1.Rate the level of your pain at the present moment.',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q02: {
    label: {
      en: 'In general, how much does your pain problem interfere with your day to day activities?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q03: {
    label: {
      en: '3.Since the time you developed a pain problem, how much has your pain changed your ability to work?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q04: {
    label: {
      en: 'How much has your pain changed the amount of satisfaction or enjoyment you get from participating in social and recreational activities?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q05: {
    label: {
      en: 'How supportive or helpful is your spouse (significant other) to you in relation to your pain?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q06: {
    label: {
      en: 'Rate your overall mood during the past week.',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q07: {
    label: {
      en: 'On the average, how severe has your pain been during the last week?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q08: {
    label: {
      en: 'How much has your pain changed your ability to participate in recreational and other social activities?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q09: {
    label: {
      en: 'How much has your pain changed the amount of satisfaction you get from family- related activities?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q10: {
    label: {
      en: 'How worried is your spouse (significant other) about you in relation to your pain problem?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q11: {
    label: {
      en: 'During the past week, how much control do you feel that you have had over your life?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q12: {
    label: {
      en: 'How much suffering do you experience because of your pain?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q13: {
    label: {
      en: 'How much has your pain changed your marriage and other family relationships?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q14: {
    label: {
      en: 'How much has your pain changed the amount of satisfaction or enjoyment you get from work?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q15: {
    label: {
      en: 'How attentive is your spouse (significant other) to your pain problem?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q16: {
    label: {
      en: 'During the past week, how much do you feel that you’ve been able to deal with your problems?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q17: {
    label: {
      en: 'How much has your pain changed your ability to do household chores?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q18: {
    label: {
      en: 'During the past week, how irritable have you been?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q19: {
    label: {
      en: 'How much has your pain changed your friendships with people other than your family?',
      nl: '',
    },
    ...type,
  },
  MPI_PART1_Q20: {
    label: {
      en: 'During the past week, how tense or anxious have you been?',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q01: {
    label: {
      en: 'In this section, we are interested in knowing how your significant other (this refers to the person you indicated above) responds to you when he or she knows that you are in pain. On the scale listed below each question, circle a number to indicate how often your significant other generally responds to you in that particular way when you are in pain. Ignores me.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q02: {
    label: {
      en: 'Asks me what he/she can do to help.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q03: {
    label: {
      en: 'Reads to me.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q04: {
    label: {
      en: 'Expresses irritation at me.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q05: {
    label: {
      en: 'Takes over my jobs or duties.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q06: {
    label: {
      en: 'Talks to me about something else to take my mind off the pain.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q07: {
    label: {
      en: 'Expresses frustration at me.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q08: {
    label: {
      en: 'Tries to get me to rest.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q09: {
    label: {
      en: 'Tries to involve me in some activity',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q10: {
    label: {
      en: 'Expresses anger at me.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q11: {
    label: {
      en: 'Gets me some pain medications.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q12: {
    label: {
      en: 'Encourages me to work on a hobby.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q13: {
    label: {
      en: 'Gets me something to eat or drink.',
      nl: '',
    },
    ...type,
  },
  MPI_PART2_Q14: {
    label: {
      en: 'Turns on the T.V. to take my mind off my pain',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q01: {
    label: {
      en: 'Listed below are 18 common daily activities. Please indicate how often you do each of these activities by circling a number on the scale listed below each activity. Please complete all 18 questions. Wash dishes.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q02: {
    label: {
      en: 'Mow the lawn.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q03: {
    label: {
      en: 'Go out to eat.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q04: {
    label: {
      en: 'Play cards or other games.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q05: {
    label: {
      en: 'Go grocery shopping.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q06: {
    label: {
      en: 'Work in the garden.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q07: {
    label: {
      en: 'Go to a movie.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q08: {
    label: {
      en: 'Visit friends.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q09: {
    label: {
      en: 'Help with the house cleaning.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q10: {
    label: {
      en: 'Work on the car.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q11: {
    label: {
      en: 'Take a ride in a car.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q12: {
    label: {
      en: 'Visit relatives.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q13: {
    label: {
      en: 'Prepare a meal.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q14: {
    label: {
      en: 'Wash the car.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q15: {
    label: {
      en: 'Take a trip.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q16: {
    label: {
      en: 'Go to a park or beach.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q17: {
    label: {
      en: 'Do a load of laundry.',
      nl: '',
    },
    ...type,
  },
  MPI_PART3_Q18: {
    label: {
      en: 'Work on a needed house repair.',
      nl: '',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
