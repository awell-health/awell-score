import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_HIPS_OUTER_THIGHS_INPUTS = {
  BODY_Q_HIPS_OUTER_THIGHS_Q01: {
    label: { en: '', fr: 'La taille de vos hanches et de la face externe de vos cuisses?',
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_HIPS_OUTER_THIGHS_Q02: {
    label: { en: '', fr: 'La forme de vos hanches et de la face externe de vos cuisses?',
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_HIPS_OUTER_THIGHS_Q03: {
    label: { en: '', fr: "L'aspect de la peau de vos hanches et de la face externe de vos cuisses?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_HIPS_OUTER_THIGHS_Q04: {
    label: { en: '', fr: "L'aspect lisse de vos hanches et de la face externe de vos cuisses?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_HIPS_OUTER_THIGHS_Q05: {
    label: { en: '', fr: "L'apparence de vos hanches et de la face externe de vos cuisses vues à l'arrière?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
