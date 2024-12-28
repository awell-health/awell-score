import { z } from 'zod'

export const NEVER = 0
export const RARELY = 1
export const SOMETIMES = 2
export const OFTEN = 3
export const VERY_OFTEN = 4

export const ASRS_INPUTS = {
  Q01: {
    input_label: {
      en: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q02: {
    input_label: {
      en: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q03: {
    input_label: {
      en: 'How often do you have problems remembering appointments or obligations?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q04: {
    input_label: {
      en: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q05: {
    input_label: {
      en: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q06: {
    input_label: {
      en: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q07: {
    input_label: {
      en: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q08: {
    input_label: {
      en: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q09: {
    input_label: {
      en: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q10: {
    input_label: {
      en: 'How often do you misplace or have difficulty finding things at home or at work?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q11: {
    input_label: {
      en: 'How often are you distracted by activity or noise around you?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q12: {
    input_label: {
      en: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q13: {
    input_label: {
      en: 'How often do you feel restless or fidgety?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q14: {
    input_label: {
      en: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q15: {
    input_label: {
      en: 'How often do you find yourself talking too much when you are in social situations?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q16: {
    input_label: {
      en: 'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
  Q17: {
    input_label: {
      en: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    },
    positive_scores: [OFTEN, VERY_OFTEN],
  },
  Q18: {
    input_label: {
      en: 'How often do you interrupt others when they are busy?',
    },
    positive_scores: [SOMETIMES, OFTEN, VERY_OFTEN],
  },
}

const InputTypeSchema = z
  .union([
    z.literal(NEVER),
    z.literal(RARELY),
    z.literal(SOMETIMES),
    z.literal(OFTEN),
    z.literal(VERY_OFTEN),
  ])
  .optional()

export const InputSchema = z.object({
  Q01: InputTypeSchema,
  Q02: InputTypeSchema,
  Q03: InputTypeSchema,
  Q04: InputTypeSchema,
  Q05: InputTypeSchema,
  Q06: InputTypeSchema,
  Q07: InputTypeSchema,
  Q08: InputTypeSchema,
  Q09: InputTypeSchema,
  Q10: InputTypeSchema,
  Q11: InputTypeSchema,
  Q12: InputTypeSchema,
  Q13: InputTypeSchema,
  Q14: InputTypeSchema,
  Q15: InputTypeSchema,
  Q16: InputTypeSchema,
  Q17: InputTypeSchema,
  Q18: InputTypeSchema,
})
