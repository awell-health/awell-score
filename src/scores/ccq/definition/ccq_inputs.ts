import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const CCQ_INPUTS = {
  Q01: {
    label: {
      en: 'On average, during the past week, how often did you feel: Short of breath at rest?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q02: {
    label: {
      en: 'On average, during the past week, how often did you feel: Short of breath doing physical activities?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q03: {
    label: {
      en: 'On average, during the past week, how often did you feel: Concerned about getting a cold or your breathing getting worse?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q04: {
    label: {
      en: 'On average, during the past week, how often did you feel: Depressed (down) because of your breathing problems?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q05: {
    label: {
      en: 'In general, during the past week, how much of the time: Did you cough?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q06: {
    label: {
      en: 'In general, during the past week, how much of the time: Did you produce phlegm?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q07: {
    label: {
      en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Strenuous physical activities (such as climbing stairs, hurrying, doing sports)?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q08: {
    label: {
      en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Moderate physical activities (such as walking, housework, carrying things)?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q09: {
    label: {
      en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Daily activities at home (such as dressing, washing yourself)?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
  Q10: {
    label: {
      en: 'On average, during the past week, how limited were you in these activities because of your breathing problems: Social activities (such as talking, being with children, visiting friends/ relatives)?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
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
} satisfies ScoreInputSchemaType
