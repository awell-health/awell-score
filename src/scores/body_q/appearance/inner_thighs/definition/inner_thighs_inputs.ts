import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_INNER_THIGHS_INPUTS = {
  BODY_Q_INNER_THIGHS_Q01: {
    label: { en: '', fr: "L'aspect lisse de la face interne de vos cuisses?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INNER_THIGHS_Q02: {
    label: { en: '', fr: "L'apparence de la peau de la face interne de vos cuisses?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INNER_THIGHS_Q03: {
    label: { en: '', fr: "L'aspect tonique de la face interne de vos cuisses?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INNER_THIGHS_Q04: {
    label: { en: '', fr: "L'apparence de la face interne de vos cuisses quand vous êtes nu(e)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
