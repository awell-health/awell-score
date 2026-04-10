import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_NIPPLES_INPUTS = {
  BODY_Q_NIPPLES_Q01: {
    label: { en: '', fr: 'La forme de vos mamelons?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_NIPPLES_Q02: {
    label: { en: '', fr: 'La taille de vos mamelons?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_NIPPLES_Q03: {
    label: { en: '', fr: 'Le fait que vos mamelons soient plats?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_NIPPLES_Q04: {
    label: { en: '', fr: 'Le fait que vos mamelons soient visibles à travers un T-shirt moulant?',
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_NIPPLES_Q05: {
    label: { en: '', fr: "L'apparence de vos mamelons sans vêtements?" },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
