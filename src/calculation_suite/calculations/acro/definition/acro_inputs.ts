import { z } from 'zod'

export const NEVER = 5
export const RARELY = 4
export const SOMETIMES = 3
export const MOST_OF_THE_TIME = 2
export const ALWAYS = 1

export const COMPLETELY_AGREE = 1
export const MODERATELY_AGREE = 2
export const NEITHER_AGREE_NOR_DISAGREE = 3
export const MODERATELY_DISAGREE = 4
export const COMPLETELY_DISAGREE = 5

export const ACRO_INPUTS = {
  Q01: {
    input_label: {
      en: 'My legs are weak',
    },
  },
  Q02: {
    input_label: {
      en: 'I feel ugly',
    },
  },
  Q03: {
    input_label: {
      en: 'I get depressed',
    },
  },
  Q04: {
    input_label: {
      en: 'I look awful in photographs',
    },
  },
  Q05: {
    input_label: {
      en: 'I avoid going out very much with friends because of my appearance',
    },
  },
  Q06: {
    input_label: {
      en: 'I try to avoid socializing',
    },
  },
  Q07: {
    input_label: {
      en: 'I look different in the mirror.',
    },
  },
  Q08: {
    input_label: {
      en: 'I feel rejected by people because of my illness',
    },
  },
  Q09: {
    input_label: {
      en: 'I have problems carrying out my usual activities',
    },
  },
  Q10: {
    input_label: {
      en: 'People stare at me because of my appearance',
    },
  },
  Q11: {
    input_label: {
      en: 'Some part of my body (nose, feet, hands,...) are too big',
    },
  },
  Q12: {
    input_label: {
      en: 'I have problems doing things with my hands, for example, sewing or handling tools',
    },
  },
  Q13: {
    input_label: {
      en: 'The illness affects my performance at work or in my usual tasks',
    },
  },
  Q14: {
    input_label: {
      en: 'My joints ache',
    },
  },
  Q15: {
    input_label: {
      en: 'I am usually tired',
    },
  },
  Q16: {
    input_label: {
      en: 'I snore at night',
    },
  },
  Q17: {
    input_label: {
      en: 'It is hard for me to articulate words due to the size of my tongue',
    },
  },
  Q18: {
    input_label: {
      en: 'I have problems with sexual relationships',
    },
  },
  Q19: {
    input_label: {
      en: 'I feel like a sick person',
    },
  },
  Q20: {
    input_label: {
      en: 'The physical changes produced by my illness govern my life',
    },
  },
  Q21: {
    input_label: {
      en: 'I have little sexual appetite',
    },
  },
  Q22: {
    input_label: {
      en: 'I feel weak',
    },
  },
}

const FrequencyInputSchema = z.union([
  z.literal(NEVER),
  z.literal(RARELY),
  z.literal(SOMETIMES),
  z.literal(MOST_OF_THE_TIME),
  z.literal(ALWAYS),
])

const AgreementInputSchema = z.union([
  z.literal(COMPLETELY_AGREE),
  z.literal(MODERATELY_AGREE),
  z.literal(NEITHER_AGREE_NOR_DISAGREE),
  z.literal(MODERATELY_DISAGREE),
  z.literal(COMPLETELY_DISAGREE),
])

export const InputSchema = z.object({
  Q01: AgreementInputSchema.optional(),
  Q02: FrequencyInputSchema.optional(),
  Q03: AgreementInputSchema.optional(),
  Q04: FrequencyInputSchema.optional(),
  Q05: FrequencyInputSchema.optional(),
  Q06: FrequencyInputSchema.optional(),
  Q07: FrequencyInputSchema.optional(),
  Q08: FrequencyInputSchema.optional(),
  Q09: AgreementInputSchema.optional(),
  Q10: FrequencyInputSchema.optional(),
  Q11: FrequencyInputSchema.optional(),
  Q12: FrequencyInputSchema.optional(),
  Q13: AgreementInputSchema.optional(),
  Q14: AgreementInputSchema.optional(),
  Q15: AgreementInputSchema.optional(),
  Q16: FrequencyInputSchema.optional(),
  Q17: FrequencyInputSchema.optional(),
  Q18: FrequencyInputSchema.optional(),
  Q19: AgreementInputSchema.optional(),
  Q20: FrequencyInputSchema.optional(),
  Q21: FrequencyInputSchema.optional(),
  Q22: AgreementInputSchema.optional(),
})
