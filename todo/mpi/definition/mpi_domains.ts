import {
  InputType,
  type DefaultSubscaleType,
} from '../../../src/types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
]

const add_allowed_answers = (
  input: Pick<InputType, 'input_label' | 'input_id'>,
): InputType => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const MPI_DOMAINS: DefaultSubscaleType[] = [
  {
    id: 'MPI_PSYCHOSOCIAL',
    input_ids_in_subscale: [
      {
        input_id: 'MPI_PART1_Q01',
        input_label: {
          en: '1.Rate the level of your pain at the present moment.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q02',
        input_label: {
          en: 'In general, how much does your pain problem interfere with your day to day activities?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q03',
        input_label: {
          en: '3.Since the time you developed a pain problem, how much has your pain changed your ability to work?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q04',
        input_label: {
          en: 'How much has your pain changed the amount of satisfaction or enjoyment you get from participating in social and recreational activities?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q05',
        input_label: {
          en: 'How supportive or helpful is your spouse (significant other) to you in relation to your pain?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q06',
        input_label: {
          en: 'Rate your overall mood during the past week.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q07',
        input_label: {
          en: 'On the average, how severe has your pain been during the last week?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q08',
        input_label: {
          en: 'How much has your pain changed your ability to participate in recreational and other social activities?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q09',
        input_label: {
          en: 'How much has your pain changed the amount of satisfaction you get from family- related activities?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q10',
        input_label: {
          en: 'How worried is your spouse (significant other) about you in relation to your pain problem?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q11',
        input_label: {
          en: 'During the past week, how much control do you feel that you have had over your life?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q12',
        input_label: {
          en: 'How much suffering do you experience because of your pain?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q13',
        input_label: {
          en: 'How much has your pain changed your marriage and other family relationships?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q14',
        input_label: {
          en: 'How much has your pain changed the amount of satisfaction or enjoyment you get from work?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q15',
        input_label: {
          en: 'How attentive is your spouse (significant other) to your pain problem?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q16',
        input_label: {
          en: 'During the past week, how much do you feel that you’ve been able to deal with your problems?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q17',
        input_label: {
          en: 'How much has your pain changed your ability to do household chores?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q18',
        input_label: {
          en: 'During the past week, how irritable have you been?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q19',
        input_label: {
          en: 'How much has your pain changed your friendships with people other than your family?',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART1_Q20',
        input_label: {
          en: 'During the past week, how tense or anxious have you been?',
          nl: '',
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'MPI_BEHAVIOUR',
    input_ids_in_subscale: [
      {
        input_id: 'MPI_PART2_Q01',
        input_label: {
          en: 'In this section, we are interested in knowing how your significant other (this refers to the person you indicated above) responds to you when he or she knows that you are in pain. On the scale listed below each question, circle a number to indicate how often your significant other generally responds to you in that particular way when you are in pain. Ignores me.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q02',
        input_label: {
          en: 'Asks me what he/she can do to help.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q03',
        input_label: {
          en: 'Reads to me.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q04',
        input_label: {
          en: 'Expresses irritation at me.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q05',
        input_label: {
          en: 'Takes over my jobs or duties.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q06',
        input_label: {
          en: 'Talks to me about something else to take my mind off the pain.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q07',
        input_label: {
          en: 'Expresses frustration at me.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q08',
        input_label: {
          en: 'Tries to get me to rest.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q09',
        input_label: {
          en: 'Tries to involve me in some activity',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q10',
        input_label: {
          en: 'Expresses anger at me.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q11',
        input_label: {
          en: 'Gets me some pain medications.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q12',
        input_label: {
          en: 'Encourages me to work on a hobby.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q13',
        input_label: {
          en: 'Gets me something to eat or drink.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART2_Q14',
        input_label: {
          en: 'Turns on the T.V. to take my mind off my pain',
          nl: '',
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'MPI_ADL',
    input_ids_in_subscale: [
      {
        input_id: 'MPI_PART3_Q01',
        input_label: {
          en: 'Listed below are 18 common daily activities. Please indicate how often you do each of these activities by circling a number on the scale listed below each activity. Please complete all 18 questions. Wash dishes.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q02',
        input_label: {
          en: 'Mow the lawn.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q03',
        input_label: {
          en: 'Go out to eat.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q04',
        input_label: {
          en: 'Play cards or other games.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q05',
        input_label: {
          en: 'Go grocery shopping.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q06',
        input_label: {
          en: 'Work in the garden.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q07',
        input_label: {
          en: 'Go to a movie.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q08',
        input_label: {
          en: 'Visit friends.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q09',
        input_label: {
          en: 'Help with the house cleaning.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q10',
        input_label: {
          en: 'Work on the car.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q11',
        input_label: {
          en: 'Take a ride in a car.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q12',
        input_label: {
          en: 'Visit relatives.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q13',
        input_label: {
          en: 'Prepare a meal.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q14',
        input_label: {
          en: 'Wash the car.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q15',
        input_label: {
          en: 'Take a trip.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q16',
        input_label: {
          en: 'Go to a park or beach.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q17',
        input_label: {
          en: 'Do a load of laundry.',
          nl: '',
        },
      },
      {
        input_id: 'MPI_PART3_Q18',
        input_label: {
          en: 'Work on a needed house repair.',
          nl: '',
        },
      },
    ].map(add_allowed_answers),
  },
]
