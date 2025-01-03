import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

export const CCQ_SCALES: Array<DefaultSubscaleType> = [
  {
    id: 'SYMPTOMS',
    min_answers_needed_to_calculate_score: 3,
    input_ids_in_subscale: [
      {
        input_id: 'Q01',
        label: {
          en: 'On average, during the past week, how often did you feel: Short of breath at rest?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
      {
        input_id: 'Q02',
        label: {
          en: 'On average, during the past week, how often did you feel: Short of breath doing physical activities?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
      {
        input_id: 'Q05',
        label: {
          en: 'In general, during the past week, how much of the time: Did you cough?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
      {
        input_id: 'Q06',
        label: {
          en: 'In general, during the past week, how much of the time: Did you produce phlegm?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
    ],
  },
  {
    id: 'FUNCTIONAL_STATE',
    min_answers_needed_to_calculate_score: 3,
    input_ids_in_subscale: [
      {
        input_id: 'Q07',
        label: {
          en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Strenuous physical activities (such as climbing stairs, hurrying, doing sports)?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Not limited at all' } },
            { value: 1, label: { en: 'Very slightly limited' } },
            { value: 2, label: { en: 'Slightly limited' } },
            { value: 3, label: { en: 'Moderately limited' } },
            { value: 4, label: { en: 'Very limited' } },
            { value: 5, label: { en: 'Extremely limited' } },
            { value: 6, label: { en: 'Totally limited /or unable to do' } },
          ],
        },
      },
      {
        input_id: 'Q08',
        label: {
          en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Moderate physical activities (such as walking, housework, carrying things)?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Not limited at all' } },
            { value: 1, label: { en: 'Very slightly limited' } },
            { value: 2, label: { en: 'Slightly limited' } },
            { value: 3, label: { en: 'Moderately limited' } },
            { value: 4, label: { en: 'Very limited' } },
            { value: 5, label: { en: 'Extremely limited' } },
            { value: 6, label: { en: 'Totally limited /or unable to do' } },
          ],
        },
      },
      {
        input_id: 'Q09',
        label: {
          en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Daily activities at home (such as dressing, washing yourself)?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Not limited at all' } },
            { value: 1, label: { en: 'Very slightly limited' } },
            { value: 2, label: { en: 'Slightly limited' } },
            { value: 3, label: { en: 'Moderately limited' } },
            { value: 4, label: { en: 'Very limited' } },
            { value: 5, label: { en: 'Extremely limited' } },
            { value: 6, label: { en: 'Totally limited /or unable to do' } },
          ],
        },
      },
      {
        input_id: 'Q10',
        label: {
          en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Social activities (such as talking, being with children, visiting friends/ relatives)?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Not limited at all' } },
            { value: 1, label: { en: 'Very slightly limited' } },
            { value: 2, label: { en: 'Slightly limited' } },
            { value: 3, label: { en: 'Moderately limited' } },
            { value: 4, label: { en: 'Very limited' } },
            { value: 5, label: { en: 'Extremely limited' } },
            { value: 6, label: { en: 'Totally limited /or unable to do' } },
          ],
        },
      },
    ],
  },
  {
    id: 'MENTAL_STATE',
    min_answers_needed_to_calculate_score: 2,
    input_ids_in_subscale: [
      {
        input_id: 'Q03',
        label: {
          en: 'On average, during the past week, how often did you feel: Concerned about getting a cold or your breathing getting worse?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
      {
        input_id: 'Q04',
        label: {
          en: 'On average, during the past week, how often did you feel: Depressed (down) because of your breathing problems?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'Never' } },
            { value: 1, label: { en: 'Hardly ever' } },
            { value: 2, label: { en: 'A few times' } },
            { value: 3, label: { en: 'Several times' } },
            { value: 4, label: { en: 'Many times' } },
            { value: 5, label: { en: 'A great many times' } },
            { value: 6, label: { en: 'Almost all the time' } },
          ],
        },
      },
    ],
  },
]
