import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 0
export const RARELY = 1
export const SOMETIMES = 2
export const OFTEN = 3
export const VERY_OFTEN = 4

const OPTIONS = [
  {
    value: NEVER,
    label: { en: 'Never' },
  },
  {
    value: RARELY,
    label: {
      en: 'Rarely',
    },
  },
  {
    value: SOMETIMES,
    label: {
      en: 'Sometimes',
    },
  },
  {
    value: OFTEN,
    label: {
      en: 'Often',
    },
  },
  {
    value: VERY_OFTEN,
    label: {
      en: 'Very often',
    },
  },
]

const InputTypeSchema = z
  .union([
    z.literal(NEVER),
    z.literal(RARELY),
    z.literal(SOMETIMES),
    z.literal(OFTEN),
    z.literal(VERY_OFTEN),
  ])
  .optional()

export const ASRS_INPUTS = {
  Q01: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q02: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q03: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have problems remembering appointments or obligations?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q04: {
    type: InputTypeSchema,
    label: {
      en: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q05: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q06: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q07: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q08: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q09: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q10: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you misplace or have difficulty finding things at home or at work?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q11: {
    type: InputTypeSchema,
    label: {
      en: 'How often are you distracted by activity or noise around you?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q12: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q13: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you feel restless or fidgety?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q14: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q15: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you find yourself talking too much when you are in social situations?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q16: {
    type: InputTypeSchema,
    label: {
      en: 'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q17: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q18: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you interrupt others when they are busy?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
} satisfies ScoreInputSchemaType

export const POSITIVE_SCORES = {
  Q01: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q02: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q03: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q04: [OFTEN, VERY_OFTEN],
  Q05: [OFTEN, VERY_OFTEN],
  Q06: [OFTEN, VERY_OFTEN],
  Q07: [OFTEN, VERY_OFTEN],
  Q08: [OFTEN, VERY_OFTEN],
  Q09: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q10: [OFTEN, VERY_OFTEN],
  Q11: [OFTEN, VERY_OFTEN],
  Q12: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q13: [OFTEN, VERY_OFTEN],
  Q14: [OFTEN, VERY_OFTEN],
  Q15: [OFTEN, VERY_OFTEN],
  Q16: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q17: [OFTEN, VERY_OFTEN],
  Q18: [SOMETIMES, OFTEN, VERY_OFTEN],
} satisfies Record<keyof typeof ASRS_INPUTS, number[]>
