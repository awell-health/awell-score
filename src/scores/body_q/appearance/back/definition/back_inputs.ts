import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_BACK_INPUTS = {
  BODY_Q_BACK_Q01: {
    label: { en: '', fr: "L'aspect lisse de votre dos?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BACK_Q02: {
    label: {
      en: '',
      fr: "L'apparence de votre dos vu sous différents angles?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BACK_Q03: {
    label: { en: '', fr: 'La tonicité de votre dos?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BACK_Q04: {
    label: { en: '', fr: "L'apparence de votre dos lorsque vous êtes nu(e)?" },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
