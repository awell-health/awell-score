import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const KBILD_INPUTS = {
  K_BILD_Q01: {
    label: {
      en: 'In the last 2 weeks, I have been breathless climbing stairs or walking up an incline or hill.',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Every time' },
        },
        {
          value: 2,
          label: {
            en: 'Most times',
          },
        },
        {
          value: 3,
          label: {
            en: 'Several times',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some times',
          },
        },
        {
          value: 5,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 6,
          label: {
            en: 'Rarely',
          },
        },
        {
          value: 7,
          label: {
            en: 'Never',
          },
        },
      ],
    },
  },
  K_BILD_Q02: {
    label: {
      en: 'In the last 2 weeks, because of my lung condition, my chest has felt tight.',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q03: {
    label: {
      en: 'In the last 2 weeks have you worried about the seriousness of your lung complaint?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q04: {
    label: {
      en: 'In the last 2 weeks have you avoided doing things that make you breathless?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q05: {
    label: {
      en: 'In the last 2 weeks have you felt in control of your lung condition?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'None of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'All of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q06: {
    label: {
      en: 'In the last 2 weeks, has your lung complaint made you feel fed up or down in the dumps?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q07: {
    label: {
      en: 'In the last 2 weeks, I have felt the urge to breathe, also known as ‘air hunger’.',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q08: {
    label: {
      en: 'In the last 2 weeks, my lung condition has made me feel anxious.',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q09: {
    label: {
      en: 'In the last 2 weeks, how often have you experienced ‘wheeze’ or whistling sounds from your chest?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q10: {
    label: {
      en: 'In the last 2 weeks, how much of the time have you felt your lung disease is getting worse?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q11: {
    label: {
      en: 'In the last 2 weeks has your lung condition interfered with your job or other daily tasks?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q12: {
    label: {
      en: 'In the last 2 weeks have you expected your lung complaint to get worse?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q13: {
    label: {
      en: 'In the last 2 weeks have you expected your lung complaint to get worse?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q14: {
    label: {
      en: 'In the last 2 weeks, has your lung condition made you think more about the end of your life?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'All of the time' },
        },
        {
          value: 2,
          label: {
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            en: 'A good bit of the time',
          },
        },
        {
          value: 4,
          label: {
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly any of the time',
          },
        },
        {
          value: 7,
          label: {
            en: 'None of the time',
          },
        },
      ],
    },
  },
  K_BILD_Q15: {
    label: {
      en: 'Are you financially worse off because of your lung condition?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'A significant amount' },
        },
        {
          value: 2,
          label: {
            en: 'A large amount',
          },
        },
        {
          value: 3,
          label: {
            en: 'A considerable amount',
          },
        },
        {
          value: 4,
          label: {
            en: 'A reasonable amount',
          },
        },
        {
          value: 5,
          label: {
            en: 'A small amount',
          },
        },
        {
          value: 6,
          label: {
            en: 'Hardly at all',
          },
        },
        {
          value: 7,
          label: {
            en: 'Not at all',
          },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
